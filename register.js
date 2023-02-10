const togglePassword1=document.querySelector("#togglePassword1");
      const confirm=document.querySelector("#confirm_password");

      togglePassword1.addEventListener('click',function(){
        const type=confirm.getAttribute('type')==='password'?'text':'password';
        confirm.setAttribute('type',type);

        this.classList.toggle("fa-eye");
      });
      const togglePassword2=document.querySelector("#togglePassword");
      const password=document.querySelector("#password");

      togglePassword2.addEventListener('click',function(){
        const type=password.getAttribute('type')==='password'?'text':'password';
        password.setAttribute('type',type);

        this.classList.toggle("fa-eye");
      });

     const email=document.getElementById("email");
     const emailvalue=email.value.trim();
     form.addEventListener('submit', e=>{
       e.preventDefault();
     checkInput();
     });
     function checkInput(){
       if(emailvalue===''){
         setError(email,"Email cannot be blank");
       }
       else{
         setSuccess(email,"");
       }
       function setError(input, message) {
          const formhead = input.parentElement;
          const paragraph = formhead.querySelector("small");
          formhead.className = "form-control.error";
          paragraph.innerText = message;
      }
  
      function setSuccess(input, message) {
          const formhead = input.parentElement;
          const paragraph = formhead.querySelector("small");
          formhead.className = "form-control.success"; 
          paragraph.innerText = message;
      }
     }