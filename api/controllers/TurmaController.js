const database = require("../models");

class TurmaController {
  static async findAll(req, res) {
    try {
      const turmas = await database.Turmas.findAll();
      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async findByID(req, res) {
    const { id } = req.params;
    try {
      const turma = await database.Turmas.findByPk(Number(id));
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async newTurma(req, res) {
    const novaTurma = req.body;
    try {
      const newTurma = await database.Turmas.create(novaTurma);
      return res.status(200).json(newTurma);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async updateTurma(req, res) {
    const { id } = req.params;
    const newDatas = req.body;
    try {
      await database.Turmas.update(newDatas, { where: { id: Number(id) } });
      const upTurma = await database.Turmas.findByPk(Number(id));
      return res.status(200).json(upTurma);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async deleteByID(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }
}

module.exports = TurmaController;
