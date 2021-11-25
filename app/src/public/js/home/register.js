"user strict"

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);
function register(){
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        cofirmPsword : confirmPsword.value
    }
    //ajax 통신 Promise
    fetch("/register",{
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
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("회원가입 중 에러 발생"));
    });
    
}