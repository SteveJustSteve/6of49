// Used like so
arr=[];i=1;while(arr.push(i++)<50);
for (j=0; j<6; j++) {
   

	

	arr = shuffle(arr);

	for (i=0; i<6; i++) {
 
   		document.writeln("["+arr[i]+"]"+" ");
   		

   

	}

document.write("<br>");
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


