'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.students = [];

    $scope.predicate = '-lastName';

    $http.get('/api/student').success(function(students) {
      $scope.students = students;
      socket.syncUpdates('student', $scope.students);
    });


      $scope.addCredits = function(student){
            var credits=0;

            for(var i=0; i < student.courses.length; i++){
                credits = credits + student.courses[i].course.credits;
            }
         return credits;
     }


    //
    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
    //
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};
    //
    //$scope.$on('$destroy', function () {
    //  socket.unsyncUpdates('thing');
    //});


  });
