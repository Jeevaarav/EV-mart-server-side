const mysql=require("mysql");

const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    port:process.env.DATABASE_PORT,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE1,
    });
    
    exports.index1=(req,res) =>{
        console.log(req.body);
        const {email}=req.body;
        db.query("insert into user set ?",{email:email},(error,result)=>{
         if(error){
            console.log(error);
         }
         else{
            console.log(result);
         }
        });
      }
    