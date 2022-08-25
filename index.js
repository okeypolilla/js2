
class CEmpleado {
    constructor(nombre, fecha,salario,direccion) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.salario = salario;
        this.direccion = direccion;
    }

    get n(){
        return this.nombre()
     }

     nombre() {
    
        return this.nombre 
    }

    get f(){
        return this.fecha()
     }


     fecha() {
    
        return this.anoI
    }

    get s(){
        return this.salario()
     }


     salario() {
    
        return this.salario 
    }
    get d(){
        return this.direccion()
     }


     direccion() {
    
        return this.direccion 
    }
}




document.getElementById('boton1').onclick = function(){
    let  nombre1= document.getElementById('nombre1').value; 
    let fecha1= document.getElementById('f1').value;
    let salario1= document.getElementById('salario1').value; 
    let direccion1= document.getElementById('direccion1').value; 

    const E1 = new CEmpleado(nombre1,fecha1,salario1,direccion1);
    alert(Object.values(E1));
}

document.getElementById('boton2').onclick = function(){
    let  nombre2= document.getElementById('nombre2').value; 
    let fecha2= document.getElementById('f2').value;
    let salario2= document.getElementById('salario2').value; 
    let direccion2= document.getElementById('direccion2').value; 

    const E2 = new CEmpleado(nombre2,fecha2,salario2,direccion2);
    alert(Object.values(E2));
}

document.getElementById('boton3').onclick = function(){
    let  nombre3= document.getElementById('nombre3').value; 
    let fecha3= document.getElementById('f3').value;
    let salario3= document.getElementById('salario3').value; 
    let direccion3= document.getElementById('direccion3').value; 

    const E3 = new CEmpleado(nombre3,fecha3,salario3,direccion3);
   alert(Object.values(E3));


}