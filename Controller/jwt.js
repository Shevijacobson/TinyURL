import jwt from 'jsonwebtoken';
const secret = "JIs%WCfs#s1454d5FX";

const jwtController = {
    login: async (req, res) => {
        const{ userName,password }=req.body;
        try {
          const user = await userSchema.findOne({ name: userName, password: password });
          if (user) {
            const Token = jwt.sign({ userId: user.userId },);
            res.send({ accessToken: Token });
          } else {
            res.status(401).send({ message: "IdentificationFailed" });
          }
        } catch (e) {
          res.status(500).json({ message: e.message });
        }
      },
    isValidToken: (req, res,next) => {
        const token = req.headers.authorization.slice(7);
        console.log("token", token);
        try {
            const decoded = jwt.verify(token, secret);
            req.userId = decoded.userId;
            next();
        }
        catch {
            res.status(401).send({ message: "unauthorized" })
        }
    }
}
export default jwtController;