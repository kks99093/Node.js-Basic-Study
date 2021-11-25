"use strict"

const UserStorage = require("./UserStorage");

class User{
    constructor(body){ //생성자
        this.body = body; //javascript는 따로 body를 변수로 안 만들어놔도 그냥 이런식으로 담기나 보네?
    }

    async login(){
        const body = this.body
        try{
            const {id, psword} = await UserStorage.getUserInfo(body.id);
            if(id){
                if(id === body.id && psword === body.psword){
                    return {success: true};
                }
                return {success : false, msg : "비밀번호 틀림."};
            }
            return {success : false, msg : "아이디 틀림"};
        }catch (err){
            return {success : false, msg : err};
        }
    }

    register(){
        UserStorage.save(this.body);
    }
}

module.exports = User;
