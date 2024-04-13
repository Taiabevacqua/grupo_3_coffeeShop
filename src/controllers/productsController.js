const fs = require("fs");
const { Op } = require("sequelize");

const { validationResult } = require("express-validator");

const db = require("../database/models");

module.exports = {
  add: (req, res) => {
    const categories = db.Category.findAll({
      order: ["name"],
    });
    const origins = db.origins.findAll({
      order: ["country"],
    });
    const flavors = db.Flavors.findAll({
      order: ["name"],
    });
    Promise.all([categories, origins, flavors])
      .then(([categories, origins, flavors]) => {
        return res.render("products/product-add", {
          categories,
          origins,
          flavors,
        });
      })
      .catch((error) => console.log(error));
  },

  create: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { name, description, price, discount, flavor, category, origin, image } =
        req.body;

      db.Products.create({
        name,
        price,
        discount,
        image : req.file ? req.file.filename : null,
        description,
        flavorId: flavor,
        categoryId: category,
        originId: origin,
      })
        .then(() => res.redirect('/dashboard'))
        .catch(error => console.log(error))


    } else {
      const categories = db.Category.findAll({
        order: [["name"]],
      });

      const origins = db.origins.findAll({
        order: ["country"],
      });
      const flavors = db.Flavors.findAll({
        order: ["name"],
      });
      Promise.all([categories, origins, flavors])
        .then(([categories, origins, flavors]) => {
          return res.render("products/product-add", {
            errors: errors.mapped(),
            old: req.body,
            categories,
            origins,
            flavors,
          });
        })
        .catch((error) => console.log(error));
    }
  },

  edit: (req, res) => {
    const { id } = req.params;

    const product = db.Products.findByPk(id, {
      include: [],
    });

    const categories = db.Category.findAll({
      order: [["name"]],
    });

    const origins = db.origins.findAll({
      order: ["country"],
    });
    const flavors = db.Flavors.findAll({
      order: ["name"],
    });
    Promise.all([product, categories, origins, flavors])
      .then(([product, categories, origins, flavors]) => {
        return res.render("products/products-edit", {
          ...product.dataValues,
          categories,
          origins,
          flavors,
        });
      })
      .catch((error) => console.log(error));
  },

  update: (req, res) => {
    const { name, price, discount, description, category, flavors, origins } = req.body;
    const { id } = req.params;
    const errors = validationResult(req);
  
    if (errors.isEmpty()) {
      db.Products.findByPk(id, {include: []})
      .then((product) => {

        if (product.image && req.file) {
          fs.unlink(`public/img/${product.image}`, (error) => {
            if (error) {
              console.log(error);
            }
          });
        }
  
          db.Products.update(
            {
              name: name,
              price: price,
              discount: discount,
              image : req.file? req.file.filename : product.image,
              description,
              categoryId : category,
              flavorId: flavors,
              originId : origins
            },
            {
              where: {
                id: product.id
              },
          })
        .then(() => {
            return res.redirect("/dashboard");
          })
        .catch((error) => console.log(error));
        })
    }
  
    const product = db.Products.findByPk(id, {
      include : ['origins','Flavors']

    });
    const categories = db.Category.findAll({
      order: [["name"]],
    });
    const origin = db.origins.findAll({
      order: ["country"],
    });
    const flavor = db.Flavors.findAll({
      order: ["name"],
    });
    Promise.all([product, categories, origins, flavors])
    .then(([product, categories, origins, flavors]) => {
        return res.render("products/products-edit", {
        ...product.dataValues,
          categories,
          origin,
          flavor,
          errors: errors.mapped(),
        });
      })
    .catch((error) => console.log(error));
  },

  
  search: (req, res) => {

    const { keywords } = req.query;

      db.Products.findAll({
        where : {
          name : {
            [Op.substring] : keywords
          }
          
        }
      }).then(products => {
        return res.render('products',{
          products,
          title : 'Resultado de la búsqueda: ' + keywords,
          keywords
        })
      })
;
  },

  remove: (req, res) => {
    const { id } = req.params;
    db.Products.findByPk(id, {
    })
   .then((product) => {
      if (product.image) {
        fs.unlink(`public/img/${product.image}`, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }
      db.Products.destroy({
        where: {
          id,
        },
      })
    .then(() => {
          return res.redirect("/dashboard");
        })
    .catch((error) => console.log(error));
    })
  },
  detail: (req, res) => {
    db.Products.findByPk(req.params.id, {
      include : ['category', 'origin','flavor']
    })
    .then(product => {
      return res.render("products/productDetail", {
        ...product.dataValues
      });

    }).catch(error => console.log(error))
  },
  cafeteras: (req, res) => {
    return res.render("products/cafeteras", {
      productos,
    });
  },
  capsulas: (req, res) => {
    return res.render("products/capsulas", {
      productos,
    });
  },
  cafeengrano: (req, res) => {
    return res.render("products/cafeengrano", {
      products,
    });
  },
  list : (req,res) => {
    db.Products.findAll({
      where : {
        categoryId : req.query.id,
      }
    }).then(products => {
      return res.render('products',{
        products,
        title : req.query.category
      })
      
    }).catch(error => console.log(error))
  },
  box : (req,res) => {
    db.Products.findAll({
      where : {
        categoryId : 3,
      }
    }).then(products => {
      return res.render('box',{
        products,
      })
      
    }).catch(error => console.log(error))
  }
 
};
