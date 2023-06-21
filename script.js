
const $ = document.querySelector.bind(document);

const login = document.getElementsByName("login");

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
}

function loan(){
    const loan = document.getElementsByName("loan")
    const loanAmount = Number(loan[0].value);
    
    for(let i = 0; i < users.length; i ++){
        if(users[i].name == login[0].value && users[i].pin == login[1].value){
            users[i].balance +=loanAmount;
        }

    }
}

