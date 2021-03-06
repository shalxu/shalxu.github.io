 var app = angular.module('app', ["ui.bootstrap", "ngRoute", "ngAnimate", "ngTouch"]);

 app.config(function($routeProvider) {
     $routeProvider
         .when("/home", {
             templateUrl: "home.html",
             controller: "HomeController"

         })
         .when("/faq", {
             templateUrl: "faq.html"
         })
         .when("/schedule", {
             templateUrl: "schedule.html"
         })
         .when("/rsvp", {
             templateUrl: "rsvp.html"
         })
         .when("/gallery", {
             templateUrl: "gallery.html",
             controller: "GalleryController"
         })
         .when("/visiting", {
             templateUrl: "visiting.html"
         })

         .when("/aboutPage", {
             templateUrl: "aboutPage.html"
         })
         .otherwise({
             redirectTo: "/home"
         });
 });

 app.controller('MainController', function($animate, $scope, $location) {
     $animate.enabled(true);

     $scope.nav = $location.path().split('/')[1] || 'home';

     $scope.checkActive = function(item) {
         if (item == $scope.nav)
             return "active";
         else
             return;
     }
     $scope.setActive = function(item) {
         $scope.nav = item;
         window.location.href = `/#/${item}`;
     }

     document.getElementById("backgroundMusic").volume = 0.1;

 });

 //Parallax 
 function simpleParallax() {
     //This variable is storing the distance scrolled
     var scrolled = $(window).scrollTop() + 1;

     //Every element with the class "scroll" will have parallax background 
     //Change the "0.3" for adjusting scroll speed.
     $('.parallax').css('background-position', 'center' + -(scrolled * 0.3) + 'px');
 }

 function fadeText() {
     $(".fade").css("opacity", 1 - Math.abs($(window).scrollTop() - 150) / 350);
 }

 $(window).scroll(function(e) {
     simpleParallax();
     fadeText();
 });