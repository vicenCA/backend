import { getConnection, queries, sql } from "../database"

/* GET ALL PETS */

export const getMascota = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllMascotas);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/* GET PET BY ID */

export const getMascotaByID =  async (req, res) => {
    const { id_mascota } = req.params;

    const pool = await getConnection();
    const result = await pool.request().
    input("id_mascota", id_mascota).query(queries.getMascotaById);

    res.send(result.recordset[0]);
}

/* GET COUNT PETS */

export const getTotalMascotas = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .query(queries.getTotalMascota)
        console.log(result);
        
        res.json(result.recordset[0][''])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

/*  CREATE NEW PET
    REQUIRED: NAME, DOG BREED, GENRE
    OPTIONAL: AGE, WEIGHT    
*/

export const createNewMascota = async (req, res) => {
    const { nombre_mascota, raza, sexo_mascota, idusuario, fecha_nacimiento } = req.body;
    let { edad, peso, codigo_chip, foto_mascota } = req.body;


    if (nombre_mascota == null || raza == null || sexo_mascota == null || idusuario == null || fecha_nacimiento == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields.'})
    }

    if (edad == null) edad = 0;
    if (peso == null) peso = 0.0;
    if (codigo_chip == null) codigo_chip = 'No incluido.'

    try {
        const pool = await getConnection();
        await pool.request()
        .input("nombre_mascota", sql.VarChar, nombre_mascota)
        .input("raza", sql.VarChar, raza)
        .input("sexo_mascota", sql.VarChar, sexo_mascota)
        .input("edad", sql.Int, edad)
        .input("peso", sql.Float, peso)
        .input("codigo_chip", sql.VarChar, codigo_chip)
        .input("foto_mascota", sql.Image, foto_mascota)
        .input("fecha_nacimiento", sql.VarChar, fecha_nacimiento)
        .input("idusuario", sql.Int, idusuario)
        .query(queries.addNewMascota);

        res.json({ nombre_mascota, raza, sexo_mascota, edad, peso, codigo_chip, idusuario, foto_mascota })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/* UPDATE ALL FIELDS OF TABLE PET */

export const updateMascotaByID = async (req, res) => {
    const { nombre_mascota, raza, sexo_mascota, edad, peso, codigo_chip, foto_mascota, idusuario, fecha_nacimiento } = req.body;
    const { id_mascota } = req.params;

    if (!id_mascota) {
        return res.status(400).json({msg: 'Not found.'});
    }

    if ( nombre_mascota == null || raza == null || sexo_mascota == null || edad == null || peso == null || id_mascota == null || fecha_nacimiento == null){
        return res.status(400).json({msg: 'Bad Request. Miss fill some field.'});
    }

    const pool = await getConnection();
    await pool.request().input("nombre_mascota", sql.VarChar, nombre_mascota)
                        .input("raza", sql.VarChar, raza)
                        .input("sexo_mascota",sql.VarChar, sexo_mascota)
                        .input("edad", sql.Int, edad)
                        .input("peso", sql.Float, peso)
                        .input("codigo_chip", sql.VarChar, codigo_chip)
                        .input("foto_mascota", sql.Image, foto_mascota)
                        .input("idusuario", sql.Int, idusuario)
                        .input("fecha_nacimiento", sql.VarChar, fecha_nacimiento)
                        .input("id_mascota", sql.Int, id_mascota)
                        .query(queries.updateMascotaById);

    res.json({ nombre_mascota, raza, sexo_mascota, edad, peso, codigo_chip, foto_mascota, idusuario });
}

/* DELETE PET BY ID */

export const deleteMascota = async (req, res) => {
     const { id_mascota } = req.params;
     const pool = await getConnection();
     const result = await pool.request()
     .input("id_mascota",id_mascota).query(queries.deleteMascota);

     res.sendStatus(204);
}

export const getMascotaByUser = async (req, res) => {
    const { idusuario } = req.params;

    const pool = await getConnection();
    const result = await pool.request().
    input("idusuario",sql.Int, idusuario).query(queries.getMascotaByUser);

    res.json(result.recordset);
}

export const getTotalMascotasByUser = async (req, res) => {
    const { idusuario } = req.params;
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input("idusuario",sql.Int,idusuario)
        .query(queries.getTotalMascotabyUser)
        console.log(result);
        
        res.json(result.recordset[0][''])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}