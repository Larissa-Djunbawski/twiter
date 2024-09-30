import { Schema, model} from "mongoose"
import User from ""

const postSchema = new Schema ({
    text: {
        type: String,
        required: true,
        min: 3,
        maxlength: 280,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User

    }
})

export default {
    postSchema
}