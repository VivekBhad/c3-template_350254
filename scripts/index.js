// console.log("hello")
function query(){
let search = document.querySelector('#query').value;

let url = ` https://masai-mock-api.herokuapp.com/hotels/search?city=${search}`;


fetch(url)
.then(res=>{
    return res.json();

})
.then(data =>{
    console.log(data);
}).catch(err =>{
    return err
    // console.log(err);
})

document.querySelector("#hotels-list").innerHTML=null;
data.map(function(el)
{

    let div= document.createElement("div");
    
    let  img = document.createElement('img');
    let name = document.createElement('p')
    let city = document.createElement('p');
    let price = document.createElement('p');
    let ac_nonac = document.createElement('p');
    let rating = document.createElement('p');
    let btn= document.createElement('button');
    btn.addEventListener("click",function(){
        booking()
    })

img.src=el.images;
name.innerText=el.Title;
city.innerText=el.city;
price.innerText=el.Price;
ac_nonac.innerText=el.Ac;
rating.innerText=el.Rating;

    div.append(img,name,city,price,ac_nonac,rating,btn);
    document.querySelector("#hotels-list").append(div);

})
}


let arr = [];
function showchek(el){
    arr.push(el)

    localStorage.setItem("hotal_list",JSON.stringify(arr))
    window.location.href="Chekout.html";
}