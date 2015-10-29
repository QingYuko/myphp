/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/page1");

    $stateProvider
            .state("page1", {
                url: "/page1",
                templateUrl: "Page-1.html"
            })
            .state("page2", {
                url: "/page2",
                templateUrl: "Page-2.html"
            })
            .state("page3", {
                url: "/page3",
                templateUrl: "Page-3.html"
            });
});

