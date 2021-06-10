
export const queries = {
    getAllUsuarios: 'SELECT * FROM usuario',
    addNewUsuario: 'INSERT INTO usuario VALUES (@nombre_usuario, @rut, @correo_electronico, @direccion, @numero_cel)',
    getUsuarioById: "SELECT * FROM usuario WHERE id_usuario = @id_usuario",
    deleteUsuario: 'DELETE FROM [GCC].[dbo].[usuario] WHERE id_usuario = @id_usuario',
    getTotalUsuarios: 'SELECT COUNT(*) FROM usuario',
    updateUsuarioById: 'UPDATE usuario SET nombre_usuario = @nombre_usuario, rut = @rut, correo_electronico = @correo_electronico, direccion = @direccion, numero_cel = @numero_cel WHERE id_usuario = @id_usuario'
}