"use strict";

class UserStorage{
    static #users = { //변수에 #을 붙이는건 자바에서 private랑 같음
        id : ["asd123", "asd1234", "asd12345"],
        psword : ["asd123", "asd1234", "asd12345"],
        name:["하하", "호호", "히히"]
    };

    static getUsers(...fileds){
        //파라미터에 ...변수명을 적을경우 인자로받은 값들이 변수명의 배열에 담기게된다.
        //UserStorage.getUsers('id','psword')의 경우 ['id','psword']로 변수에 배열로 담긴다.
        const users = this.#users;
        const newUsers = fileds.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                //객체.hasOwnProperty()는 해당 객체에 인자로 들어온값으로된 키가있는지 묻는거
                newUsers[field] = users[field];
            }
            return newUsers;
        },{})
        return newUsers;
        // reduce는 배열에서 사용하는 반복문
        // reduce((누적값, 현잿값, 인덱스, 요소) => {return 결과}, 초기값); 형태는 이런식인데
        // 반복문을 돌면서 newUsers에는 누적값이 찍히고 field에는 현재값이 찍힌다.
        // 초기값을 설정 안하면 누적값에 [0]값, 현잿값에 [1]값이 들어가고
        // 그다음부터 undefiends, [2]값.... 이런식으로 들어가고
        // 초기값을 설정해두면 현잿값에 [0]번째 값부터 들어가네
        // 마지막에 return해주는 값or객체가 누적값변수에 계속 쌓이는거구나
    }

    static getUserInfo(paramId){
        const users = this.#users;
        const idx = users.id.indexOf(paramId); //users의 id배열중 paramId와 같은값을 가진 인자의 인덱스
        const usersKeys = Object.keys(users); // => users의 키값만 가져와서 배열을 만듬 [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx]; //해당 인덱스에 해당하는 값을 전부 newUser에 넣는다
                                            //ex) id[idx], psword[idx], name[idx]의 정보를 newUser에 담는거
            return newUser;
        },{});

        return userInfo;

    }
}

module.exports = UserStorage;