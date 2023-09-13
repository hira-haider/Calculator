let string = "";
let buttons = document.querySelectorAll('.container button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = new Function('return ' + string)();
        document.querySelector('input').value = string;
      } 
      catch (error) {
        document.querySelector('input').value = 'Error';
      }
    } 
    else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } 
    else if (e.target.innerText === '⌫') { 
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } 
    else if (e.target.innerHTML === '/') {
      string += '/';
      document.querySelector('input').value = string;
    } 
    else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});

