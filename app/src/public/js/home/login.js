"user strict"

const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);
function login(){
    const req = {
        id : id.value,
        psword : psword.value
    }
    //ajax 통신
    fetch("/login",{
        // 보낼경로, 전달할 데이터(오브젝트 형태)
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("로그인 중 에러 발생"));
    });
    
}