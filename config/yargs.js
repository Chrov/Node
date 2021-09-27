const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type:'number',
        default: 10,
        describe: 'b - to asing a base value.'
    })    
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'l - to list all the multiplication / results in console.'
    })
    .option('e', {
        alias: 'end',
        type: 'number',
        demandOption: true,
        describe: 'e - to asing a end value of the multiplication'
    })
    .check((argv, options) =>{
        if (isNaN(argv.b))  {
            throw 'Base has to be a NUMBER.' 
        }
        return true;
    })
    .argv;


module.exports = {argv};

