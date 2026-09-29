import express from 'express';
import morgan from 'morgan';
import studentRoutes from './routes/student.routes.js';


const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API School funcionando' });
});

export default app;
