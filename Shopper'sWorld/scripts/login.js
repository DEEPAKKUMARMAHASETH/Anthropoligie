let resdata = JSON.parse(localStorage.getItem("userData")) || [];
let showemail = document.getElementById("showemail");

let form = document.getElementById("forms");
console.log(resdata)

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let registerd = false;
    let title = "";
    for(let i =0; i<resdata.length; i++){
        if(resdata[i].email == form.email.value && resdata[i].pwd == form.psw.value){
            registerd = true;
            title = resdata[i].name;
            break;
        }
    }

    if(registerd){
        // alert("welcome " + title);
       localStorage.setItem("name",JSON.stringify(title));
        window.location="index.html";
    }else{
        alert("You're not Registered Kindly Register First");
    }
})