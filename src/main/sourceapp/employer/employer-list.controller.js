angular.module('EmpDeptApp').controller('EmployerListController',
		EmployerListController);

function EmployerListController(Employer,Popup,$window){
	var vm = this;
	
	vm.employers = Employer.query();
	
	vm.deleteEmployer = function(employer) {
		if (Popup
				.showPopup('This action cannot be reverted, are you sure ?')) {
			Employer.delete(function() {
				$window.location.href = '';
			});
		}
	};
}