/*
1.
/*
//a
function printCountryDetails()
{
	console.log("England is in Europe. It has a capital city of London and a population of 53 million");
}
printCountryDetails();
*/

/*
//b
function printCountryDetails(name)
{
	console.log(`${name} is in Europe. It has a capital city of London and a population of 53 million`);
}
printCountryDetails("England");
*/

/*
//c and d
function printCountryDetails(country, continent, capital, population)
{
    console.log(`${country} is in ${continent}. It has a capital city of ${capital} and a population of ${population}`);
}
printCountryDetails("England","Europe","London","53 million");
printCountryDetails("France","Europe","Paris","67 million");
printCountryDetails("Japan","Asia","Tokyo","120 million");
*/

/*
2.
*/

/*
//a
function changePage()
{
 document.body.style.backgroundColor="red";
}
changePage();
*/

/*
//b
function changePage(bgCol)
{
 document.body.style.backgroundColor=bgCol;
}
changePage("pink");
*/

/*
//c
function changePage(bgCol,font)
{
 document.body.style.backgroundColor=bgCol;
 document.body.style.fontFamily=font;
}
changePage("red","Arial");
*/


/*
3.
*/

/*
function getWeather(){
    return "Wet and cold";
}
console.log(getWeather())
*/

/*
4.
*/

/*
function convertMilesToKm(miles)
{
	return miles*1.60934
}
const userMiles = parseInt(prompt("Enter a number of miles?"));
const kms = convertMilesToKm(userMiles);
console.log(`${userMiles} miles is ${kms}kms`);
*/

/*
5. 
*/

/*
function awardDegree(credits)
{
	if(credits<360)
 	{
 		return false;
 	}
 	return true;
}
const userCredits = prompt("How many credits do you have?")
if(awardDegree(userCredits)){
    console.log("Well done.")
}else{
    console.log("Sorry, not enough credits.")
}
*/

/*
6.
*/

/*
function printCountryDetails(country)
{
    console.log(`${country.name} is in ${country.continent}. It has a capital city of ${country.capital} and a population of ${country.population}.`);
}

const country = {name : "England", capital : "London", continent : "Europe", population: 53000000};
printCountryDetails(country);
*/

/*
7.
*/

/*
function printCountryDetails(countries)
{
	countries.forEach(function(country){
		console.log(`${country.name} is in ${country.continent}. It has a capital city of ${country.capital} and a population of ${country.population}.`);
	})
}

const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
]

printCountryDetails(countries);
*/




/*
8. 
*/

/*
function calcAverage(num1,num2,num3)
{
    const total = (num1+num2+num3)/3;
    return total;
}

const ave = calcAverage(25,40,25);
console.log(`The average is ${ave}`); //30
*/

/*
9. 
*/

/*
function typeOfTriangle(side1,side2,side3)
{
    if(side1===side2 && side1===side3){
        return "equilateral";
    }else if(side1===side2 || side1===side3 || side2===side3){
        return "isosceles";
    }
    return "scalene"
}
console.log(typeOfTriangle(2,4,2)); //should output isoceles
console.log(typeOfTriangle(2,2,2)); //should output equilateral
console.log(typeOfTriangle(1,2,3)); //should output scalene
*/

/*
10. 
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

function printStudents(arrOfStudents)
{
     arrOfStudents.forEach(function(student){
         console.log(`${student.firstName} ${student.lastName} : ${student.mark}`)
     })
}

function getHighestMarkStudent(arrOfStudents)
{
    const highestMarkStudent = arrOfStudents.reduce(function(curr,next){
	if(curr.mark>next.mark){
		return curr;
	}
	return next;
    });
    return highestMarkStudent;
}

/*
const passMark = getPassMark();
const students = addStudents()
const passingStudents = getPassingStudents(students,passMark);
printStudents(passingStudents);
const highestStudent = getHighestMarkStudent(students);
console.log(`The student with the highest mark is ${highestStudent.firstName} ${highestStudent.lastName}.`)
*/

/*
11.
*/

/*
function getUserHours()
{
    const hours=parseInt(prompt("Enter the number of hours you have worked"));
    return hours;
}

function validHours(hours)
{
    if(isNaN(hours) || hours<1 || hours>80){
        return false
    }
    return true;
}

function calcWages(hours)
{
    let wages;
    if(hours>40){
        const overtimeHours = hours-40;
        wages = overtimeHours*3 + 40*2
    }else{
        wages = hours*2
    }
    return wages;
}

function printWages(hours,wages)
{
    console.log(`You worked ${hours} hours. You earnt £${wages}.`);
}

const hours = getUserHours();
if(validHours(hours)){
    const wages = calcWages(hours);
    printWages(hours, wages);
}else{
    console.log("You need to enter a number between 1 and 80");
}
*/
