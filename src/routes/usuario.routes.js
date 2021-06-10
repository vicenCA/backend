import { Router } from 'express';
import { createNewUsuario, deleteUsuario, getTotalUsuarios, getUsuario, getUsuarioByID, updateUsuarioByID } from "../controllers/usuario.cotroller";

const router = Router()
router.get('/usuario', getUsuario)
router.post('/usuario', createNewUsuario)
router.delete('/usuario/:id_usuario', deleteUsuario)
router.get('/usuario/count', getTotalUsuarios)
router.put('/usuario/:id_usuario', updateUsuarioByID)
router.get('/usuario/:id_usuario', getUsuarioByID)

export default router