export class Todo {
    public id:number;     
    constructor(public texto:string, public completado : boolean = false) {
        this.id = Math.random();
        this.texto = this.texto.charAt(0).toUpperCase() + this.texto.slice(1);        
    }
}