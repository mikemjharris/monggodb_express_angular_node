'use strict';
var app = angular.module('myApp', [])

app.controller('NoteController', function($scope, $http) {
  $scope.notes = test_notes;
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
    $scope.notes.push($scope.new_note);
    $scope.new_note = "";
    $scope.status_message = "Note Created"
  }
});

var test_notes = [
{title: "Note 1",
body: "Body of note 1"},
{title: "Note 2",
  body: "Body of second test note"}]
