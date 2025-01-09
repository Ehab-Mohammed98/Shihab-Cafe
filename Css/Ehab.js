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
let sss = document.getElementById("sss");
let SomeS = document.getElementById("SomeS");
let happy    = document.getElementById("happy");
let ForTwoek = document.getElementById("ForTwoek");
let For_one = document.getElementById("For_one");
let javasred = document.getElementById("javasred");
let javasr_text = document.getElementById("javasr_text");

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
        wq.innerHTML ="خدمات شهاب كوفي"; 
        text.innerHTML ="نحن لسنا الوحيدين ولكننا الافضل";
        sss.innerHTML ="بعض من خدمتنا";
        SomeS.innerHTML="مكان لعيد ميلاد ";
        happy .innerHTML=" يسر إدارة مقهى شهاب أن تقدم لزوارها الكرام المكان المناسب لإقامة احتفالات الكريسماس وغيرها من الاحتفالات ، وما عليك إلا الحضور وتحديد اليوم والوقت والباقي علينا";
        ForTwoek.innerHTML="مكان انترنت";
        For_one.innerHTML="لدينا أجهزة كمبيوتر للوصول إلى الإنترنت أو ممارسة الألعاب أو الدردشة مع الأصدقاء أو القيام بمهام أخرى متعلقة بالكمبيوتر بأقل تكلفة";
        javasred.innerHTML="مكان اجتماع";
        javasr_text.innerHTML="  لدينا مساحات مناسبة لعقد اجتماعات العمل الفردية والجماعية في أسرع وقت ممكن ";
    }else if(getlanugage == "english"){
        title.innerHTML="Shihab";
        title_text.innerHTML ="Home"; 
        title_text1.innerHTML="About My";  
        title_text2.innerHTML="Servers";
        title_text3.innerHTML="Menu";
        title_text4.innerHTML="ViewImage";
        mines.innerHTML="language";
        wq.innerHTML =" Shihab Coffe Srevers ";
        text.innerHTML ="we are not the only ones in the filed,but we are the best ";
        sss.innerHTML ="Some Srevers About";
        SomeS.innerHTML="Aplace To  Brithday";
        happy .innerHTML="Shihab Cafe management is pleased to offer its valued visitors the appropriate place to hold Christmas celebrations and other celebrations, and you only have to come and specify the day and time, and the rest is on us ";
        ForTwoek.innerHTML="Aplace To  internt";
        For_one.innerHTML="We have computers to access the Internet, play games, chat with friends, or do other computer-related tasks at a minimal cost";
        javasred.innerHTML=" Aplace To Meeting";
        javasr_text.innerHTML=" We have suitable spaces for holding individual and group business meetings as quickly as possible ";
    }
}