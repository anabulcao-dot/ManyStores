// Executa o código somente depois que o HTML carregar
document.addEventListener("DOMContentLoaded", function () {

    // Pega o formulário pelo ID
    const form = document.getElementById("formAvaliacao");

    // Quando o formulário for enviado...
    form.addEventListener("submit", function (evento) {
        // Impede a página de recarregar automaticamente
        evento.preventDefault();

        // Pega os valores digitados no formulário
        const nome = document.getElementById("nomePessoa").value.trim();
        const atendimento = parseInt(document.getElementById("atendimento").value);
        const funcionamento = parseInt(document.getElementById("funcionamento").value);
        const facilidade = parseInt(document.getElementById("facilidade").value);
        const visual = parseInt(document.getElementById("visual").value);

        // Verifica se os dados estão vazios, não são números ou estão fora do limite 0 a 5
        if (
            nome === "" ||
            isNaN(atendimento) || atendimento < 0 || atendimento > 5 ||
            isNaN(funcionamento) || funcionamento < 0 || funcionamento > 5 ||
            isNaN(facilidade) || facilidade < 0 || facilidade > 5 ||
            isNaN(visual) || visual < 0 || visual > 5
        ) {
            alert("Preencha tudo corretamente (notas de 0 a 5)!"); 
            return; // Para a execução se tiver erro
        }

        // Calcula a média das notas
        const media = ((atendimento + funcionamento + facilidade + visual) / 4).toFixed(2);

        // Variável que vai guardar a classificação
        let classificacao = "";

        // Determina o tipo de avaliação de acordo com a média
        if (media <= 1) classificacao = "Ruim";
        else if (media <= 3) classificacao = "Bom";
        else classificacao = "Excelente";

        // Esconde a mensagem inicial e mostra a área de resultado
        document.getElementById("mensagemInicial").style.display = "none";
        document.getElementById("dadosResultado").style.display = "block";

        // Coloca o resultado final dentro do HTML
        document.getElementById("saidaNome").textContent = nome;
        document.getElementById("saidaMedia").textContent = media;
        document.getElementById("saidaClassificacao").textContent = classificacao;
    });

});
