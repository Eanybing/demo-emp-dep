angular.module('EmpDeptApp').factory('Department', departmentService);

function departmentService($resource) {
	return $resource("api/departments/:id", {}, {
		get : {
			method : 'GET'
		},
		update : {
			method : 'PUT'
		},
		delete : {
			method : 'DELETE'
		},
		employers : {
			method : 'GET',
			isArray : true,
			url : "api/departments/:id/employers",
			responseType : 'json'
		},
		stats : {
			method : 'GET',
			isArray : false,
			url :'api/departments/:id/statistics',
			responseType : 'json'
		}
	}, {
		stripTrailingSlashes : false
	});
}