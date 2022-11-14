const pswrdInput = document.getElementById("pswrd-input");

const eyeImg = document.getElementById("eye");

const eyeText = document.getElementById("eyeText")

function pswrd() {
    if (pswrdInput.getAttribute("type") == "password") {
        pswrdInput.setAttribute("type", "text")
        eyeImg.setAttribute("src", "/assets/eye-closed.svg")
        eyeText.innerHTML = "hide"
    } else if (pswrdInput.getAttribute("type") == "text") {
        pswrdInput.setAttribute("type", "password")
        eyeImg.setAttribute("src", "/assets/eye-open.svg")
        eyeText.innerHTML = "show"
    }
}