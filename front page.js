// let menu=document.querySelector('#menu-btn');
// let navbar=document.querySelector('.navbar');

// let menu1=document.querySelector('#drop-btn');
// let navbar1=document.querySelector('.navbar');

// menu.onclick= () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// menu1.onclick= () =>{
//   menu1.classList.toggle('fa-times');
//   navbar1.classList.toggle('active');
// }

// document.querySelector('#Button').onclick=() =>{
//     document.querySelector('.login-form').classList.toggle('active');
// }
// document.querySelector('#close-login-form').onclick=() =>{
//     document.querySelector('.login-form').classList.remove('active');
// }

window.onscroll= () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else    {
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload= () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else    {
        document.querySelector('.header').classList.remove('active');
    }
}

//password
const togglePassword = document.querySelector("#togglePassword");
const password1 = document.querySelector("#password");

togglePassword.addEventListener('click', function () {
    // toggle the type attribute
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    
    // toggle the icon
    this.classList.toggle("fa-eye");
});
//password


//slideshow
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      800: {
        slidesPerView: 2,
        
      },

      991: {
        slidesPerView: 3,
    
      },
    },
  });
  //slideshow

  //form validation
  
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");

  
//   form.addEventListener('submit', e => {
//       e.preventDefault();
//       checkInput();
//   });
  
//   function checkInput() {
//       const emailvalue = email.value.trim();
//       const passwordvalue = password.value.trim();
//       const valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//       var array = JSON.parse(localStorage.getItem("Details")); // Stored SignUp Details
//       var key = 0;
  
//       var n = array.length;
  
//       if (emailvalue == "") {
//           setError(email, "Please enter the mail address");
//       } 
     
//       else if (!valid.test(emailvalue)) {
//           setError(email, "Enter the valid mail ID");
//       }
//       else {
//           setSuccess(email, "");
//           if (passwordvalue == "") {
//               setError(phone, "Enter the password");
//           } else {
//               setSuccess(password, "");
//               for (var i = 0; i < n; i++) {
//                   if (emailvalue == array[i].email) {
  
//                       key = 1;
//                       if (passwordvalue == array[i].password) {
//                           setSuccess(password, "");
//                           alert("Login Successfully");
//                           window.location.replace("login page.html");
//                           break
//                       } else {
//                           setError(password, "Invalid password");
//                       }
                      
//                     }
//                     else if (emailvalue == array[i].username) {
//                         key = 1;
//                         if (passwordvalue == array[i].password) {
//                             alert("Login Successfully");
//                             window.location.href = "INDEX.HTML";
                            
//                             break
//                         } else {
//                             setError(password, "Invalid Passsword");
//                         }
//                   } 
//                   }
//                   if (key == 0) {
//                     setError(email, "Invalid mail or Username")
//                 }
//                 else {
//                     setSuccess(email, "")
//                 }
//               }
              
  
//           }

  
  
//       function setError(input, message) {
//           const formhead = input.parentElement;
//           const paragraph = formhead.querySelector("small");
//           formhead.className = "form-control.error";
//           paragraph.innerText = message;
//       }
  
//       function setSuccess(input, message) {
//           const formhead = input.parentElement;
//           const paragraph = formhead.querySelector("small");
//           formhead.className = "form-control.success"; 
//           paragraph.innerText = message;
//       }
  
//   }
//  //form validation

//   //Newsletter
//   const subemail=document.getElementById("sub-email");
//   var b=1;
//   form1.addEventListener('submit', e => {
//     e.preventDefault();
//     validateSub();
// });
//   function validateSub(){
    
//     const subemailvalue=subemail.value.trim();
//     var array1 = JSON.parse(localStorage.getItem("subscribe-details"));
   
//     if(subemailvalue==""){
//         setError(subemail,"Enter mail ID");
//       }
//       else{
//         setSuccess(subemail,"");
//         if (array1 == null) {
//             let array1 = [];
//             let obj1 = {
//                 email: subemailvalue,
//             };
//             array1.push(obj1);
//             localStorage.setItem("subscribe-details", JSON.stringify(array1));
//             alert("Subscribed Successfullly");
//       }
//       else {
//         var m = array1.length;
//         for (i = 0; i < m; i++) {
//             if (subemailvalue === array1[i].email ||  subemailvalue === array1[i].username) {
//                 b = 0;
//                 console.log(array1[i].email);
//                 console.log("1");
//                 break
//             }
//         }
//         if (b == 1) {

