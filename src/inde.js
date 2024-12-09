let heading = document.getElementById("header");
heading.innerHTML = "<p>I am going to miss you all😥😥</p>" 


// Event listeners
function changeButtonStyle(){
    button.style.backgroundColor = "yellow";
    button.style.color = "white";
}

let button = document.querySelector("button");
button.addEventListener("click", changeButtonStyle);
button.addEventListener("dblclick", changeButtonStyle);


// View img

function showimage(){
 let deimg = document.querySelector(".de");
 deimg.style.display = "block";
 let ma = document.querySelector(".ma");
 ma.style.display = "block";
}
let we = document.querySelector(".we")
we.addEventListener("click", showimage );


// dding eventlistener the close button
function showitems(){
//     let deimg = document.querySelector(".de");
//  deimg.style.display = "block";
//  let ma = document.querySelector(".ma");
//  ma.style.display = "block";
}

let ma1 = document.querySelector(".ma");
ma1.addEventListener("click", showitems);
