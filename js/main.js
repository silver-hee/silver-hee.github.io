// 커서 깜빡임 효과 -> dynamic id 문서객체를 선택해라 
let target = document.querySelector("#dynamic");


function randomString(){
let stringArr=["WELCOME TO EUNIWORLD!", "Hello. I'm eunhee!","WOW","AWESOME","EUNHEE'S WEBPAGE"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr=selectString.split("");

return selectStringArr;

}

//타이핑 리셋
function resetTyping(){
    target.textContent="";
    dynamic(randomString());

}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length >0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping,1500);
    }
}


//커서깜빡임효과
dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);

//타이핑 효과
