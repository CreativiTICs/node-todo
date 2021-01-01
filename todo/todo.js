const fs = require('fs');

let listadoTodo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTodo);
    fs.writeFile('db/data.json', data, (err)=>{
        if(err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoTodo = require('../db/data.json');
    } catch (error) {
        listadoTodo = [];
    }
    
}
    
const crear = (descripcion) => {

    cargarDB();

    let todo = {
        descripcion,
        completado : false
    };

    listadoTodo.push(todo);
    guardarDB();

    return todo;

}

const getListado = () => {
    cargarDB();
    return listadoTodo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoTodo.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoTodo[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB();
    let newList = listadoTodo.filter(todo=> todo.descripcion !== descripcion);

    if(listadoTodo.length === newList.length){
        return false
    }else{
        listadoTodo = newList;
        guardarDB();
        return true;
    }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};