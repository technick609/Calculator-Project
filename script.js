//Setup and initiallization
document.addEventListener('DOMContentLoaded', function(){
    const inputScreen = document.getElementById('input-screen');
    const displayField = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let expression = "";
    let shouldClearInput = false;

    // clearInputScreen function
    function clearInputScreen(){
        expression = "";
        inputScreen.value = "";
        displayField.value = "";
        shouldClearInput = false;
    }

    // Back Space function
    function deleteLastCharacter(){
        expression = expression.slice(0, -1);
        inputScreen.value = expression;
    }

    //Operator functions
    function addOperator(operator){
        if(shouldClearInput){
            clearInputScreen();
        }
        expression = expression + operator;
        inputScreen.value = expression;
    }
    //result function
    function evaluateExpression(){
        try{
            const result = eval(expression).toString();
            displayField.value = expression;
            inputScreen.value = result;
            shouldClearInput = true;
            expression = "";
        }
        catch(error){
            inputScreen.value = "Math Error";
        }
    }

    //To append a number
    function appendToExpression(text){
        if(shouldClearInput){
            clearInputScreen();
        }
        expression = expression + text;
        inputScreen.value = expression; 
    }


    //special operators
    function handleOperation(operation){
        //step-1
        if(expression === ""){
            return;
        }

        let result;

        //step-2 convert the string into number
        const currentValue = parseFloat(expression);

        switch (operation) {
            case "toggleSign":
                result = currentValue * (-1);
                console.log(result);
                break;

            case "sqrt":
                result = Math.sqrt(currentValue);
                expression = `\u221A(${currentValue})`
                break;
            
            case "reciprocal":
                result = 1 / currentValue;
                expression = `1/${currentValue}`
                break;
            case "percentage":
                result = (currentValue) / 100;
                expression = `${currentValue}%`
                break;
        }

        displayField.value = expression;
        expression = result.toString();
        inputScreen.value = expression;
        shouldClearInput = true;
    }

    //Add event listener to each button
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if(button.classList.contains('clear-icon')){
                clearInputScreen();
            }
            else if(button.classList.contains('delete-icon')){
                deleteLastCharacter();
                console.log("button clicked");
                
            }
            else if(button.classList.contains('modulus-icon')){
                addOperator("%");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('divide-icon')){
                addOperator("/");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('multiply-icon')){
                addOperator("*");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('add-icon')){
                addOperator("+");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('minus-icon')){
                addOperator("-");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('toggle-sign-icon')){
                handleOperation("toggleSign");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('sqrroot-icon')){
                handleOperation("sqrt");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('exponent-icon')){
                addOperator("**");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('reciprocal-icon')){
                handleOperation("reciprocal");
                console.log("button clicked");
                
            }
            else if(button.classList.contains('percent-icon')){
                handleOperation("percentage");
                console.log("button clicked");
            }
            else if(button.classList.contains('equals-icon')){
                evaluateExpression();
                console.log("button clicked");
                
            }
            else{
                appendToExpression(button.innerText);
                console.log("button clicked");
            }
        })
    })
});

