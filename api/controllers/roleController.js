import Role from "../models/Role.js";

const createRole = async (req, res) => {
    try{
        const newRole = await Role.create(req.body);
        return res.json({
            msg: 'Tipo de usuario creado',
            user: newRole,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear tipo usuario',
            error,
        });
    }
};

const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        return res.json({
            msg: 'Tipos de usuarios encontrados',
            data: {
                role: roles
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar tipos de usuarios',
            error,
        });
    }
};

export { createRole, getAllRoles };