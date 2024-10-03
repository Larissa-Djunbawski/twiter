import { Schema, model} from "mongoose";
import bcryp from "bcrypt"

const userSchema = new Schema ({
    email: {
        type: Schema.Types.String,
        required: true, //obrigatorio
        unique: true,
        validate: {
            validator(v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate : {
            validator(v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
            }
        }
    },
    role: {
        type: Schema.Types.String,
        enum: ["USER", "ADMINISTRATOR"],
        default: "USER"
      }, following: { //array que armazena os seguidores do usuario
         type: [Schema.Types.ObjectId],
         required: false,
         ref: "User"
      }
},{
    timestamps: true,
})

userSchema.pre("save", async function () { //criptocrafar a senha
    this.password = await bcryp.hash(this.password, 10) // this.. para acessar a senha do usuario
})

userSchema.methods.isValidPassword = async function (password) {
    return await bcryp.compare(password, this.password) //compara se a senha digitada sera igual a salva do banco de dados
}


const User  = model("User", userSchema)

export default User;