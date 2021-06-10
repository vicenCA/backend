import express from "express";
import config from './config'

import usuarioRoutes from './routes/usuario.routes'

const app = express()

//settings
app.set('port', config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(usuarioRoutes)

export default app