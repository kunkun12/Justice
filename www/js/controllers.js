angular.module('JusticeApp.controllers', [])
.controller('HomeCtrl', function($scope,$state) {
	      $scope.showloading=true;
		  $scope.getInto=function(){
		     $scope.showloading=false;
		  }
		  $scope.onTouch=function(flag){
			  switch(flag){
			  		case 1:
			  		$state.go('workplacerights',{});
			  		break;
			  		case 2:
			  		$state.go('badmansearch',{});
			  		break;
			  		case 3:
			  		$state.go('workplacerights',{});
			  		break;
			  }
		  }
}).controller("badManSearchCtl",["$scope",'dataService',function($scope,dataService){
	$scope.data={};
	$scope.data.searchtext="";
	$scope.BlackIntermediaryData=dataService.getBlackIntermediary();
	$scope.$watch('data.searchtext',function(newvalue,oldvalue){
     console.log("newvalue:   ",newvalue,"    oldvalue: ",oldvalue);
	});
}]);


