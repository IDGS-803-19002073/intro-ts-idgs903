function suma():void{
console.log(2+7)
}

//suma();

function suma2(num1:number,num2:number):void{
    console.log(num1+num2)
}
//suma2(2,3)

function suma3(num1:number,num2:number):number{
    return num1+num2
}
//console.log(suma3(10,3))

const suma4=(a:number,b:number):string=>{
    return `${a+b}`
}

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad():void;
}
function calcular(mascota:Mascota,x:number):void{
    mascota.edad+=x
    console.log(mascota)
}
const nuevaMascota:Mascota={
    nombre:'Juan',
    edad:3,
    mostrarEdad(){
        console.log('La edad es : '+this.edad)
    }
}

calcular(nuevaMascota,5)
nuevaMascota.mostrarEdad()

function multiplicar(num1:number,num2:number,num3=3):number{
    let tem= num1* num3;
    return tem
}
//console.log(multiplicar(3,3))

//funciones anonimas
const funcSumar=function(valor1:number,valor2:number):number{
    return valor1+valor2
}
console.log(funcSumar(3,3))

//funcion con paraqetros opcionales
const calcular1=function(valor1:number,valor2:number,valor3?:number):number{
    if(valor3){
        return valor1+valor2+valor3
    }else{
          return valor1+valor2
    }
}
console.log(calcular1(3,3))
console.log(calcular1(3,3,5))


const calcular2=function(...valores:number[]):number{
let suma=0;
for(let i=0;i<valores.length;i++){
    suma+=valores[i]
}
return suma;
}
console.log(calcular2(3,3))
console.log(calcular2(3,3,5,6,7))


