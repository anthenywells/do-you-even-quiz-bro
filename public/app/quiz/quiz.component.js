"use strict";
const quiz = {
  templateUrl: "app/quiz/quiz.html",

  controller: ["QuizService", function(QuizService) {
    const vm = this;
    vm.points = null;

    QuizService.getQuestions().then(function(response) {
      vm.questionlist = response.data;
    })

    vm.total = 0;
    vm.score = [false, false, false, false, false]
    vm.check = function (val, ans, idx) {
      console.log(`${val} ${ans} ${idx}`)
      if (val == ans) {
        vm.score[idx] = true;
      } else {
        vm.score[idx] = false;
      }
      console.log(vm.score)
    }

    vm.getTotal = function(){
      for(let i = 0; i <= vm.score.length; i++){
        if(vm.score[i] == true){
          vm.total++;
        } 
        console.log(vm.total);
      }
    }

  }]
}

angular
.module("QuizModule")
.component("quiz", quiz);