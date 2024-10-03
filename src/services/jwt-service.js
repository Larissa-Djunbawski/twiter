import jsonwebtoken from "jsonwebtoken";

// Função para gerar o token
export const generateAcessToken = (user) => 
    jsonwebtoken.sign(
        {
            _id: user._id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_PRIVATE_KEY, // Chave para gerar o token
        {
            expiresIn: "1d",
        }
    );

// Função para verificar o token
export const verifyAcessToken = (token) => 
    jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);

export default generateAcessToken