const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    
    res.send("El resultado es " + result);
});

app.get('/bmicalculator', (req, res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post('/bmicalculator', (req, res)=>{
    var n1 = Number(req.body.weight);
    var n2 = Number(req.body.height);
    var result = n1 / (n2*n2);
    res.send("BMI: " + result);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});