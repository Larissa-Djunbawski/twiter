import  verifyAcessToken from "../services/jwt-service.js";
import User from "../models/user-model.js"

export default async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1] 
        const user = verifyAcessToken(token)
        
        if (user) { //se o token for valido eu coloco ele na requisição
            req.user = await user.findById(user._id).exec();
            next() //pula para a proxima função
        }   else {
            throw new Error("")
        }

    } catch (error) {
            res.sendStatus(401)
        }
}

   
    


