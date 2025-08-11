import mongoose from "mongoose";

const conectDB = async () =>{
    try{
        mongoose.connection.on('connected', ()=> console.log('Database connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/Mahishows`)
    } catch (error){
        console.log(error.message);
        
    };
}

export default conectDB;