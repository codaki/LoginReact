import express from 'express';
import morgan from 'morgan';
import authRoutes from "./routes/auth.routes.js"
import cookieParser from 'cookie-parser';
import cors from  'cors';


const app = express();
//Política CORS
app.use(cors())
//Midleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
//Rutas
app.use("/api",authRoutes);

export default app;