const {leerJSON} = require('../data')
const products = leerJSON('products')

module.exports={
    index: (req,res) =>{
        
        return res.render('index',{
            products
        })
    },
    
    cart : (req,res) => {
        return res.render('productCart')
    },
    admin : (req,res) => {
        const products = leerJSON('products');
        
        return res.render('dashboard',{
            products
        })


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
    }
}
    