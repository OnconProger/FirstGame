let asnwer = document.getElementById('answer');
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let random = Math.ceil(Math.random() * 10);

btn.onclick = function(){
    if(isNaN(answer.value)){
        text.innerHTML = 'ТЫ ЧТО ДАЛБАЕБ ИГРА ПРО ЧИСЛА';
    }
    else if(answer.value > random){
        text.innerHTML = 'СЛИШКОМ ДАХУЯ';
    }
    else if(answer.value < random){
        text.innerHTML = 'ЧО ТАК МАЛО ДАУН';
    }
    else{
        text.innerHTML = 'УВАЖАЮ НАХУЙ ТЫ ПОБЕДИЛ'
    }
}