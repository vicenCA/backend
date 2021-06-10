import { getConnection, sql, queries } from "../database";

export const getUsuario = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllUsuarios)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewUsuario = async (req, res) => {
    
    const { nombre_usuario, rut, correo_electronico } = req.body;
    let { direccion, numero_cel } = req.body;
    if (nombre_usuario == null || rut == null || correo_electronico == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }
    if (direccion == null) direccion  = "vacío";
    if (numero_cel == null) numero_cel = 0;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("nombre_usuario", sql.VarChar, nombre_usuario)
        .input("rut", sql.VarChar, rut)
        .input("correo_electronico", sql.VarChar, correo_electronico)
        .input("direccion", sql.VarChar, direccion)
        .input("numero_cel", sql.BigInt, numero_cel)
        .query(queries.addNewUsuario);
        
        res.json({nombre_usuario, rut, correo_electronico, direccion, numero_cel})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

    

}

export const getUsuarioByID = async (req, res) => {
    const { id_usuario } = req.params

    const pool = await getConnection()
    const result = await pool.request()
    .input("id_usuario",id_usuario).query(queries.getUsuarioById)

    res.send(result.recordset[0])
}

export const deleteUsuario = async (req, res) => {
    const { id_usuario } = req.params

    const pool = await getConnection()
    const result = await pool.request()
    .input("id_usuario",id_usuario).query(queries.deleteUsuario)

    res.sendStatus(204)
}

export const getTotalUsuarios = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getTotalUsuarios)

    console.log(result);

    res.json(result.recordset[0][''])
}

export const updateUsuarioByID = async (req, res) => {
    const { nombre_usuario, rut, correo_electronico, direccion, numero_cel } = req.body
    const { id_usuario } = req.params

    if ((nombre_usuario == null || rut == null || 
        correo_electronico == null || direccion == null || numero_cel == null)){
            return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
        }
    
        const pool = await getConnection();
        await pool.request().input("nombre_usuario",sql.VarChar,nombre_usuario)
                            .input("rut",sql.VarChar,rut)
                            .input("correo_electronico",sql.VarChar,correo_electronico)
                            .input("direccion",sql.VarChar,direccion)
                            .input("numero_cel",sql.BigInt,numero_cel)
                            .input("id_usuario",sql.Int,id_usuario)
                            .query(queries.updateUsuarioById)

    res.json({nombre_usuario, rut, correo_electronico, direccion, numero_cel})
}