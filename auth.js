const express=require("express");
const router=express.Router();
const usecontrol=require("../controllers/users");
const usecontrol1=require("../controllers/user1");
const usecontrol2=require("../controllers/user2");

router.post("/register",usecontrol.register);
router.post("/login",usecontrol.login);
router.post("/homepage",usecontrol.homepage);
router.post("/index",usecontrol.index);
router.post("/index1",usecontrol1.index1);
router.post("/index2",usecontrol2.index2);
router.post("/revolt",usecontrol.revolt);

module.exports=router;
