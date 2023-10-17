//Ruta de productos.
//producto/insert
//producto/actualizar
//producto/eliminar
const express = require('express');
const router = express.Router();

//Importamos la logica desde los controladores

const {admin} = require('../middlewares/admin')

const  {
    listarProductos,
    agregarProductos,
    updateProducto,
    deleteProducto
} = require('../controllers/productController')

//Rutas
router.get('/mostrar', listarProductos);

router.post('/insert', agregarProductos);

router.put('/update:id', updateProducto);

router.delete('/delete:id', deleteProducto);
//exportamos el modulo router.
module.exports = router;