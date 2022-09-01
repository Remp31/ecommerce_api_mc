import DiscountCoupon from "../models/DiscountCoupon.js";

const createDiscountCoupon = async (req, res) => {
    try{
        const newDiscountCoupon = await DiscountCoupon.create(req.body);
        return res.json({
            msg: 'Cupón de descuento creado',
            discountCoupon: newDiscountCoupon,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear cupón de descuento',
            error,
        });
    }
};

const getAllDiscountCoupon = async (req, res) => {
    try {
        const discountCoupon = await DiscountCoupon.find();
        return res.json({
            msg: 'Cupones de descuento encontrados',
            data: {
                discountCoupon: discountCoupon,
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar cupones de descuento',
            error,
        });
    }
};

export { createDiscountCoupon, getAllDiscountCoupon };