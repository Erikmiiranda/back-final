import UsuarioRepository from '../repositories/UsuarioRepository.js'

class UsuarioController {

    async index(req, res) {
        const cpf = req.params.id
        const row = await UsuarioRepository.findById(cpf)
        res.json(row)
    }
    async show(req, res) {
        const cpf = req.body.cpf
        const senha = req.body.senha
        const row = await UsuarioRepository.findAll(cpf, senha)
        res.json(row)

    }
    async store(req, res) {
        const usuario = req.body
        const row = await UsuarioRepository.create(usuario)
        res.json(row)

    }
    async update(req, res) {
        const cpf = req.params.id
        const usuario = req.body
        const row = await UsuarioRepository.update(usuario, cpf)
        res.json(row)
    }
    async delete(req, res) {
        const id = req.params.id
        const row = await UsuarioRepository.delete(id)
        res.json(row)
    }

}

//padrão singleton
export default new UsuarioController()