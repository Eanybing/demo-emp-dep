angular.module('EmpDeptApp').controller('EmployerController', EmployerController);

function EmployerController($log, $stateParams, Employer) {
	var vm = this;
	$log.debug("Running Employer Controller ...");
	vm.employer = Employer.get({
		id : $stateParams.id
	});
}