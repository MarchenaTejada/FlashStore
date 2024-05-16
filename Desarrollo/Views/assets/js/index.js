let user = document.getElementById("user")
let pass = document.getElementById("password")
let form = document.getElementById("form")
let parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault();
    if (isValidEmail(user.value)){
        window.location.href = 'index.html';
    }
})

user.addEventListener("blur", () => {
    let userText = user.value;
    if (!isValidEmail(userText)) {
        parrafo.innerHTML = 'Por favor, introduce un correo electrónico válido.';
    }else{
        parrafo.innerHTML = ''
    }
})

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}