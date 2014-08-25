var planetApp = angular.module('planetApp', []);

planetApp.controller('tttCtrl', function ($scope) {

	$scope.cells = ["","","","","","","","",""];

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
				$scope.cells[$index] = 'O';
			}

		} 
	}





  
});


///  Win Condition ///



$scope.winChecker = function () {
	if ( ($scope.cells[0] && $scope.cells[1] && $scope.cells[2] === 'X') || $scope.cells[3] && $scope.cells[4] && $scope.cells[5] === 'X' )
			{
				console.log('winner!');
			}
}



