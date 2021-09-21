const {FileCreator} = require('./src/multiply');
const {argv} = require('./config/yargs.js');


console.clear();
console.log(argv.b, argv.l)

FileCreator(argv.b, argv.l, argv.e)
        .then( fileName => console.log(fileName, 'Creado'))
        .catch( err => console.log(err))
























// const [ , , arg3 = 'base=4'] = process.argv;

// const [ , base] = arg3.split('=')

// console.log(process.env)

// let base = 4;

    // FileCreator(base)
    //     .then(tabla => console.log('Archivo creado'))
    //     .catch(err =>  console.log('Hubo un error'))
