//declaracao de variavel de escopo global com let
let numero = 4;

console.log(numero)

//erro ao redeclarar variavel com let
//let numero = 20

    function calcula(n){

        // declaracao de variavel de escopo de função, esta variavelso existe nesta parte do programa

        let numero = 10;

        //funcao retonra oresultado do calculo

        return  n * numero;
    }


    const resultado = calcula(numero)

    console.log(resultado)
