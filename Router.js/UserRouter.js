import express from "express";
import UserController from '../Controller/UserController.js';


const UserRouter=express.Router();


UserRouter.get("/:id",UserController.getUser);
UserRouter.delete("/:id",UserController.deleteUser);
UserRouter.put("/:id",UserController.updateUser);
UserRouter.post("/",UserController.register);

export default UserRouter;