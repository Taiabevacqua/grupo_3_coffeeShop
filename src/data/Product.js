const crypto = require('crypto');

function Product(name, price, description, category,  mainImage, ) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.price = price.trim();
    this.category = category;
    this.flavors = flavors;
    this.description = description.trim();

    this.mainImage = mainImage ? mainImage.filename : null;
    this.images = [];

}

module.exports = Product