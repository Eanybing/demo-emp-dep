angular.module('EmpDeptApp').controller('DepartmentController',
		DepartmentController);

function DepartmentController($log, $stateParams, Department) {
	$log.debug('Running department controller...');
	var vm = this;

	vm.department = Department.get({
		id : $stateParams.id
	});
	
	vm.tabData = [ {
		heading : '<i>Department Details</i>',
		route : 'main.viewDepartment.detail'
	}, {
		heading : '<i>Employers</i>',
		route : 'main.viewDepartment.employers'
	} ];
}