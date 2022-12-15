let productsbody = document.getElementById("products");
let total = document.getElementById("total");

let url = "https://63980acf77359127a045ad4d.mockapi.io/products";
let url2 = "https://fakestoreapi.com/products";
fetch(url2)
.then(res => res.json())
.then(actualData =>  showData(actualData))
.catch(error => console.log(error));

function showData(data){
    productsbody.innerHTML = null;

    data.forEach(element => {
        total.textContent = data.length;
        console.log(data);
        let div = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("a");
        let price = document.createElement("p");
        price.setAttribute("class","price");
        let desc = document.createElement("p");
        let type = document.createElement("p");
        console.log(element.name)
        img.setAttribute("src", element.image);
        name.textContent = element.title;
        price.textContent = "$ "+element.price;
        desc.textContent = "Lorem ipsum dolor sit amet.";
        type.textContent = element.type;




        div.append(img,name,price,type,desc);
        productsbody.append(div);
    });
}