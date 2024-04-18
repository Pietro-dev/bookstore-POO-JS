const App = require("./App");

const app = new App()



app.createAuthor("Frank Herbert", "North American", "Autor da franquia revolucionária da ficção científica chamada DUNE")
const authors = app.getAuthors()

app.createBook("Dune", "Primeio livro da trilogia de Duna", "Ficção científica e Aventura", "804", authors[0], '...', 300, 40)
const books = app.getBooks()

app.createPoster("Star Wars", 'Darth Vades poster', '1 metro', '50cm', 49.90, 40)
const posters = app.getPosters()

app.createUser('Pietro', 'email@gmail.com', 12345678)
const users = app.getUsers()

const items = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: posters[0],
        quantity: 20
    }
]
app.showDatabase()
app.createOrder(items, users[0])

app.showDatabase()


