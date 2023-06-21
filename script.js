
const $ = document.querySelector.bind(document);

const login = document.getElementsByName("login");
let users = JSON.parse(localStorage.getItem('userss')) || [];


function enter(){
    const logForm = $(".login")


       for(let i = 0; i < users.length; i ++){
        if(users[i].name == login[0].value && users[i].pin == login[1].value){
            // logForm.classList.add("hidden")
            console.log("true")
            userName(login[0].value, login[1].value);

        }
        else console.log("false");
       }

}

function userName(name, password){
    const userinfo = $(".username");
    userinfo.insertAdjacentHTML("beforeend", `<h4> ${name}  ${password} </h4>`)

    let balance = $(".balance");
    balance.innerHTML = '';
    for(let i = 0; i < users.length;i++){
        if(name == users[i].name && password == users[i].pin ){
            balance.insertAdjacentHTML("beforeend", `<h4>${users[i].balance}</h4>`)
    }

}
}
function transfer(){
    const transferUser = document.getElementsByName("transfer");
    const transferUserName = transferUser[0].value;
    const transferUserAmount = Number(transferUser[1].value);

    for(let i = 0; i < users.length; i ++ ){
        if(transferUserName == users[i].name && login[0] != transferUserName){
            users[i].balance += transferUserAmount;
           console.log(users[i].balance);
        }
    }   

    localStorage.setItem('userss', JSON.stringify(users));
}

function loan(){
    const loan = document.getElementsByName("loan")
    const loanAmount = Number(loan[0].value);
    
    for(let i = 0; i < users.length; i++){
        if(users[i].name == login[0].value && users[i].pin == login[1].value){
            users[i].balance +=loanAmount;
            console.log(users[i].balance);

        }
        console.log(users[i]);
    }
    localStorage.setItem('userss', JSON.stringify(users));
}
function deleteAcc(){
    const closeUser = document.getElementsByName("close");
    const closeUserName = closeUser[0].value;
    const closeUserPin = closeUser[1].value;


    for(let i = 0; i < users.length; i ++){
        if(login[0].value == closeUserName && closeUserPin == login[1].value){
            users.splice(i, 1)
        }
        console.log(users[i]);

    }
    localStorage.setItem('userss', JSON.stringify(users));
}

    