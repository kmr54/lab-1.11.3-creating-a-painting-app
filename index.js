const painting = document.querySelector(".painting")
const palette = document.querySelector(".palette")

let selectedColor = "blue" //initial





//set color
palette.addEventListener("click", function(e){
    if(e.target === document.querySelector("#blue")){
        selectedColor = "blue"
        console.log("blue")
    }
    else if(e.target === document.querySelector("#red")){
        selectedColor = "red"
        console.log("red")
    }
    else if(e.target === document.querySelector("#yellow")){
        selectedColor = "yellow"
        console.log("yellow")
    }
    else if(e.target === document.querySelector("#green")){
        selectedColor = "green"
        console.log("green")
    }
    else if(e.target === document.querySelector("#purple")){
        selectedColor = "purple"
    }
    console.log(e)
    console.log(document.querySelector("#"+selectedColor))
})


//change color of square
painting.addEventListener('click', function(e){ //referecne specific div
    //IS THIS SUbstitute for doc.quesryselector('div')>>probs cause a lot of em?
    console.log(e.target)
    e.target.style.backgroundColor = selectedColor
    console.log("20 squares across and down, figure out how they figured it out")
})


//double click to turn white
painting.addEventListener('dblclick', function (e) {
        e.target.style.backgroundColor = "white"
  });

let clearButton = document.createElement("button")
clearButton.setAttribute("id", "button")
document.querySelector(".header").append(clearButton)
clearButton.textContent = "Clear All"

clearButton.addEventListener("click",function(e){
    //painting.style.backgroundColor = "white" (doesnt work need e)
    let coloredIn = document.querySelectorAll(".pixel")
    for(let i=0;i<coloredIn.length;i++){
        coloredIn[i].style.backgroundColor ="white"
    }
})

///bonus make thsi with methods/functions