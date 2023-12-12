module.exports={
   
    detail: (req,res) =>{
        return res.render('products/productDetail')
    },
   add : (req, res) => {
    return res.render('product-add')
   },
}