function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

    let password1 = document.getElementById('password1').value
    let password2 = document.getElementById('password2').value
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let terminos = document.getElementById('terminos')
    let email = document.getElementById('email').value


function campos (){
    if (!password1 || !password2 || !nombre || !apellido || !email) {
        return false
    } else {
        return true
    }
}

console.log(campos(),"campos")

function caracteres(){
    if ((password1 === password2) && (password1.length >= 6)){
        return showAlertSuccess
    } else {
        return showAlertError
    }
}

console.log (caracteres(),"caracteres")

function checkbox (){
    if (terminos.checked){
        return true
    } else {
        return false
    }
}

console.log(checkbox(), "checkbox")

function validate(){
    if (campos() && checkbox()) {
        caracteres()
    }
}

document.getElementById("regBtn").addEventListener("click", validate())