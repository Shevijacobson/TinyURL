import UserSchema from '../Models/userCollection.js'
const LinkController = {
    getAllLinksByIdUser: async (req, res) => {
        try {
            const chosenUser = await UserSchema.findOne({ userId: req.params.idUser })
            res.status(200).json(chosenUser.links);
            console.log("get link")
        }
        catch (e) {
            res.status(404).json({ message: e.message });
        } 
    },

    addLink: async (req, res) => {

        try {

            const userLink = await UserSchema.findOne(req.body.id);
            const newLink = await userLink.create(req.body.link);

            userLink.links.push(newLink);
            await userLink.save();
            res.status(201).json(newLink);

        }
        catch (e) {
            res.status(404).send({ message: e.message });
            console.log("error");
        }

    },
    updateLink: async (req, res) => {
        try {
            const updateLink = await LinksSchema.findByIdAndUpdate(req.params.idLink, req.body, { new: true });

            res.status(200).send(updateLink);

        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },
    deleteLink: async (req, res) => {
        try {
            await LinksSchema.findByIdAndDelete(req.params.idLink);

            res.status(204);

        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    },
    deleteAllLinks: async (req, res) => {
        try {
            const userDelete = await UserSchema.findOne(req.params.idUser);
            const linksDelete = await LinksSchema.delete(userDelete.links);

            res.status(204).json(linksDelete);

        }
        catch (e) {
            res.status(404).json({ message: e.message });
        }
    }
    ,
    getLink: async (req, res) => {
        try {
            const userGetLink = await UserSchema.findOne(req.params.idUser);
            const link = await userGetLink.links.find(req.params.idLink);
            res.status(200).json(link);

        }
        catch (e) {
            res.status(404).json({ message: e.message })
        }
    }

};


export default LinkController;