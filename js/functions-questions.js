/*
1.Look at the following function printCountryDetails().
a) Write a line of code that will call this function, (slide 4)
b) Add a parameter to the function, call the parameter name. When the function is called an argument should specify the name of the country e.g. printCountryDetails("England"); (slide 7)
c) Add additional parameters for the continent, capital city and population of the country. (slides 7-10)
d) Make several function calls to print out the details of different countries
*/

function printCountryDetails()
{
	console.log("England is in Europe. It has a capital city of London and a population of 53 million");
}

/*
2. Look at the following function, changePage().
a) Add line of code that will call the function changePage. The page should change colour to red.(slide 4)
b) Add a parameter to this function that will specify the colour the background should change to.(slide 7)
c) Add a second parameter that will allow the user to specify the font for the text in the page. To change the font you will need to use document.body.style.fontFamily.(slides 7-10)
*/


function changePage()
{
 document.body.style.backgroundColor="red";
}



/*
3. Look at the following function getWeather(), it returns a string.
Write a line of code that will call this function and display the returned value in the console (slide 11)
*/

function getWeather(){
	return "Wet and cold";
}

/*
4. The following function converts a measurement in miles to kilometres (1 mile = 1.60934km). Write a program that will ask the user for a distance in miles, call this function to convert the miles to kilometres, and then display the distance in kilometres in the console. (slide 13)
*/

function convertMilesToKm(miles)
{
	return miles*1.60934
}

/*
5. At the end of your degree course, the University needs to decide if it will award you a degree.
In order to obtain a degree you need to have accumulated 360 credits.
Write a program that will ask the user how many credits they have.
The program should call awardDegree() and feedback to the user telling them if they can be awarded a degree. (slide 16)
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
6. Modify your answer to Question 1 so that the function accepts a single argument. This argument should be a country with continent, capital city and population properties. The function should print the country's details. The following shows example code that would call this function. (slide 17)
*/

//const country = {name : "England", capital : "London", continent : "Europe", population: 53000000};
// printCountryDetails(country);

/*
7. Modify your answer to Question 1 again so that the function accepts a single argument. This time the  argument should be an array of country objects. The following shows example code that would call this function. (slide 21)
*/

/*
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
]

printCountryDetails(countries);
*/

/*
These are harder questions. You can see them as being optional. You only need to attempt them if you want more practice and want to challenge yourself.
*/

/*
8. Write a function called calcAverage(). The calcAverage() function should accept three numbers as arguments. The function should calculates the average of the three numbers return the mean average of these numbers.The following shows example code that would call this function.
*/

// const ave = calcAverage(25,40,25);
// console.log(`The average is ${ave}`); //30

/*
9. Look at the following function calls.
These lines of code call a function and pass three argument.
These arguments represent the length of the sides of a triangle.
The function should work out if the triangle is an equilateral triangle (all sides the same length), an isosceles triangle (two sides of the same length), or a scaline triangle (all sides different lengths. The function should return a string either ‘equilateral’, ‘scalene’ or ‘isosceles’. Write the typeOfTriangle function and test it
works.
*/

// console.log(typeOfTriangle(2,4,2)); //should output isoceles
// console.log(typeOfTriangle(2,2,2)); //should output equilateral
// console.log(typeOfTriangle(1,2,3)); //should output scalene

/*
10. Uncomment the following code. Write some additional code that will:
a) Call the functions addStudents, getPassMark and getPassingStudents, and then print out the list of passing students in the console.
b) Create an additional function called printStudents. printStudents will need to accept a single argument, an array of student objects. The function will then print the name of each student in this array to the console. The function doesn't need to return anything. Modify the answer to (a) so that you use the printStudents function.
c) Create an additional function called getHighestMarkStudent. getHighestMarkStudent will need to accept a single argument, an array of student objects. The function should then return the student with the highest mark.
*/

/*
function getNewStudent()
{
  const firstName = prompt("Enter a first name");
  const lastName = prompt("Enter a last name");
  const mark = parseInt(prompt(`What mark did ${firstName} ${lastName} get?`));
  const newStudent = {firstName: firstName, lastName: lastName, mark: mark};
  return newStudent;
}
function addStudents()
{
	const students=[];
  const howMany=parseInt(prompt("How many students details would you like to enter?"));
  for(let i=0;i<howMany;i++){
      const student = getNewStudent();
      students.push(student);
  }
  return students;
}
function getPassMark(){
	const passMark = parseInt(prompt("What is the pass mark?"));
	return passMark;
}
function getPassingStudents(arrOfStudents,passMark)
{
	const passingStudents = arrOfStudents.filter(function(student){
		if(student.mark>passMark){
			return true;
		}
		return false;
	});
	return passingStudents;
}
*/

/*
11. Previously we looked at a program that calculates an employee's wage based on the number of hours they have worked.Re-structure this code to use a number of functions - getUserHours(), validHours(), calcWages() and printWages().Here's some example code to show how these functions could be used
*/

// const hours = getUserHours();
// if(validHours(hours)){
// 	const wages = calcWages(hours);
// 	printWages(hours, wages);
// }else{
// 	console.log("You need to enter a number between 1 and 80");
// }
