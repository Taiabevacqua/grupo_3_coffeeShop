const crypto = require ('crypto');

function creador(name, images, category, price, stock, description){
    this.id = crypto.randomUUID(),
    this.nombre = name.trim(),
    this.imagen = images ? images.filename : null,
    this.categoria = category.trim() ,
    this.precio = +price.trim(),
    this.stock = +stock.trim() ,
    this.descripcion = description.trim(),
    this.descuento = descuento ? +descuento.trim() : 0;
}
module.exports = creador;