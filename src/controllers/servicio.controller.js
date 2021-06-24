import { getConnection, queries, sql } from "../database"

export const getServicios = async (req, res) => {
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllServicio);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getServicioByID = async (req, res) => {
    const { id_servicio } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("id_servicio", sql.Int, id_servicio).query(queries.getServicioById);

    res.send(result.recordset[0]);
}

export const getServiciosTotal = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getTotalServicios);
    
        console.log(result);
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const createNewServicio = async (req, res) => {
    const { fecha_solicitud, hora_solicitud, direccion_usuario, mascota, tiposervicio, idusuario } = req.body;
    let { duracion_paseo, agregado } = req.body;

    if (fecha_solicitud == null || hora_solicitud == null || direccion_usuario == null || mascota == null || tiposervicio == null || idusuario == null) {
        res.status(400).json({msg: 'Bad Request. Please, fill all flieds.'});
    }
    
    if (duracion_paseo == null) duracion_paseo = "No especificado.";
    if (agregado == null) agregado = "No agregado."

    try {
        const pool = await getConnection();
        const result = await pool.request()
                                    .input("fecha_solicitud",sql.Date, fecha_solicitud)
                                    .input("hora_solicitud",sql.Time, hora_solicitud)
                                    .input("direccion_usuario",sql.Text, direccion_usuario)
                                    .input("duracion_paseo", sql.VarChar, duracion_paseo)
                                    .input("mascota",sql.VarChar, mascota)
                                    .input("agregado",sql.Text, agregado)
                                    .input("tiposervicio",sql.Int, tiposervicio)
                                    .input("idusuario",sql.Int, idusuario)
                                    .query(queries.addNewServicio)
    
        res.json({fecha_solicitud, hora_solicitud, direccion_usuario, duracion_paseo, mascota, agregado, tiposervicio, idusuario });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}   

export const updateServicioByID = async (req, res) => {
    const { fecha_solicitud, hora_solicitud, direccion_usuario, duracion_paseo, mascota, agregado, tiposervicio, idusuario } = req.body;
    const { id_servicio } = req.params;

    if (fecha_solicitud == null || hora_solicitud == null || direccion_usuario == null || duracion_paseo == null || mascota == null || agregado == null || tiposervicio  == null || idusuario == null){
        return res.status(400).json({msg: 'Bad Request. Miss fill some field.'});
    }

    const pool = await getConnection();
    await pool.request().input("fecha_solicitud", sql.Date, fecha_solicitud)
                        .input("hora_solicitud", sql.Time, hora_solicitud)
                        .input("direccion_usuario", sql.Text, direccion_usuario)
                        .input("duracion_paseo", sql.VarChar, duracion_paseo)
                        .input("mascota", sql.VarChar, mascota)
                        .input("agregado", sql.Text, agregado)
                        .input("tiposervicio", sql.Int, tiposervicio)
                        .input("id_servicio", sql.Int, id_servicio)
                        .input("idusuario", sql.Int, idusuario)
                        .query(queries.updateServicioById);

    res.json({ fecha_solicitud, hora_solicitud, direccion_usuario, duracion_paseo, mascota, agregado, tiposervicio, idusuario });
}

export const deleteServicio = async (req, res) => {
    const { id_servicio } = req.params;
    const pool = await getConnection();
    const result = await pool.request().input("id_servicio", sql.Int, id_servicio)
                        .query(queries.deleteServicio);
    
    res.sendStatus(204);
}