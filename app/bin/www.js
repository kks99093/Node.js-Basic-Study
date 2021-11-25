"use strict"
const app = require("../app");
const PORT = process.env.PORT || 3000; //env 모듈 사용방법
app.listen(PORT, () =>{
    console.log('서버가동');
});