const Author = require("./entities/Author")
const Database = require("./Database")
const User = require("./entities/User")
const Book = require("./entities/Book")
const Poster = require("./entities/Poster")
const Order = require("./entities/Order")

module.exports = class App {
    static #database = new Database()
    // criar e salvar users no db
    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }
    // buscar users no db
    getUsers(){
        return App.#database.find('users')
    }
    // criar e salvar autores no db
    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }
    // buscar autores no db
    getAuthors(){
        return App.#database.find('authors')
    }
    // criar livro
    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }
    // add livros no estoque
    addBook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks(){
        return App.#database.find('books')
    }
    //criar posters
    createPoster(name, description, heigth, width, price, inStock){
        const poster = new Poster(name, description, heigth, width, price, inStock)
        App.#database.savePoster(poster)
    }
    // add poster ao estoque
    addPoster(postername, quantity){
        App.#database.addPostersToStock(postername, quantity)
    }
    getPosters(){
        return App.#database.find('posters')
    }
    // criando pedido
    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, quantity)
            }
        })
    }
    // mostrar pedidos
    getOrders(){
        return App.#database.find('orders')
    }
    // método para mostra o db inteiro
    showDatabase(){
        App.#database.showStorage()
    }
}