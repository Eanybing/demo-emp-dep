angular.module('EmpDeptApp.configuration').config(uiRouterConfig);

function uiRouterConfig($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('main', {
		url : '/',
		abstract : true,
		views : {
			'header' : {
				templateUrl : 'html/header.html'
			},
			'@' : {
				templateUrl : 'html/home.html'
			}
		}
	});

	$stateProvider.state('main.employers', {
		url : 'employers',
		templateUrl : 'html/employer-list.html',
		controller : 'EmployerListController',
		controllerAs : 'empListCtrl'
	});

	$stateProvider.state('main.viewEmployer', {
		url : 'employers/:id/view',
		templateUrl : 'html/employer.html',
		controller : 'EmployerController',
		controllerAs : 'empCtrl'
	});

	$stateProvider.state('main.departments', {
		url : 'departments',
		templateUrl : 'html/department-list.html',
		controller : 'DepartmentListController',
		controllerAs : 'deptListCtrl'
	});

	$stateProvider.state('main.viewDepartment', {				
		url : 'departments/:id/view',
		templateUrl : 'html/department.html',
		controller : 'DepartmentController',
		controllerAs : 'depCtrl'
	});
	
	$stateProvider.state('main.viewDepartment.detail', {
		url : 'departments/:id/view/details',
		templateUrl : 'html/department-detail.html',
		controller : 'DepartmentController',
		controllerAs : 'depCtrl'
	});
	
	$stateProvider.state('main.viewDepartment.employers', {
		url : 'departments/:id/view/employers',
		templateUrl : 'html/department-employers.html',
		controller : 'DepartmentEmployersController',
		controllerAs : 'depEmpCtrl'
	});		
	
	$stateProvider.state('main.departments.new', {
		url : '/new',
		templateUrl : 'html/department.html',
		controller : 'DepartmentController'
	});
}