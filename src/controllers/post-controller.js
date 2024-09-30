import Post from "../models/post-model"

export const store = async (req, res) => {
    try {
        const content = await Post.crete(req.body)
        res.status(201).json(content)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try {
        const content = await Post.find ({
            rentedBy: undefined,
        }).exec()

        res.json(content)
    } catch (error) {
        res.status(400).send(error)
    }
}