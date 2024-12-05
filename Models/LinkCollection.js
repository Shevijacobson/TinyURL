import mongoose from "mongoose";

const LinksSchema = mongoose.Schema({

    linkId: {
        type: Number,
         default: 0,
    },
    links: [
        {
            originalUrl: {
                type: String,
                required: true,
               default: "",
            },
            clicks: [
                {

                      id: 0,
                    insertedAt: new Date(),
                    ipAddress: "0.0.0.0"
                }
            ]
        }

    ]
})

export default mongoose.model("links", LinksSchema);