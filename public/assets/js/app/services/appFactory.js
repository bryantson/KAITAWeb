angular.module("KAITAApp")
.factory("MemberService",["$q", "$http", function($q, $http) {
  return {
    getMemberSkills : function(rid) {
      var deferred = $q.defer();

      $http.get("/skills/" + rid)
      .then(function(data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }
  }
}])
.factory("ImageService", ["$filter", function($filter) {
  var urlImg = "http://www.kaita.org/images";
  return {
    getCompaniesURL : function(name) {
      var namePic = $filter("removeBlank")(name).toLocaleLowerCase() + ".jpg";
      return urlImg + "/companies/" + namePic;
    },
    getCompanyBannerURL : function(name) {
      var namePic = $filter("removeBlank")(name).toLocaleLowerCase() + ".jpg";
      return urlImg + "/companies/office/" + namePic;
    }
  }
}]);
