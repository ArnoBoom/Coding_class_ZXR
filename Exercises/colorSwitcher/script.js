console.log("connected")

let body =  document.querySelector("body");


let yellowCircle = document.getElementById("yellow");


yellowCircle.addEventListener("click", turnPageYellow);



function turnPageYellow(){
    console.log('turn yellow');
    

  body.style.backgroundColor= "yellow";

}