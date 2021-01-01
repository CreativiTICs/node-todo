const argv = require('yargs').argv;
const todo = require('./todo/todo');
const colors = require("colors");
 
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todo.crear(argv.d);
        console.log(tarea);
        break;

    case 'listar':
        let listado = todo.getListado();
        for (let tarea of listado) {
            console.log('=====TODO====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("==============".green);
        }
        break;

    case 'actualizar':
        let actualizado = todo.actualizar(argv.d, argv.c);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = todo.borrar(argv.d);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}