const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function(event) {
    let clearMonitor = document.querySelector('.calculater-monitor') 
    document.querySelector('.calculater-monitor').innerHTML = '';
    
});



const num1 = document.querySelector(".key-number-1")
num1.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 1;
})

const num2 = document.querySelector(".key-number-2")
num2.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 2;
})

const num3 = document.querySelector(".key-number-3")
num3.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 3;
})

const num4 = document.querySelector(".key-number-4")
num4.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 4;
})

const num5 = document.querySelector(".key-number-5")
num5.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 5;
})

const num6 = document.querySelector(".key-number-6")
num6.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 6;
})

const num7 = document.querySelector(".key-number-7")
num7.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 7;
})

const num8 = document.querySelector(".key-number-8")
num8.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 8;
})

const num9 = document.querySelector(".key-number-9")
num9.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 9;
})

const num0 = document.querySelector(".key-number-0")
num0.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += 0;
})




const error = document.querySelectorAll(".dontClick")
error.forEach(function (errorA){
    errorA.addEventListener('click', function(){
        document.querySelector('.calculater-monitor').innerText = "Error!";
    })   
})