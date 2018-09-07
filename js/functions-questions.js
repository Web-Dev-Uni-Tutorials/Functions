/*
1.Look at the following function printCountryDetails().
a) Write a line of code that will call this function
b) Add a parameter to the function call the parameter name. When the function is called an argument should specify the name of the country e.g. printCountryDetails("England");
c) Add additional parameters for the continent, capital city and population of the country.
d) Make several function calls to print out the details of different countries
*/

function printCountryDetails()
{
	console.log("England is in Europe. It has a capital city of London and a population of 53 million");
}

/*
2. Look at the following function changePage().
a) Add line of code that will call the function changePage. The page should change colour to red.
b) Add a parameter to this function that will specify the colour the background should change to.
c) Add a second parameter that will allow the user to specify the font for the text in the page. To change the font you will need to use document.body.style.fontFamily. 
*/


function changePage()
{
 document.body.style.backgroundColor="red";
}



/*
3. Look at the following function getWeather(), it returns a string. 
Write a line of code that will call this function and display the returned value in the console
*/

function getWeather(){
	return "Wet and cold";
}

/*
4. At the end of your degree course, the University needs to decide if it will award you a degree. 
In order to obtain a degree you need to have accumulated 360 credits. 
Write a program that will ask the user how many credits they have. 
The program should call awardDegree() and feedback to the user telling them if they can be awarded a degree.
*/

function awardDegree(credits)
{
	if(credits<360)
 	{
 		return false;
 	}
 	return true;
}


/*
5. Write a function that will add convert a measurement in miles to kilometers (1 mile = 1.60934km). Here's some code to show how this function could be used.
*/


// const userNum=parseInt(prompt("Enter a number"));
// console.log(convertMilesToKm(userNum)); //if the user enters 6, the console log should output 9.65606



/*
6. Look at the following code that calls a function calcAverage(). 
The calcAverage() function should calculate the average of the three numbers that are passed as arguments and return the average. 
Write the calcAverage() function and test this works. Here's some code to show how this function could be used.
*/


// const ave = calcAverage(25,40,25);
// console.log(`The average is ${ave}`); //30


/*
6. 
a) Previously we created a program for calculating a student’s overall module mark based on their HTML and JavaScript scores. 
Write a function that will accept two arguments (HTML and JavaScript mark) and return an overall module mark. 
Here's some code to show how this function could be used.
*/


// const userHtml=parseInt(prompt("Enter a your HTML score")); 
// const userJs=parseInt(prompt("Enter a your JavaScript score"));
// console.log(`You scored ${calcOverall(userHtml,userJs)}`);


/*
b) If you can get this to work write another function that validates the user input e.g. has the user entered a number between 0 and 100. 
Again, here's some code to show how this function could be used.
*/

// const userHtml=parseInt(prompt("Enter a your HTML score"));
// const userJs=parseInt(prompt("Enter a your JavaScript score"));

// if(isValidScore(userHtml) && isValidScore(userJs)){
// 	console.log(`You scored ${calcOverall(userHtml,userJs)}`);
// }else{
// 	console.log("Invalid data");
// }


/*
6. Look at the following function calls. 
These lines of code call a function and pass three argument.
These arguments represent the length of the sides of a triangle. 
The function should work out if the triangle is an equilateral triangle (all sides the same length), an isosceles triangle (two sides of the same length), or a scaline triangle (all sides different lengths. The function should return a string either ‘equilateral’, ‘scalene’ or ‘isosceles’. Write the typeOfTriangle function and test it
works.
*/


// console.log(typeOfTriangle(2,4,2)); //should output isoceles
// console.log(typeOfTriangle(2,2,2)); //should output equilateral
// console.log(typeOfTriangle(1,2,3)); //should output scalene


/*
Previously we looked at a program that calculates an employee's wage based on the number of hours they have worked. 
Re-structure this code to use a number of functions - getUserHours(), validHours(), calcWages() and printWages().
Here's some example code to show how these functions could be used
*/

// const hours = getUserHours();
// if(validHours(hours)){
// 	const wages = calcWages(hours);
// 	printWages(hours, wages);
// }else{
// 	console.log("You need to enter a number between 1 and 80");
// }
