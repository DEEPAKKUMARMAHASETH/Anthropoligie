let resdata = JSON.parse(localStorage.getItem("userData")) || [];

let form = document.getElementById("form");
console.log(resdata)

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let registerd = false;
    for(let i =0; i<resdata.length; i++){
        if(resdata[i].email == form.email.value && resdata[i].pwd == form.psw.value){
            registerd = true;
        }
    }

    if(registerd){
        alert("welcome " + form.email.value);
    }else{
        alert("You're not Registered Kindly Register First");
    }
})