angular.module("KAITAApp")
.controller("ShowEventsCtrl", ["$scope", "$state", "EventsData", function($scope, $state, EventsData) {

  $scope.events = EventsData.data;

  $scope.data = [
    { name: "해커톤", date: "09/12/17", type: "hackathon" },
    { name: "Spring One", date: "11/21/17", type: "conference" },
    { name: "Trash Collect", date: "2/03/17", type: "volunteer" }
  ];

  // Get the modal
  var modal = document.getElementById('myModal');

  $scope.openModalEvent = function(event) {
    console.log("CLICK");
    modal.style.display = "block";
    $scope.selectedEvent = event;
  };

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
