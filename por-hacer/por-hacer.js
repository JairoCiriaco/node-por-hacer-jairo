
const fs = require('fs');

//arreglo para guarda las tareas por hacer, posteriormente parsear a un JSON y guardarlo
let tareasApp = [];


const cargarDB = () => {
    //AL momento de cargar el archivo debemos de asegurarnos que el archivo no sea vacio o undefined
    try {
        tareasApp = require('../db/db_tareas.json');    
    } catch (error) {
        tareasApp = [];
    }
    
}

const listarTareas = () => {
  cargarDB();
  return tareasApp;

}

const guardarDB = () => {
    //variable que nos sirve para guardar el contenido que vamos a escribir en un archivo
    let data = JSON.stringify(tareasApp);

    fs.writeFile('db/db_tareas.json', data, (err) => {
        if(err) 
        return console.log(err); 
    })

}

const actualizarTarea = (descripcion, completado) => {
    
    cargarDB();

    let index = tareasApp.findIndex(item => item.descripcion === descripcion )

    if(index >= 0){
        tareasApp[index].completado = completado;
        guardarDB(); 
        return true;
    }else{
        return false;
    }
}

const borraTarea = (descripcion) => {
    
    cargarDB();

    let nuevoListado = tareasApp.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

   if(tareasApp.length === nuevoListado.length){
        return false;
   }else{
       tareasApp = nuevoListado;
       guardarDB();
       return true;
   }
}

const crearTarea = (descripcion) => {
    //cargamos el archivo json
    cargarDB();

    //Variable que nos sirve para guardar temporalmente la nueva tarea y enviarla al arreglo
   let tareas = {
       descripcion,
       completado: false
   };

   //Agregamos la nueva tarea al arreglo y posteriormente la escribimos en un archuv json
   tareasApp.push(tareas);
   guardarDB();
   return tareas;
}


module.exports = {
    crearTarea,
    listarTareas,
    actualizarTarea,
    borraTarea
}