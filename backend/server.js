import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000; 
import userRoutes from './routes/UserRoutes.js';

const app = express();

app.use(./api/users)

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server Started On port ${port}`));

