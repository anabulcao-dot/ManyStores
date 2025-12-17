
// Recupera o nome salvo no cadastro
const nomeUsuario = localStorage.getItem("nomeUsuario") || "Usuário";

// Atualiza o título com o nome
document.getElementById("tituloCompras").textContent = `Avalie as lojas aqui, ${nomeUsuario}`;

// Referências dos elementos
const form = document.getElementById("formReclamacao");
const lojaSelect = document.getElementById("lojaSelect");
const mensagemInput = document.getElementById("mensagem");
const listaFeedbacks = document.getElementById("listaFeedbacks");

// Função para lidar com o envio do formulário
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const loja = lojaSelect.value;
  const mensagem = mensagemInput.value;

  if (loja && mensagem) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${loja}:</strong> ${mensagem}`;
    listaFeedbacks.appendChild(li);

    // Limpa o formulário
    lojaSelect.value = "";
    mensagemInput.value = "";
    alert("Feedback enviado com sucesso!");
  }
});
