function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaPromedio;
  let edad;
  let maxPromedio = 0;
  let nombreProm;
  let mujerMasJoven = 0;
  let nombreMasJoven;
  let contMujeres = 0;
  let contEstudiantes = 0;
  let contQuimica = 0;
  let contFisica = 0;
  let contSistemas = 0;
  let porcFisica;
  let porcQuimica;
  let porcSistemas;
  let edadMax = 0;
  let nombreMax;
  let maxMaterias = 0;

  for(let i = 0; i < 3; i++){
    
    nombre = prompt("Ingrese su nombre");

    carrera = prompt("Ingrese su carrera");

    while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
      carrera = prompt("ERROR, intentelo nuevamente");
    }

    sexo = prompt("Ingrese el sexo");

    while(sexo != "m" && sexo != "f" && sexo != "nb"){
      sexo = prompt("ERROR, intentelo nuevamente");
    }

    cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias"));

    while(cantidadMaterias < 1 || cantidadMaterias > 5){
      cantidadMaterias = parseInt(prompt("ERROR, intentelo nuevamente"));
    }

    notaPromedio = parseInt(prompt("Ingrese la nota promedio"));

    while(notaPromedio < 0 || notaPromedio > 10){
      notaPromedio = parseInt(prompt("ERROR, intentelo nuevamente"));
    }

    edad = parseInt(prompt("Ingrese su edad"));

    if(notaPromedio > maxPromedio && carrera == "fisica"){
      nombreProm = nombre;
    }

    if(mujerMasJoven == 0 && sexo == "f"){
      mujerMasJoven = edad;
      nombreMasJoven = nombre
      contMujeres++;
    }

    if(edad < mujerMasJoven && sexo == "f"){
    nombreMasJoven = nombre;
    }

    if(carrera == "quimica"){
      contEstudiantes++;
      contQuimica++;
    }else if(carrera == "fisica"){
      contEstudiantes++;
      contFisica++;
    }else{
      contEstudiantes++;
      contSistemas++;
    }

    if(carrera == "fisica" || carrera == "sistemas"){
      if(cantidadMaterias > maxMaterias){
        maxMaterias = cantidadMaterias;
        nombreMax = nombre;
        edadMax = edad;
      }
    }


  }

  porcQuimica = (contQuimica / contEstudiantes) *100;
  porcFisica = (contFisica / contEstudiantes) *100;
  porcSistemas = (contSistemas / contEstudiantes) *100;

  alert("El nombre de la persona con mejor promedio en la carrera de fisica es: " + nombreProm);
  if(contMujeres > 0){
    alert("El nombre de la alumna mas joven es: " + nombreMasJoven);
    }else{
      alert("No se han ingresado mujeres");
    }
  if(contFisica > 0){
    alert("El porcentaje de estudiantes que estudian Fisica es: " + porcFisica + "%");
  }else{
    alert("No hay alumnos inscriptos en la carrera de Fisica");
  }
  if(contQuimica > 0){
    alert("El porcentaje de estudiantes que estudian Quimica es: " + porcQuimica + "%");
  }else{
    alert("No hay alumnos inscriptos en la carrera de Quimica");   
    }
  if(contSistemas > 0){
    alert("El porcentaje de estudiantes que estudian Sistemas es: " + porcSistemas + "%");
    }else{
      alert("No hay alumnos inscriptos en la carrera de Sistemas");
    }
  alert("El nombre del estudiante que cursa mas materias es " + nombreMax + " y tiene " + edadMax + " años");
}
