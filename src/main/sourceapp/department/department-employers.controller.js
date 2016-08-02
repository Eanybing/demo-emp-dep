angular.module('EmpDeptApp').controller('DepartmentEmployersController',
		DepartmentEmployersController);

function DepartmentEmployersController($log, $scope, $stateParams, Department) {
	$log.debug('Running department-employers controller...');
	var vm = this;
	
	vm.employersGrid = {
		enableSorting : true,
		columnDefs : [ {
			field : 'firstName'
		}, {
			field : 'lastName'
		}, {
			field : 'email'
		}, {
			field : 'category',
		} ]	};

	vm.employersGrid.data = Department.employers({
		id : $stateParams.id
	});

	
}