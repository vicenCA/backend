import { getConnection, sql, queries } from "../database";

/* GET ALL USERS */

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

/*  CREATE NEW USER
    REQUIRED: NAME, PASSWORD, DNI, MAIL
    OPTIONAL: ADDRESS, NUMBER PHONE
    TYPE USER = 1
*/

export const createNewUsuario = async (req, res) => {
    
    const { nombre_usuario, apellido_usuario, clave_usuario, correo_electronico } = req.body;
    let { rut, direccion, numero_cel, tipousuario } = req.body;
    if (nombre_usuario == null || apellido_usuario == null || clave_usuario == null || correo_electronico == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }
    if (direccion == null) direccion  = "XX.XXX.XXX-X";
    if (direccion == null) direccion  = "vacío";
    if (numero_cel == null) numero_cel = 0;
    if (tipousuario == null) tipousuario == 1;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("nombre_usuario", sql.VarChar, nombre_usuario)
        .input("apellido_usuario", sql.VarChar, apellido_usuario)
        .input("clave_usuario", sql.VarChar, clave_usuario)
        .input("rut", sql.VarChar, rut)
        .input("correo_electronico", sql.VarChar, correo_electronico)
        .input("direccion", sql.VarChar, direccion)
        .input("numero_cel", sql.BigInt, numero_cel)
        .input("tipousuario", sql.Int, tipousuario)
        .query(queries.addNewUsuario);
        
        res.json({nombre_usuario, apellido_usuario, clave_usuario, rut, correo_electronico, direccion, numero_cel, tipousuario})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

/* GET USER BY ID */

export const getUsuarioByID = async (req, res) => {
    const { id_usuario } = req.params

    const pool = await getConnection()
    const result = await pool.request()
    .input("id_usuario",id_usuario).query(queries.getUsuarioById)

    res.send(result.recordset[0])
}

/* DELETE USER BY ID */

export const deleteUsuario = async (req, res) => {
    const { id_usuario } = req.params

    const pool = await getConnection()
    const result = await pool.request()
    .input("id_usuario",id_usuario).query(queries.deleteUsuario)

    res.sendStatus(204)
}

/* GET TOTAL NUMBER USER */

export const getTotalUsuarios = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getTotalUsuarios)

    console.log(result);

    res.json(result.recordset[0][''])
}

/*  UPDATE USER BY ID
    WHERE THE REQUIRED AND OPTIONAL FIELDS ARE UPDATED
*/

export const updateUsuarioByID = async (req, res) => {
    const { nombre_usuario, apellido_usuario, clave_usuario, rut, correo_electronico, direccion, numero_cel, tipousuario } = req.body
    const { id_usuario } = req.params

    if ((nombre_usuario == null || apellido_usuario == null || clave_usuario == null || rut == null || 
        correo_electronico == null || direccion == null || numero_cel == null || tipousuario == null))
        {
            return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
        }
    
        const pool = await getConnection();
        await pool.request().input("nombre_usuario",sql.VarChar,nombre_usuario)
                            .input("apellido_usuario",sql.VarChar,apellido_usuario)
                            .input("clave_usuario",sql.VarChar,clave_usuario)
                            .input("rut",sql.VarChar,rut)
                            .input("correo_electronico",sql.VarChar,correo_electronico)
                            .input("direccion",sql.VarChar,direccion)
                            .input("numero_cel",sql.BigInt,numero_cel)
                            .input("tipousuario",sql.Int,tipousuario)
                            .input("id_usuario",sql.Int,id_usuario)
                            .query(queries.updateUsuarioById)

    res.json({nombre_usuario, apellido_usuario, clave_usuario, rut, correo_electronico, direccion, numero_cel, tipousuario})
}


/* CREATE NEW CARER  */

export const createNewCarer = async (req, res) => {
    const { nombre_usuario, clave_usuario, rut, correo_electronico } = req.body;
    let { direccion, numero_cel, tipousuario } = req.body;
    if (nombre_usuario == null ||clave_usuario == null || rut == null || correo_electronico == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }
    if (direccion == null) direccion  = "vacío";
    if (numero_cel == null) numero_cel = 0;
    if (tipousuario == null) tipousuario == 2;

    try {
        const pool = await getConnection();
        await pool.request()
        .input("nombre_usuario", sql.VarChar, nombre_usuario)
        .input("clave_usuario", sql.VarChar, clave_usuario)
        .input("rut", sql.VarChar, rut)
        .input("correo_electronico", sql.VarChar, correo_electronico)
        .input("direccion", sql.VarChar, direccion)
        .input("numero_cel", sql.BigInt, numero_cel)
        .input("tipousuario", sql.Int, tipousuario)
        .query(queries.addNewUsuario);
        
        res.json({nombre_usuario,clave_usuario, rut, correo_electronico, direccion, numero_cel, tipousuario})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/* GET USER ABOUT HIS TYPE */

export const getUsuarioByType = async (req, res) => {
    const { nombre_usuario, tipousuario } = req.body;
    let { id_usuario } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
    .input("tipousuario",sql.Int, tipousuario)
    .input("id_usuario",sql.Int,id_usuario).query(queries.getUsuarioByType);

    res.json({nombre_usuario, tipousuario})
}

export const getUsuarioByEmail = async (req, res) => {
    const { correo_electronico } = req.params

    const pool = await getConnection()
    const result = await pool.request()
    .input("correo_electronico",sql.VarChar,correo_electronico).query(queries.getUsuariobyEmail)

    res.send(result.recordset[0])
}