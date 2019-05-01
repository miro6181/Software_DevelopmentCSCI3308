
describe("Test add() method", function() {
 	var calc;
    //This will be called before running each spec
    beforeEach(function() {
        calc = new Calculator(); //Create a calculator object to call our math operations
    });

    /*
    *  Example Test Case for Addition Operation
    */
   it("Check addition, two positive values", function() {

        expect( calc.add(1,2) ).toEqual(3);
    });

   it("Check addition, two negative values", function() {

        expect( calc.add(-7,-5) ).toEqual(-12);
    });
});

/*
* Create a new test suit with two new test cases for sub() method
*/
describe("Test sub() method", function() {
 	var calc;
    beforeEach(function() {
        calc = new Calculator(); //Create a calculator object to call our math operations
    });

   it("Check subtraction, two positive values", function() {

        expect( calc.sub(5,1) ).toEqual(4);
    });

   it("Check subtraction, one negative subtracted from one positive value", function() {

        expect( calc.sub(7,-5) ).toEqual(12);
    });
});
/*
* Create a new test suit with two new test cases for multiply() method
*/
describe("Test multiply() method", function() {
 	var calc;
    beforeEach(function() {
        calc = new Calculator(); //Create a calculator object to call our math operations
    });

   it("Check multiplication, two positive values", function() {

        expect( calc.multiply(5,2) ).toEqual(10);
    });

   it("Check multiplication, one negative & one positive value", function() {

        expect( calc.multiply(5,-5) ).toEqual(-25);
    });
});
/*
* Create a new test suit with two new test cases for divide() method
*/
describe("Test divide() method", function() {
 	var calc;
    beforeEach(function() {
        calc = new Calculator(); //Create a calculator object to call our math operations
    });

   it("Check division, divide by zero", function() {

        expect( calc.divide(5,0) ).toEqual("Unable to divide by zero.");
    });

   it("Check division, two positive numbers", function() {

        expect( calc.divide(9,3) ).toEqual(3);
    });
});
