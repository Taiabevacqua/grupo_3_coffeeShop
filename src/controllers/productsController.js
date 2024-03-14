const { leerJSON, escribirJSON } = require("../data");
const { existsSync, unlinkSync } = require('fs');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require("express-validator");

const writeJson = (database) => {
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(database), "utf-8")
}

const db = require("../database/models")


const Product = require("../data/Product");

function pushProducts(parametro) {
    fs.writeFileSync("./src/data/products.json", JSON.stringify(parametro, null, 3), "utf-8");
}

module.exports = {
    add: (req, res) => {
        db.Category.findAll({
            order: ['name']
    })
    .then(categories => {
            return res.render("products/product-add",{
            categories
            });
    })
    .catch(error => console.log(error))
    
    },
    detail: (req, res) => {
        return res.render('products/productDetail')
    },
    cafeteras: (req, res) => {
        return res.render('products/cafeteras', {
            productos,
        })
    },
    capsulas: (req, res) => {
        return res.render('products/capsulas', {
            productos,
        })
    },
    cafeengrano: (req, res) => {
        return res.render('products/cafeengrano', {
            products,
        })
    },

 edit: (req, res) => {

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
    },

    update: (req, res) => {

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
      
        },
    


create: (req, res) => {

       

        return res.redirect('/dashboard')

    },
    store: (req, res) => {
        const creador = require('../data/creador');
        const imagen = req.file;
        const lastID = products[products.length -1].id;

        const { nombre, categoria, precio, stock, sabores, descuento, descripcion } = req.body;
        const nuevoCreador = new creador(nombre, imagen, categoria, precio, stock, sabores, descuento, descripcion);
        productos.push(nuevoCreador);
        pushProducts(productos);
        return res.redirect("/")

    },
    todos: (req, res) => {
        const products = leerJSON('products')

        res.render('products/todos', { products })
    },
    search: (req, res) => {
        const { keywords } = req.query;

        return res.render('', {
            productos: productos.filter(producto => producto.nombre.toLowerCase().includes(keywords.toLowerCase()) || producto.descripcion.toLowerCase().includes(keywords.toLowerCase())),
            keywords
        })
    }
}
