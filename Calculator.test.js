const Calculator = require("./Calculator");

test("add 3 + 4 to equal 7", () => {
  const subject = new Calculator(3);
  expect(subject.add(4).equals()).toBe(7);
});

test("subtract 13 - 6 to equal 7", () => {
  const subject = new Calculator(13);
  expect(subject.sub(6).equals()).toBe(7);
});

test("multiply 6 * 7 to equal 42", () => {
  const subject = new Calculator(6);
  expect(subject.mul(7).equals()).toBe(42);
});

test("div 30 / 6 to equal 5", () => {
  const subject = new Calculator(30);
  expect(subject.div(6).equals()).toBe(5);
});

test("clear the calculator, which starts with 42", () => {
  const subject = new Calculator(42);
  expect(subject.clear().equals()).toBe(0);
});

test("check if equals returns 5 after starting with 5", () => {
  const subject = new Calculator(5);
  expect(subject.equals()).toBe(5);
});
