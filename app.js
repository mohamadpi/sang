
const sang_icon = "fa-regular fa-hand-back-fist"
const kaqaz_icon = "fa-regular fa-hand"
const qeychi_icon = "fa-regular fa-hand-scissors"

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getRandomMsg() {
    return Math.floor(Math.random() * 4);
}
let comp_icon = [sang_icon, kaqaz_icon, qeychi_icon]

let comp_choice = document.getElementById("comp-choice")
let user_choice = document.getElementById("user-choice")

let sang_tag = document.getElementById("sang")
let kaqaz_tag = document.getElementById("kaqaz")
let qeychi_tag = document.getElementById("qeychi")

let game_tags = [sang_tag, kaqaz_tag, qeychi_tag];
let msg_lose = ["رکب خوردی خارکصه", "خوردیش؟ هستشو تف کن", "آمدی اینجا کیر بخوری داداش", "کونتم پاره کنی نمیتونی ببری"]
let msg_win = ["ببین من آدم نرمالی نیستم", "کونت پارس", "شاغال", "کیر منم نیسی ببخشینا"]

let msg_box = document.getElementById("msg")

let comp_number = 0
let user_number = 0

let comp_numbox = document.getElementById("comp-num")
let user_numbox = document.getElementById("user-num")

let changer = true

for (i=0; i <=2; i++){
    let get_div = game_tags[i]
    get_div.addEventListener('click', function sayhello(){
        user_choice.className = get_div.className
        comp_choice.className = comp_icon[getRandomInt()]

        if (user_choice.className == comp_choice.className){
            msg_box.textContent = "یه بار دیگه بزن کونی"
            msg_box.style.backgroundColor = "rgb(52, 154, 226)"
        } else if (user_choice.className == sang_icon && comp_choice.className == qeychi_icon){
            msg_box.textContent = msg_win[getRandomMsg()]
            user_number +=1
            user_numbox.textContent = user_number
            msg_box.style.backgroundColor = "#11CC53"
        } else if (user_choice.className == sang_icon && comp_choice.className == kaqaz_icon){
            msg_box.textContent = msg_lose[getRandomMsg()]
            comp_number += 1
            comp_numbox.textContent = comp_number
            msg_box.style.backgroundColor = "#FF4035"
        } else if (user_choice.className == kaqaz_icon && comp_choice.className == sang_icon){
            msg_box.textContent = msg_win[getRandomMsg()]
            user_number +=1
            user_numbox.textContent = user_number
            msg_box.style.backgroundColor = "#11CC53"
        } else if(user_choice.className == kaqaz_icon && comp_choice.className == qeychi_icon){
            msg_box.textContent = msg_lose[getRandomMsg()]
            comp_number +=1
            comp_numbox.textContent = comp_number
            msg_box.style.backgroundColor = "#FF4035"

        } else if(user_choice.className == qeychi_icon && comp_choice.className == sang_icon){
            msg_box.textContent = msg_win[getRandomMsg()]
            user_number +=1
            user_numbox.textContent = user_number
            msg_box.style.backgroundColor = "#11CC53"
        }else if (user_choice.className == qeychi_icon && comp_choice.className == kaqaz_icon){
            msg_box.textContent = msg_lose[getRandomMsg()]
            comp_number +=1
            comp_numbox.textContent = comp_number
            msg_box.style.backgroundColor = "#FF4035"
        }

    })
}


