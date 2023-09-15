import mongoose from 'mongoose';

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;