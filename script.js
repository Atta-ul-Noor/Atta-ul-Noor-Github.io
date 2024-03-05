let string = '';
let history = [];
let resultDisplayed = false;
let historyCounter = 1;
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                if (string == '') {
                    string = '';
                } 
                
                else if (!resultDisplayed) {
                    let result = eval(string);
                    document.querySelector('input').value = result;

                    let calculationHistoryEntry = `Calculation ${historyCounter}:\n${string} = ${result}`;
                    history.push(calculationHistoryEntry);

                    historyCounter++;
                    document.getElementById("history").value = history.join("\n\n");
                    resultDisplayed = true;
                }
            } 
            
            else if (e.target.innerHTML == 'AC') {
                string = '';
                document.querySelector('input').value = string;
                resultDisplayed = false;
            } 
            
            else if (e.target.innerHTML == 'C') {
                string = string.toString().slice(0, -1);
                document.querySelector('input').value = string;
            } 
            
            else {
                if (resultDisplayed) {
                    string = '';
                    resultDisplayed = false;
                }
            
                string = string + e.target.innerHTML;
                const inputElement = document.querySelector('input');
                inputElement.value = string;
                inputElement.scrollLeft = inputElement.scrollWidth;
            }
        }
        
        catch (error) {
            if (e.target.innerHTML == '=') {
                document.querySelector('input').value = "Error";
                string = '';
            }
        }
    });
});