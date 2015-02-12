'use strict';

angular.module('jsonDataProcessingLabApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });
    });/**
 * Created by gavic007 on 2/12/15.
 */
