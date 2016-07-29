angular.module('EmpDeptApp').controller('DepartmentListController',
		DepartmentListController);

function DepartmentListController($scope, $log, Department,Popup,$window) {
	var vm = this;
	$log.debug('Running department list controller...');

	vm.departments = Department.query();

	vm.deleteDepartment = function(department) {
		if (Popup
				.showPopup('This action cannot be reverted, are you sure ?')) {
			Department.delete(function() {
				$window.location.href = '';
			});
		}
	};
}