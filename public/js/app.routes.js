(function(){
  'use strict';

  angular
    .module('app')
    .config(appRoutes);

  appRoutes.$inject = ['$urlRouterProvider', '$stateProvider']

  function appRoutes($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "/js/app/layouts/welcome.html"
      })
      .state('questions', {
        url: "/questions",
        templateUrl: "/js/app/questions/questions.html",
        controller: 'QuestionsController',
        controllerAs: "vm"
      })
      .state('answers',{
        url: "/answers",
        templateUrl: "/js/app/answers/answers.html"
      });



      $urlRouterProvider.otherwise('/');

  }





})();
