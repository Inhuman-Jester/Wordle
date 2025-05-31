let width = 5, height = 6;
let board = document.querySelector("#board");

let word = "happy";

for(let i = 0; i < height; i++){
    for(let j = 0; j < width; j++){
        const ele = document.createElement("div");
        ele.id = i + "," + j;
        ele.classList.add("tile");
        board.appendChild(ele);
    }
}

let i=0, j=0;

document.addEventListener("keyup", (event)=>{
    
    if(event.key == "Backspace" && j!=0){
        j--;
    }

    let index = i + "," + j;
    let element = document.getElementById(index);

    if(event.key == "Enter" && j>=width){
        check(i);
        i++;
        j=0;
    }
    else if(event.key == "Backspace" && j>=0){
        element.innerText="";
    }
    else if(event.key >= "a" && event.key <= "z" ){
        j++;
        element.innerText = event.key;
    }
    
})

function check(i){
    for(let x = 0; x < width; x++){
        let index = i + "," + x;
        let element=document.getElementById(index);
        let letter = element.innerText

        if(word[x]==letter){
            element.classList.add("correct");
        }
        else if(word.includes(letter)){
            element.classList.add("misplace");
        }
        else{
            element.classList.add("absent");
        }
    }
}