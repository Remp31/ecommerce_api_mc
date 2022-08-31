import Administrator from "../models/Administrator.js";

//TODO: Validar que el que crea un nuevo administrador debe ser un administrador previamente existente
const createAdministrator = async (req, res) => {
    try{
        const newAdministrator = await Administrator.create(req.body);
        return res.json({
            msg: 'Administrador creado',
            administrator: newAdministrator,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear administrador',
            error,
        });
    }
};

const getAllAdministrator = async (req, res) => {
    try {
        const administrator = await Administrator.find();
        return res.json({
            msg: 'Administradores encontrados',
            data: {
                administrator: administrator
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar administradores',
            error,
        });
    }
};

export { createAdministrator, getAllAdministrator };