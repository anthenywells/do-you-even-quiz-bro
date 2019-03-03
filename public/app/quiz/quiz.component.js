"use strict";
const quiz = {
  templateUrl: "app/quiz/quiz.html",

  controller: ["QuizService", "$location", function (QuizService, $location) {
    const vm = this;
    vm.points = null;

    QuizService.getQuestions().then(function (response) {
      vm.questionlist = response.data;
    })

    vm.points = 0;
    vm.choices = [false, false, false, false, false]
    vm.check = function (choice, answer, idx) {
      if (choice == answer) {
        vm.choices[idx] = true;
      } else {
        vm.choices[idx] = false;
      }
    }
    vm.getScore = function (score) {
      for (let i = 0; i <= vm.choices.length; i++) {
        if (vm.choices[i] == true) {
          vm.points++;
        }
      } 
      score.score = vm.points;
      QuizService.addScore(score).then(function (response) {
        vm.questionlist = response.data;
      })
      QuizService.getScores().then(function(response) {
        vm.scores = response.data;
      $location.path("/scores");     

      })   
    }
    
  }]
}

angular
  .module("QuizModule")
  .component("quiz", quiz);