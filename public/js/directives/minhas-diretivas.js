angular.module('minhasDiretivas', [])

    .directive('meuPainel', function () {
        // diretiva usada tando como atributo ou como elemento adicionando em nosso ddo a propiedade restrict com o valor "AE"
        var ddo = {}
        ddo.restrict = "AE";
        ddo.transclude = true;
        // capturando o título passado pela diretiva para dentro do nosso escopo adicionando em nosso ddo a propiedade scope
        ddo.scope = {
            titulo: '@'
        }
        ddo.templateUrl = 'js/directives/meu-painel.html';
        return ddo;
    })

    // exemplo de como adicionar outra diretiva
    .directive('minhaFoto', function () {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            url: '@',
            titulo: '@'
        }
        ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';
        return ddo;
    })

    .directive('meuBotaoPerigo', function () {
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@', //copia de valor e esse valor é sempre uma string
            acao: '&' //tenta avaliar uma expressão dentro do contexto do controller
        }
        ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';
        return ddo;
    })

    .directive('meuFocos', function () {
        var ddo = {};

        ddo.restrict = "A"; //Atributo
        
        /* usado com scope.$watch
        ddo.scope = {
            focado: '=' //quanquer alteração que a diretiva faça o controller fica sabendo   
        };
        */

        ddo.link = function (scope, element) {

            scope.$on('fotoCadastrada', function(){
                element[0].focus();
            })
            
            /*
            scope.$watch('focado', function () {
                if (scope.focado) {
                    element[0].focus();
                    scope.focado = false
                }
            })
            */
        }
        return ddo;
    })