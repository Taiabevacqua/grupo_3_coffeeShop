const crypto = require('crypto');

function Product(name = "",description, category) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.description = description.trim();
    this.mainImage = "";
    this.images = [];
    this.category = category;

}

module.exports = Product