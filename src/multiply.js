const fs = require('fs');
const colors = require('colors')
colors.enable()

const  FileCreator = async(base, listar = false, end = 10) => {

    try {
    let salida, consola = '';

    for(let i = 1; i<end + 1; i++){
        salida += ` ${base} 'x' ${i} = ${base * i} \n`;
        consola += ` ${colors.gray(base)} ${'X'.yellow} ${colors.grey(i)} = ${colors.green(base * i)} \n`;
    }

    if(listar){   
    console.log(`${'===================================='.green}
    \ntabla del: ${colors.red(base)}
    \n${'===================================='.green}
    \n ${consola}`)  
    }

    fs.writeFileSync(`./salida/tabla_${base}.txt`, salida);
    return `tabla_${base}.txt` 
    } catch (err) {
        throw err;
    }


}

module.exports = {
    FileCreator
}