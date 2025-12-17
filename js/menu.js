
// Mostra o nome do usuário
const nomeUsuario = localStorage.getItem("nomeUsuario") || "Usuário";
document.getElementById("nomeUsuario").textContent = nomeUsuario;
document.getElementById("boasVindas").textContent = `Olá, ${nomeUsuario}!`;

// Pesquisa nas lojas
const barraPesquisa = document.getElementById("barraPesquisa");
const lojas = document.querySelectorAll("#listaLojas .loja");

barraPesquisa.addEventListener("input", function() {
  const termo = barraPesquisa.value.toLowerCase();

  lojas.forEach(loja => {
    const nomeLoja = loja.textContent.toLowerCase();

    if (nomeLoja.includes(termo)) {
      loja.style.display = "flex"; // mostra
    } else {
      loja.style.display = "none"; // esconde
    }
  });
});