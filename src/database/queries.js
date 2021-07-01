
export const queries = {
    /* -----------------------------------------------------------------------  */
    /*                                 USUARIO                                  */
    getAllUsuarios: 'SELECT * FROM usuario',
    addNewUsuario: 'INSERT INTO usuario VALUES (@nombre_usuario, @apellido_usuario, @clave_usuario, @rut, @correo_electronico, @direccion, @numero_cel, @tipousuario, @foto_perfil)',
    getUsuarioById: "SELECT * FROM usuario WHERE id_usuario = @id_usuario",
    deleteUsuario: 'DELETE FROM [GCC].[dbo].[usuario] WHERE id_usuario = @id_usuario',
    getTotalUsuarios: 'SELECT COUNT(*) FROM usuario',
    updateUsuarioById: 'UPDATE usuario SET nombre_usuario = @nombre_usuario, apellido_usuario = @apellido_usuario, clave_usuario = @clave_usuario, rut = @rut, correo_electronico = @correo_electronico, direccion = @direccion, numero_cel = @numero_cel, tipousuario = @tipousuario, foto_perfil = @foto_perfil WHERE id_usuario = @id_usuario',
    getUsuarioByType: 'SELECT * FROM usuario WHERE tipousuario = @tipousuario',
    getTotalUsuariosByType: 'SELECT COUNT(*) FROM usuario WHERE tipousuario = @tipousuario',
    getUsuariobyEmail: 'SELECT * FROM usuario WHERE correo_electronico = @correo_electronico',
    /* ------------------------------------------------------------------------- */
    /*                                 MASCOTA                                   */
    getAllMascotas: 'SELECT * FROM mascota',
    getMascotaById: 'SELECT * FROM mascota WHERE id_mascota = @id_mascota',
    getMascotaByUser: 'SELECT * FROM mascota WHERE idusuario = @idusuario',
    getTotalMascota: 'select count(id_mascota) from mascota',
    getTotalMascotabyUser: 'SELECT COUNT(*) FROM mascota WHERE idusuario = @idusuario',
    addNewMascota: 'INSERT INTO mascota VALUES (@nombre_mascota, @raza, @sexo_mascota, @edad, @peso, @codigo_chip, @foto_mascota, @idusuario, @fecha_nacimiento)',
    updateMascotaById: 'UPDATE mascota SET nombre_mascota = @nombre_mascota, raza = @raza, sexo_mascota = @sexo_mascota, edad = @edad, peso = @peso, codigo_chip = @codigo_chip, foto_mascota = @foto_mascota, idusuario = @idusuario, fecha_nacimiento = @fecha_nacimieto WHERE id_mascota = @id_mascota',
    deleteMascota: 'DELETE FROM mascota WHERE id_mascota = @id_mascota',
    /* ------------------------------------------------------------------------- */
    /*                                 SERVICIO                                  */
    getAllServicio: 'SELECT * FROM servicio',
    getServicioById: 'SELECT * FROM servicio WHERE id_servicio = @id_servicio',
    getServicioByUser: 'SELECT * FROM servicio WHERE idusuario = @idusuario',
    getTotalServicios: 'SELECT COUNT(id_servicio) FROM servicio',
    getTotalServiciosbyUser: 'SELECT COUNT(*) FROM servicio WHERE idusuario = @idusuario',
    addNewServicio: 'INSERT INTO servicio VALUES (@fecha_solicitud,	@hora_solicitud, @direccion_usuario, @duracion_paseo, @mascota,	@agregado, @tiposervicio, @idusuario, @insumos, @peluqueria)',
    updateServicioById: 'UPDATE servicio SET fecha_solicitud = @fecha_solicitud, hora_solicitud = @hora_solicitud, direccion_usuario = @direccion_usuario, duracion_paseo = @duracion_paseo, mascota = @mascota, agregado = @agregado, tiposervicio = @tiposervicio, idusuario = @idusuario, insumos = @insumos, peluqueria = @peluqueria WHERE id_servicio = @id_servicio',
    deleteServicio: 'DELETE FROM servicio WHERE id_servicio = @id_servicio'
}