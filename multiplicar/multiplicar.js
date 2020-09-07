// requireds

const fs = require('fs');
var colors = require('colors');
// const fs = require('express'); codigo externo
// const fs = require('./fs'); codigo creado por nosotros



// Se puede hacer asi y se evita la ultima linea
// module.exports.crearArchivo = base => { 
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${ base }" no es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla- ${ base }.txt`);
        });

    });
};

let listarTabla = (base, limite = 10) => {

    console.log("=======================".blue);
    console.log(`=====TABLA DEL ${ base}=====`.green);
    console.log("=======================".blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);

    }
}


module.exports = {
    crearArchivo,
    listarTabla
}