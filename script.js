const email = document.querySelector("#email");
const erroMsg = document.querySelector(".error-msg");
const submit = document.querySelector(".submit");

function validEmail(mail) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(mail);
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!email.value || !validEmail(email.value)) {
        email.classList.add("error");
        erroMsg.classList.remove("hidden");
        email.setAttribute("placeholder", "example@email.com");
    } else {
        email.value = "";
        erroMsg.classList.add("hidden");
        email.classList.remove("error");
        alert("You will be notified when the services starts!")
    }
});
