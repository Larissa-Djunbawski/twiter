import { Schema, model} from "mongoose";
import bcryp from "bcrypt"

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ["USER", "ADM"],
        default: "USER"
    }
})

userSchema.pre("save", async function () {
    this.password = await bcryp.hash(this.password, 10)
})

userSchema.methods.isValidPassword = async function (password) {
    return await bcryp.compare(password, this.password)
}

const User  = model("User", userSchema)

export default User;