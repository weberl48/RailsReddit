var app = angular.module('RedditClone',[])
app.controller('MainCtrl',[
  '$scope', 'posts',
  function($scope, posts){
    $scope.test = "Hello World!";
    $scope.posts = posts.posts
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') {return alert('Post must have title');}
      $scope.posts.push({
        title: $scope.title, upvotes: 0,
        link: $scope.link
      });
        $scope.title = '';
    }
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
    $scope.decrementUpvotes = function(post){
      post.upvotes -= 1;
    }
  }

])
app.factory('posts',[function(){
  var o = {
    posts: [ title:'ngdgdfg']
  };
  return o
}])
