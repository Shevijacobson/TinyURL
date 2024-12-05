import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userId: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true,
        default: "new user"
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    links: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'links',
        }
    ]
});
export default mongoose.model("users", UserSchema);


