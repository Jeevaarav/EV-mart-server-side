const mysql=require("mysql");
const bcrypt=require("bcryptjs");
const db=mysql.createConnection({
  host:process.env.DATABASE_HOST,
  user:process.env.DATABASE_USER,
  port:process.env.DATABASE_PORT,
  password:process.env.DATABASE_PASS,
  database:process.env.DATABASE,
  });
  exports.login=async(req,res)=>{
    try{
        const email1=req.body.email;
        console.log(email1);
        const password1=req.body.password;
        console.log(password1);
        // console.log(req.body);
        db.query('select * from users where Email=?',[email1],async(error,result)=>{
          console.log(result);
          if(result.length<=0){
            return res.render("login",{msg:"This Email is wrong"});
          }
           else{
              if(!await bcrypt.compare(password1,result[0].pass)){
               return res.render("login",{msg:"password is incorrect"});
              }
             else{
              res.status(200).redirect("/homepage");
             }  
          }
    }); 
      }
    catch(error){
    console.log(error);
    };
  };
exports.homepage=(req,res) =>{
  res.redirect("/");
}
exports.index=(req,res) =>{
  res.redirect("/login");
}
exports.index2=(req,res) =>{
  console.log(req.body);
}
exports.revolt=(req,res)=>{
  res.redirect("/login");
}
  
exports.register=(req,res)=>{
  //console.log("Form submitted");
  // console.log(req.body);
  // const email=req.body.email;
  // const password=req.body.password;
  // const confirm_password=req.body.confirm_password;
  
  const {email,password,confirm_password}=req.body;
//  console.log(email);
//   console.log(password);
db.query("select email from users where email=?",[email], async(error,result)=>{
 if(error){
  console.log(error);
 }
 if(result.length>0){
  return res.render("register",{msg:"Email ID already taken",msg_type:"error"});
 }
 else if(password!==confirm_password){
  return res.render("register",{msg:"password does not match",msg_type:"error"});
//  return res.render("register", alert("Password does not match"));
 }
 let hashedPassword=await bcrypt.hash(password,8);
//  console.log(hashedPassword);
db.query("insert into users set ?",{Email:email,pass:hashedPassword,confirm:confirm_password},(error,result)=>{
  if(error){
    console.log(error);
  }
  else{
    // res.render(alert("User registration successfull"));
    res.status(200).redirect("/login");
  }
}
);
});
};