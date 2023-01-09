import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const URI_MONGO = process.env.URI_MONGO

const connectDB = async () => {
    try {
        await mongoose.connect(URI_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        })
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB;