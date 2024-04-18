# Loja de Livros
Este é um pequeno projeto onde pude praticar a Programação Orientada a Objetos em JavaScript. 
## Como funciona?
Este projeto é algo bem simples que foi criado para praticar a POO. O projeto é uma loja de livros que vende livros e posters. Você pode criar:
+ livros;
+ criar os autores dos livros;
+ criar posters;
+ cadastrar usuários;
+ criar pedidos (especificando seus itens).<br>

Muitos métodos diferentes são usados para fazer isso, pois o projeto não consiste em uma aplicação web. Para que qualquer um possa testá-lo e aprender mais, vou explicar como usar os métodos principais. <br>
Caso queira explorar as demais classes e seus métodos, deixei comentários no código para facilitar a compreensão. <br>
## Como executar?
![](https://img.shields.io/badge/node.js-node?style=flat&logo=node.js&labelColor=%23000&color=%2384D82A_)
![](https://img.shields.io/badge/JavaScript-js?style=flat&logo=javascript&labelColor=%23000&color=%23F1CE05)
![](https://img.shields.io/badge/nodemon-js?style=flat&logo=nodemon&labelColor=%23fff&color=%232E2E2D)
+ Para executar o programa é necessário ter o node.js instalado ou nodemon. 
+ Você pode executá-lo baixando todos os arquivos, abrindo no terminal a pasta que contém o arquivo **index.js** e inserindo o comando `node index.js`. 
+ Caso opte por usar o nodemon, digite o seguinte comando: `nodemon --legacy-watch index.js`

## Como fazer a inserção de novos livros ou posters? 
No arquivo index.js você pode criar Livros, autores, posters, usuários, itens e pedidos

### Instâncie a class App.js
Ela pode ser instânciada com o seguinte código: 
```js
const App = require("./App");
const app = new App()
```

### Criando um novo autor
- Para criar um novo autor vamos para o arquivo index.js, onde a classe `App.js` já está instânciada. Para criar um novo livro, use o comando: `app.createAuthor("nome-do-autor", "nacionalidade", "breve biografia")`. Preencha os campos de acordo com o autor que quiser criar. <br>
- Com o autor já criado, crie a constante `const authors = app.getAuthors` para armazenar o array que contem todos os autores. Ele será necessário mais tarde, já o chame agora para não esquecer ;)

### Criando um novo livro
- Chame o método `app.createBook("<nome-do-livro>", "<sinopse>", "<gênero>", <páginas>, <autor>, "<decrição>", <preço>, <páginas>, <quantidade-em-estoque>)`<br>
*obs: o parâmetro autor deve ser preenchido assim: `authors[index-do-author]`.* <br>
- Com o livro criado, crie a constante: `const books = app.getBooks()`

### Criando um novo poster
- Chame o método: `app.createPoster("<nome-do-poster>", "<descrição>, <altura>, <largura>, <valor>, <quantidade>` <br>
- Crie a constante: `const posters = app.getPosters()`

### Criando um novo usuário
- Chame o método: `app.createUser("<nome>", "<email>", "<password>")`
- Crie a constante: `const users = app.getUsers()`

### Crie alguns items para colocar no pedido
Os items de pedidos são um array de objetos, onde as propriedades dos objetos devem ser *'product'* e *'quantity'*.
```
  const items = [
    {
        product: books[<insira-algum-indice],
        quantity: <quantidade>
    },
    {
        product: posters[insira-algum-indice],
        quantity: <quantidade>
    }
]
```
> Você pode inserir quantos pedidos quiser, este é só um exemplo. Mas todos os itens devem ter seu índice especificado na propriedade *product*<br>
### Crie um pedido
- Basta chamar o método `app.createOrder(items, users[indice])` <br>
*obs: o indice do users pode ser o de qualquer usuário que foi inserido no array users*
### Vendo os itens criados
Use o comando: `app.showDatabase()' para ver tudo o que foi criado. Ele mostrará em tabelas tudo o que foi criado, caso realmente tenha sido criado. 

## Demonstração de como chamar os métodos com os parâmetros corretos
```js
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

app.createOrder(items, users[0])
app.showDatabase()
```
