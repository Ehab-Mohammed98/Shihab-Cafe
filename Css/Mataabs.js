let arabic = document.getElementById("arabic");
let english = document.getElementById("englich");
let title =  document.getElementById("title");
let title_text = document.getElementById("title_text");
let title_text1 = document.getElementById("title_text1");
let title_text2 = document.getElementById("title_text2");
let title_text3 = document.getElementById("title_text3");
let title_text4 = document.getElementById("title_text4");
let mines = document.getElementById("mines");
let wq = document.getElementById("wq");
let text = document.getElementById("text");
let ee = document.getElementById("ee");
let wqs = document.getElementById("wqs");
let tt = document.getElementById("tt");
let zorews = document.getElementById("zorews");
let lion = document.getElementById("lion");

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
        mines.innerHTML="اللغة";
        wq.innerHTML ="شهاب كوفي";
        text.innerHTML =" بعض من تاريخنا";
        ee.innerHTML =" من نحن ";
        wqs.innerHTML ="شهاب ";
        tt.innerHTML="هو شركة مقهي سعودي بدات عام 1991م في منطقة الرياض عل يد ثلأثة شركاء وهم مدرس اللغة العربية محمدعلي,ومدرس التاريخ(رياض عبدالعزيز)والكاتب(عمر سلطان).وتملك الشركة نوفمبر2021 اكثر من 16,226 فرعا في 30 دولة حول العالم منها 10,000 داخل السعودية واكثر من 155,000 موظف في جميع فروعها";
        zorews.innerHTML="اسم الشركة";
        lion.innerHTML=" جاء اسم النيزك من النيازك التي تسقط من الفضاء ، وتقدم شركة شهاب الآن العديد من المشروبات الساخنة والباردة ، بما في ذلك الشاي الأخضر والشاي والقهوة العربية وعصير الفراولة والبيبسي والكوكاكولا وغيرها.  كما لا ننسى الحلويات التي يقدمها شهاب بكافة فروعه حول العالم.";
    }else if(getlanugage == "english"){
        title.innerHTML="Shihab";
        title_text.innerHTML ="Home"; 
        title_text1.innerHTML="About My";  
        title_text2.innerHTML="Servers";
        title_text3.innerHTML="Menu";
        title_text4.innerHTML="ViewImage";
        mines.innerHTML="Language";
        wq.innerHTML ="Shihab Coffe";
        text.innerHTML ="Some Of Our history" ;
        ee.innerHTML ="About Us";
        wqs.innerHTML ="Shihab";
        tt.innerHTML="is a Saudi coffee company, started in 1991 in the Riyadh region by three partners,Arabic language teacher Muhammad Ali, history teacher (Riyad Abdulaziz) and writer (Omar Sultan)";
        zorews.innerHTML="Name Company";
        lion.innerHTML="The name of a meteor came from the meteorites that fall from space.Shihab Company now offers many hot and cold drinks, including green tea, tea, Arabic coffee, strawberry juice, Pepsi, Coca-Cola, and others.We also do not forget the sweets offered by Shehab in all its branches around the world.";
    }
}