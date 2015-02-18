'use strict';

angular.module('jsonDataProcessingLabApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.students = [];

    $scope.predicate = '-lastName';

    $http.get('/api/student').success(function(students) {
      $scope.students = students;
      socket.syncUpdates('student', $scope.students);

    });

      $scope.sortByCredits = function(){
        $scope.predicate = function(student){
            return $scope.addCredits(student);
        }
      };

        $scope.sortByGPA = function(){
            $scope.predicate = function(student){
                return $scope.calculateGpa(student);
            }
        };

      $scope.addCredits = function(student){
            var credits=0;

            for(var i=0; i < student.courses.length; i++){
                if(student.courses[i].grade != "F" && student.courses[i].grade != "IP") {
                    credits = credits + student.courses[i].course.credits;
                }
            }
         return credits;
     };
        $scope.letterToNum = function(letter){
            console.log(letter);
            letter = letter.toUpperCase();
            switch(letter) {
                case "A":
                    return 4.0;
                case "B":
                    return 3.0;
                case "C":
                    return 2.0;
                case "D":
                    return 1.0;
                default:
                    return 0.0;
            }
        };
        $scope.calculateGpa = function(student){
            if(student.courses.length == 0){
                return 0;
            }
            var creditByGrade = 0;
            var totalCredits = 0;
            for(var i = 0; i< student.courses.length;i++){
                totalCredits += student.courses[i].course.credits;
                creditByGrade += (student.courses[i].course.credits * $scope.letterToNum(student.courses[i].grade));
            }
            return (creditByGrade / totalCredits).toFixed(2);
        };

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
