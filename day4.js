var thisClassroom = {
	pencil: 1,
  students: 10,
  lights: "not working so well",
  fireAlarm: "working",
 	array: [0, 10, 9],
  chairs: {
  	color: "black",
    amount: 10
  }
}

delete thisClassroom.pencil;

/* console.log(Object.keys(thisClassroom));

console.log(Object.values(thisClassroom));
 */
//console.log('pencil' in thisClassroom);

var otherObject = new Object({
	value: "key"
});

var students = [
{name: "Debbi", hobbies: "Cutting hair"},
{name: "Guido", hobbies: "Muay Thai"},
{name: "Paulo", hobbies: "food"}
];

console.log(students[2].hobbies);

var twoDimensionalArray = [
	[1,3,4,5,6,7,8,9,9],
  [4,5,8,3,4,6,7,8,8],
  [4,3,4,7,8,9,0,4,5]
]

//console.log(twoDimensionalArray[1][0]);

var Http = new XMLHttpRequest();
var url='https://api.tvmaze.com/shows/82/cast';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = function() {
  if(this.readyState== 4 && this.status == 200) {
    var result = JSON.parse(Http.responseText);
    
    console.log(result[1].character.name);
  }
}
