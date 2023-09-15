import { mongoose } from 'mongoose';

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');
    } catch (error) {
        console.log(error);
    }
};