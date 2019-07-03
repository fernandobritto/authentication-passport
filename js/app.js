var app = angular.module('mainModule', []);

app.controller('mainController', function($scope, $http, $filter)
{
	$scope.lista = [];
	$scope.pessoa = null;
	$scope.reverse = false;
	$scope.states = []

	$scope.salvar = function()
	{
		$scope.lista.push($scope.pessoa);
		$scope.pessoa = null;	
	};


//Responsável por ordenar os dados dentro da lista já existente. Do maior pro menos e vise versa.
	$scope.ordenar = function(propriedade)
	{
		$scope.lista = $filter('orderBy')($scope.lista, propriedade, $scope.reverse);
		$scope.reverse = !$scope.reverse;
	}

// Responsável por remover o cadastros dos clientes da lista 
	$scope.remover = function(pessoa)
	{
		var index = $scope.lista.indexOf(pessoa);
		$scope.lista.splice(index, 1);	
	};


// Responsável por editar o cadastro dos clientes que estão na lista
	$scope.editar = function(pessoa)
	{
		$scope.pessoa = pessoa;
	};

		

});