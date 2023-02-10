const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    //res.send("<h1>Hello world Earth!</h1>");
    res.render("index");
});
router.get("/register",(req,res)=>{
    //res.send("<h1>Hello world Earth!</h1>");
    res.render("register");
});
router.get("/login",(req,res) =>{
    res.render("login");
});
router.get("/homepage",(req,res) =>{
    res.render("homepage");
});
router.get("/ola",(req,res)=>{
    res.render("ola");
});
router.get("/revolt",(req,res)=>{
    res.render("revolt");
});
router.get("/ather",(req,res)=>{
    res.render("ather");
});
router.get("/heroelectric",(req,res)=>{
    res.render("heroelectric");
});
module.exports=router;
