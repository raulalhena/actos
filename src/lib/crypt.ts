import bcrypt from 'bcrypt';

export async function encryptPassword(password: string) {
    const saltRounds = 10;
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);

        return hash;
        
    } catch (error) {
        throw new Error('Algo ha salido mal');
    }
}

export async function validatePassword(password: string, hash: string) {
    try{
        return bcrypt.compare(password, hash);
    }catch (error) {
        throw new Error('Algo ha salido mal');
    }
}