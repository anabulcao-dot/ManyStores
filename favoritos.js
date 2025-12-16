
// Recupera o nome salvo no cadastro (se existir)
const nomeUsuario = localStorage.getItem("nomeUsuario") || "Usuário";
document.getElementById("saudacao").textContent = `Olá, ${nomeUsuario}!`;

// Referências dos elementos
const select = document.getElementById("lojaFavoritaSelect");
const btn = document.getElementById("salvarFavorita");
const mensagem = document.getElementById("mensagem");

// Verifica se já há loja favorita salva
const lojaSalva = localStorage.getItem("lojaFavorita");
if (lojaSalva) {
  select.value = lojaSalva;
  mensagem.textContent = `Sua loja favorita atual é: ${lojaSalva}`;
}

// Quando o usuário clica em "Salvar"
btn.addEventListener("click", () => {
  const lojaSelecionada = select.value;
  if (lojaSelecionada) {
    localStorage.setItem("lojaFavorita", lojaSelecionada);
    mensagem.textContent = `Sua loja favorita agora é: ${lojaSelecionada}`;
    mensagem.style.color = "#4a2054";
  } else {
    mensagem.textContent = "Por favor, selecione uma loja antes de salvar.";
    mensagem.style.color = "red";
  }
});
