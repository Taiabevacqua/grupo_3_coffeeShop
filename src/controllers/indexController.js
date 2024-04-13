const db = require('../database/models')


module.exports = {

    index: (req,res) =>{

        db.Products.findAll({
            where : {
                categoryId : 3
            }
        })
    
          .then(capsulas =>{
           return res.render('index',{
                capsulas
           })
        })
        .catch(error => console.log(error))
       },


     cart : (req,res) => {
        return res.render('productCart')
    },



    admin : (req,res) => {
        db.Products.findAll()
          
        .then(products =>{
            
            return res.render('dashboard',{
                products
            })
        
        })
           .catch(error => console.log(error))
    },



    searchAdmin : (req,res) => {
        const {keyword} = req.query
        const products = leerJSON('products');
        const result = products.filter((product) => {
            return product.name.toLowerCase().includes(keyword.toLowerCase()) || product.category.toLowerCase().includes(keyword.toLowerCase())
        })
        return res.render('dashboard', {
            products : result,
            keyword
        })

        .catch(error => console.log(error))
    },

    sucursales: (req, res) => {
        res.render("sucursales")   
       },
       complementos: (req, res) => {
        res.render("complementos")
       }, 
    
       capsulas: (req, res) => {
        res.render("capsulas")
       },
    
       cafeteras: (req, res) => { 
        res.render("cafeteras")
       },
    
       cafeMolido: (req, res) =>{
        res.render("cafeMolido")
       },
}
  
