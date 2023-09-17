import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/users";

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

    await dbConnect();

    const user = await User.findOne({ email: email });
    if(user) {
        return NextResponse.json({
            message: 'El usuario ya existe'
        }, 
        {
            status: 400
        });
    } else {
        const newUser = await User.create({
            name,
            email,
            surname,
            password
        });
        if(newUser) {
            return NextResponse.json({
                message: 'Se ha registrado al usuario con éxito'
            });
        }
    }

    return NextResponse.json({ message: 'response signup ', name, email, surname, password });
}