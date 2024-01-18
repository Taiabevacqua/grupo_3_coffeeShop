const crypto = require('crypto');

function Product(name = "",description, category,mainImage,images, price) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.price = price.trim();
    this.description = description.trim();
    this.mainImage = mainImage ? mainImage[0].filename : null;
    this.images = images ? images.map(image => image.filename) : [];
    this.category = category;

}

module.exports = Product