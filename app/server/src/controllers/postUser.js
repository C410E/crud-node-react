const knex = require("../db");

const postUsers = async (req, res) => {
    const { nome, email, fone } = req.body;

    try {

        const usuario = await knex("usuarios").insert({
            nome,
            email,
            fone,
        })

        if (!usuario) {
            return res.status(400).json({mensagem: "o usuario não foi cadastrado"})
        }

        return res.status(201).json({mensagem: "Usuario criado com sucesso."})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({mensagem: "Erro ao postar usuario"})
    }
}

module.exports = {
    postUsers
}