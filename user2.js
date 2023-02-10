const mysql=require("mysql");

const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    port:process.env.DATABASE_PORT,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE2,
    });
    
    exports.index2=(req,res) =>{
        console.log(req.body);
        const {username,email,phone,text}=req.body;
        db.query("insert into details set ?",{Fname:username,email:email,phonenum:phone,message:text},(error,result)=>{
         if(error){
            console.log(error);
         }
         else{
            console.log(result);
         }
        });
      }
    