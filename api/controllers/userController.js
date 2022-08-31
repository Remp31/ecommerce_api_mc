import User from "../models/User.js";

const createUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        return res.json({
            msg: 'Usuario creado',
            user: newUser,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear usuario',
            error,
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({
            msg: 'Usuarios encontrados',
            data: {
                user: users
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar usuarios',
            error,
        });
    }
};

export { createUser, getAllUsers };