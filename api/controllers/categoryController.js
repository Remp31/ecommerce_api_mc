import Category from "../models/Category.js";

//TODO: Validar que el que crea un nuevo producto debe ser un un usuario vendedor
//TODO: Crear categorías para validar la creación. 
const createCategory = async (req, res) => {
    try{
        const newCategory = await Category.create(req.body);
        return res.json({
            msg: 'Categoria de producto creada',
            category: newCategory,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear categoría de producto',
            error,
        });
    }
};

const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find();
        return res.json({
            msg: 'Categorías de productos encontradas',
            data: {
                category: category
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar categorías de productos',
            error,
        });
    }
};

export { createCategory, getAllCategory };