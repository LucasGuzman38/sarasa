function mostrar() {
  let seguir;
  let tipo;
  let origen;
  let precio;
  let contMuñeca = 0;
  let contRompe = 0;
  let contPelota = 0;
  let masVendido;
  let acumImportados = 0;
  let contImportados = 0;
  let promImportados;
  let acumPreciosMuñeca = 0;
  let acumPreciosRompe = 0;
  let acumPreciosPelota = 0;
  let precioTotal;
  let rompeMasBarato = 0;
  let iva;

  do{
    
    tipo = prompt("Ingrese el tipo de juguete");

    while(tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota"){
      tipo = prompt("ERROR, intentelo nuevamente");
    }

    origen = prompt("Ingrese el origen (nacional/importado)");

    while(origen != "nacional" && origen != "importado"){
      origen = prompt("ERROR, intentelo nuevamente");
    }

    precio = parseInt(prompt("Ingrese el precio"));

    while(precio < 1000 || precio > 5000){
      precio = parseInt(prompt("ERROR, intentelo nuevamente"));
    }

    if(origen == "importado"){
      acumImportados += precio;
      contImportados++;
    }

    if(tipo == "muñeca"){
      contMuñeca++;
      acumPreciosMuñeca += precio;
    }else if(tipo == "rompecabezas"){
      contRompe++;
      acumPreciosRompe += precio;
    }else{
      contPelota++;
      acumPreciosPelota += precio;
    }

    if(rompeMasBarato == 0 && origen == "nacional"){
      rompeMasBarato = precio;
    }

    if(precio < rompeMasBarato){
      rompeMasBarato = precio;
    }


  seguir = prompt("¿Desea seguir ingresando ventas? (s/n)");
  }while(seguir == "s");

  if(contMuñeca > contRompe && contMuñeca > contPelota){
    masVendido = "Muñeca";
  }else if(contRompe >= contMuñeca && contRompe > contPelota){
    masVendido = "Rompecabezas";
  }else{
    masVendido = "Pelota";
  }

  promImportados = acumImportados / contImportados;
  precioTotal = acumPreciosMuñeca + acumPreciosRompe + acumPreciosPelota;
  iva = precioTotal * 0.21;


  alert("El tipo de juguete mas vendido es: " + masVendido);
  alert("El promedio de precio de los juguetes importados es: " + promImportados);
  alert("La recaudacion entre todos los juguetes es: " + precioTotal);
  if(contRompe > 0){
    alert("El precio del rompecabezas nacional mas barato es: " + rompeMasBarato);
  }else{
    alert("No se han ingresado rompecabezas");
    }
  alert("Se percibieron " + iva + "$ de iva");
}