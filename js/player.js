var Player = function(symbol, turn, won) {
	this.symbol = symbol;
	this.turn = turn;
	this.won = false;
}

Gameboard.prototype.clickTile = function() {
	var self = this;
//	for(var i = 0; i < 1; i++) {
		$(".tile").on("click", function() {
			var text = this;
			if ($(text).text() === "") {
				Gameboard.prototype.changeTurn();
				$(this).html(Gameboard.prototype.currentPlayer);
			} else {
				alert("Can't go here!");
			}
			Gameboard.prototype.winCheck(text);
		})
//	}
}