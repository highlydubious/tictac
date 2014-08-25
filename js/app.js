var tttApp = angular.module('tttApp', ["firebase"]);

tttApp.controller('tttCtrl', ['$scope', '$firebase', function ($scope, $firebase) {

	$scope.cells = ["","","","","","","","",""];
	$scope.cells2 = {cells:["X","O","O","X","","","","",""]};
	var ref = $firebase( new Firebase("https://tictacking.firebaseio.com/data"));
	ref.$bind($scope, "cells2");

	$scope.$watch('cells2', function() {
		console.log ("hello");
	});


	$scope.turn = 0;

	$scope.updateTurn = function($index) 
	{
		console.log ($index);

		if ($scope.cells[$index] === "") 	
		{
			$scope.turn ++

			if ($scope.turn % 2 === 0) 
			{
				$scope.cells[$index] = 'X'; 
			}
			else 
			{
				$scope.cells[$index] = '0';
			}

		} 
	}


  
}]);


///  Win Condition ///

// $scope.winChecker = function () 
// {
// 	if ( ($scope.cells[0] && $scope.cells[1] && $scope.cells[2] === 'X') || $scope.cells[3] && $scope.cells[4] && $scope.cells[5] === 'X' )
// 			{
// 				console.log('winner!');
// 			}
// }
//  var array = []




