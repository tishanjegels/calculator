const keys = document.querySelectorAll("button")

//eventlistener
keys.forEach(key=>{
    keys.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText === "C"){
        calcDisplay.innerText = "0";
        return;
    }

    if(buttonText === "Del"){
        calcDisplay.textContent = calcDisplay.textContent.substr(0,output.textContent.length-1);
        return;
    }
    
    if(buttonText === "="){
console.log
    }

    else{
        calcDisplay.textContent += buttonText;
        return;
    }


}

////
document.getElementById(button).addEventListener("click", Calculate)

let result = document.getElementById(calcDisplay);

let calculate=(numbers)=>{
    result.value += numbers;

}

let Result=()=>{
    try{

        result.value=eval(result.value)
    }
    catch(error){
        alert('Error')
    }
}