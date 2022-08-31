import Product from "../models/Product.js";

//TODO: Validar que el que crea un nuevo producto debe ser un un usuario vendedor
//TODO: Crear categorías para validar la creación. 
const createProduct = async (req, res) => {
    try{
        const newProduct = await Product.create(req.body);
        return res.json({
            msg: 'Producto creado',
            product: newProduct,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear producto',
            error,
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();
        return res.json({
            msg: 'Productos encontrados',
            data: {
                product: product
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar productos',
            error,
        });
    }
};

export { createProduct, getAllProduct };