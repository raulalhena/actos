import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from '@/lib/mongodb';
import User from '@/models/users';
import { validatePassword } from '@/lib/crypt';

const handler = NextAuth( {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { lable: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                try{
                    await dbConnect();

                    const user = await User.findOne({ email: credentials?.email }).select('+password');
                    if(!user) throw new Error('Credenciales incorrectas.');

                    const isValidPassword = await validatePassword(String(credentials?.password), user.password);
                    
                    if(!isValidPassword) throw new Error('Credenciales incorrectas.');

                    return user;
                } catch(error) {
                    console.log(error);
                }
            }
        })
    ],
    callbacks: {
        jwt({ account, token, user, profile, session }) {
            if(user) token.user = user;
            return token;
        },
        session({ session, token }) {
            session.user = token.user as any;
            return session;
        }
    },
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };