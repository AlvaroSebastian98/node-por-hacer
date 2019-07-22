const fs = require('fs')

let listadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', data, err => {
        if (err) console.log(err)
            // else console.log('Data ingresada')
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer
}

const listar = (completado = false) => {
    cargarDB()
    listadoPorHacer = listadoPorHacer.filter(el => el.completado === completado)
    return listadoPorHacer
}

const listarTodas = () => {
    cargarDB()
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB()
    nuevoListadoPorHacer = listadoPorHacer.filter(el => el.descripcion !== descripcion)
    if (nuevoListadoPorHacer.length === listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = nuevoListadoPorHacer
        guardarDB()
        return true
    }
}

module.exports = {
    crear,
    listar,
    listarTodas,
    actualizar,
    borrar
}