import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
 import connectDB from './mongo.js'
 import UserRouter from './Router.js/UserRouter.js'
 import LinkRouter from './Router.js/LinkRouter.js'
 import jwtController from './Controller/jwt.js'


connectDB();
const app=express();
const port=3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use("/login",jwtController.login);
app.use("/register",UserRouter);

app.use("/",jwtController.isValidToken);
app.use("/user",UserRouter);
app.use("/link",LinkRouter);

app.listen(port,()=>{
    console.log("i listen!!! 😀")
})