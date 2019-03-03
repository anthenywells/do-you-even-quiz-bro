"use strict";

angular
  .module("QuizModule")
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when("/questions", {
        template: "<quiz></quiz>"
      })
      .when("/scores", {
        template: "<scores></scores>"
      })
      .when("/", {
        template: "<quiz></quiz>"
      }

      )
  }])