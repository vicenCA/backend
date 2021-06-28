import { Router } from 'express';
import { createNewCarer, createNewUsuario, deleteUsuario, getTotalUsuarios, getUsuario, getUsuarioByEmail, getUsuarioByID, getUsuarioByType, updateUsuarioByID } from "../controllers/usuario.cotroller";

const router = Router()
router.get('/usuario', getUsuario)
router.post('/usuario', createNewUsuario)
router.delete('/usuario/:id_usuario', deleteUsuario)
router.get('/usuario/count', getTotalUsuarios)
router.put('/usuario/:id_usuario', updateUsuarioByID)
router.get('/usuario/:correo_electronico', getUsuarioByEmail)
router.get('/usuario/:id_usuario', getUsuarioByID)
router.post('/cuidador', createNewCarer)

export default router