var x = "x"
var o = "o"
count = 0

function playGame(){
$('#game li').click(function(){
	if ($(this).hasClass(x)|| $(this).hasClass(o)){
		checkForWin();
		alert('This space has already been selected. Please choose another.')
	}
	else if (count%2 == 0) {
		count++
	$(this).text(o).addClass(o)
	checkForWin();
}
else { 
	$(this).text(x).addClass(x)
	count ++
	checkForWin();
}})
}
playGame();

function checkForWin(){
	if ($('#one').hasClass(o) &&
		$('#two').hasClass(o) &&
		$('#three').hasClass(o) ||
		$('#four').hasClass(o) &&
		$('#five').hasClass(o) &&
		$('#six').hasClass(o) ||
		$('#seven').hasClass(o) &&
		$('#eight').hasClass(o) &&
		$('#nine').hasClass(o) ||
		$('#one').hasClass(o) &&
		$('#four').hasClass(o) &&
		$('#seven').hasClass(o) ||
		$('#two').hasClass(o) &&
		$('#five').hasClass(o) &&
		$('#eight').hasClass(o) ||
		$('#three').hasClass(o) &&
		$('#six').hasClass(o) &&
		$('#nine').hasClass(o) ||
		$('#one').hasClass(o) &&
		$('#five').hasClass(o) &&
		$('#nine').hasClass(o) ||
		$('#three').hasClass(o) &&
		$('#five').hasClass(o) &&
		$('#seven').hasClass(o)){
			alert("'O' has won!")
			count = 0
			newGame();
		}
	else if ($('#one').hasClass(x) &&
		$('#two').hasClass(x) &&
		$('#three').hasClass(x) ||
		$('#four').hasClass(x) &&
		$('#five').hasClass(x) &&
		$('#six').hasClass(x) ||
		$('#seven').hasClass(x) &&
		$('#eight').hasClass(x) &&
		$('#nine').hasClass(x) ||
		$('#one').hasClass(x) &&
		$('#four').hasClass(x) &&
		$('#seven').hasClass(x) ||
		$('#two').hasClass(x) &&
		$('#five').hasClass(x) &&
		$('#eight').hasClass(x) ||
		$('#three').hasClass(x) &&
		$('#six').hasClass(x) &&
		$('#nine').hasClass(x) ||
		$('#one').hasClass(x) &&
		$('#five').hasClass(x) &&
		$('#nine').hasClass(x) ||
		$('#three').hasClass(x) &&
		$('#five').hasClass(x) &&
		$('#seven').hasClass(x)){
			alert("'X' has won!")
			count = 0
			newGame();
		}
	else {

	}	
	}

function newGame(){
	$('#game li').text('').removeClass()
	$('#game li').text('').removeClass()
	console.log(count)
	}