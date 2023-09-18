import { validatePassword, encryptPassword } from "@/lib/crypt";
import dbConnect from "@/lib/mongodb";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'hola'
    });
}


export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        await dbConnect();

        const user = await User.findOne({ email: email });
        console.log(user)
        const isValidPassword = await validatePassword(password, await encryptPassword(password));

        if(!user) throw new Error('Credenciales incorrectas.');
        return NextResponse.json(user);
    } catch (error) {
        if(error instanceof Error) {
            return NextResponse.json({
                message: error.message
            },
            {
                status: 400
            });
        }
    }
}