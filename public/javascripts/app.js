var app = angular.module('app', []);

/*factory('userService', ['$resource', function($resource){
		return  $resource('/usuarios/:id', {id : '@id'}, 
		{ 
		  'get':    {method:'GET'},
		  'save':   {method:'POST'},
		  'query':  {method:'GET', isArray:false},
		  'remove': {method:'DELETE'},
		  'delete': {method:'DELETE'}
		});
	}

  ]).*/

app.controller('testController', ['$scope', '$http', function($scope, $http){
	$scope.teste = [];
		$http({
			method: 'GET',
			url: '/usuarios',
			headers: {token: 'asdsdfdfrere'}
		}).then(function sucess(res){
			$scope.teste.push(res.data);
		}), function error(response){
			alert('falhou geral');
		}

	}


]);

	

///https://dry-chamber-82900.herokuapp.com/