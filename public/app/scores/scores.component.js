"use strict";
const scores = {
    templateUrl: "app/scores/score.html",

    controller: ["QuizService", function(QuizService) {
        const vm = this;
          QuizService.getScores().then(function(response) {
            vm.scores = response.data;
          })
          
    }]
}




angular
.module("QuizModule")
.component("scores", scores);