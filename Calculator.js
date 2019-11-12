class Calculator {
  constructor(int) {
    this.num = int;
    this.add = function(ext) {
      this.num = this.num + ext;
      return this;
    };
    this.sub = function(ext) {
      this.num = this.num - ext;
      return this;
    };
    this.mul = function(ext) {
      this.num = this.num * ext;
      return this;
    };
    this.div = function(ext) {
      this.num = this.num / ext;
      return this;
    };
    this.equals = function() {
      return this.num;
    };
    this.clear = function() {
      this.num = 0;
      return this;
    };
  }
}

module.exports = Calculator;

// Works
// let test = new Calculator(5);
// console.log(test.add(3).equals());
