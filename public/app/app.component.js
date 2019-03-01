"use strict"
const appRoot = {
  templateUrl: "app/app.html",
  controller: ["QuizService", function(QuizService){
    const vm = this;
  }]
}
angular.module("QuizModule").component("appRoot", appRoot)