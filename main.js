//const ciudades = ["Pachuca","Toluca","Reynosa","Guadalajara"];

let continuar= "";
let pregunta1= "";
let respuesta1= "";
let calif = Number('');
const calificaciones = [];
let total = Number('');
let promedio = Number('');
let sueldo = Number('');
let aumento = Number('');
let grantotal = Number('');

function calificacion(){
    respuesta1 = comenzar();
    if(respuesta1 == 1){    
        do{
            calif = Number(prompt(`Captura la calificación: `));
            if(calif >= 0 && calif <= 10 && calif != ""){
                calificaciones.push(calif);
                total = total + calif;
            }else{
                console.warn("Ingrese una calificación validad")
            }
      
            continuar = prompt("¿Desea guardar un nuevo registro (1 - Sí)?: ");
        
        }while(continuar == "1")
        let num = calificaciones.push();
        console.log("Las calificaciones son: " + num + ", y son : " + calificaciones);
        promedio = total / num;
        console.log("El promedio es: " + promedio);
        if(promedio < 7){
            console.log("Profesor mejore el desempeño");
            }else if(promedio >= 7 && promedio <= 9){
                console.log("Profesor ganara un televisor");
                }else{
                    console.log("Profesor se ganará un bono de 20%");
                    sueldo = prompt("¿Cual es su sueldo?: ");
                    aumento = sueldo * 0.2;
                    grantotal = parseFloat(sueldo) + parseFloat(aumento); 
                    console.log("El sueldo total es: " + grantotal);
                    }
    }else{
        console.log("Decidio no realizar la captura de la calificación");
    }
}

function comenzar(){
    pregunta1 = Number(prompt(`Quiere iniciar con la captura de las califiaciones? (1 - Sí):`));
    return pregunta1;
}
