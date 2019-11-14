# Calculator
This is an example of how to create and utilize unit tests. First, we have a simple Calculator class that we have exported as a module so that
we can import it into our Calculator.test.js. Use the command `npm init -fy` to create your package.json file or leave off the -fy if
you do not want the defaults. Use the command `npm install --save-dev jest` to install the jest node module.

After you have done that, read the Calculator.test.js file carefully while reading the instructions on the jest 
website here: https://jestjs.io/docs/en/getting-started. Ensure that the "test" section of the "scripts" section of your 
package.json file only contains "jest". Finally, navigate to that directory in a command line prompt/git bash and type `npm run test`. The tests cover 100% of the code and should hopefully all pass!

# RPN 
This class implements a single function .rpn which takes a string such as "1 2 + 7 - 2 * " and performs the operation on the previous two
numbers or the previous number and the currently held result. The test cases for this function cover 100% of the code.
