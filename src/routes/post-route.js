import { Router } from "express"
import jwtAuthenticator from "../middlewares/jwt-authenticator.js"
import {
    destroy,
    index,
    show,
    store,
    update,

}  from "../controllers/post-controller.js"


const router = Router()

router.use(jwtAuthenticator)
//rotas publicas antes do middleware
router.get("/", index)
router.get("/:id", show)

//rotas privadas depois do midleware
router.post("/", store)
router.put("/:id", update)
router.delete("/:id",  destroy)

export default router

