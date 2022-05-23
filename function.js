//Clear Button functionallity

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function(event) {
    let clearMonitor = document.querySelector('.calculater-monitor') 
    document.querySelector('.calculater-monitor').innerHTML = '';
    
});


//Numbers Functionallity

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






//Decimal Button Functionallity

const DecimalNums = document.querySelector(".Decimal")
DecimalNums.addEventListener('click', function(decnum){
    document.querySelector('.calculater-monitor').innerText += '.';

    let show = document.querySelector('.calculater-monitor')
    if(show != ''){
        document.querySelector('.Decimal').disabled = true;
    } else {
        document.querySelector('.Decimal').disabled = false;
    } 

})




//     let calculating = document.querySelector(".calculater-monitor").innerText
//     let final = eval(calculating);
//     document.querySelector('.calculater-monitor').innerHTML = final;
    
//     // let arsam = document.querySelector(".calculater-monitor").innerText
//     // console.log(arsam)
//     // console.log(typeof arsam)
// })




//Result Button Functionallity
//still doesn't work
const calcBtn = document.querySelector('#equal')
calcBtn.addEventListener('click', function calculated(){
    
    
    // let operSign = document.querySelectorAll('.oper-key')
    // let currentNumber = show.innerText.length > operSign;
    // let previousNumber = show.innerText.length < operSign;
    
    // operSign.forEach(function (){
    //     if (false){
    
    //     }
    // })    
    
    
    
    
    
    
    
    
    
    let show = document.querySelector('.calculater-monitor').innerText
    
    let previousNum = parseInt(show);
    let currentNum = parseInt(show);
    let current = currentNum;
    let previous = previousNum;

    let result;

    if (show.includes('+')){
    console.log('Addition')
    result = current + previous;
    } else if (show.includes('-')){
        console.log('Subtraction')
        result = current - previous;
    } else if (show.includes('*')){
        console.log('Multiplication')
        result = current * previous;
    } else if (show.includes('/')){
        console.log('Division')
        result = current / previous;
    }
    
    document.querySelector('.calculater-monitor').innerText = result;





    // if (show !== '+','*','/'){
    //     console.log('Subtraction')
    //     return result = current - previous;
    // }
        


    // if (show !== '-','+','/'){
    //     console.log('Multiplication')
    //     return result = current * previous;
    // }



    // if (show !== '-','*','+'){
    //     console.log('Division')
    //     result = current / previous;
    // }





    
    


    


});





// // Can't Click on Oper Buttom More Than Once
// //still doesn't work
// function justOneOper(){
//     let show = document.querySelector('.calculater-monitor');
//     let operBut = document.querySelectorAll('.oper-key');
//     if(show.innerText != '' && show.innerText != '' && show.innerText != '' && show.innerText != '' ){
//         operBut.disabled = true;
//     } else {
//         operBut.disabled = false;
//     }
    
// }





//Del Button Functionallity

const delBut = document.querySelector(".delete");
delBut.addEventListener('click', function del() {
    let show = document.querySelector('.calculater-monitor')
    let content = show.innerText;
    if (content.length === 1) {
        show.innerText = "";
    } else { 
        show.innerText = content.substring(0, content.length - 1)
    }
});




//Dont click buttons Functionallity

const error = document.querySelector(".dontClick")
error.addEventListener('click', function(){
    document.querySelector('.calculator').style.display = "none";
    document.querySelector('.container-secion-wrapper').innerHTML = "<h1> I Said Don't Click </h1>"
})   

function refreshPage(){
    window.location.reload();
} 


