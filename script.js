function gerarBotao() {
    const idadeInput = document.getElementById('idadeInput');
    const idade = parseInt(idadeInput.value);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpa o conteúdo anterior

    if (isNaN(idade) || idade < 0) {
        resultadoDiv.innerHTML = 'Por favor, digite uma idade válida.';
        return;
    }

    if (idade >= 18) {
        resultadoDiv.innerHTML = `
            <p style="color: green;">Você tem ${idade} anos.</p>
            <p style="color: green;">Você é maior de idade e pode votar!</p>
        `;
    } else if (idade >= 16) {
        resultadoDiv.innerHTML = `
            <p style="color: blue;">Você tem ${idade} anos.</p>
            <p style="color: blue;">Você pode votar, mas o voto é facultativo.</p>
        `;
    } else {
        resultadoDiv.innerHTML = `
            <p style="color: red;">Você tem ${idade} anos.</p>
            <p style="color: red;">Você não pode votar ainda.</p>
        `;
    }
}

// Adiciona o evento de clique ao botão
document.getElementById('gerarBotao').addEventListener('click', gerarBotao);