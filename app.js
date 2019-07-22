const colors = require('colors')

// const argv = require('yargs').argv
const argv = require('./config/yargs').argv

const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(`Tarea: "${tarea.descripcion}" creada`);
        break
    case 'listar':
        let listado
        if (argv.total) {
            listado = porHacer.listarTodas()
        } else {
            listado = porHacer.listar(argv.completado)
        }
        for (let tarea of listado) {
            console.log('========Por hacer========'.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================='.green);
        }
        console.log(argv.completado);
        break
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
        break
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado)
        break
    default:
        console.log('Comando no es reconocido');
}