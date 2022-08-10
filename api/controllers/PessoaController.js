const database = require("../models");

class PessoaController {
  //Achar todos os registros
  static async findAll(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  //Achar um registro especifico 
  static async findByID(req, res) {
    const { id } = req.params
    try {
      const pessoa = await database.Pessoas.findByPk(Number (id));
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }
  // OU (metodo da professora), nao usei pois achei o meu mais curto
  /*
  static async findByID(req, res) {
    try { 
      const { id } = req.params
      const pessoa = await database.Pessoas.findOne({
        where: {
          id: Number (id));
        }
      })
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }
*/
  
  //Criar registro
  static async newPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const newPessoa = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(newPessoa)
      } catch (error) {
        return res.status(500).json(error.messsage)
      }
  }
  
  //Atualixar registro
  static async updatePessoa(req, res) {
    const { id } = req.params
    const newDatas = req.body
    try {
      await database.Pessoas.update(newDatas, {where: {id: Number(id)}});
      const updatedPessoa = await database.Pessoas.findByPk(Number (id));
      return res.status(200).json(updatedPessoa);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  //deletar registro
  static async deleteByID(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.destroy({where: {id: Number (id)}});
      return res.status(200).json({mensagem: `id ${id} deletado`});
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }
}

module.exports = PessoaController
