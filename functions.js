/*Create a function that can be used with sort. This function should take two 
strings, and return a value that sort can use to determine which is the longest
string. Finally, create an array of strings and try to get it sorted using your
new function.*/
function longString(arr){
 
  return arr.sort(function(a,b){
    return b.length - a.length;
  });  
}

console.log(longString(['lol','crono','jameson']));

/*Create an array of objects (don’t need to use new here, just regular object
literals). These objects will contain a name and email property. Then, run some
code that will sort your array by the longest name. Then, run some code that
will sort your array by e-mail address in alphabetical order. */

var jones = {
  name: "Jonesy",
  email: "Bones@gmail.com"
}
var nadia = {
  name: "Nadia",
  email: "Adia@gmail.com"
}
var leena = {
  name:"Baleena",
  email: "Ceena@gmail.com"
}

var myPpls = [];
myPpls.push(jones, nadia, leena);
  myPpls.sort(function(a,b){
  return b.name.length - a.name.length; 
});

function makeLower(){
for(var i= 0; i < myPpls.length; i++){
 myPpls[i].name = myPpls[i].name.toLowerCase();
  myPpls[i].email = myPpls[i].email.toLowerCase();
  }
  return myPpls;
}
console.log(makeLower());

myPpls.sort();
myPpls.reverse();

console.log(myPpls);

/*Create a function that can be used with Array.prototype.map. This function 
should take a number and return its square. Then, use this function with map
on an array of numbers to check the result.*/
var numz = [2,4,6,7,9,45,232];

function sqr(arr){
  return arr.map(function(ass){
    return ass*ass;
  });
}

console.log(sqr(numz));

/*Create a function that can be used with Array.prototype.map. This function 
should be able to take an object and square its “num” property. Then, use this 
function with map on an array of objects each containming a “num” property.*/
function sqrProp(arr){
  return arr = arr.map(function(obj){
    obj.num = obj.num * obj.num;
    return obj;
  });       
}

var someArr = [
  {num: 5},
  {num: 10},
  {num: 15}
];

console.log(sqrProp(someArr));

/*In a previous workshop, you had to create a function that took two numbers and
an operation (add, sub, mult, …) and returned the result of the operation on the
two numbers. Here we are going to do the same but at a higher order. Create a 
function called operationMaker that takes only a string called operation as 
argument. This string could be “add”, “subtract”, “mult” or “div”. Your function
will return a function that will take two numbers and return the result of 
running operation on these numbers.*/
function operationMaker(operation){
  return function decider(num1, num2){
    switch(operation){
      case "add": return num1 + num2;
      case "subtract": return num1 - num2;
      case "mult": return num1 * num2;
      case "div": if(num1 > num2){
        return num1/num2;
      }else {
        return num2/num1;
      }
        
      default: return 0;
    }
  }
}

var adder = operationMaker("add");
var sum = adder(5,15);
console.log(sum)


