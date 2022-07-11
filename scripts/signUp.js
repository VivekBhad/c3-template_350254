
let form = document.querySelector("form");
form.addEventListener('submit',function(){

    let data ={
        name :form.name.value,
        email: form.emai.value,
        pass : form.password.value,
    }
    data.push(user);
    let user = JSON.parse(localStorage.getItem("data")) || [];
    })