import express from "express";
import LinkController from '../Controller/LinkController.js';


const LinkRouter=express.Router();

LinkRouter.get("/:idUser",LinkController.getAllLinksByIdUser);
LinkRouter.get("/:idUser/:idLink",LinkController.getLink);
LinkRouter.delete("/:idLink",LinkController.deleteLink);
LinkRouter.delete("/:idUser",LinkController.deleteAllLinks);
LinkRouter.put("/:idLink",LinkController.updateLink);
LinkRouter.post("/add",LinkController.addLink);

export default LinkRouter;