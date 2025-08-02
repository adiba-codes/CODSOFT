let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn button");
let expression = "";
buttons.forEach( button => {
    button.addEventListener("click",() =>{
        const value = button.innerText;
        if(value === "="){
            expression = eval(expression).toString();
        }
        else if(value === "AC"){
            expression = "";
        } 
        else if(value === "DEL"){
            expression = expression.slice(0,-1);
        }
        else {
            const operators =['+','-','*','%'];
            const lastchar = expression.slice(-1);
            if(operators.includes(lastchar) && operators.includes(value)){
                expression = expression.slice(0,-1) + value;
            }
            else{
                expression += value;
            }
        }
        display.value = expression;
    });
});

