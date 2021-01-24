angular.module('alurapic')
    .controller('GruposController', function ($scope, $http) {

        $scope.grupos = [];
        $http.get('/v1/grupos')
        .success(function(grupos){
            $scope.grupos = grupos;
            console.log(grupos);
        })
        .error(function(erro){
            console.log(erro);
        }) 


        //Outra forma de chamar a API
        /*   
        $http({
            method: 'GET',
            url: '/v1/grupos'
        })
            .then(function (grupos) {
                console.log(grupos);

            }, function (error) {
                console.log(error);

            });
        */    
        

    })