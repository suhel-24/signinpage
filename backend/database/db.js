const mongoose=require('mongoose')

const dbconnect=async ()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://admin:admin123@cluster0.hrft8xq.mongodb.net/loginform?retryWrites=true&w=majority")
        console.log("db connected");
    }catch(err){
        console.log(`MongoDB connection error: ${err}`)
        process.exit(1)
    }
}
module.exports=dbconnect