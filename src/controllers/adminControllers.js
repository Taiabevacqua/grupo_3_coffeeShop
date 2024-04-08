const { leerJSON } = require('../data')

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
        const productos = leerJSON('productos');
		const {keywords} = req.query;
        
		return res.render('dashboardFilter', {
			productos : productos.filter(producto => producto.nombre.toLowerCase().includes(keywords.toLowerCase()) ||  producto.descripcion.toLowerCase().includes(keywords.toLowerCase())), 
			keywords         
		})
	}
}