const database = require("../models");

class MatriculaController {
  static async findAll(req, res) {
    try {
      const matriculas = await database.Matriculas.findAll();
      return res.status(200).json(matriculas);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async findByID(req, res) {
    const { id } = req.params;
    try {
      const matricula = await database.Matriculas.findByPk(Number(id));
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async newMatricula(req, res) {
    const novaMatricula = req.body;
    try {
      const newMatricula = await database.Matriculas.create(novaMatricula);
      return res.status(200).json(newMatricula);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async updateMatricula(req, res) {
    const { id } = req.params;
    const newDatas = req.body;
    try {
      await database.Matriculas.update(newDatas, { where: { id: Number(id) } });
      const upMatricula = await database.Matriculas.findByPk(Number(id));
      return res.status(200).json(upMatricula);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async deleteByID(req, res) {
    const { id } = req.params;
    try {
      await database.Matriculas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }
}

module.exports = MatriculaController;
