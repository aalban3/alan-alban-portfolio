const bars = document.querySelectorAll(".progress-bar");

let i = 0;
let skill1 = setInterval(function(){
    i+=1
    bars[0].style.width = i + "%"
    if (i >= 70){
        clearInterval(skill1);
        i = 0;
    }
},15);

let skill2 = setInterval(function(){
    i+=1
    bars[1].style.width = i + "%"
    if (i >= 50){
        clearInterval(skill2);
        i = 0;
    }
},15);
setTimeout(() => {
    // wait to execute 
    }, 1000)
let skill3 = setInterval(function(){
    i+=1
    bars[2].style.width = i + "%"
    if (i >= 65){
        clearInterval(skill3);
    }
},15);