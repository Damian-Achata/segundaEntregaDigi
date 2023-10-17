const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const { dir } = require('console');
const app = express();
const PORT = process.env.PORT || 8080;

//importamos las rutas como middleware 
const userRoutes = require('./routes/userRoutes');

//middlewares: son funciones que se ejecutan antes que lleguen a las rutas.
//De Express
app.use(express.json());//Mi app entiende json
app.use(express.urlencoded({extended: true}));//Mi app decodifica formularios.
app.use(express.static('public')); //Mi app entiende archivos estaticos html css img.


app.use('/usuario', userRoutes)

app.get('/', (req,res) => {
    res.sendFile('index.html')
});




app.listen(PORT, (err) => {
    if(err) throw{err};
    console.log(`Server running on port http://localhost:${PORT}`);
});