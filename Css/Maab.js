let arabic = document.getElementById("arabic");
let english = document.getElementById("englich");
let title =  document.getElementById("title");
let title_text = document.getElementById("title_text");
let title_text1 = document.getElementById("title_text1");
let title_text2 = document.getElementById("title_text2");
let title_text3 = document.getElementById("title_text3");
let title_text4 = document.getElementById("title_text4");
let mines =document.getElementById("mines");
let wq = document.getElementById("wq");
let text = document.getElementById("text");
let ss = document.getElementById("ss");
let Fox = document.getElementById("Fox");
let SD = document.getElementById("SD");
let Foot= document.getElementById("Foot");
let books = document.getElementById("books");
let Game = document.getElementById("Game");
let thanks = document.getElementById("thanks");
let Kreems = document.getElementById("Kreems");
let DVD = document.getElementById("DVD");
let rahmas = document.getElementById("rahmas");
let Mints = document.getElementById("Mints");
let Ica = document.getElementById("Ica");
let coolse = document.getElementById("coolse");
let Stes = document.getElementById("Stes");
let msre = document.getElementById("msre");
let Lemon = document.getElementById("Lemon");
let BlackT = document.getElementById("BlackT");
let aps = document.getElementById("aps");
let cocal = document.getElementById("cocal");
let Fata = document.getElementById("Fata");
let Seves = document.getElementById("Seves");
let pap = document.getElementById("pap");
let whites = document.getElementById("whites");
let nabule = document.getElementById("nabule");
let Panska = document.getElementById("Panska");
let Memoso = document.getElementById("Memoso");
let ZemZ = document.getElementById("ZemZ");
let Actives = document.getElementById("Actives");

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
        title_text.innerHTML ="الصفحة الريئسية"; 
        title_text1.innerHTML="من نحن";  
        title_text2.innerHTML="خدمتنا";
        title_text3.innerHTML="القائمة";
        title_text4.innerHTML="معرضنا";
        mines.innerHTML="اللغة";
        wq.innerHTML ="شهاب كوفي";
        text.innerHTML ="مرحبا بكم في معرض الصور"; 
        Fox.innerHTML="قهوة عربية";
        SD.innerHTML="قهوة برازيلية";
        Foot.innerHTML="قهوة فرنسية";
        books.innerHTML="قهوة بقرفة";
        Game.innerHTML="قهوة بجنزبيل";
        thanks.innerHTML="شاي احمر";
        Kreems.innerHTML="شاي اخضر";
        DVD.innerHTML="شاي مثلج";
        rahmas.innerHTML = " شاي بنعناع";
        Mints.innerHTML ="عصير التفاح";
        Ica.innerHTML="عصير الموز";
        coolse.innerHTML =" عصير اليمون";
        Stes.innerHTML =" عصير البرتقال";
        msre.innerHTML="عصير الفراولة";
        Lemon.innerHTML="عصير سفن اب";
        BlackT.innerHTML="عصير بيبسي";
        aps.innerHTML="عصير كوكا كولا";
        cocal.innerHTML="فانتا";
        Fata.innerHTML="بقلاوة بالفستق";
        Seves.innerHTML="بقلاوة بالجوز";
        pap.innerHTML  ="كنافة بجبنة";
        whites.innerHTML =" كنافة بكريمة";
        nabule.innerHTML="كنافة نابلس";
        Panska.innerHTML="كنافة ملتوية";
        Memoso.innerHTML="بانكا";
        ZemZ.innerHTML="  كيك بشوكلاتة";
        Actives.innerHTML=" كيك بفراولة";
        
    }else if(getlanugage == "english"){
        title.innerHTML="Shihab";
        title_text.innerHTML ="Home"; 
        title_text1.innerHTML="About My";  
        title_text2.innerHTML="Servers";
        title_text3.innerHTML="Menu";
        title_text4.innerHTML="ViewImage";
        mines.innerHTML="language";
        wq.innerHTML ="Shihab Coffe";
        text.innerHTML ="Welcome To Our product Gallery"; 
        ss.innerHTML = "Viwe Image";
        Fox.innerHTML="Arabic Coffe";
        SD.innerHTML="Brazilian Coffe";
        Foot.innerHTML="Freanch Coffe";
        books.innerHTML="cinnamon Coffe";
        Game.innerHTML="Ginger Coffe";
        thanks.innerHTML="Red Tea";
        Kreems.innerHTML="Green Tea";
        DVD.innerHTML="Ica Tea";
        rahmas.innerHTML ="Mint Tea";
        Mints.innerHTML="Apple juice";
        Ica.innerHTML=" Banana juice";
        coolse.innerHTML ="Lemon juice";
        Stes.innerHTML ="Orang juice";
        msre.innerHTML="Strawberry juice";
        Lemon.innerHTML="SevenUp";
        BlackT.innerHTML="Pepse";
        aps.innerHTML="cocal cola";
        cocal.innerHTML ="Fant"; 
        Fata.innerHTML="Baklava white pistachios";
        Seves.innerHTML="Baklava white walnuts";
        pap.innerHTML   ="Kunafa white cheese";
        whites.innerHTML ="Kunafa white crams";
        nabule.innerHTML="Kunafa white nabuls";
        Panska.innerHTML="Kunafa white twisted";
        Memoso.innerHTML="Panka";
        ZemZ.innerHTML="Chocolate cake";
        Actives.innerHTML="Strawberry cake";
    }
}