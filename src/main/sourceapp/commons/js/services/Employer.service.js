angular.module('EmpDeptApp').factory('Employer', employerService);

function employerService($resource) {
	return $resource("api/employers/:id", {}, {
		get : {
			method : 'GET'
		},
		update : {
			method : 'PUT'
		},
		delete : {
			method : 'DELETE'
		}
	}, {
		stripTrailingSlashes : false
	});
}