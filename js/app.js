const nums = document.querySelectorAll('.num');
let display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

const calculator = {
  num1: 0,
  num2: 0,
  operation: 'blank',
  getInput: () => {
    const num = Number(display.innerText);
    display.innerText = '';
    return num;
  },
  setOperation: () => {},
  setNum1: () => {
    calculator.num1 = calculator.getInput();
  },
  setNum2: () => {
    calculator.num2 = calculator.getInput();
  },
  calculate: (operation, num1, num2) => {
    switch (operation) {
      case 'sum':
        return num1 + num2;
      case 'sub':
        return num1 - num2;
      case 'mul':
        return num1 * num2;
      case 'div':
        return num1 / num2;
      default:
        return 'ERROR';
    }
  },
};

function handleNumClick() {
  display.innerText += this.dataset.num;
}

function handleOperatorClick() {
  calculator.operation = this.dataset.op;
  calculator.setNum1();
}

function handleEqualsClick() {
  calculator.setNum2();
  display.innerText = calculator.calculate(
    calculator.operation,
    calculator.num1,
    calculator.num2
  );
}

function handleClearClick() {
  display.innerText = '';
  calculator.num1 = 0;
  calculator.num2 = 0;
  calculator.operation = 'blank';
}

nums.forEach((num) => num.addEventListener('click', handleNumClick));
operators.forEach((operator) =>
  operator.addEventListener('click', handleOperatorClick)
);
equalsBtn.addEventListener('click', handleEqualsClick);

clearBtn.addEventListener('click', handleClearClick);
