listaExamenes = [
    { nombreCurso: 'Matemática I', nombreProfesor: 'Juan Pérez' },
    { nombreCurso: 'Física General', nombreProfesor: 'María López' },
    { nombreCurso: 'Química Orgánica', nombreProfesor: 'Carlos García' },
    { nombreCurso: 'Biología Celular', nombreProfesor: 'Ana Torres' },
    { nombreCurso: 'Historia del Perú', nombreProfesor: 'Pedro Gómez' },
    { nombreCurso: 'Programación en C++', nombreProfesor: 'Luis Fernández' },
    { nombreCurso: 'Estadística Aplicada', nombreProfesor: 'Sofía Rojas' },
    { nombreCurso: 'Microeconomía', nombreProfesor: 'Diego Castillo' },
    { nombreCurso: 'Derecho Constitucional', nombreProfesor: 'Lucía Ramírez' },
    { nombreCurso: 'Ingeniería de Software', nombreProfesor: 'Fernando Morales' }
];


document.getElementById("miBoton").addEventListener("click", function() {
    const cuerpoTabla = document.getElementById("tablaExamenes");

    while (cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }

    let miButton = document.getElementById("miBoton");
    //console.log('miButton', miButton);
  

    
    let cursoPorBuscar = document.getElementById("lblNombreDocente").value;

    console.log('cursoPorBuscar:::' , cursoPorBuscar);

    
    listaExamenes.forEach(examen => {

        if( examen.nombreProfesor.includes(cursoPorBuscar)){

            const filaTr = document.createElement("tr");
    
            const celdaCurso = document.createElement("td");
            celdaCurso.textContent = examen.nombreCurso;
    
            const celdaProfesor = document.createElement("td");
            celdaProfesor.textContent = examen.nombreProfesor;
    
            filaTr.appendChild(celdaCurso);
            filaTr.appendChild(celdaProfesor);
    
            cuerpoTabla.appendChild(filaTr);
        }


    });
});