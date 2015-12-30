angular.module('redditClone',[])
.controller('MainCtrl',[
  '$scope',
  function($scope){
    $scope.test = "Hello World!";
    $scope.posts = [
      {title:'test1', upvotes: 5},
      {title:'test2', upvotes: 2},
      {title:'test2', upvotes: 2}

    ]
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
