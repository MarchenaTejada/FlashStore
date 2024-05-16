let user = document.getElementById("user")
let pass = document.getElementById("password")
let form = document.getElementById("form")
let parrafo = document.getElementById("warning")
/*
form.addEventListener("submit", e=>{
    e.preventDefault()
    if (user.value == "admin" && pass.value == "admin"){
        window.location.href = 'inicio.html';
    }else{
        parrafo.innerHTML = 'Usuario no encontrado'
    }
})*/

form.addEventListener("submit", e=>{
    e.preventDefault()
        window.location.href = 'index.html';
});

user.addEventListener("blur", () => {
    let userText = document.getElementById("user").value;
    if (!isValidEmail(userText)) {
        parrafo.innerHTML = 'Por favor, introduce un correo electrónico válido.';
        console.log(userText)
    }else{
        parrafo.innerHTML = ''
    }
})

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}