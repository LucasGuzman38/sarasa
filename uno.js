function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let seguir;
  let acumEdadReptil = 0;
  let contReptiles = 0;
  let promEdadReptil;
  let primeraEdad = 0;
  let tipoMasJoven;
  let sexoMasJoven;
  let contAnimales = 0;
  let contAves = 0;
  let porcenAves;
  let contMami = 0;
  let contAve = 0;
  let contReptil = 0;
  let maxTipo;

  do{
    nombre = prompt("Ingrese el nombre");

    while(nombre.length < 3 || nombre.length > 8){
      nombre = prompt("ERROR, intentelo nuevamente");
    }

    tipo = prompt("Ingrese el tipo de animal (mamifero/ave/reptil)");

    while(tipo != "mamifero" && tipo != "ave" && tipo != "reptil"){
      tipo = prompt("ERROR, intentelo nuevamente");
    }

    if(tipo == "reptil"){
      alert("Los reptiles solo pueden tener sangre fria");
    } else {
      sangre = prompt("Ingrese la sangre");

      while(sangre != "fria" && sangre != "calida"){
        sangre = prompt("ERROR, intentelo nuevamente");
      }
    }

    edad = parseInt(prompt("Ingrese la edad"));

    while(isNaN(edad) || edad < 1){
      edad = parseInt(prompt("ERROR, intentelo nuevamente"));
    }

    if(tipo == "reptil"){
      acumEdadReptil += edad;
      contReptiles++;
    }

    sexo = prompt("Ingrese el sexo");

    while(sexo != "m" && sexo != "h"){
      sexo = prompt("ERROR, intentelo nuevamente");
    }


    if(tipo == "mamifero" || tipo == "reptil"){
      contAnimales++;
    }else{
      contAnimales++;
      contAves++;
    }

    if(tipo == "mamifero"){
      contMami++;
    }else if(tipo == "ave"){
      contAve++;
    }else{
      contReptil++;
    }


    tipoMasJoven = tipo;
    sexoMasJoven = sexo;
  
    if(primeraEdad == 0){
      primeraEdad = edad;
    }

    if(edad < primeraEdad){
      primeraEdad = edad;
      tipoMasJoven = tipo;
      sexoMasJoven = sexo;
    }

    seguir = prompt("¿Desea seguir ingresando datos? (s/n)");
  }while(seguir == "s");

  promEdadReptil = acumEdadReptil / contReptiles;
  porcenAves = (contAves / contAnimales) *100;


  if(contAve > contReptil && contAve > contMami){
    maxTipo = "Ave";
  }else if(contReptil >= contAve && contReptil > contMami){
    maxTipo = "Reptil";
  }else{
    maxTipo = "Mamifero";
  }


  if(contReptiles > 0){
    alert("El promedio de edad de los reptiles es: " + promEdadReptil);
  }else if(contReptiles <= 0){
    alert("No se han ingresado reptiles");
  }
  alert("El tipo mas joven es " + tipoMasJoven + " y su sexo es " + sexoMasJoven);
  alert("El porcentaje de aves entre todos los animales es del " + porcenAves + "%");
  alert("El tipo de mascota que mas hay es: " + maxTipo);
}
