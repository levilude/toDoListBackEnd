angular.module("tarefas").factory("tasksAPI", function($http){
	var _getTasks = function(){
		return $http.get("http://localhost:3412" + "/tasks");
	};

	var _saveTask = function(task){
		return $http.post("http://localhost:3412" + "/tasks", task);
	};

	return {
		getTasks: _getTasks,
		saveTask: _saveTask
	};

});