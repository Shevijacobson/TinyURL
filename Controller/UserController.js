
import UserSchema from '../Models/userCollection.js'
import jwt from 'jsonwebtoken';


const UserController = {
    register: async (req, res) => {
        try {
     
            const { newUser } = req.body;
            let dataNewUser = await UserSchema.create({ newUser });
            res.status(201).json(dataNewUser);
            userId++;

            const Token = jwt.sign({ userId: dataNewUser.userId },);
            res.send({ accessToken: Token });
           
        }

        catch (e) {
            res.status(400).send({ message: e.message });
            console.log("error");
        }
    },
    
    deleteUser: async (req, res) => {
        try {
            const { deletId } = req.params.id;
            const deleted = await UserSchema.findByIdAndDelete(deletId);
            res.json(deleted);
            console.log("delete user");
        }
        catch (e) {
            res.status(400).send({ message: e.message });
            console.log("error");
        }

    },
    updateUser: async (req, res) => {
        try {
            const { updetUser } = req.params.id;
            const updetdUser = await UserSchema.findByIdAndUpdate(updetUser, req.body, { new: true });
            res.json(updetdUser)
            console.log("updet user");
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    getUser: async (req, res) => {
        try {
            const userget = await UserSchema.findById(req.params.id);
            res.json(userget);
            console.log("get dell user");
        }
        catch (e) {
            res.status(400).send({ message: e.message });
            console.log("error");
        }
    }
};


export default UserController;