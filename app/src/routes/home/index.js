"use strict"
//strict모드를 사용한다는 뜻 (javascript 파일을 만들때 상단에다가 항상 적어두는게 좋다고함)
//사용하는 이유 - 올바르지 않은 문법을 사전에 검출 할수 있다.
// strict모드는 존재하지 않는 변수, 존재하지 않는 객체등에 대해 에러를 발생시킨다.

const express = require("express");
const router  = express.Router();

const ctrl = require("./home.ctrl");


router.get("/", ctrl.output.home); //output은 암묵적인 약속이 아님, view, show 등 다른것으로 바꿔써도 상관없음
router.get("/login",ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;