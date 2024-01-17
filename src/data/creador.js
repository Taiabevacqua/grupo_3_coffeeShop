const crypto = require ('crypto');

function creador(name, imagen, category, price, stock, description){
    this.id = crypto.randomUUID();
    this.name = name ? name.trim() : '';
    this.imagen = imagen ? imagen.filename : null;
    this.category = category ? category.trim() : '' ;
    this.precio = +price.trim();
    this.stock = stock ? +stock.trim() : 0;
    this.description = description ? description.trim() : '';
    this.descuento = descuento ? +descuento.trim() : 0;
}
module.exports = creador;