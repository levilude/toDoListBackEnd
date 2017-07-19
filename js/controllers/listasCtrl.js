var listas = angular.module('listas', []);
listas.controller("listasCtrl", function($scope, $http){

	$scope.todos = [
	{
		text:'Compras',
	},
	{
		text:'Compromissos de trabalho'
	}
	];

	$scope.save = function () {
		var listName = $scope.listName;
		var index = $scope.index;

		if (!listName == undefined || !listName == '') {
				if(angular.equals(index, '') || angular.equals(index, undefined)){
					$scope.todos.push({
						text: listName
				});
			}
				 else {
					$scope.todos.splice(index, 1, {
						text: listName
					});
				};

			$scope.listName = $scope.index = '';
		};
	};

	$scope.edit = function (list, index) {
		$scope.listName = list.text;
		$scope.index = index;
	};


	$scope.delete = function (list, index) {
			var todos = $scope.todos;
			todos.splice(index, 1);
	}


});
