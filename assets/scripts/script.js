// Exercício Raiz Quadrada

const calcularRaizQuadrada = () => {

    const valor = document.getElementById("valorRaizQuadrada").value;

    let resultado = Math.sqrt(valor);

    return resultado;
}

const imprimirRaizQuadrada = () => {

    const valor = document.getElementById("valorRaizQuadrada").value;

    let impressao = `A raiz quadrada de ${valor} é ${calcularRaizQuadrada().toFixed(2)}`

    document.getElementById("resultadoRaizQuadrada").innerHTML = impressao;    

}

// Exercício Maior e Menor


var bancoNumeros = [];

const inserirNumeroNaLista = () => {

    let valor = document.getElementById("valorNumeroMaiorMenor").value;

    bancoNumeros.push(valor);

}

const imprimirListaDeNumeros = () => {

    const listaDeNumerosRegistrados = bancoNumeros.filter(x => x).join(" | ");

    document.getElementById("listaNumeros").innerHTML = listaDeNumerosRegistrados;

}

const imprimirNumeroMaior = () => {

    const numeroMaior = bancoNumeros.reduce((val1, val2) => Math.max(val1, val2));

    document.getElementById("listaNumeros").innerHTML = numeroMaior;

}

const imprimirNumeroMenor = () => {

    const numeroMenor = bancoNumeros.reduce((val1, val2) => Math.min(val1, val2));

    document.getElementById("listaNumeros").innerHTML = numeroMenor;

}


// Exercício Segurança de Balada

var bancoIdades = [];

const inserirIdadeNaLista = () => {

    let valor = document.getElementById("valorIdade").value;

    bancoIdades.push(valor);

}

const imprimirListaIdades = () => {

    const listaDeIdadesRegistradas = bancoIdades.filter(x => x).join(" | ");

    document.getElementById("listaIdades").innerHTML = listaDeIdadesRegistradas;
        
}

const imprimirMaioresDeVinte = () => {

    const quantidadeMaioresDeVinte = bancoIdades.filter(x => x >= 20).length;

    document.getElementById("listaIdades").innerHTML = quantidadeMaioresDeVinte;
    
}

const imprimirMenoresDeVinte = () => {

    const quantidadeMenoresDeVinte = bancoIdades.filter(x => x < 20).length;

    document.getElementById("listaIdades").innerHTML = quantidadeMenoresDeVinte;
    
}


// Guinnes altura

var bancoAltura = [];
var bancoSexo = [];

const inserirDados = () => {

    let valorAltura = document.getElementById("valorAltura").value;
    let valorSexo = document.getElementById("valorSexo").value;

    bancoAltura.push(parseInt(valorAltura));
    bancoSexo.push(valorSexo);

}

const listarQuantidadeHomens = () => {

    const quantidadeHomens = bancoSexo.filter(x => x == 'masculino').length;

    document.getElementById("listaPessoas").innerHTML = quantidadeHomens;

}

const listarQuantidadeMulheres = () => {

    const quantidadeMulheres = bancoSexo.filter(x => x == 'feminino').length;

    document.getElementById("listaPessoas").innerHTML = quantidadeMulheres;

}

const listarDadosMaiorAltura = () => {

    const maiorAltura = bancoAltura.reduce((val1, val2) => Math.max(val1, val2));
    const indexMaiorAltura = bancoAltura.indexOf(maiorAltura);
    const sexoMaiorAltura = bancoSexo[indexMaiorAltura].toUpperCase();

    const dadosMaiorAltura = `A maior altura cadastrada é ${maiorAltura} e o sexo dessa pessoa é <b>${sexoMaiorAltura}</b>`


    document.getElementById("listaPessoas").innerHTML = dadosMaiorAltura;

}

// Exercício inverter

var bancoNomes = [];
var bancoNomesInvertidos = [];

const inserirNomes = () => {

    let valorNome = document.getElementById("valorNome").value;
    
    bancoNomes.push(valorNome);

    imprimirNomes();

}

const imprimirNomes = () => {

    const listaDeNomesRegistrados = bancoNomes.filter(x => x).join(" | ");

    document.getElementById("listaNomes").innerHTML = listaDeNomesRegistrados;

}

const inverterNomes = () => {

    bancoNomesInvertidos = bancoNomes.reverse();

    const listaDeNomesInvertidos = bancoNomesInvertidos.filter(x => x).join(" | ");

    document.getElementById("listaNomesInvertidos").innerHTML = listaDeNomesInvertidos;

}

// Exercício data

const transformarData = () => {

    let valorData = document.getElementById("valorData").value;

    let dia = valorData[8] + valorData[9];
    let mes = valorData[5] + valorData[6];
    let ano = valorData[0] + valorData[1] + valorData[2] + valorData[3];

    let mensagem = `O dia selecionado foi: ${dia}<br>
                    O mês selecionado foi: ${mes}<br>
                    O ano selecionado foi: ${ano}`;

    document.getElementById("dataSeparada").innerHTML = mensagem;

}