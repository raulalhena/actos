import mongoose, { Schema } from 'mongoose';
import { Roboto_Flex } from 'next/font/google';

export enum userRole {
    USER = 'user',
    ADMIN = 'admin',
    SUPER = 'super'
}

const userSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'El nombre es requerido' ]
    },
    surname: {
        type: String,
        required: [ true, 'Apellidos son requeridos' ]
    },
    email: {
        type: String,
        unique: true,
        required: [ true, 'El email es requerido' ],
    },
    password: {
        type: String,
        required: [ true, 'El password es requerido' ],
        select: false
    },
    role: {
        type: String,
        required: true,
        default: userRole.USER
    }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;