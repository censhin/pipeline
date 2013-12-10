angular.module('rxPipelineApp')
    .directive('rxNavBar', function ($location){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/directives/rx-nav-bar.html',
            controller: function ($scope) {
                $scope.path = $location.path();
            }
        };
    });