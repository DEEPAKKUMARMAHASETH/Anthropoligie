let productsbody = document.getElementById("products");
let total = document.getElementById("total");

let filter = document.getElementById("filter");
let filterdata = [];

let url = "https://63980acf77359127a045ad4d.mockapi.io/products";

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(actualData => {
    showData(actualData);
    filterdata = actualData;
})
.catch(error => console.log(error));




filter.addEventListener("change",() =>{
    console.log(filter.value);
    if(filter.value == "price"){
        let data = filterdata.sort((a,b)=> (a.price-b.price));
        showData(data);
    }else if(filter.value == "Price: High to Low"){
        let data = filterdata.sort((a,b)=> (b.price-a.price));
        showData(data);
    }else if(filter.value == "A-Z"){
        let data = filterdata.sort((a,b)=> (a.title.localeCompare(b.title)));
        showData(data);
    }else if(filter.value == "Z-A"){
        let data = filterdata.sort((a,b)=> (b.title.localeCompare(a.title)));
        showData(data);
    }else{
        showData(filterdata);
    }
})

function showData(data){
    productsbody.innerHTML = null;

    data.forEach(element => {
        total.textContent = data.length;
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