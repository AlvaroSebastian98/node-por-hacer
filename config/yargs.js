const descripcion = {
    demand: true, // indica que el valor sea obligatorio
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea por hacer', {
        descripcion
    })
    .command('listar', 'Lista las tareas', {
        completado: {
            alias: 'c',
            type: 'boolean',
            desc: 'Marca como completado o pendiente la tarea',
        },
        total: {
            alias: 't',
            type: 'boolean',
            default: false
        }
    })
    .help()
    .argv

module.exports = {
    argv
}