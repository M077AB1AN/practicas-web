var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var Sexo=document.getElementById("Sexo");
var chkEst=document.getElementById("chkEst");


function validarNombre(){
    if (txtNom.value=="" || txtNom.value==null) {
        error.style.display="block";
        error.innerHTML+="<li>porfavor ingrese sus nombre</li>";
    }else{
        error.style.display="none";
    }
}

function validarApellido(){
    if (txtApe.value=="" || txtApe.value==null) {
        error.style.display="block";
        error.innerHTML+="<li>porfavor ingrese sus Apellido</li>";
    }else{
        error.style.display="none";
    }
}

function validarCorreo(){
    if (txtCor.value=="" || txtCor.value==null) {
        error.style.display="block";
        error.innerHTML+="<li>porfavor ingrese sus Correo </li>";
    }else{
        error.style.display="none";
    }
    
    function validarsexo(){
        if (Sexo.value=="" || Sexo.value==null) {
            error.style.display="block";
            error.innerHTML+="<li>porfavor ingrese sus nombre</li>";
        }else{
            error.style.display="none";
        }
    }
    function validarNombre(){
        if (txtNom.value=="" || txtNom.value==null) {
            error.style.display="block";
            error.innerHTML+="<li>porfavor ingrese sus nombre</li>";
        }else{
            error.style.display="none";
        }
    }
}
function validar(){
    validarNombre();
    validarApellido();
    validarCorreo();
}






//Creamos una función Registrar
function Registrar(){
    //reiniciamos el estilo error
    error.innerHTML="";
    if(txtNom.value==""  txtNom.value==null){
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(txtApe.value==""  txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingresa tu correo");
        LlamarClase("Por favor selecciona un sexo");
        LlamarClase("Por favor selecciona el estado");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LlamarClase("Por favor seleccione un sexo");
        LlamarClase("Por favor selecciona el estado");
        rbMas.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Por favor seleccione el estado");
        chkEst.focus();
    }else{
        alert("Se registró correctamente");
        error.innerHTML="";
    }
}