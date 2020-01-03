//History value
function getHistory() {
  return document.getElementById('history').innerText;
}

function printHistory(num) {
  document.getElementById('history').innerText = num;
}

//Current value
function getOutputValue() {
  return document.getElementById('outputValue').innerText;
}

function printOutputValue(num) {
  num == "" ? document.getElementById('outputValue').innerText = num :
    document.getElementById('outputValue').innerText = getFormattedValue(num);
}

function getFormattedValue(num) {
  if (num == '-') {
    return '';
  }
  let n = Number(num);
  let value = n.toLocaleString('en');

  return value;
}

function revercseNumberFormat(num) {
  return Number(num.replace(/,/g, ''));
}

//operators logic
let operator = document.getElementsByClassName('operator');

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function() {
    if (this.id == 'clear') {
      printHistory('');
      printOutputValue('');
    } else if (this.id == 'backspace') {
      let output = revercseNumberFormat(getOutputValue()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutputValue(output);
      }
    }
    else {
      let output = getOutputValue();
      let history = getHistory();
      if (output == '' && history != '') {
        if(isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != '' || history != '') {
        output = output == '' ? output : revercseNumberFormat(output);
        history += output;
        if (this.id == '=') {
          let result = eval(history);
          printOutputValue(result);
          printHistory('');
        } else {
          history += this.id;
          printHistory(history);
          printOutputValue('');
        }
      }
    }
  });
}

//numbers logic
let number = document.getElementsByClassName('number');

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function() {
    let output = revercseNumberFormat(getOutputValue());
    if (output != NaN) {
      output += this.id;
      printOutputValue(output);
    }
  });
}
