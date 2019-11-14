const RPN = require("./RPN");

test("check if 1 2 + returns 3", () => {
  const subject = new RPN();
  expect(subject.rpn("1 2 +")).toBe(3);
});

test("check if 15 6 returns 9", () => {
  const subject = new RPN();
  expect(subject.rpn("15 6 -")).toBe(9);
});

test("check if 2 4 * returns 8", () => {
  const subject = new RPN();
  expect(subject.rpn("2 4 *")).toBe(8);
});

test("check if 15 3 / returns 5", () => {
  const subject = new RPN();
  expect(subject.rpn("15 3 /")).toBe(5);
});

test("check if no input returns 0", () => {
  const subject = new RPN();
  expect(subject.rpn()).toBe(0);
});

test("check if wrong symbol spits back error message", () => {
  const subject = new RPN();
  expect(subject.rpn("1 2 &")).toBe("Error: & is not a proper command");
});
