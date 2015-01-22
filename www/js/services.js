angular.module('JusticeApp.services', [])
.service('getdata',['$http','$q',function($http,$q){

	this._httpget = function (url) {
        var deferred = $q.defer();
        $http.get(url)
            .success(function (res) {              
                    deferred.resolve(data);                   
            }).error(function () {
                deferred.reject('There was an error');
            });
        return deferred.promise;
    };

}]);

