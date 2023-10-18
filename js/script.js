let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};


let sections=document.querySelectorAll("section");
let  navlinks=document.querySelectorAll("header nav a");
window.onscroll=()=>{
    SpeechRecognitionResult.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let id=sec.getAttribute("id");
        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+id+"]").classList.add("active")
            })
        };
    });
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>100);
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.remove("active");
    };
   
    function sendMail(){
        var params = {
            from_name : document.getElementById("fullname").value ,
            email_id : document.getElementById("email_id"). value ,
            message : document.getElementById("message").value
        }
        emailjs.send("service_ezwiwfc", "template_678cecp", params)
        .then(
            message => {
              if(message != "OK"){
                  swal("Successful", "You clicked the button!", "success");
              }
              else{
                  swal("Error", "You clicked the button!", "Error");
              }
            }
          );//.then(function(res){
            //alert("Success! " + res.status);
        //})
    }
