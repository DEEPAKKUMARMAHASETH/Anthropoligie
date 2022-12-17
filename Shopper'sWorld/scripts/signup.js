let form = document.getElementById("forms");
let data = JSON.parse(localStorage.getItem("userData")) || [];
let arr = {};
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let isalready = false;
    for(let i =0; i<data.length; i++){
        if(data[i].email == form.email.value){
           isalready= true;
        }
    }

    if(isalready){
        alert("Already Registered");
    }else{
        let obj ={
            name: form.name.value,
            email: form.email.value,
            pwd: form.psw.value,
            pwd2: form.psw_repeat.value
        }
        if(obj.pwd !== obj.pwd2){
            alert("Password not matching");
        }else{

            data.push(obj);
            localStorage.setItem("userData",JSON.stringify(data));
            console.log(data);
            alert("User Registered");
            window.location = "login.html";
        }
    }
});