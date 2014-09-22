(function () {
    angular.module("app", [])
            .controller("ctrl", ['$scope', function ($scope) {
                    $scope.ordenarPor = 'nombre';
                    $scope.nuevoEstudiante = {};

                    $scope.adicionarNuevoEstudiante = function () {
                        $scope.nuevoEstudiante = {};
                    };
                    
                    $scope.cancelarCreacionEstudiante = function (){
                        $scope.nuevoEstudiante = {};
                    };
                    
                    $scope.guardarEstudiante = function(){
                        $scope.estudiantes.push($scope.nuevoEstudiante);
                        
                        $scope.nuevoEstudiante = {};
                    };
                    
                    $scope.estudiantes = [
                        {
                            documento: {
                                tipo: 'CC',
                                numero: '23423423'
                            },
                            nombre: 'Pablo',
                            apellido: 'Bastidas',
                            deuda: 300000
                        },
                        {
                            documento: {
                                tipo: 'CC',
                                numero: '345345'
                            },
                            nombre: 'Juan',
                            apellido: 'Ortiz',
                            deuda: 500000
                        },
                        {
                            documento: {
                                tipo: 'CC',
                                numero: '123123'
                            },
                            nombre: 'Sergio',
                            apellido: 'Morales',
                            deuda: 100000
                        }
                    ];
                }]);
})();