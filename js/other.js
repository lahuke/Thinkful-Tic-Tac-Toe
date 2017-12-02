
//variables
var x = "x"
var o = "o"
count = 0

//game play
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
	console.log(count)
}
else { 
	$(this).text(x).addClass(x)
	count ++
	checkForWin();
	console.log(count)
}})
}
playGame();

//Checks to see if there are three in a row.
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
			popUpO();
			//count = 0
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
			popUpX();
		}
	else if (count==9){
		popUpNoWinner();
	}
	else {
}
}	
	
//X is the winner, congratulations! pop up 	
function popUpX(){
	$('#game').hide();
	$('.popUp').show();
	$('.resetButton').hide();
	$('.xWinner').show();
}

//) is the winner, congratulations! pop up 	
function popUpO(){
	$('#game').hide();
	$('.popUp').show();
	$('.resetButton').hide();
	$('.oWinner').show();
}

function popUpNoWinner(){
	$('#game').hide();
	$('.popUp').show();
	$('.resetButton').hide();
	$('.noWinner').show();
}

//starts a new game
function newGame(){
	$('#game li').text('').removeClass();
	$('#game').show();
	$('.popUp').hide();
	$('.oWinner').hide();
	$('.xWinner').hide();
	$('.noWinner').hide();
	$('.resetButton').show();
	count=0
	}