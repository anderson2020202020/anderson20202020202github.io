function formulario(){
    const name=document.getElementById("nombre").value;
    const email=document.getElementById("email").value;
    const numero=document.getElementById("numero").value;
    if(nombre=="" || email=="" || numero==""){
        alert("por favor completar todos los campos!");
        
    }else{
        alert("formulario enviado correctamente");
    }
}

