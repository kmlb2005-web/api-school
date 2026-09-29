import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://kmlb:kmlb123@ac-8cefspw-shard-00-00.bamii40.mongodb.net:27017,ac-8cefspw-shard-00-01.bamii40.mongodb.net:27017,ac-8cefspw-shard-00-02.bamii40.mongodb.net:27017/school_control2026?ssl=true&replicaSet=atlas-jcv5z4-shard-0&authSource=admin&appName=kmlb');
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar:', error.message);
    process.exit(1);
  }
};
