angular.module('inscritos', [])
.factory('factoryInscritos', ['$http', '$q', function($http, $q){
	var inscrito = {}

	function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
	}

	var set = function(cpf){
		return $q(function(resolve, reject){
			var promise = $http.get('http://ccuanexos.herokuapp.com/cadastro/' + cpf);
			promise.then(function(data){
				resolve(data.data[0]);

				setInscrito(data.data[0]);
			});

			promise.catch(function(err){
				reject(err);
			})

		})
	}

	var setInscrito = function(value){
		if(!isEmpty(value)){
			inscrito = value;
		}else{
			inscrito = {};
		}
		
	}

	var get = function(){
		return inscrito;
	}

	return {
		set: set,
		setInscrito: setInscrito,
		get: get
	}

}])

.factory('factoryFotos', ['$http', '$q', function($http, $q){
	
}])