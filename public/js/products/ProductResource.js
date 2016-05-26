(function() {
  angular.module('app')
    .factory("ProductResource", ProductResource);

  ProductResource.$inject = ['$resource'];

  function ProductResource($resource) {
    return $resource(
      "/products/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();
// include ng resource in my module
