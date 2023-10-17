//Ruta de usuarios.
//API/usuario/login
const express = require('express');
const router = express.Router();


//Rutas
router.get('/login',(req,res) => {
    res.sendFile('login.html')
})

router.get('/home',(req,res) => {
    res.send(`<h1>Bienvenido a la App Administrador/a</h1>`)
})

router.post('/login', (req,res) =>{
    console.log(req.body);

    let user = req.body.user;
    let password = req.body.password;

    console.log(`<h1>Hemos recibido tus datos y son ${user} y ${password}</h1>`);
    if (user == '' || password == '') {
        res.redirect('/error.html');
    }else if (user != 'admin' || password != '1234') {
        res.redirect('/error.html');
    }else {
        res.redirect('/usuario/home')
    }
});

router.put('/update:id', (req,res) => {
    let usuario = req.params.id;
    res.send(`<h1>Usuario actualizado ${usuario}</h1>`)
})

router.delete('/delete:id', (req,res) => {
    let usuario = req.params.id;
    res.send(`<h1>Usuario actualizado</h1>`)
})
//exportamos el modulo router.
module.exports = router;