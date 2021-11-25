"use strict"
const express = require("express");
const dotenv = require("dotenv"); // 환경변수 관리 모듈
dotenv.config();
// 이메서드를 실행하면 .env에 등록되어있는 변수를 nodeJs에서 접근할수 있도록 process.env.환경변수로 등록시켜준다.
// .env에 있는 파일은 ;(세미콜론)안찍음 [ㅠㅠ 이거때매 10분간 헤맸다 ㅠㅠ]
// 사용하는 이유 팀단위로 개발할시 경우에따라 윈도우 MAC 리눅스등 개발환경이 다 다르다
// 각 운영체제마다 환경변수를 등록해주는 방법이 다 다르기때문에 NodeProject에서 제안한 방법이 있는데
// 이 모듈을 사용하면 어떤 OS에서 사용하더라도 동일하게 환경변수를 등록하고 가져올수 있게 된다.
// 환경변수 저장할 파일은 .env로 정해져있다
// (dotenv.config({path : 경로}))이런식으로 경로와 파일을 지정해줄수도 있는데 일반적으로 사용되는 이름을 사용하는것이
// 커뮤니케이션 비용을 절감할수 있다.
const app = express();


//앱 세팅
app.set("views", "./src/views"); //view파일을 넣어놓을 경로를 지정
app.set("view engine", "ejs"); //위의 html코드를 어떤 엔진으로 해석할지 지정
                            //ejs가 jsp같은거 인듯?

//app.use로 미들웨어 등록해주는게 STS에서 빈등록 해주는거랑 비슷한건가?


//정적경로 추가                            
app.use(express.static(`${__dirname}/src/public`));
//위의 폴더를 정적경로로 추가한다는 의미
//${__dirname}은 현재 디렉터리 이름

// app.get("/", (req, res) =>{
//     //express에서는 이런식으로 맵핑을 하는구나
//     res.render("home/index");
//     //res.render가 controller의 return같이 해당 파일을 응답하는거구나
// });

// app.get("/login",(req, res) =>{
//     res.render("home/login");
// });

//express.json() 미들웨어 등록
app.use(express.json()); //bodyParser가 josn파일을 parse할수 있도록 하는것
app.use(express.urlencoded({extended: true}));
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결해준다.

//라우팅
const home = require("./src/routes/home"); //내가 라우터를 만들어놓은 폴더, 지금은 공부하려고 여기 적지만 나중에 위로 뺄것
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.
//요청이 들어오면 위의 home폴더의 index.js로가서 요청에맞는 콜백함수를 실행한다.





module.exports = app;