'use strict';
var app = angular.module('myApp', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
}]);

app.controller('NoteController', function($scope, $http) {
  $http.get("notes_json").success(function(data){
      $scope.notes = data;
    })  
  $scope.shownote = null
  $scope.status_message = "" 

  $scope.showNote = function(note) {
    $scope.shownote = note
    $scope.status_message = "showing note"
  }
  $scope.show_createNote = function() {
    $scope.shownote = null    
    $scope.status_message = ""
  }
  $scope.createNote = function() {
    $http.post("notes_json/", $scope.new_note).success(function(data) {
      $scope.notes.push($scope.new_note);
      $scope.new_note = "";
      $scope.status_message = "Note Created"
   });
  }
});


