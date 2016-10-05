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
