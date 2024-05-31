## Functions

### Basic Function Syntax
A function is simply a block of code we give a name to, in this example *showMessage*
```javascript
function showMessage(){
    console.log("printing some details")
}
```
### Calling Functions
To run the code in a function we simply write the function name and some parentheses (curved brackets()).
```javascript
function showMessage(){
    console.log("printing some details")
}
showMessage(); //outputs 'printing some details'
```
### Function Arguments and Parameters
Arguments allow us to pass data into a function. In this example
* "Jane" is an argument
* *name* is a parameter
```javascript
function showMessage(name){
    console.log(`name - ${name}`)
}
showMessage("Jane"); 
```
Outputs
```
name - Jane
```

### Multiple Arguments
We can specify multiple arguments by separating them with a comma
```javascript
function showMessage(name, course){
    console.log(`name - ${name}`);
  	console.log(`course - ${course}`);
}
showMessage("Jane","IT");
```
Outputs
```
name - Jane
course - IT
```

### Different Data Types
It's not just numbers and strings that can be arguments. We can pass any data type. This example passes an array as an argument.
```javascript
function printNames(namesArr){
    namesArr.forEach(function(name){
      console.log(name);
    })
}
const allStudents=["Jane","Imran","Zofia"]
printNames(allStudents);
```
Outputs
```
Jane
Imran
Zofia
```

This example uses an object.
```javascript
function printStudent(student){
    console.log(`name:${student.name}`);
    console.log(`course:${student.course}`);
    console.log(`mark:${student.mark}`);
}
const someStudent={name:"Jane",course:"IT", mark:67};
printStudent(someStudent);
```
Output
```
name:Jane
course:IT
mark:67
```
This example uses an array of objects
```javascript
function printStudents(studentsArr){
  studentsArr.forEach(function(student){
    console.log(`${student.name} has a mark of ${student.mark}`);
  })
}
const students=[
  {name:"Jane",course:"IT", mark:67},
  {name:"Imran",course:"BACB", mark:82},
  {name:"Pete",course:"BACB", mark:38},
  {name:"Zofia",course:"Web Design", mark:72}
];
printStudents(students);
```
Outputs
```
Jane has a mark of 67
Imran has a mark of 82
Pete has a mark of 38
Zofia has a mark of 72
```

## Returning Values
Functions can *return* (send data back) values. Here's an example:
```javascript
function hasPassed(mark){
    if(mark<40)
    {
        return false;
    }
    return true;
}
console.log(hasPassed(50)) //outputs true
```
Here's another example
```javascript
function square(num){
    return num*num;
}
console.log(square(4)) //outputs 16

```
Again,we can work with any data type e.g. Objects
```javascript
function hasPassed(student){
    if(student.mark>=40){
       return true;
    }else{
      return false;
    }
}

const someStudent={name:"Jane",course:"IT", mark:67}
if(hasPassed(someStudent)){
 	console.log(`${someStudent.name} has passed.`); // Jane has passed.
}
```
This example uses arrays.

```javascript
function longNames(namesArr){
    const matches = namesArr.filter(function(name){
      if(name.length>4){
        return true;
      }else{
        return false;
      }
    })
  return matches
}

var allStudents=["Jane","Imran","Zofia"]
console.log(longNames(allStudents));
```
Outputs
```
Array ["Imran", "Zofia"]
```
And this example uses an array of objects:

```javascript
function getPassingStudents(studentsArr){
  const passingStudents = studentsArr.filter(function(student){
    if(student.mark>=40){
        return true;
    }else{
      return false;
    }
  })
  return passingStudents;
}

const students=[
  {name:"Jane",course:"IT", mark:67},
  {name:"Imran",course:"BACB", mark:82},
  {name:"Pete",course:"BACB", mark:38},
  {name:"Zofia",course:"Web Design", mark:72}
];

const studentsThatPassed = getPassingStudents(students);

studentsThatPassed.forEach(function(student){
    console.log(`${student.name} has passed.`);
  })
```
Outputs
```
Jane has passed.
Imran has passed.
Zofia has passed.
```

## Different ways of writing functions (function expressions)
The example from above can be re-written as a *function expression*.

```javascript
const showMessage = function(name){
    console.log(`name - ${name}`)
}
```

This function is anonymous i.e. it doesn't have a name. Instead it is assigned to a variable and can be called by referring to the variable.

```javascript
showMessage("Jane"); //outputs name - Jane
```

## Different ways of writing functions (arrow functions)
Recent versions of JavaScript also support the use of arrow functions. The example from above can be re-written as an *arrow function*.

```javascript
const showMessage = (name) =>  console.log(`name - ${name}`)
```

Arrow functions provide a shorter more concise syntax. 
