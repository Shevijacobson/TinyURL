import mongoose from "mongoose";

const uri = "mongodb+srv://shevijacob:ZubILEUjqtQkze7k@cluster0.xy2jy6k.mongodb.net/TinyUrl";
const uriLocal = "mongodb://localhost:3000/TinyUrl";

const connectDB = async () => {
    await mongoose.connect(uri )
};
mongoose.set('toJSON',{
    virtuals:true,
    transform:(doc,converted)=>{
        delete converted._id;
    }
});

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('database Connected');
})
export default connectDB