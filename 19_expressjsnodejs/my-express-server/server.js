const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("<h1>Hola Mundo!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("Email me at: ginoangelolr@gmail.com");
});

app.get("/about", (req, res) => {
    res.send("<h1>Contact information</h1> <p>Gino Angelo Liza Rodriguez</p>");
});

app.get("/hobbies", (req, res) => {
    res.send("<h1>Hobbies</h1> <ul><li>Guitar</li><li>Videogames</li><li>Web Development</li></ul>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});