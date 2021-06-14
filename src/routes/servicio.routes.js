import { Router } from 'express'
import { createNewServicio, deleteServicio, getServicioByID, getServicios, getServiciosTotal, updateServicioByID } from '../controllers/servicio.controller';

const router = Router();

 /* X */

router.post('/servicio', createNewServicio)

router.get('/servicio/count', getServiciosTotal) 

router.put('/servicio/:id_servicio', updateServicioByID)

router.delete('/servicio/:id_servicio', deleteServicio)

router.get('/servicio/:id_servicio', getServicioByID)

router.get('/servicio', getServicios)

export default router