angular.module('EmpDeptApp').service('Popup',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    };
});