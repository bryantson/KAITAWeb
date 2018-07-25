angular.module("KAITAApp")
.controller("CompanyInfoCtrl", ["$scope", "$state", "$stateParams", "SelectedCompany", "ImageService", function($scope, $state, $stateParams, SelectedCompany, ImageService) {
 
  $scope.companySelected = SelectedCompany.data[0];
  
  $scope.templateTitle                 = "/views/pages/sectionCompany/sectionCompanyTitle.html";
  $scope.templateSectionGeneralInfo    = "/views/pages/sectionCompany/sectionCompanyGeneralInfo.html";

 
  $scope.getCompanyBannerURL = function(name) {
    return ImageService.getCompanyBannerURL(name);
  };

  console.log("DATA: " + angular.toJson($scope.companySelected));

  $scope.goBack = function() {
    $state.go("company");
  };

}]);
