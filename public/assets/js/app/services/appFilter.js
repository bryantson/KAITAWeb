angular.module("KAITAApp")
  .filter("parseDate", function() {
    return function(input) {
      if(input == null || input.length == 0) {
        return "NA";
      }
      return input.substr(0,10);
    }
})
.filter("parseTime", function() {
  return function(input) {
    if(input == null || input.length == 0) {
      return "NA";
    }

    var hour = input.substr(0,2);
    var minute = input.substr(3,2);

    var result = (parseInt(hour) > 12) ? (parseInt(hour) - 12) : parseInt(hour);
    result += (":" + minute);

    result += (parseInt(hour) < 12) ? " a.m." : " p.m.";
    return result;
  }
})
.filter("removeBlank", function(){
  return function(input) {
    var result = "";
    if(input == undefined) {
      return result;
    }
    var listInput = input.split(" ");
    for(var i=0, n=listInput.length; i < n; ++ i) {
     var word = listInput[i];
     result += word;
    }
    return result;
 }
})
.filter("convertLowerCase", function(){
  return function(input) {
    return input.toLocaleLowerCase();
 }
})
.filter("convertEventToKorean", function() {
  var mapEventsToKorean = {
    "meetup" : "정모",
    "hackathon" : "해커톤",
    "conference" : "컨퍼런스"
  };
  return function(input) {
    if(input == null || input.length == 0) {
      return "";
    }
    return mapEventsToKorean[input];
  }
});
