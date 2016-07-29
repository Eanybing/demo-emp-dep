angular.module('EmpDeptApp').controller('EmployersListController',
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