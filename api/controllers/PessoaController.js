const database = require("../models");

class PessoaController {
  static async findAll(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async findByID(req, res) {
    try {
      const { id } = req.params
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

  static async newPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const newPessoa = await database.Pessoas.create(novaPessoa)
      return res.status(200).json(newPessoa)
      } catch (error) {
        return res.status(500).json(error.messsage)
      }
  }
}

module.exports = PessoaController
