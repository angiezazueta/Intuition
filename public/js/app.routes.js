(function() {
  "use strict";

  angular
    .module("app")
    .config(appRoutes);

  appRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function appRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("welcome", {
        url:         "/",
        templateUrl: "/js/welcome.html"
      })
      .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
      })
      .state("profile", {
        url:         "/profile",
        templateUrl: "/js/profile.html"
      });

      // .state("collection1", {
      //   url:         "/",
      //   templateUrl: "/js/collection1.html"
      // })

      // .state("collection2", {
      //   url:         "/",
      //   templateUrl: "/js/collection2.html"
      // });
    $urlRouterProvider.otherwise("/");
  }

})();
