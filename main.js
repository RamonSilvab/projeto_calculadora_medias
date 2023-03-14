const form = document.querySelector('#form');
const imgAprovado = '<img src="imagens/aprovado.png" alt="emote comemorando">';
const imgReprovado = '<img src="imagens/reprovado.png" alt="emote triste">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.querySelector('#atividade');
    const inputNotaAtividade = document.querySelector('#nota');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.querySelector('#media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < atividades.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / atividades.length;
}

