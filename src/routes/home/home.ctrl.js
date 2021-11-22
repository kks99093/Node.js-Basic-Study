"user strict"
const home = (req, res) =>{
    res.render("home/index");
};

const login = (req, res) =>{
    res.render("home/login");
};

module.exports = { //exports 내보내다 , 모듈로 사용할수 있도록 내보낸다는 뜻
    home,
    login,
    //객체는 { key : value}로 이루어져 있지만 value를 적지않고 위처럼 key만 적어놓을경우 key가 곧 value가 된다
	//{ a : '바보' }의경우 key가 a, value가 '바보' 이지만 {a}의 경우 key가 a, value도 a가 된다.
}