//             let obj1 = {
//                 email: subemailvalue,
            
//             };
//             array1.push(obj1)
//             console.log(array1);
//             localStorage.setItem("subscribe-details", JSON.stringify(array1));
//             alert("Subscribed Successfully");

//         }
//         else {
//             alert("Email Id already exist")
//         }

//     }
//       function setError(input, message) {
//         const formsubs = input.parentElement;
//         const paragraph1 = formsubs.querySelector("small");
//         formsubs.className = "subscribe.error";
//         paragraph1.innerText = message;
//     }
    
//     function setSuccess(input,message) {
//         const formsubs = input.parentElement;
//         const paragraph1 = formsubs.querySelector("small");
//         formsubs.className = "subscribe.success";
//         paragraph1.innerText = message;
//     }
//   }
// }
// //Newsletter
  
//   //  function isEmail(email){
//   //   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//   //  }
//   //  function isValid(password){
//   //   return /^(([^[\]\\.,;:\s@"]+)*)(([a-zA-Z\-0-9]+\.)+[a-zA-Z]))$/.test(password);
//   //  }

//   //get in touch
//   const getname=document.getElementById("user-name");
//   const useremail=document.getElementById("user-email");
//   const userphone=document.getElementById("user-phone");
//   const usermessage=document.getElementById("user-message");

//   var c=1;

//   form2.addEventListener('submit', e => {
//     e.preventDefault();
//     validateGet();
// });  
// function validateGet(){
//     const namevalue=getname.value.trim();
//     const useremailvalue=useremail.value.trim();
//     const userphonevalue=userphone.value.trim();
//     const usermessagevalue=usermessage.value.trim();
//     var array2 = JSON.parse(localStorage.getItem("get-details"));
    
//     if(namevalue==""){
//         setError(getname,"Plz enter your name");
//     }
//     else{
//         setSuccess(getname,"");
//     if(useremailvalue==""){
//         setError(useremail,"Plz enter mail ID");
//     }
//     else{
//         setSuccess(useremail,"");
//     if(userphonevalue==""){
//         setError(userphone,"Plz enter phone number");
//     }
//     else{
//         setSuccess(userphone,"");
//     if(usermessagevalue==""){
//         setError(usermessage,"Type the message");
//     }
//     else{
//       setSuccess(usermessage,"");
//       if (array2 == null) {
//         let array2 = [];
//         let obj2 = {
//             username: namevalue,
//             email:useremailvalue,  
//             phone: userphonevalue,
//             message: usermessagevalue
//         };
//         array2.push(obj2);
//         localStorage.setItem("get-details", JSON.stringify(array2));
//         alert("Message submitted Successfully");
// }
// else {
//     var j = array2.length;
//     for (i = 0; i < j; i++) {
//         if (namevalue === array2[i].getname ||  namevalue === array2[i].useremail) {
//             c = 0;
//             console.log(array2[i].getname);
//             console.log("1");
//             break
//         }
//     }
//     if (c == 1) {

//         let obj2 = {
//             username: namevalue,
//             email:useremailvalue,  
//             phone: userphonevalue,
//             message: usermessagevalue
//         };
//         array2.push(obj2)
        
//         localStorage.setItem("get-details", JSON.stringify(array2));
//         alert("Message submitted Successfully");
//         console.log(array2);
//     }
//     else {
//         alert("Email Id already exist");
//         console.log(array2);
//     }

// }
// }
// }
// }
// }

// function setError(input, message) {
//     const touchcontrol = input.parentElement;
//     const paragraph2 = touchcontrol.querySelector("small");
//     touchcontrol.className = "touch-control.error"; //error css
//     paragraph2.innerText = message;
// }

// function setSuccess(input, message) {
//     const touchcontrol = input.parentElement;
//     const paragraph2 = touchcontrol.querySelector("small");
//     touchcontrol.className = "touch-control.success"; //error css
//     paragraph2.innerText = message;
// }
// }
//   //get in touch

 //loading gif

//  var loader=document.getElementById("load");
//  window.addEventListener("load",function(){
//      loader.style.display="none";
//  })



  

  

  