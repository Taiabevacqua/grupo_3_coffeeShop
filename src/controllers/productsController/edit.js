/*const db = require('../../database/models')

module.exports = (req,res) => {

        const {id} = req.params;


        const product = db.Products.findByPk(id, {
            include: []
        })
    
   

    const categories = db.Category.findAll({
        order: [['name']]
    })
        Promise.all([product, categories, ])
        .then(([product, categories]) => {
            return res.render('products/products-edit',{
                ...product.dataValues,
                categories,
                
            })
        })
        .catch(error => console.log(error))
    }*/