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
let Administ = document.getElementById("Administ");
let thinks = document.getElementById("thinks");
let DVD = document.getElementById("DVD");
let rahmas = document.getElementById("rahmas");
let pageps = document.getElementById("pageps");
let apss = document.getElementById("apss");
let Stes = document.getElementById("Stes");
let coolse = document.getElementById("coolse");
let msre = document.getElementById("msre");
let lemonas = document.getElementById("lemonas");
let BlackT = document.getElementById("BlackT");
let Mints = document.getElementById("Mints");
let Ica = document.getElementById("Ica");
let Fata = document.getElementById("Fata");
let Panska = document.getElementById("Panska");
let whites = document.getElementById("whites");
let pap = document.getElementById("pap");
let Pansa = document.getElementById("Pansa");
let Scroll = document.getElementById("Scroll");
let Memos = document.getElementById("Memos");
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
        wq.innerHTML ="ساخن";
        text.innerHTML =" بارد"; 
        ss.innerHTML =" حلو";
        Fox.innerHTML="$35 قهوة عربية ";
        SD.innerHTML="$10 قهوة برازيلية";
        Foot.innerHTML="$11 قهوة فرنسية";
        books.innerHTML="$18 قهوة بقرفة";
        Game.innerHTML="$23 قهوة بجنزبيل";
        Administ.innerHTML="$15 شاي احمر";
        thinks.innerHTML="$20 شاي اخضر";
        DVD.innerHTML=" $10 شاي مثلج";
        rahmas.innerHTML = "$7 شاي بنعناع";
        pageps.innerHTML="$5 عصير بيبسي";
        apss.innerHTML="$6 عصير كوكا كولا" ;
        Stes.innerHTML="$23 عصير البرتقال ";
        coolse.innerHTML ="$10 عصير اليمون";
        msre.innerHTML="$8 عصير الفراولة";
        lemonas.innerHTML="$9 عصير سفن اب";
        BlackT.innerHTML ="$فانتا 10";
        Mints.innerHTML="$10 عصير التفاح  ";
        Ica.innerHTML=" $11 عصير الموز   ";
        Fata.innerHTML="$15 كنافة نابلس";
        Panska.innerHTML="  $12 كنافة ملتوية";
        whites.innerHTML="  $12  كنافة بكريمة";
        pap.innerHTML  =" $18 كنافة بجبنة";
        Pansa.innerHTML="$17 كنافة ملتوية";
        Scroll.innerHTML="$25 بقلاوة بالفستق";
        Memos.innerHTML="$13 بانكا";
        ZemZ.innerHTML=" $24 كيك بشوكلاتة";
        Actives.innerHTML="$12 كيك بفراولة";
    }else if(getlanugage == "english"){
        title.innerHTML="Shihab";
        title_text.innerHTML ="Home"; 
        title_text1.innerHTML="About My";  
        title_text2.innerHTML="Servers";
        title_text3.innerHTML="Menu";
        title_text4.innerHTML="ViewImage";
        mines.innerHTML="language";
        wq.innerHTML ="hart";
        text.innerHTML =" coll"; 
        ss.innerHTML = "Sweet";
        Fox.innerHTML="Arabic Coffe $35";
        SD.innerHTML="Brazilian Coffe $10";
        Foot.innerHTML="Freanch Coffe $11";
        books.innerHTML="cinnamon Coffe $18";
        Game.innerHTML="Ginger Coffe $23";
        Administ.innerHTML="Red Tea $15";
        thinks.innerHTML="Green Tea $20";
        DVD.innerHTML="Ica Tea $10";
        rahmas.innerHTML ="Mint Tea $7";
        pageps.innerHTML="pepse 5$";
        apss.innerHTML="Coca Cola 6$";
        Stes.innerHTML="Orange juice 23$";
        coolse.innerHTML ="Lemon juice $10";
        msre.innerHTML="Strawberry juice $8";
        lemonas.innerHTML="SevenUp $9";
        BlackT.innerHTML ="Fant $10";
        Mints.innerHTML="Apple juice 10$";
        Ica.innerHTML="banana juice 11$";
        Fata.innerHTML="Nabuls Kunafa 15$";
        Panska.innerHTML="Kunafa twisted $12";
        whites.innerHTML ="Kunafa crams $12";
        pap.innerHTML   ="Kunafa cheese $18";
        Pansa.innerHTML="Kunafa twisted $17";
        Scroll.innerHTML="Baklava pistachios $25";
        Memos.innerHTML="Panka $13";
        ZemZ.innerHTML="Chocolate cake $24";
        Actives.innerHTML="Strawberry cake $12";
    }
}