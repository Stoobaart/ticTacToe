function Gameboard(gameboard, players, current){
 	this.gameboard = gameboard;
 	this.players = players;
 	this.currentPlayer = 'X';
}

Gameboard.prototype.build = function(){
	for (var i = 0; i < 9; i++) {
    	var newTile = $('<div></div>').attr("class","tile");
    	$(this.gameboard).append(newTile);
	}
}

Gameboard.prototype.move = function(player, square) {
	$('.tile:nth-child(' + (square+1) + ')').html(player);
}

Gameboard.prototype.reset = function(){
	var resetBtn = $("<button>Reset</button>").attr("class","reset");
	$(this.gameboard).append(resetBtn);
	resetBtn.on("click", function() {
		$("div").html("");
	})
}

Gameboard.prototype.changeTurn = function() {
	this.currentPlayer === 'X' ? this.currentPlayer = "O" : this.currentPlayer = "X";
	console.log(this.currentPlayer);
}

Gameboard.prototype.winCheck = function(text) {
	var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	var xChoices = [];
	var yChoices = [];

	($(text).text() === "X" ? console.log("Yes X") : console.log("Yes O"));
	console.log("Index: " + $(".tile").index(text));
//	if ($(".tile").index(0) )
	$('div').each(function (index, value) { 
		console.log('div' + index + ':' + $(this).text());
		// if (((this.index && this.index+1 && this.index+2).text())==="X") {
		// 	console.log("X wins!");
		// }
	});
}




