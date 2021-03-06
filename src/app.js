import express from "express";
import config from './config';
import cors from 'cors';

import usuarioRoutes from './routes/usuario.routes'
import mascotaRoutes from './routes/mascota.routes'
import servicioRoutes from './routes/servicio.routes'

const app = express()

// settings
app.set('port', config.port)

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

// routes
app.use(usuarioRoutes);
app.use(mascotaRoutes);
app.use(servicioRoutes);

export default app