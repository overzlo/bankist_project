
const $ = document.querySelector.bind(document);

const login = document.getElementsByName("login");
let users = JSON.parse(localStorage.getItem('userss')) || [];
const info = $(".info")
info.innerHTML = ''
let balance = $(".balance");
const logForm = $(".login")
const system = $(".system")
function enter(){
    const logForm = $(".login")


       for(let i = 0; i < users.length; i ++){
        if(users[i].name == login[0].value && users[i].pin == login[1].value){
            logForm.classList.add("hidden")
            system.classList.remove('hidden')
            console.log("true")
            userName(login[0].value, login[1].value);

        }
        else console.log("false");
       }

}

function userName(name, password){
    const userinfo = $(".username");
    userinfo.innerHTML = `${name} ${password}`
    let balance = $(".balance");
    for(let i = 0; i < users.length;i++){
        if(name == users[i].name && password == users[i].pin ){
            balance.innerHTML = `Current balance: ${users[i].balance}`;
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
            
            info.insertAdjacentHTML("beforeend", `<h4>Transfer to ${transferUserName}.  Amount of transfer: ${transferUserAmount}</h4>`)
        }

        for(let i = 0; i < users.length; i++){
            if(users[i].name == login[0].value && users[i].pin == login[1].value){
                users[i].balance -= transferUserAmount;
                balance.innerHTML = `Current balance: ${users[i].balance}`;

            }
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
            info.insertAdjacentHTML("beforeend", `<h4>Loan ${Number(loan[0].value)}</h4>`)
            balance.innerHTML = `Current balance: ${users[i].balance}`;

        }
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

function logOUT(){
    const system = $(".system")
    system.classList.add('hidden')
    logForm.classList.remove('hidden')
}