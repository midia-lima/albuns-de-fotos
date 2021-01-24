angular.module('alurapic')
    .controller('FotosController', function ($scope, recursoFoto) {        
    
    $scope.fotos = [];
    $scope.filtro = '';

    //outra forma de chamar a API com ngResource para substituir o http    
    //Método GET    
    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

    //Método DELETE
    $scope.remover = function (foto) {
        recursoFoto.delete({fotoId: foto._id}, function(){
            var inciceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(inciceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!'
        }, function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        });
    }
    

    //forma de chamar a API com http
    /*
    //Método GET
    $http.get('/v1/fotos')
    .success(function(retorno){        
        $scope.fotos = retorno;
    })
    .error(function(erro){
        console.log(erro)
    })
    */

    /*
    //Método GET
    $scope.remover = function (foto) {
    //Método DELETE        
    $http.delete('/v1/fotos/' + foto._id)            
            .success(function () {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!'
            })
            .error(function () {
                console.log(error);
                $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
            });       
    };
    */

})

// Exemplo de um objeto
// $scope.fotos = [
//     {
//         titulo: 'Leão',
//         url: 'https://cdn.leroymerlin.com.br/products/quadro_leao_bronze_100x100cm_90658085_0001_600x600.jpg'
//     },
//     {
//         titulo: 'Leão2',
//         url: 'https://cdn.leroymerlin.com.br/products/quadro_leao_bronze_100x100cm_90658085_0001_600x600.jpg'
//     },
//     {
//         titulo: 'Leão3',
//         url: 'https://cdn.leroymerlin.com.br/products/quadro_leao_bronze_100x100cm_90658085_0001_600x600.jpg'
//     },
// ]
    

/*
Exemplos de promise    
$scope.fotos = []
    
var promise = $http.get('/v1/fotos');
promise.then(function(retorno){
    $scope.fotos = retorno.data;
})
// Caso ocorra algum erro
.catch(function(erro){
    console.log(erro);
})
*/