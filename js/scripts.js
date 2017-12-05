var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames)

var newName = 'Marian'

 if (  allNames.indexOf(newName) === -1)
 {
 	var sprawdzone = allNames.push(newName)
 }else {
 	condole.log("Podane imię już istnieje w tablicy")
 }

 console.log(allNames);

var stringWithArray = allNames.toString();
console.log(stringWithArray);
