import { Router } from 'express';
import { createNewMascota, deleteMascota, getMascota, getMascotaByID, getTotalMascotas, updateMascotaByID } from '../controllers/mascota.controller'

const router = Router()

router.get('/mascota', getMascota)
router.post('/mascota', createNewMascota)
router.put('/mascota/:id_mascota',updateMascotaByID)
router.delete('/mascota/:id_mascota', deleteMascota)
router.get('/mascota/amount', getTotalMascotas)

router.get('/mascota/:id_mascota',getMascotaByID)

export default router