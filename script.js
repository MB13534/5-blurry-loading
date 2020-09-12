const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text')

let load = 0;


const int = setInterval(blurring, 30);



blurring();

function blurring() {
    if (load === 100){
        clearInterval(int);
    } else {
    load++;
    loadText.innerText = `${load}%`;
    loadText.style.opacity = linearScaling(0, 100, 1, 0, load);
     bg.style.filter = `blur(${linearScaling(0, 100, 30, 0, load)}px`;   
    console.log(load);
        }
}

function linearScaling(oldMin, oldMax, newMin, newMax, oldValue){
    var newValue;
    if(oldMin !== oldMax && newMin !== newMax){
        newValue = parseFloat((((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin))  + newMin);
        newValue = newValue.toFixed(2);
    }
    else{
        newValue = error;
    }
    return newValue;
}