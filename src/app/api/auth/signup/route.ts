import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/users";
import { encryptPassword } from "@/lib/crypt";

export async function POST(req: NextRequest) {
    const { name, email, surname, password } = await req.json();

    if( !password || password.length < 4) {
        return NextResponse.json({
            message: 'El password tiene que contener como mínimo 4 carácteres'
        },
        {
            status: 400
        }); 
    }

    try{
        await dbConnect();

        const user = await User.findOne({ email: email });
        if(user) {
            return NextResponse.json({
                message: 'Credenciales erroneas.'
            }, 
            {
                status: 400
            });
        } else {
            const newUser = await User.create({
                name,
                email,
                surname,
                password: await encryptPassword(password)
            });
            if(newUser) {
                return NextResponse.json({
                    message: 'Se ha registrado al usuario con éxito.'
                });
            } else {
                return NextResponse.json({
                    message: 'Ha ocurrido un error al registrar el usuario.'
                },
                {
                    status: 500
                });
            }
        }
    }catch(error) {
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