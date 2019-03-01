"use strict";
const scores = {
    templateUrl: "app/scores/score.html",

    controller: [function() {
        const vm = this;
        vm.getScores = function(newName){
          QuizService.getScores(newName);
          vm.scores = response.data;
        }
    }]
}




angular
.module("QuizModule")
.component("scores", scores);