angular.module("KAITAApp")
.controller("ShowMembersCtrl", ["$scope", "$state", "MembersData", "MemberService", function($scope, $state, MembersData, MemberService) {

    // Get the modal
    var modal = document.getElementById('myModal');

  $scope.members = MembersData.data;

  console.log("MEMBERS DATA: " + angular.toJson($scope.members));

  $scope.states = [
    { name: "Texas", value: "TX"},
    { name: "California", value: "CA"},
    { name: "District of Columbia" , value: "DC"}
  ];

  $scope.skills = [
    { name: "Java", value: "java" },
    { name: "C#", value: "csharp"},
    { name: "SQL", value: "sql"}

  ];

  $scope.openModalMember = function(member) {
    console.log("CLICK");
    modal.style.display = "block";

    MemberService.getMemberSkills(member.rid)
    .then(function(result) {
      $scope.skillsMember = result.data[0].skills.split(',');
      console.log("DATA: " + angular.toJson($scope.skillsMember));
    });
    $scope.selectedMember = member;
  };

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

/*
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    console.log("CLICK");
  	modal.style.display = "block";
  }
*/
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  	modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  	if (event.target == modal) {
  			modal.style.display = "none";
  	}
  }

}]);
