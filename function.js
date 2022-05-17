//Clear Button functionallity

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function(event) {
    let clearMonitor = document.querySelector('.calculater-monitor') 
    document.querySelector('.calculater-monitor').innerHTML = '';
    
});




//Numbers Functionallity

const num1 = document.querySelector(".key-number-1")
num1.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '1';
})

const num2 = document.querySelector(".key-number-2")
num2.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '2';
})

const num3 = document.querySelector(".key-number-3")
num3.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '3';
})

const num4 = document.querySelector(".key-number-4")
num4.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '4';
})

const num5 = document.querySelector(".key-number-5")
num5.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '5';
})

const num6 = document.querySelector(".key-number-6")
num6.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '6';
})

const num7 = document.querySelector(".key-number-7")
num7.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '7';
})

const num8 = document.querySelector(".key-number-8")
num8.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '8';
})

const num9 = document.querySelector(".key-number-9")
num9.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '9';
})

const num0 = document.querySelector(".key-number-0")
num0.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '0';
})





//Oparator Button Functionallity


const AdditionNums = document.querySelector(".Addition")
AdditionNums.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '+';
})

const SubtractionNums = document.querySelector(".Subtraction")
SubtractionNums.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '-';
})

const MultiplicationNums = document.querySelector(".Multiplication")
MultiplicationNums.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '*';
})

const DivisionNums = document.querySelector(".Division")
DivisionNums.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText += '/';
})


const calcBtn = document.querySelector('#equal')
calcBtn.addEventListener('click', function result(){
    let calculating = document.querySelector(".calculater-monitor").innerText
    let final = eval(calculating);
    document.querySelector('.calculater-monitor').innerHTML = final;
    
    // let arsam = document.querySelector(".calculater-monitor").innerText
    // console.log(arsam)
    // console.log(typeof arsam)
})


































//Dont click buttons Functionallity

const error = document.querySelector(".dontClick")
error.addEventListener('click', function(){
    document.querySelector('.calculater-monitor').innerText = "Error!";
})   

function refreshPage(){
    window.location.reload();
} 


