let arabic = document.getElementById("arabic");
let english = document.getElementById("englich");
let title =  document.getElementById("title");

arabic.onclick = ()=>{
    setlanugage("arabic");
    localStorage.setItem("lang",arabic);
}
english.onclick = ()=>{
    setlanugage("english");
    localStorage.setItem("lang",english);
}

onload = ()=>{
    setlanugage(localStorage.getItem("lang"));
};

function setlanugage(getlanugage){
    if(getlanugage == "arabic"){
        title.innerHTML="شهاب";
    }else if(getlanugage == "english"){
        title.innerHTML="Shihab";
    }
}