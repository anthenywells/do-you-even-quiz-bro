"use strict";
function QuizService($http, $location) {
  const self = this;

  self.addScore = function(score) {
    return $http({
        method: "POST",
        url: "/scores",
         data: score
    });
  }
  self.getScores = function(){
      return $http({
        method: "GET",
        url: "/scores"
      });
  }
  self.getQuestions = function() {
      return $http({
        method: "GET",
        url: "/questions"
      });
  }
}






angular
.module("QuizModule")
.service("QuizService", QuizService);