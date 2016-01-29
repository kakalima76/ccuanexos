var app = angular.module('app', ['ngResource']).

factory('userService', ['$resource', function($resource){
		return  $resource('/usuarios/:id', {id : '@id'}, 
		{ 
		  'get':    {method:'GET'},
		  'save':   {method:'POST'},
		  'query':  {method:'GET', isArray:true},
		  'remove': {method:'DELETE'},
		  'delete': {method:'DELETE'}
		});
	}

  ]).

controller('testController', ['$scope', 'userService', function testController($scope, userService){
	var User = userService;
	User.get()
	.$promisse.then(function(user){
		$scope.user = user;
	})


	$scope.teste = 'Nieraldo Lima';
	console.log('Tudo ok!!!');
}]);

//https://dry-chamber-82900.herokuapp.com/