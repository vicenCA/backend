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
    const { fecha_solicitud, hora_solicitud, direccion_usuario, tiposervicio, idusuario } = req.body;
    let { duracion_paseo, agregado, mascota, insumos, peluqueria } = req.body;

    if (fecha_solicitud == null || hora_solicitud == null || direccion_usuario == null || tiposervicio == null || idusuario == null) {
        res.status(400).json({msg: 'Bad Request. Please, fill all flieds.'});
        console.log(req.body);
    }
    
    if (duracion_paseo == null) duracion_paseo = "No especificado.";
    if (agregado == null) agregado = "No agregado."
    if (insumos == null) insumos = "No agregado."
    if (peluqueria == null) peluqueria = "No agregado."
    if (mascota == null) mascota = "No es necesario."

    try {
        const pool = await getConnection();
        const result = await pool.request()
                                    .input("fecha_solicitud",sql.VarChar, fecha_solicitud)
                                    .input("hora_solicitud",sql.VarChar, hora_solicitud)
                                    .input("direccion_usuario",sql.Text, direccion_usuario)
                                    .input("duracion_paseo", sql.VarChar, duracion_paseo)
                                    .input("mascota",sql.VarChar, mascota)
                                    .input("agregado",sql.Text, agregado)
                                    .input("insumos",sql.Text, insumos)
                                    .input("peluqueria",sql.Text, peluqueria)
                                    .input("tiposervicio",sql.Int, tiposervicio)
                                    .input("idusuario",sql.Int, idusuario)
                                    .query(queries.addNewServicio)
    
        res.json({fecha_solicitud, hora_solicitud, direccion_usuario, duracion_paseo, mascota, agregado, tiposervicio, idusuario, insumos, peluqueria });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}   

export const updateServicioByID = async (req, res) => {
    const { fecha_solicitud, hora_solicitud, direccion_usuario, duracion_paseo, mascota, agregado, tiposervicio, idusuario, insumos, peluqueria } = req.body;
    const { id_servicio } = req.params;

    if (fecha_solicitud == null || hora_solicitud == null || direccion_usuario == null || agregado == null || tiposervicio  == null || idusuario == null){
        return res.status(400).json({msg: 'Bad Request. Miss fill some field.'});
    }

    const pool = await getConnection();
    await pool.request().input("fecha_solicitud", sql.VarChar, fecha_solicitud)
                        .input("hora_solicitud", sql.VarChar, hora_solicitud)
                        .input("direccion_usuario", sql.Text, direccion_usuario)
                        .input("duracion_paseo", sql.VarChar, duracion_paseo)
                        .input("mascota", sql.VarChar, mascota)
                        .input("agregado", sql.Text, agregado)
                        .input("tiposervicio", sql.Int, tiposervicio)
                        .input("insumos", sql.Text, insumos)
                        .input("peluqueria", sql.Text, peluqueria)
                        .input("id_servicio", sql.Int, id_servicio)
                        .input("idusuario", sql.Int, idusuario)
                        .query(queries.updateServicioById);

    res.json({ fecha_solicitud, hora_solicitud, direccion_usuario, duracion_paseo, mascota, agregado, tiposervicio, idusuario, insumos, peluqueria });
}

export const deleteServicio = async (req, res) => {
    const { id_servicio } = req.params;
    const pool = await getConnection();
    const result = await pool.request().input("id_servicio", sql.Int, id_servicio)
                        .query(queries.deleteServicio);
    
    res.sendStatus(204);
}

export const getTotalServiciosByUser = async (req, res) => {
    const { idusuario } = req.params;
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input("idusuario",sql.Int,idusuario)
        .query(queries.getTotalServiciosbyUser)
        console.log(result);
        
        res.json(result.recordset[0][''])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const getServicioByUser = async (req, res) => {
    const { idusuario } = req.params;
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input("idusuario",sql.Int,idusuario)
        .query(queries.getServicioByUser)
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}