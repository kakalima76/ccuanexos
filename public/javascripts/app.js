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
	$scope.imagemURL = [];
		

		var promisse = $http.get('/imagem');

		promisse.then(function(data){

				data.data.forEach(function(value, index, array){
					var body =
					{
						agente: value.agente,
						ordem: value.ordem,
						data: value.data,
						documento: value.documento,
						servico: value.servico,
						acao: value.acao,
						foto: 'data:image/jpeg;base64,' + value.foto.toString()
					}

					$scope.imagemURL.push(body);
				})
			});




}]);
