//Dale perra
const argv = require('./config/yargs').argv;
const nuevaTarea = require('./por-hacer/por-hacer');
const listarTarea = require('./por-hacer/por-hacer').listarTareas;
const colors = require('colors');



let comando = argv._[0];

switch(comando){
    case 'crear':       
        let tareaCreada= nuevaTarea.crearTarea(argv.descripcion);
        
        console.log(tareaCreada);

    break;

    case 'listar':
        let mostarTareas = listarTarea();

        for(let tareaL of mostarTareas){
            console.log('======TAREAS POR HACER======='.green)
            console.log(`Descripcion = ` + `${tareaL.descripcion}`.yellow)
            console.log(`Estado = ` + `${tareaL.completado}`.red)
            console.log('============================='.green)
        }
        
    break;

    case 'actualizar':
        let actualizado = nuevaTarea.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actualizado);

    break;

    case 'borrar':
        let tareaBorrada = nuevaTarea.borraTarea(argv.descripcion);
        console.log(tareaBorrada);

    break;

    default:
        console.log('Comando no reconocido');
}  