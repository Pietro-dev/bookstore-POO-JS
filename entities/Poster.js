const Product = require("./Product");

module.exports = class Poster extends Product{
    constructor(name, description, heigth, width, price, inStock = 0){
        super(name, description, price, inStock)
        this.heigth
        this.width
    }
}