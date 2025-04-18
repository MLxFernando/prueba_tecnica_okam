import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (_req, res) => {
  res.send('API funcionando 🚀');
});

const PORT = process.env.PORT || 3001;
app.use('/', routes);
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));