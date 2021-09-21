const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type:'number',
        default: 10,
        describe: 'b Corresponde a la base de la multiplicación'
    })    
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'l Corresponde al listado de la multiplicación en consola'
    })
    .option('e', {
        alias: 'end',
        type: 'number',
        demandOption: true,
        describe: 'e Corresponde al número por el que multiplicaremos la base de la multiplicación'
    })
    .check((argv, options) =>{
        if (isNaN(argv.b))  {
            throw 'la base debe ser un número.' 
        }
        return true;
    })
    .argv;


module.exports = {argv};

