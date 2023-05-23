import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongo_URI)   
    }   catch (error) {

    }
}