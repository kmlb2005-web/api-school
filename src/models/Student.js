import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  grades: {
    type: [Number],
    required: true,
    validate: {
      validator: (grades) => grades.length > 0,
      message: 'El alumno debe tener al menos una calificación'
    }
  },
  average: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

studentSchema.pre('save', function(next) {
  const sum = this.grades.reduce((a, b) => a + b, 0);
  this.average = sum / this.grades.length;
  next();
});

export default mongoose.model('Student', studentSchema);
