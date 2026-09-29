import Student from '../models/Student.js';

const studentDAO = {
  getAll: async () => {
    return await Student.find();
  },

  getById: async (id) => {
    return await Student.findById(id);
  },

  create: async (data) => {
    const student = new Student(data);
    return await student.save();
  },

  update: async (id, data) => {
    return await Student.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    return await Student.findByIdAndDelete(id);
  },

  getGeneralAverage: async () => {
    const result = await Student.aggregate([
      { $group: { _id: null, promedioGeneral: { $avg: '$average' } } }
    ]);
    return result.length > 0 ? result[0].promedioGeneral : 0;
  }
};

export default studentDAO;
