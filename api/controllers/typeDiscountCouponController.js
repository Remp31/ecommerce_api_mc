import TypeDiscountCoupon from "../models/TypeDiscountCoupon.js";

const createTypeDiscountCoupon = async (req, res) => {
    try{
        const newTypeDiscountCoupon = await TypeDiscountCoupon.create(req.body);
        return res.json({
            msg: 'Tipo de cupón creado',
            typeDiscountCoupon: newTypeDiscountCoupon,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear tipo de cupón',
            error,
        });
    }
};

const getAllTypeDiscountCoupon = async (req, res) => {
    try {
        const typeDiscountCoupon = await TypeDiscountCoupon.find();
        return res.json({
            msg: 'Tipos de cupones de descuento encontrados',
            data: {
                typeDiscountCoupon: typeDiscountCoupon
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar tipos de cupones de descuento',
            error,
        });
    }
};

export { createTypeDiscountCoupon, getAllTypeDiscountCoupon };