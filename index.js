document.addEventListener('DOMContentLoaded', function() {
    let display = document.querySelector('.calculator__display');
    let buttons = document.querySelectorAll('.calculator__functions button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let value = button.getAttribute('value');
            if (value === 'clear') {
                display.textContent = '0';
            } else if (value === '=') {
                try {
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
            }
        });
    });
});
