const express = require('express');
const app = express();
const path = require('path'); // unificar rutas
const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public');
// process.env.PORT || (puerto)

app.use(express.static(publicPath)); // tener carpeta public como recurso de archivos estáticos para que siempre podamos consumirlo

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/register', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});

app.get('/login', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'./views/logIn.html'))
});