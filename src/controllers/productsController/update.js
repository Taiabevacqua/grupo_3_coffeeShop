/*const db = require('../../database/models')

module.exports = (req,res) => {

    const {nombre,precio,description,categoryId, flavorId} = req.body;

 const { id } = req.params;
    const errors = validationResult(req);
        
    if (errors.isEmpty()) {
        db.Products.findByPk(id,{
        }).then(() => {
          db.Products.update(
            {
              name: nombre.trim(),
              price: precio,
              description,
              categoryId,
              flavorId,
              
            },
            {
              where: {
                id,
              },
            }
        )
        }).then(() => {
                    return res.redirect("/dashboard");
                  }     
          
           )
                .catch(error => console.log(error));
  
    }
    

      const product = db.Products.findByPk(id, {
          
      })
      const categories = db.Category.findAll({
          order: [['name']]
      })
          Promise.all([product, categories])
          .then(([product, categories]) => {
  
              return res.render('products/products-edit',{
                  ...product.dataValues,
                  categories,
                  errors : errors.mapped()
              })
          })
          .catch(error => console.log(error))
  
    }*/