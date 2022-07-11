let form = document.querySelector('form');
let user = JSON.parse(localStorage.getItem("data")) || [];
form.addEventListener("submit",function(){


   let data= {

    email :from.email.value,
    pass : form.password.value,
   }
   if(data(data.email,data.pass)===user(data.email,data.pass)){
    alert("Login successful!")
   }
   else if (data(data.pass)==user(data.pass)){
alert("Wrong credentials");
}
else{
    alert("User doesn't exist");
    window.location.href="sigup.html";
}
})