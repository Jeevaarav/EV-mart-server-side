const express=require('express');
const mysql=require("mysql");
const app=express();
const doenv=require("dotenv");
const path=require('path');
const { dirname } = require('path');
const hbs=require('hbs');

doenv.config({
path:'./.env',
});
const db=mysql.createConnection({
host:process.env.DATABASE_HOST,
user:process.env.DATABASE_USER,
port:process.env.DATABASE_PORT,
password:process.env.DATABASE_PASS,
database:process.env.DATABASE,
});

db.connect((err) =>{
if(err){
    console.log(err);
}
else{
    console.log('Mysql connection success');
}
});

app.use(express.urlencoded({ extended:false }));

// console.log(__dirname);
const location=path.join(__dirname,"./public");
app.use(express.static(location));
app.set("view engine","hbs");

// const partialspath=path.join(__dirname,"./views/partial");
// hbs.registerPartials(partialspath);

app.use("/",require("./routes/pages"));
app.use("/auth",require("./routes/auth"));

// app.use("/",require("./routes/pages"));
// app.use("/auth",require("./routes/auth"));

app.listen(5000,() =>{
    console.log("Server started @ Port 5000");
});