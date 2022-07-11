let showdata = JSON.parse(localStorage.getItem("data"))
document.querySelector('#hotel_details').innerText=showdata;
let hotalapp = JSON.parse(localStorage.getItem("data"))
let img = document.createEvent('img');
img.src=hotalapp[0].img;
let p = document.createElement('h3');
p.innerText=hotalapp[0].name;
document.querySelector("#hotel_details").append(img,p)

function chekout(){
    let inp = document.querySelector("#checkout").value;
    let 
}

