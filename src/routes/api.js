const express = require("express");
const router = express.Router();
const TeamMemberController = require("../Controller/TeamMemberController");
router.post("/register", TeamMemberController.MemberCreateService);
router.put("/ProfileUpdate/:id", TeamMemberController.MemberUpdateService);
router.get("/memberdetails", TeamMemberController.MemberReadService);
router.get("/memberdetailbyid/:id", TeamMemberController.MemberReadServicebyid);
router.delete("/memberdelete/:id", TeamMemberController.MemberDeleteService);

module.exports = router;
