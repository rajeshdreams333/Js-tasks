let form=document.getElementById('form');
form.addEventListener("focus",function(event){
    event.target.style.background="orange"
},true);

form.addEventListener("blur",function(event){
    event.target.style.background="";
},true);