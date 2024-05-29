import conexao, { consulta } from '../database/conexao.js'

class UsuarioRepository {
    //crud criar buscarTudo buscarPorId atualizar deletar
    create(usuario) {
        const sql = "INSERT INTO aluno SET ?;"
        
        return consulta(sql, usuario, 'Não foi possível cadastrar!')
    }
    
    findAll(cpf, senha) {
        const sql = "SELECT * FROM aluno WHERE cpf=? AND senha=?;"
        return consulta(sql, [cpf, senha], 'Não foi possível localizar!')
    }

    findById(cpf) {
        
        const sql = "SELECT * FROM aluno WHERE cpf=? ;"
        return consulta(sql, cpf, 'Não foi possível localizar!')
    }

    update(usuario, cpf) {
        const { nome, email } = usuario
        const sql = `UPDATE aluno SET nome=?, email=? WHERE cpf=?;`
        return consulta(sql, [nome, email, cpf], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM aluno WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
}

export default new UsuarioRepository()
