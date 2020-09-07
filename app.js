const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv.limite);

let comando = argv._[0];
let base = argv.base;

switch (comando) {
    case "listar":
        listarTabla(base, argv.limite);
        break;

    case "crear":
        crearArchivo(base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log("comando no reconocido");
}


// let parametro = argv[2];
// let base = parametro.split("=")[1];