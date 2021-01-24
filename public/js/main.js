angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function ($routeProvider,  $locationProvider) {

        // dependência que retira o # (hash), precisa adicinar a tag <base href="/"> no index
        $locationProvider.html5Mode(true);

        // quando acessada a rota, é enviado uma view parcial e o contoller 
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });
        

        // dependência que redireciona o endereço caso ele não exista
        $routeProvider.otherwise({ redirectTo:'/fotos'});
        
    })