//ES5 = version 5 de JS: const admin = function (req,res,next) => {...}
//ES6 = version 6 de JS: const admin = (req,res,next) => {...}


const admin = (req,res,next) => {
    console.log('Middleware para administrador...');
    next();
}

module.exports = {
    admin
}