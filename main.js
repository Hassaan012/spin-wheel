let container = document.querySelector(".container");
let spin = document.querySelector(".spin");
let number = Math.floor(Math.random() * 360);
let submitbutton = document.querySelector(".btn");

spin.addEventListener("click", () => {
    let spintime = setInterval(function () {
        container.style.transform = `rotate(${number}deg)`;
        number += Math.floor(Math.random() * 360);
    }, 50);

    setTimeout(() => {
        clearInterval(spintime);
    }, Math.floor(Math.random() * 9000));
});

function value1(){
    const value = document.querySelector(".input1").value;
    return value;
} 
submitbutton.addEventListener("click",() => {
    document.querySelector(".person1").innerHTML += value1();
});
function value2(){
    const value = document.querySelector(".input2").value;
    return value;
} 
submitbutton.addEventListener("click",() => {
    document.querySelector(".person2").innerHTML += value2();
});
function value3(){
    const value = document.querySelector(".input3").value;
    return value;
} 
submitbutton.addEventListener("click",() => {
    document.querySelector(".person3").innerHTML += value3();
});
function value4(){
    const value = document.querySelector(".input4").value;
    return value;
} 
submitbutton.addEventListener("click",() => {
    document.querySelector(".person4").innerHTML += value4();
});
function value5(){
    const value = document.querySelector(".input5").value;
    return value;
} 
submitbutton.addEventListener("click",() => {
    document.querySelector(".person5").innerHTML += value5();
});

