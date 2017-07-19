var tarefas = angular.module('tarefas', []);
tarefas.controller("tarefasCtrl", function($scope, $http, tasksAPI){

	$scope.app = "tarefas";
	$scope.tasks = [];

	var carregarTasks = function (){
		tasksAPI.getTasks().then(function(response){
		$scope.tasks = response.data;
		});
	};


	$scope.edit = function (task, index) {
		//$scope.taskName = task.text;
		//$scope.done = task.done;
		//$scope.index = index;
	};


$scope.save = function (task) {

	var taskName = $scope.task.text;
	var index = $scope.index;

	if (!taskName == undefined || !taskName == '') {
		//Tarefa nova
		if(angular.equals(index, '') || angular.equals(index, undefined)){			
				$scope.task.done = false;
				tasksAPI.saveTask(task).then(function(response){
					delete $scope.task;
					carregarTasks();
				});
		}

			//Editar tarefa
			 else {
				$scope.tasks.splice(index, 1, {
					text: taskName,
					done: done
				});
			};

	};

	$scope.task.text = $scope.task.done = $scope.index = '';
};
	

	$scope.remaining = function() {
		var count = 0;

		angular.forEach($scope.tasks, function(task) {
			count += task.done ? 0 : 1;
		});

		return count;
	};

	$scope.clear = function () {
		var tasks = $scope.tasks;

		$scope.tasks = [];

		angular.forEach(tasks, function(task) {
			if (!task.done) $scope.tasks.push(task);
		});
	};

carregarTasks();

});
