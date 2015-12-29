angular.module('redditClone',[])
.controller('MainCtrl',[
  '$scope',
  function($scope){
    $scope.test = "Hello World!";
    $scope.posts = [
      'test1',
      'test2',
      'test3',
      'test4'
    ]
  }
])
