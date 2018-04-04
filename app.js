var app = angular.module('app', ["ui.bootstrap","ngRoute","ngAnimate","ngTouch"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "home.html"
    })
    .when("/faq", {
        templateUrl : "faq.html"
    }) 
    .when("/rsvp", {
        templateUrl : "rsvp.html"
    })
    .when("/visiting", {
    templateUrl : "visiting.html"
    })

   .when("/aboutPage", {
        templateUrl : "aboutPage.html"
    })
    .otherwise({
    redirectTo: "/aboutMe"
  });
});

app.controller('MainController', function ($animate,$scope) {
	 $animate.enabled(true); 

   $scope.slides=[{
      image: "images/shal.JPG",
      text: "Shal Xu",
      button:"About Me",
      link:"#home",
      index:0
    },
    {
   	 image: "images/pedals.jpeg",
      text: "4+ Years of Watercolor, Charcoal, Colored Pencil, Pen... ",
      button:"Browse My Art Portfolio HERE",
      link:"http://shalxu.tumblr.com",
      index:1
    },
      {
    	image: "images/code.jpg",
      text: "A Visual Programmer",
      button:"Take a Look at My Other Projects Too!",
      link:"#projects",
      index:2
    }];

    $scope.nav="home";
   $scope.checkSlideActive=function(index){
      if(index==0){
        console.log(index);
        return "item active";
      }
      else
        return "item";
    }

    $scope.checkActive=function(item){
      if(item==$scope.nav)
        return "active";
      else
        return;
    }
     $scope.setActive=function(item){
      $scope.nav=item;
    }

});