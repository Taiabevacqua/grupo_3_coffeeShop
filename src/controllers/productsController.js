const {leerJSON} = require("../data")
const productos = leerJSON('products');
const fs = require('fs');

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
        const product = productos.find(products => products.id == id);
        
        return res.render('products/products-edit', {
            ...product
        }) 
    },

    update: (req,res) => {
     
    return console.log(req.body);
    },



    create : (req,res) => {
        return res.render('products/product-create')
        
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
        res.render('products/todos', {productos})
    },
    search: (req, res) => {        
		const {keywords} = req.query;
        
		return res.render('', {
			productos : productos.filter(producto => producto.nombre.toLowerCase().includes(keywords.toLowerCase()) ||  producto.descripcion.toLowerCase().includes(keywords.toLowerCase())), 
			keywords            
		})
	}    
}