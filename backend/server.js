import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from './config/db.js';
const port = process.env.PORT || 5000; 
import userRoutes from './routes/UserRoutes.js';
import path from 'path';


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('./api/users' , userRoutes);

if (process.env.NODE_ENV === 'production'){
    const  __dirname= path.resolve();
}

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => console.log(`Server Started On port ${port}`));

