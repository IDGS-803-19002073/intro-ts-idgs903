class Persona5{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad
    }
    imprimir(){
        console.log(`nombre: ${this.nombre} y edad:  ${this.edad}`)
    }
}

class Empleado extends Persona5{
    private sueldo:number;
    constructor(nombre:string,edad:number,sueldo:number){
        super(nombre,edad)
        this.sueldo=sueldo
    }
    imprimir() {
        super.imprimir();
        console.log(`sueldo: ${this.sueldo}`)
    }
}