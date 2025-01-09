let arabic = document.getElementById("arabic");
let english = document.getElementById("englich");
let title =  document.getElementById("title");
let title_text = document.getElementById("title_text");
let title_text1 = document.getElementById("title_text1");
let title_text2 = document.getElementById("title_text2");
let title_text3 = document.getElementById("title_text3");
let title_text4 = document.getElementById("title_text4");
let capslooks = document.getElementById("capslooks");
let wq = document.getElementById("wq");
let text = document.getElementById("text");
let ss = document.getElementById("ss");
let ee = document.getElementById("ee");
let wqs = document.getElementById("wqs");
let tt = document.getElementById("tt");
let aa = document.getElementById("aa");
let bb = document.getElementById("bb");
let bbs = document.getElementById("bbs");
let room = document.getElementById("room");
let dog = document.getElementById("dog");
let uu = document.getElementById("uu");
let sn = document.getElementById("sn");
let viwe = document.getElementById("viwe");
let hrts  = document.getElementById("hrts");
let coole  = document.getElementById("coole");
let sweetes  = document.getElementById("sweetes");
let more = document.getElementById("more");
let Saudi = document.getElementById("Saudi");
let BlackTiger = document.getElementById("BlackTiger");
let nks = document.getElementById("nks");
let apps = document.getElementById("apps");
let banana = document.getElementById("banana");
let Sevens = document.getElementById("Sevens");
let bookes   = document.getElementById("bookes  ");
let orange = document.getElementById("orange");
let tab = document.getElementById("tab");
let beta = document.getElementById("beta");
let use= document.getElementById("use");

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
        title.innerHTML="شهاب ";
        title_text.innerHTML="الصفحة الريئسية"; 
        title_text1.innerHTML ="من نحن";  
        title_text2.innerHTML ="خدمتنا";
        title_text3.innerHTML ="القائمة";
        title_text4.innerHTML ="معرضنا";
        capslooks.innerHTML="اللغة";
        wq.innerHTML ="شهاب كوفي";
        text.innerHTML =" نحن لسن الوحيدين ولكن الافضل";
        ss.innerHTML ="اعادة التشغيل ";
        ee.innerHTML =" من نحن ";
        wqs.innerHTML ="شهاب كوفي";
        tt.innerHTML="هو شركة مقهي سعودي بدات عام 1991م في منطقة الرياض عل يد ثلأثة شركاء وهم مدرس اللغة العربية محمدعلي,ومدرس التاريخ(رياض عبدالعزيز)والكاتب(عمر سلطان).وتملك الشركة نوفمبر2021 اكثر من 16,226 فرعا في 30 دولة حول العالم منها 10,000 داخل السعودية واكثر من 155,000 موظف في جميع فروعها";
        aa.innerHTML="خدمتنا";
        bb .innerHTML="غرفة انترنت";
        bbs.innerHTML="يوجد انترنت متوفر علي مدار اليوم";
       room.innerHTML="غرفة اجتماعات";
       dog.innerHTML="  متوفر علي مدار اليوم";
       uu.innerHTML="غرفة احتفالات";
       sn.innerHTML="  متوفر علي مدار اليوم";
       viwe.innerHTML="معرضنا";
       hrts.innerHTML = "ساخن";
       coole.innerHTML ="بارد";
       sweetes.innerHTML ="حلو";
       more.innerHTML="اكثر";
       Saudi.innerHTML="شركة شهاب كوفي";
       BlackTiger .innerHTML="صمم بواسطة شركة بلاك تايقر";
       nks.innerHTML="روابط";
       apps.innerHTML="الصفحة الريئسية";
       banana.innerHTML ="من نحن"; 
       Sevens.innerHTML ="خدمتنا";
       bookes.innerHTML   ="القائمة";
       orange.innerHTML ="معرضنا";
       tab.innerHTML="تواصل مع الادارة";
       beta.innerHTML="الان عبر الايميل الخاص بنا يمكنك التواصل معنا والاستفسار";
       use.innerHTML="شهاب@جميل.كوم";
    }else if(getlanugage == "english"){
        title.innerHTML="Shihab";
        title_text.innerHTML ="Home"; 
        title_text1.innerHTML="About My";  
        title_text2.innerHTML="Servers";
        title_text3.innerHTML="Menu";
        title_text4.innerHTML="ViewImage";
        capslooks.innerHTML="language";
        wq.innerHTML ="Shihab Coffe";
        text.innerHTML ="We hope you will visit us in the shop"; 
        ss.innerHTML = "Register Now";
        ee.innerHTML ="About Us";
        wqs.innerHTML ="ShihabCoffe";
        tt.innerHTML="is a Saudi coffee company, started in 1991 in the Riyadh region by three partners,Arabic language teacher Muhammad Ali, history teacher (Riyad Abdulaziz) and writer (Omar Sultan)";
        aa.innerHTML="Servers";
        bb .innerHTML="Internet room";
        bbs.innerHTML="We have free internet around the clock";
        room .innerHTML="Meeting room";
        dog.innerHTML="We have free  around the Day";
        uu .innerHTML="Brithday room";
        sn.innerHTML="We have free around the Colcke";
        viwe.innerHTML="ViweImage";
        hrts.innerHTML ="hrat";
       coole.innerHTML ="cool";
       sweetes.innerHTML ="sweet";
       more.innerHTML="More";
       Saudi.innerHTML="Shihab is a Saudi coffee company";
       BlackTiger .innerHTML="Create By BlackTiger";
       apps.innerHTML="links";
       apps.innerHTML ="Home"; 
       banana.innerHTML="About My"; 
       Sevens.innerHTML="Servers";
       bookes.innerHTML   ="Menu";
       orange.innerHTML ="ViewImage";
       tab.innerHTML="Contact Us";
       beta.innerHTML="The beta decay is a radioactive decay in which a proton in a nucleus is converted into a neutron (or vice-versa). ";
       use.innerHTML="Shihab@gmail.com";
    }
}
