const express = require("express");
const app = express();

// Importamos el archivo JSON con los libros
const books = require("./data/books.json");
const port = 3000;


// Obtener todos los libros
app.get("/all", (req, res) => {
  res.json(books);
});

// Obtener el primer libro
app.get("/first", (req, res) => {
  res.json(books[0]);
});

// Obtener el último libro
app.get("/last", (req, res) => {
  res.json(books[books.length - 1]);
});

// Obtener el libro número 50 (posición 49)
app.get("/middle", (req, res) => {
  res.json(books[50]);
});

// Obtener solo el título del libro de Dante Alighieri
app.get("/author/dante-alighieri", (req, res) => {
  const book = books.find(b => b.author === "Dante Alighieri");
  res.json(book.title); 
});

// Obtener solo el país del libro de Charles Dickens
app.get("/country/charles-dickens", (req, res) => {
  const book = books.find(b => b.author === "Charles Dickens");
  res.json(book.country); 
});

// Obtener páginas y año del libro de Miguel de Cervantes
app.get("/year&pages/cervantes", (req, res) => {
  const book = books.find(b => b.author === "Miguel de Cervantes");
  res.json({ pages: book.pages, year: book.year });
});

// Obtener el número de libros de España
app.get("/country/count/spain", (req, res) => {
  const count = books.filter(b => b.country === "Spain").length;
  res.json(count); 
});

// Comprobar si hay al menos un libro de Alemania
app.get("/country/at-least/germany", (req, res) => {
  const exists = books.some(b => b.country === "Germany");
  res.json(exists); 
});

// Comprobar si todos los libros tienen más de 200 páginas
app.get("/pages/all-greater/200", (req, res) => {
  const allGreater = books.every(b => b.pages > 200);
  res.json(allGreater); 
});


app.listen(port, () => {
  console.log();
});

// Exportamos la app
module.exports = app;
