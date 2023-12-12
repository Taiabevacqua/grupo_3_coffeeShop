module.exports={
    index: (req,res) =>{
        return res.render('index')
    },
    cart : (req,res) => {
        return res.render('productCart')
    },
    admin : (req,res) => {
        
        const products = leerJSON('products')
        return res.render('dashboard', { 
            products
        })


    },
    
}