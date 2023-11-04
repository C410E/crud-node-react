const knex = require("../db")

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {

        const deletarUsuarios = await knex("usuarios")
        .where("id", id)
        .del()
        
        if (!deletarUsuarios) {
            return res.status(400).json({mensagem: "Não foi possivel deletar usuario"})
        }

        return res.status(200).json({mensagem: "Usuario deletado com sucesso"})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    deleteUser
}