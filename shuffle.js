// array creation with integers from 1 to 49
var arr=[];i=1;while(arr.push(i++)<49);


for (j=0; j<1; j++) {
	
	arr = shuffle(arr);
	var draw = arr.slice(0,6);
	draw.sort();
document.write("<br>");
document.write("Unsorted:");	
	for (i=0; i<6; i++) { document.writeln("["+arr[i]+"]"+" ")}
document.write("<br>");	
document.write("Sorted:");	
	for (i=0; i<6; i++) { document.writeln("["+draw[i]+"]"+" ")}
document.write("<br>");
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


