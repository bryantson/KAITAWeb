var appDallasNetwork = angular.module("KAITAApp",["ui.router", "data-table"]);

angular.module("KAITAApp").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("home");

  // Now set up the states
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "/views/pages/home.html"
    })
    .state("about", {
      url: "/about",
      templateUrl: "/views/pages/aboutKAITA.html"
    })
    .state("kakao", {
      url: "/kakao",
      templateUrl: "/views/pages/chatKAITA.html"
    })
    .state("login", {
      url: "/login",
      templateUrl: "/views/pages/membershipKAITA.html"
    })
    .state("event", {
      url: "/event",
      templateUrl: "/views/pages/eventKAITA.html",
      controller: "ShowEventsCtrl",
      resolve: {
        EventsData: function($http){
            return $http({method: 'GET', url: '/events'})
               .then (function (result) {
                   return result;
               });
         }
       }
    })
    .state("company", {
      url: "/company",
      templateUrl: "/views/pages/companiesKAITA.html",
      controller: "ShowCompaniesCtrl",
      resolve: {
        CompaniesData: function($http){
            return $http({method: 'GET', url: '/companies'})
               .then (function (result) {
                   return result;
               });
         }
       }
    })
    .state("companyInfo", {
      url: "/companyInfo/{id}",
      templateUrl: "/views/pages/showCompany.html",
      controller: "CompanyInfoCtrl",
      resolve: {
        SelectedCompany: function($http, $stateParams){
            return $http({method: 'GET', url: '/company/' + $stateParams.id})
               .then (function (result) {
                   return result;
               });
         }
       }
    })
    .state("member", {
      url: "/member",
      templateUrl: "/views/pages/memberKAITA.html",
      controller: "ShowMembersCtrl",
      resolve: {
        MembersData:  function($http){
            return $http({method: 'GET', url: '/members'})
               .then (function (result) {
                   return result;
               });
         }
      }
    })
    .state("job", {
      url: "/job",
      templateUrl: "/views/pages/jobKAITA.html",
      controller: "ShowJobsCtrl",
      resolve: {
        JobsData:  function($http){
            return $http({method: 'GET', url: '/jobs'})
               .then (function (result) {
                   return result;
               });
         }
      }
    });
});
