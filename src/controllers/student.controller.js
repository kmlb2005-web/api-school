import studentDAO from '../dao/student.dao.js';

const studentController = {
  getAll: async (req, res) => {
    try {
      const students = await studentDAO.getAll();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const student = await studentDAO.getById(req.params.id);
      if (!student) return res.status(404).json({ error: 'Alumno no encontrado' });
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const student = await studentDAO.create(req.body);
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const student = await studentDAO.update(req.params.id, req.body);
      if (!student) return res.status(404).json({ error: 'Alumno no encontrado' });
      res.json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const student = await studentDAO.delete(req.params.id);
      if (!student) return res.status(404).json({ error: 'Alumno no encontrado' });
      res.json({ message: 'Alumno eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getGeneralAverage: async (req, res) => {
    try {
      const promedioGeneral = await studentDAO.getGeneralAverage();
      res.json({ promedioGeneral });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default studentController;
