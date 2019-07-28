const optsCrear = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const optsActualizar = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado:{
        default: true,
        alias: 'c',
        desc:'Cambia el estado de la tarea'
    }
}

const optsBorrar = {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Borra una tarea a partir de su descripcion'
    }
}




const argv = require('yargs')
                            .command('crear','Crea una nueva tarea',optsCrear)
                            .command('actualizar','Cambiar estado de las tareas',optsActualizar)
                            .command('listar', 'Muestra todas las tareas por hacer')
                            .command('borrar','Borra una tarea',optsBorrar)
                            .help()
                            .argv;


                            
module.exports = {
    argv
}