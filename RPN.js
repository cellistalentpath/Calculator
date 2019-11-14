class RPN {
  constructor() {
    this.rpn = string => {
      if (string != null) {
        let array = string.split(" ");
        let num1 = null;
        let result = null;
        for (let i = 0; i < array.length; i++) {
          let parsed = parseInt(array[i]);
          if (isNaN(parsed)) {
            switch (array[i]) {
              case "+":
                result = result + num1;
                break;
              case "-":
                result = result - num1;
                break;
              case "/":
                result = result / num1;
                break;
              case "*":
                result = result * num1;
                break;
              default:
                return "Error: " + array[i] + " is not a proper command";
            }
          } else {
            if (result === null) {
              result = parsed;
            } else {
              num1 = parsed;
            }
          }
        }
        return result;
      } else {
        return 0;
      }
    };
  }
}

module.exports = RPN;

// Works
let test1 = new RPN();
console.log(test1.rpn("1 2 + 7 - 2 6 9 6 *"));
