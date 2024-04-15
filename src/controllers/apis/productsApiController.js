const db = require('../../database/models');


const getAllProducts = async(req,res) => {
    try {
        const { count, rows } =  await db.Products.findAndCountAll({
            include : [
                {
                    association : 'category',
                    attributes : ['name']
                },
                {
                    association : 'origin',
                    attributes : ['country']
                },
                {
                    association : 'flavor',
                    attributes : ['name']
                },
                
               
            ],
            
            attributes : ['id', 'name', 'description', 'image', 'price', 'discount'],
            limit: req.query.limit,
            offset: req.skip,
        })

        const products = rows.map(product => {
            return {
                ...product.dataValues,
                detail : `${req.protocol}://${req.get('host')}/apis/products/${product.id}`
            }
        })

        return res.status(200).json({
            ok : true,
            count,
            products
        })
    } catch (error) {
        return res.status(error.status|| 500).json({
            ok: false,
            msg: error.message || 'Upss, hiciste desastre, :('
        })
    }
}

const getOneProduct = async (req,res) => {
    try {
        const product = await db.Products.findByPk(req.params.id,{
            include : [
                {
                    association : 'category',
                    attributes : ['name']
                },
                {
                    association : 'origin',
                    attributes : ['country']
                },
                {
                    association : 'flavor',
                    attributes : ['name']
                },
            ],
            attributes :{
                exclude : ['categoryId', 'createdAt', 'updatedAt', 'originId' , 'flavorId', 'originId']
            }
        })

        const productCustom = {
            ...product.dataValues,
            image : `${req.protocol}://${req.get('host')}/img/${product.image}`,
            category : product.category.name,
            
        }

        return res.status(200).json({
            ok : true,
            product : productCustom
        })
        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Cuidado, hubo un error. Lo Siento!'
        })
    }
}



module.exports= {
    getAllProducts,
    getOneProduct,
}
