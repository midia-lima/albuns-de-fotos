angular.module('alurapic')
    .controller('FotoController', function ($scope, $routeParams, cadastroDeFotos, recursoFoto ) {

        
        $scope.foto = {};
        $scope.mensagem = "";

        //outra forma de chamar a API com ngResource para substituir o http. $resource para consumir endpoints REST
        //Método GET
        if ($routeParams.fotoId) {
            recursoFoto.get({ fotoId: $routeParams.fotoId }, function (foto) {
                $scope.foto = foto;
            }, function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            })
        }

        //usando a service cadastroDeFotos
        $scope.submeter = function () {
            if ($scope.formulario.$valid) {
                cadastroDeFotos.cadastrar($scope.foto)
                .then(function(dados){
                    $scope.mensagem = dados.mensagem;
                    if(dados.inclusao) $scope.foto = {};
                    //$scope.focado = true - usado com o scope.$watch - diretiva meuFocos
                   
                })
                .catch(function(dados){
                    $scope.mensagem = dados.mensagem
                })
            }
            
            
            /*
            //usando a service recursoFoto
            if ($scope.formulario.$valid) {
                if ($routeParams.fotoId) {
                    recursoFoto.update({ fotoId: $scope.foto._id }, $scope.foto, function () {
                        $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
                    }, function(erro){
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar a foto' + $scope.foto.titulo;
                    });
                }else{
                    recursoFoto.save($scope.foto, function(){
                        $scope.foto = {}
                        $scope.mensagem = 'Foto incluída com sucesso';
                    }, function(erro){
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível incluir a foto'
                    })
                }
            }
            */

        }



        /*
        //forma de chamar a API com http
        //Método GET
        if($routeParams.fotoId){
            $http.get('v1/fotos/' + $routeParams.fotoId)
            .success(function(foto){
                $scope.foto = foto;
            })
            .error(function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto de ID' + $routeParams.fotoId
            });
        }      

        $scope.foto = {};
        $scope.mensagem = "";
        //Método PUT
        $scope.teste = ('/v1/fotos') 
        $scope.submeter = function () {
            if ($scope.formulario.$valid) {
                if($scope.foto._id){
                    $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success(function(){
                        $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
                    })
                    .error(function(erro){
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar a foto' + $scope.foto.titulo;
                    })
                } else {
                    $http.post('/v1/fotos', $scope.foto)
                    .success(function () {
                        $scope.mensagem = "Foto cadastrada com sucesso"
                        $scope.foto = {};
                    })
                    .error(function () {
                        $scope.mensagem = "A foto não foi cadastrada"
                    })
                }
                
            }
        }; 
        */
    });