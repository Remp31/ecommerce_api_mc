import SalesMan from "../models/SalesMan.js";

const createSalesMan = async (req, res) => {
    try{
        const newSalesMan = await SalesMan.create(req.body);
        return res.json({
            msg: 'Vendedor creado',
            user: newSalesMan,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear vendedor',
            error,
        });
    }
};

const getAllSalesMan = async (req, res) => {
    try {
        const salesMen = await SalesMan.find();
        return res.json({
            msg: 'Vendedores encontrados',
            data: {
                salesMan: salesMen
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar vendedores',
            error,
        });
    }
};

export { createSalesMan, getAllSalesMan };