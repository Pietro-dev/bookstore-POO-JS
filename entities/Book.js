const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(title, synopsis, genre, pages, author, description, price, inStock = 0){
        super('livro: '+title, description, price, inStock)
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}