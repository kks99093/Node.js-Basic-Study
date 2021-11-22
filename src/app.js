"use strict"
const express = require("express");
const app = express();

//앱 세팅
app.set("views", "./views"); //view파일을 넣어놓을 경로를 지정
app.set("view engine", "ejs"); //위의 html코드를 어떤 엔진으로 해석할지 지정
                            //ejs가 jsp같은거 인듯?

// app.get("/", (req, res) =>{
//     //express에서는 이런식으로 맵핑을 하는구나
//     res.render("home/index");
//     //res.render가 controller의 return같이 해당 파일을 응답하는거구나
// });

// app.get("/login",(req, res) =>{
//     res.render("home/login");
// });

//라우팅
const home = require("./routes/home"); //내가 라우터를 만들어놓은 폴더, 지금은 공부하려고 여기 적지만 나중에 위로 뺄것
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.
//요청이 들어오면 위의 home폴더의 index.js로가서 요청에맞는 콜백함수를 실행한다.

module.exports = app;