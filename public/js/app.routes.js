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
      })

        .state('productShow', {
        url: '/products/show/:id',
        templateUrl: 'js/products/product-show.html',
        controller: 'ProductShowController',
        controllerAs: 'productShowVm'
      })
      .state('productNew', {
        url: '/products/new',
        templateUrl: 'js/products/product-new.html',
        controller: 'ProductNewController',
        controllerAs: 'productNewVm'
      })
      .state('productEdit', {
        url: '/products/edit/:id',
        templateUrl: 'js/products/product-edit.html',
        controller: 'ProductEditController',
        controllerAs: 'productEditVm'
      })
      .state('productList', {
        url: '/products/list',
        templateUrl: 'js/products/product-list.html',
        controller: 'ProductListController',
        controllerAs: 'productListVm'
      })
      .state('shoppingBag', {
        url: '/shoppingbag',
        templateUrl: 'js/shoppingbag.html',
      });

    $urlRouterProvider.otherwise("/");
  }

})();
