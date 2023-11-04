const knex = require("../db")

const upDateUser = async (req, res) => {
    const { id } = req.params
    const  {nome, email, fone} = req.body
    try {
        const atualizarUsuario = await knex("usuarios")
        .where("id", id)
        .update({
            nome,
            email,
            fone
        })
        
        if (!atualizarUsuario) {
            return res.status(400).json({mensagem: "Não foi possivelatualizar usuario"})
        }
        return res.status(200).json({mensagem: "Usuario atualizado com sucesso"})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    upDateUser
}