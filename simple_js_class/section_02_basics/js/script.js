// VERY BASIC STUFF

/*
console.log("Some Text Here");

var firstName = "Jason";
var lastName = "G";

console.log(firstName + " " + lastName);

// multi - declaration
var lastName, favNumber;
middleName = "W";
favNumber = 31;

var favColor = prompt('fave color');

console.log('your fave color is ' + favColor);

console.log(typeof favColor);
*/

/*
CODING CHALLENGE 1
--------------------
Mark and John are trying to compare their BMI(Body Mass Index), BMI = kg / m2

1. Store Mark 's and John's mass and height in variables

2. Calculate both their BMIs

3. Create a boolean variable containing information about whether Mark has a higher BMI thanJohn.

4. Print a string to the console containing the variable from step 3.(Something like "Is Mark's BMI higher than John's? true").
*/
/*
var markWeight, markHeight, markBmi, johnWeight, JohnHeight, johnBmi;
markWeight = 90;
markHeight = 2.4;
johnWeight = 88;
johnHeight = 1.8;

markBmi = markWeight / (Math.pow(markHeight, 2));
johnBmi = johnWeight / (Math.pow(johnHeight, 2));

markOverJohn = (markBmi > johnBmi);

console.log('is mark fatter than john? ' + markOverJohn);
*/

/*
CODING CHALLENGE 2
----------------------
John and Mike both play basketball in different teams.  In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average(highest average score), and print the winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/
/*
johnScores = [89, 120, 103];
mikeScores = [116, 94, 123];
maryScores = [97, 134, 105];

let average = (array) => array.reduce((a, b) => a + b) / array.length;

johnAvg = average(johnScores);
mikeAvg = average(mikeScores);
maryAvg = average(maryScores);

var winner = "There is a draw";

if (johnAvg != mikeAvg) {
    johnAvg > mikeAvg ? winner = "John" : winner = "Mike";
}

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    winner = "John is the Winner with " + johnAvg + " points";
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    winner = "Mike is the Winner with " + johnAvg + " points";
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
    winner = "Mary is the Winner with " + johnAvg + " points";
} else {
    winner = "There is a draw";
}

console.log(winner);
*/

/*
CODING CHALLENGE 3
--------------------
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268. To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20 % of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:

1) Containing all three tips(one for each bill)
2) Containing all three final paid amounts(bill + tip).

(NOTE: To calculate 20 % of a value, simply multiply it with 20 / 100 = 0.2)
*/
/*
var bills = [124, 48, 268];
var tips = [];
var final = [];

bills.forEach(function (e) {
    if (e < 50) {
        tips.push("$" + (e * .2).toFixed(2));
        final.push("$" + (e * 1.2).toFixed(2));
    } else if (e < 200) {
        tips.push("$" + (e * .15).toFixed(2));
        final.push("$" + (e * 1.15).toFixed(2));
    } else {
        tips.push("$" + (e * .1).toFixed(2));
        final.push("$" + (e * 1.1).toFixed(2));
    }
});

console.log(tips);
console.log(final);
*/

/*
CODING CHALLENGE 4
--------------------
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height

2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and return it from the method.

3. In the end, log to the console who has the highest BMI, together with the full name and respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter)
*/
/*
var john = {
    fullName: 'John',
    height: 2.5,
    weight: 486,
    calcBmi: function (){
        this.bmi = this.weight / (this.height * this.height);
    }
};

var mark = {
    fullName: 'Mark',
    height: 2.1,
    weight: 994,
    calcBmi: function (){
        this.bmi = this.weight / (this.height * this.height);
    }
};

mark.calcBmi() > john.calcBmi() && mark.bmi !== john.bmi ? console.log("mark is bigger " + mark.bmi) : console.log("john is bigger " + john.bmi);

console.log(mark.bmi)
console.log(john.bmi);
*/
/*
CODING CHALLENGE 5
--------------------
 Remember the tip calculator challenge? Let 's create a more advanced version using everything we learned! This time John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42. John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200. Implement a tip calculator using objects and loops:

 1. Create an object with an array for the bill values

 2. Add a method to calculate the tip

 3. This method should include a loop to iterate over all the paid bills and do the tip calculations

 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

 EXTRA AFTER FINISHING: Mark' s family also went on a holiday, going to 4 different restaurantThe bills were $77, $375, $110, and $45.Mark likes to tip 20 % of the bill when the bill is less than $100, 10 % when the bill is between $100 and $300, and 25% if the bill is more than $300(different than John).

 5. Implement the same functionality as before, this time using Mark 's tipping rules

 6. Create a function (not a method) to calculate the average of a given array of tips. HINT:Loop over the array, and in each iteration store the current sum in a variable (starting fro0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)

 7. Calculate the average tip for each family

 8. Log to the console which family paid the highest tips on average
*/
/*
var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    final: [],
    calcAmounts: function () {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips.push("$" + (this.bills[i] * .2).toFixed(2));
                this.final.push("$" + (this.bills[i] * 1.2).toFixed(2));
            } else if (this.bills[i] < 200) {
                this.tips.push("$" + (this.bills[i] * .15).toFixed(2));
                this.final.push("$" + (this.bills[i] * 1.15).toFixed(2));
            } else {
                this.tips.push("$" + (this.bills[i] * .1).toFixed(2));
                this.final.push("$" + (this.bills[i] * 1.1).toFixed(2));
            }
        }
    }
}

john.calcAmounts();
console.log(john);

// Mark problem, see #2 and forEach I used

*/