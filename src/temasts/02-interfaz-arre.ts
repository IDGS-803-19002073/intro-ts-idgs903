interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
}

const alumno:Alumno={
    nombre:"Roberto",
    matricula:19002073,
    email:"dQ6KL@example.com",
}
//console.log(alumno)

let mascotas=['perro','gato','perico'];
mascotas[1]='shhhh';
mascotas.push('sssss');
let tem:(number|string)[]=[]
tem.push('nombre')
tem.push(224)

//console.log(tem)
//console.log(mascotas);
//console.table(mascotas);