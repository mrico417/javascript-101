const buttonBC = document.querySelector(".btn-bc");
const buttonTitle = document.querySelector("#btn-bc");
const buttonCir = document.querySelector("#btn-circles");
const body = document.querySelector("body");
const h1 = document.querySelector("#main-title");

console.log({buttonBC,buttonCir,buttonTitle});



buttonBC.addEventListener("click",
    ()=>{
        body.style.backgroundColor = "green";
})

buttonTitle.addEventListener("click",
    ()=>{
        h1.innerHTML = "I'm hungry!";
})

buttonCir.addEventListener("click",
    ()=>{
        const circle = document.createElement('div');
        circle.style.width="200px";
        circle.style.height="200px";
        circle.style.borderRadius = "100%";
        circle.style.border = "1px solid yellow";

        body.append(circle);
})
