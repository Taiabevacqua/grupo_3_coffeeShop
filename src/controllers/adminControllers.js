const { Op } = require("sequelize")
const db = require('../database/models')

module.exports = {
    
    dashboard: (req, res) => {

        db.Products.findAll({
            include : ['address','category','images']
        })
            .then(products => {
                //return res.send(products)
                return res.render('dashboard', {
                    products
                })
            })
            .catch(error => console.log(error))
    },
    search: (req, res) => {        
        const {keyword} = req.query

        db.Products.findAll({
            where : {
                name : {
                    [Op.substring] : keyword
                }
            },
            include : []
        })
            .then(result => {
                return res.render('dashboard', {
                    products : result,
                    keyword
                })
            })
            .catch(error => console.log(error))

     

      
    }
}