(function(){
  'use strict';

  angular
    .module('app')
    .controller('QuestionsController', QuestionsController);

  QuestionsController.$inject = ['$log'];

  function QuestionsController($log) {

    var vm = this
    vm.createQuestion = createQuestion;
    vm.question = {
      title: ''
    }
    vm.questions = [];

    function createQuestion(){
      $log.info(vm.question.title);

      var newQuestion = angular.copy(vm.question);
      vm.questions.push(newQuestion);

      vm.question = '';
      // vm.questions.push(vm.question);

      $log.info(vm.questions);
    }

    $log.info('questions contrller loaded!');
  };







})();
