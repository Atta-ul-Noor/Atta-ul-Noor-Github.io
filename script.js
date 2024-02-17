let string = '';
let history = [];
let resultDisplayed = false;
let historyCounter = 1; // Initialize a counter for history entries

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                if (string == '') {
                    string = '';
                } else if (!resultDisplayed) {
                    let result = eval(string);
                    document.querySelector('input').value = result;

                    // Build the calculation history entry with a line break
                    let calculationHistoryEntry = `Calculation ${historyCounter}:\n${string} = ${result}`;
                    history.push(calculationHistoryEntry);

                    historyCounter++; // Increment the counter for the next calculation
                    document.getElementById("history").value = history.join("\n");
                    resultDisplayed = true;
                }
            } else if (e.target.innerHTML == 'AC') {
                string = '';
                document.querySelector('input').value = string;
                resultDisplayed = false;
            } else if (e.target.innerHTML == 'C') {
                string = string.toString().slice(0, -1);
                document.querySelector('input').value = string;
            } else {
                if (resultDisplayed) {
                    string = ''; // Clear the string if the result is displayed
                    resultDisplayed = false;
                }
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        } catch (error) {
            if (e.target.innerHTML == '=') {
                document.querySelector('input').value = "Error";
                string = '';
            }
        }
    });
});
