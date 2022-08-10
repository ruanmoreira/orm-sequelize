const database = require("../models");

class NivelController {
  static async findAll(req, res) {
    try {
      const niveis = await database.Niveis.findAll();
      return res.status(200).json(niveis);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async findByID(req, res) {
    const { id } = req.params;
    try {
      const nivel = await database.Niveis.findByPk(Number(id));
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async newNivel (req, res) {
    const data = req.body;
    try {
      const newNivel = await database.Niveis.create(data)
      return res.status(200).json(newNivel)
    }catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async updateNivel(req, res) {
    const { id } = req.params;
    const newDatas = req.body;
    try {
      await database.Niveis.update(newDatas, {
        where: {
          id: Number(id),
        },
      });
      const nivel = await database.Niveis.findByPk(Number(id));
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }

  static async deleteByID(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.messsage);
    }
  }
}

module.exports = NivelController;
