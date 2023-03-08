import db from '../databases/db.js'

export async function userValidation(req, res, next) {

    const { userId } = req.body

    const { authorization } = req.headers

    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.status(422).send("Informa o token!")

    try {
        const checkSession = await db.query(`SELECT * from SESSIONS WHERE token = $1`, [token])

        if (!checkSession) return res.status(401).send("Você não tem autorização")

        res.locals.token = token
        res.locals.userId = userId

        next()
    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message)
    }
}