import bcrypt from 'bcrypt';

export async function encryptPassword(password: String) {
    const saltRounds = 10;
    try {
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(password, salt);

        return hash;
        
    } catch (error) {
        throw new Error('Algo ha salido mal');
    }
}

export async function checkPassword(password: String, hash: String) {
    try{
        return bcrypt.compare(password, hash);
    }catch (error) {
        throw new Error('Algo ha salido mal');
    }
}