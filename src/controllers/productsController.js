const { leerJSON, escribirJSON } = require("../data");
const { existsSync, unlinkSync } = require('fs');
const fs = require('fs');
const Product = require("../data/Product");

function pushProducts (parametro){
	fs.writeFileSync("./src/data/products.json", JSON.stringify(parametro, null, 3), "utf-8");}

module.exports={
    add : (req,res) => {
        return res.render('products/product-add')
    },
    detail: (req,res) =>{
        return res.render('products/productDetail')
    },
    cafeteras : (req, res) => {
        return res.render('products/cafeteras',{
            productos, 
        })
    },
    capsulas : (req, res) => {
        return res.render('products/capsulas',{
            productos , 
        })
    },
    cafeengrano : (req, res) => {
        return res.render('products/cafeengrano',{
            productos , 
        })
    },
    
    


    edit : (req, res) => {
        const {id} = req.params;
        const products = leerJSON('products');
        
        const product = products.find(product => product.id == id);
        return res.render('products/products-edit', {
            ...product,
            
        }) 
    },

    update: (req,res) => {
     
    return console.log(req.body);
    },



    create : (req,res) => {
    
        const{name, description, price, descuento, category, imagen, stock, sabor}= req.body
        
        const newProduct= new Product( name, description, price, descuento, category, imagen, stock, sabor)
        const products=leerJSON('products')

        products.push(newProduct)

        escribirJSON(products, 'products')

        return res.redirect('/dashboard')

    },
    store : (req, res) => {

    const creador = require('../data/creador');
	const imagen = req.file;
	const {nombre, categoria, precio, stock, sabores,descuento, descripcion} = req.body;
	const nuevoCreador = new creador(nombre, imagen,categoria, precio, stock, sabores,descuento, descripcion);
	productos.push(nuevoCreador);
	pushProducts(productos);
	return res.redirect("/")
    
    },
    todos : (req,res) => {
        const products=leerJSON('products')

        res.render('products/todos', {products})
    },
    search: (req, res) => {        
		const {keywords} = req.query;
        
		return res.render('', {
			productos : productos.filter(producto => producto.nombre.toLowerCase().includes(keywords.toLowerCase()) ||  producto.descripcion.toLowerCase().includes(keywords.toLowerCase())), 
			keywords            
		})
	}    
}