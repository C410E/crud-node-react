const knex = require("../db");

const getUsers = async (req, res) => {
    try {

        const usuarios = await knex("usuarios")

        return res.status(200).json(usuarios)

    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: "erro ao obter usuarios"})
    }
}

module.exports = {
    getUsers
}