var nombre = prompt("Bienvenido/a al cuestionario sobre las Olimpíadas.¿Cual es tu nombre?");
var c = 0;
var i = 0;
alert("Bienvenido/a " + nombre)
var p1 = prompt("¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre");

if(p1 == "B"){
    c = c + 1;
}else if(p1 == "A"){
    i = i + 1;
}else if(p1 == "C"){
    i = i + 1;
}else{
    alert("Opción no válida");
}


var p2 = prompt("¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste o Turquesa\nB. Rojo\nC. Morado");

if(p2 == "A"){
    c = c + 1;
}else if(p2 == "B"){
    i = i + 1;
}else if(p2 == "C"){
    i = i + 1;
}else{
    alert("Opción no válida");
}


var p3 = prompt("Nuevo deporte incluido este año\nA. Futsal femenino\nB. Balonmano\nC. Marcha Atlética");

if(p3 == "C"){
    c = c + 1;
}else if(p3 == "A"){
    i = i + 1;
}else if(p3 == "B"){
    i = i + 1;
}else{
    alert("Opción no válida");
}

if(c > i){
    document.write(nombre + ", lo has hecho bien<br>");
    document.write("Correctas: "+ c +"<br>"  );
    document.write("Incorrectas: "+ i +"<br>"  );
}else if(c < i){
    document.write(nombre + ", Vuelve a intentarlo<br>");
    document.write("Correctas: "+ c +"<br>"  );
    document.write("Incorrectas: "+ i +"<br>"  );
}else{
    document.write(nombre + ", Puedes hacerlo mejor<br>");
    document.write("Correctas: "+ c +"<br>"  );
    document.write("Incorrectas: "+ i +"<br>"  );
}