import {Router} from "express"
import { signup, login, destroy, index, show, store, update, followUnfollow} from "../controllers/user-controller.js"
import authorizer from "../middlewares/authorizer.js"


const router = Router()

router.post ("/signup", signup) //criação de conta
router.post("/login", login) //longin, onde se cria um token(post)

router.use(jwtAuthenticator)

router.put("/follow-unfollow/:id",followUnfollow) //rota para seguidores
router.delete("/unfollow/:id",unfollow)
router.use(authorizer(["ADMINISTRADOR", "SUPORT"]))


router.get("/", index)
router.get("/:id", show)
router.post("/", store)
router.put("/:id", update)
router.delete("/:id",  destroy)


export default router;