$(function(){
	var player1 = new Player("X", true, false);
	var player2 = new Player("O", false, false);
	var newGameboard = new Gameboard('#game-board', [player1, player2]);
	player1.board = newGameboard;
	player2.board = newGameboard;
	newGameboard.build();
	newGameboard.reset();
	newGameboard.changeTurn();
	newGameboard.move(newGameboard.currentPlayer, 1);
	newGameboard.clickTile();
});

