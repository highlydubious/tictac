

var tttApp = angular.module('tttApp', ["firebase"]);

tttApp.controller('tttCtrl', ['$scope', '$firebase', function ($scope, $firebase) {

	$scope.makeBoard = ["","","","","","","","",""];
	$scope.cells = ["","","","","","","","",""];
	$scope.someoneWon = false;
	$scope.endGameButton = false;
	var screenChange = false;
	$scope.winBanner = false;


	/// Draw new tic tac toe board ////

	$scope.newScreen = function() {
		console.log("New Screen Drawn");	
		$scope.screenChange = true;
		$scope.endGameButton = true;

	};

/// Turn Rotation ///

	$scope.turn = 0;
	$scope.updateTurn = function($index) {
		console.log ('Spot: ' + $index + ' selected');

		if ($scope.cells[$index] === "") {
			$scope.turn ++
			if ($scope.turn % 2 === 0) {
				$scope.cells[$index] = 'X';
				winner('X') 
			} else {
				$scope.cells[$index] = 'O';
				winner('O')
			}

		} 		
	}

// $scope.hide = function() {
// 	return true;
// }

//////// Win Condition /////////

var winner = function(player) {
	for (var i = 0; i < 9; i += 3) {

		if ($scope.cells[i] === player && $scope.cells[i+1] === player && $scope.cells[i+2] === player) {
			console.log('Winner!: ' + player);
			$scope.cells = [player,player,player,player,player,player,player,player,player];
			$scope.winner = player;
			$scope.someoneWon = true;
			$scope.endGameButton = false;
			break;

			
		}
	}

	for (var j = 0; j < 3; j += 1) {
		if ($scope.cells[j] === player && $scope.cells[j+3] === player && $scope.cells[j+6] === player) {
			console.log('Winner!: ' + player)
			$scope.cells = [player,player,player,player,player,player,player,player,player];
			$scope.winner = player;
			$scope.someoneWon = true;
			$scope.endGameButton = false;
			break;
			
		}
	}

	changePlayer();
	tieChecker();

}

///////// Tells you whose players turn it is /////////

$scope.whoseTurnCounter = 0;

function changePlayer() {
	// console.log('inside change player');
	if ($scope.whoseTurnCounter === 0) {
		// console.log('+ whoseTurnCounter = ' + $scope.whoseTurnCounter);
		$scope.whoseTurn = $scope.player2;
		$scope.whoseTurnCounter += 1;
		// console.log('+ Now whoseTurnCounter = ' + $scope.whoseTurnCounter);
		return $scope.player2
	}

	if ($scope.whoseTurnCounter === 1) {
		// console.log('- whoseTurnCounter = ' + $scope.whoseTurnCounter);
		$scope.whoseTurn = $scope.player1;
		$scope.whoseTurnCounter -= 1;
		// console.log('- Now whoseTurnCounter = ' + $scope.whoseTurnCounter);
		return $scope.player1
	}
	
};



/// Counts down 9 cells until tie game is declared ///

var cellsLeft = 9;
function tieChecker() {
	cellsLeft -= 1;
	// for (var i = 0; i < $scope.cells.length; i++) {
		if (cellsLeft == 0) {
			$scope.tieGame = 'This game is a tie';
			$scope.someoneWon = null;
			$scope.endGameButton = false;
			console.log($scope.tieGame);
		}
};




$scope.gameEnded = function() {
	console.log('is this even')
	if (tieGame === true) {
		console.log('we are in game ended');
		return false;
	}
}









//// Reset the Game Board ////

$scope.replayGame = function() {
	console.log("We are in replay game");
	$scope.cells = ["","","","","","","","",""];
	$scope.tieGame = null;
	cellsLeft = 9;
	$scope.someoneWon = false;
	$scope.endGameButton = true;
	
};


$scope.resetGame = function() {
	console.log("You have quit the game");	
	$scope.screenChange = false;
	$scope.endGameButton = false;
}



// function changeColor() {
// 	console.log('Change color is working');
// 	return 'purple';
// };



	$scope.newGame = {
		playCounter: 0
	}

  
}]);



 




