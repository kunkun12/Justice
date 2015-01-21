angular.module('JusticeApp.controllers', [])

.controller('HomeCtrl', function($scope,$state) {
	   $scope.showloading=true;
		  $scope.getInto=function(){
		     $scope.showloading=false;
		  }
		  $scope.onTouch=function(flag){
		  switch(flag){
		  		case 1:
		  		$state.go('badmansearch',{});
		  		break;
		  		case 2:
		  		$state.go('badmansearch',{});
		  		break;
		  		case 3:
		  		$state.go('workplacerights',{});
		  		break;
		  }
		  
		  	console.log("message");
		  }
     
});

