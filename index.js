const DOM = {
    nameRegister: document.querySelector("#name-register"),
    passwordRegister: document.querySelector("#password-register"),
    emailRegister: document.querySelector("#email-register"),
    emailLogin: document.querySelector("#email-login"),
    passwordLogin: document.querySelector("#password-login"),
    registerButton: document.querySelector("#register"),
    loginButton: document.querySelector("#login"),
    registerErrorMessage: document.querySelector("#registerErrorMessage"),
    loginErrorMessage: document.querySelector("#loginErrorMessage"),
    registerDiv: document.querySelector("#register-div"),
    moveToRegister: document.querySelector("#move-to-register"),
    moveToLogin: document.querySelector("#move-to-login"),
    loginDiv: document.querySelector("#login-div"),
    moveToHomePage: document.querySelector("#move-to-homePage"),
    homePageDiv: document.querySelector("#homePage-div"),
    appointmentDiv:document.querySelector("#appointment-div"),
    moveToAppointment:document.querySelector("#move-to-appointment"),
    
}

const users = JSON.parse(localStorage.getItem("users")) || []

function register({
    email,
    password,
    name
}) {

    users.push({
        id: Math.random() * 9999,
        email,
        password,
        name
    })
    localStorage.setItem("users",JSON.stringify(users))
}
DOM.moveToHomePage.addEventListener("click", ()=>{
    DOM.homePageDiv.classList.remove("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.appointmentDiv.classList.add("hide")
})

DOM.moveToAppointment.addEventListener("click", ()=>{
    DOM.appointmentDiv.classList.remove("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
})
DOM.moveToRegister.addEventListener("click", ()=>{
    DOM.registerDiv.classList.remove("hide")
    DOM.loginDiv.classList.add("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.appointmentDiv.classList.add("hide")

})

DOM.moveToLogin.addEventListener("click", ()=>{
    DOM.loginDiv.classList.remove("hide")
    DOM.homePageDiv.classList.add("hide")
    DOM.registerDiv.classList.add("hide")
    DOM.appointmentDiv.classList.add("hide")



})


function checkIfUserExist(email) {
    return users.find((user) => user.email === email)
}

DOM.registerButton.addEventListener("click", () => {
    const {
        nameRegister,
        emailRegister,
        passwordRegister,
        registerErrorMessage
    } = DOM
    if (!nameRegister.value || !emailRegister.value || !passwordRegister.value) {
        registerErrorMessage.innerHTML = "please enter all fields"
        return
    }
    const isExists = checkIfUserExist(DOM.emailRegister.value)
    if (isExists) {
        registerErrorMessage.innerHTML = "email is already in use"
        return
    }
    registerErrorMessage.innerHTML = ""

    register({
        email: emailRegister.value,
        password: passwordRegister.value,
        name: nameRegister.value
    })

})
DOM.loginButton.addEventListener("click", () => {
    console.log("tet");
    const {
        emailLogin,
        passwordLogin,
        loginErrorMessage
    } = DOM
    if (!emailLogin.value || !passwordLogin.value) {
        loginErrorMessage.innerHTML = "please enter all fields"
        return
    }
    const isExists = login({
        email: emailLogin.value,
        password: passwordLogin.value
    })
    console.log(isExists)
})

function login({
    email,
    password
}) {
    return users.find((user) => user.email === email && user.password === password)
}