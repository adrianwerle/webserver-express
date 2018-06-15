const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'adrian werle'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

/*
app.get('/', (req, res) => {

    let salida = {
        nombre: 'Adrian',
        edad: `${new Date().getFullYear()-1975}`,
        url: req.url
    };

    res.send(salida);

});
*/

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});