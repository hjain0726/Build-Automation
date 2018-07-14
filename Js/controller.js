app.controller('myctrl', ['$scope', 'myfactory', function ($scope, myfactory) {
    $scope.calladd = function () {
        $scope.result = myfactory.add($scope.first, $scope.second);
    }
}]);