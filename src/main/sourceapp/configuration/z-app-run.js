/**
 * Configuração de uma função auxiliar que permitirá pesquisar elementos no DOM por atributos sem ter que recorrer a jQuery.
 */
angular.module('EmpDeptApp.configuration').run(runConfig);

function runConfig($rootScope, $state, $q, $urlRouter, $log) {


	initRun();

	function initRun() {
		$log.debug("Running app...");
		$state.go('main.departments');		
	}	
}

