

export default (roles = [] ) => (req,res,next) => { // uma função que retorna outra função
   if(roles.includes(req.user.role)) { //Se a role do usuario esta incluida nas de adm
    next()
   } else {
       return res.status(403).json({message: "Acesso negado"})

   }
}