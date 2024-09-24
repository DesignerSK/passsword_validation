const userInputPolje = document.querySelector(".container .password input");
const eyeOtvoreno = document.querySelector(".fa-eye");
const eyeNevidljivo = document.querySelector(".fa-eye-slash");

const minLaenge = document.querySelector(".password-laenge");
const lowercase = document.querySelector(".lowercase");
const uppercase = document.querySelector(".uppercase");
const dieNummer = document.querySelector(".nummer");
const sonderZeichen = document.querySelector(".sonder-zeichen");

let passwordToggle = () => {
    if(userInputPolje.type == "password"){
        userInputPolje.type = "text";
        eyeOtvoreno.style.display = "none";
        eyeNevidljivo.style.display = "block";
    } else {
        userInputPolje.type = "password";
        eyeOtvoreno.style.display = "block";
        eyeNevidljivo.style.display = "none";
    }
}

let passwordUberprufen = () => {
    let passwordInputValue = userInputPolje.value;
    const passLaenge = new RegExp("(?=.{8,})");
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const nummer = new RegExp("(?=.*[0-9])");
    const sonder = new RegExp("(?=.[!@#$%&])");

    if(passLaenge.test(passwordInputValue)){
        minLaenge.classList.add("valid");
    }else{
        minLaenge.classList.remove("valid");
    }

    if(lower.test(passwordInputValue)){
        lowercase.classList.add("valid");
    }else{
        lowercase.classList.remove("valid");
    }

    if(upper.test(passwordInputValue)){
        uppercase.classList.add("valid");
    }else{
        uppercase.classList.remove("valid");
    }

    if(nummer.test(passwordInputValue)){
        dieNummer.classList.add("valid");
    }else{
        dieNummer.classList.remove("valid");
    }

    if(sonder.test(passwordInputValue)){
        sonderZeichen.classList.add("valid");
    }else{
        sonderZeichen.classList.remove("valid");
    }
}

userInputPolje.addEventListener("input", passwordUberprufen);
eyeOtvoreno.addEventListener("click", passwordToggle);
eyeNevidljivo.addEventListener("click", passwordToggle);