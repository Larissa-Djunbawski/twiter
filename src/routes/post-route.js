import { Router } from "express"
import {store, index} from "../controllers/post-controller"
import jwtAuthenticator from "../middlewares/jwt-authenticator"
//import { signup, login } from "../controllers/post-controller"

const router = Router()

router.post ("/", jwtAuthenticator, store) 
router.get ("/", index)

export default router