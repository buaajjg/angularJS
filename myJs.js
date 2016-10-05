/**
 * Created by Jia on 10/4/2016.
 */
var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.arr=[];
    $scope.add=function () {
        var data= $scope.user;
        $scope.arr.push(data);
    }

    $scope.master = {name:'', gender:'',email:'',password:'',dob:'',address:''};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
        $scope.flag = false;
    };

});