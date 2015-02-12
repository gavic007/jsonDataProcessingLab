'use strict';

angular.module('jsonDataProcessingLabApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
        $scope.students = [];

        $http.get('/api/student').success(function(students) {
            $scope.students = students;
            socket.syncUpdates('student', $scope.students);
        });
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
/**
 * Created by gavic007 on 2/12/15.
 */
