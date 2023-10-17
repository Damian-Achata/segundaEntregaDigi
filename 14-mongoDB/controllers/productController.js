//Creamos los controladores de mi app
//Creamos functions para responder a las rutas

function listarProductos(req,res) {
    res.send(`<h1>Lista de productos</h1>`)
}

const agregarProductos = (req,res) => {
    console.log(req.body);

    let nombre = req.body.nombre;
    let stock = req.body.stock;

    console.log(`<h1>Hemos recibido tus datos y son ${nombre} y ${stock}</h1>`);
    req.status(200).json({
        ok: true,
        message: 'Productos insertados correctamente',
        nombre: nombre,
        stock: stock
    })
}

function updateProducto(req,res) {
    let producto = req.params.id;
    res.send(`<h1>producto actualizado ${producto}</h1>`)
}

function deleteProducto(req,res) {
    let producto = req.params.id;
    res.send(`<h1>producto eliminado</h1>`)
}

//Exportamos los modulos de manera individual ya que son distintas functions
module.exports = {
    listarProductos,
    agregarProductos,
    updateProducto,
    deleteProducto
}