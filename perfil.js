let nome = localStorage.getItem("nomeUsuario") || "Usuário";
let email = localStorage.getItem("emailUsuario") || "Não informado";

document.getElementById("nomeUsuario").textContent = nome;
document.getElementById("emailUsuario").textContent = email;

const editarNome = document.getElementById("editarNome");
const editarEmail = document.getElementById("editarEmail");

document.getElementById("salvarPerfil").addEventListener("click", () => {
  if (editarNome.value.trim() !== "") {
    nome = editarNome.value.trim();
    localStorage.setItem("nomeUsuario", nome);
  }

  if (editarEmail.value.trim() !== "") {
    const novoEmail = editarEmail.value.trim();

    if (!novoEmail.endsWith("@gmail.com")) {
      alert("Insira um Gmail válido.");
      return;
    }

    email = novoEmail;
    localStorage.setItem("emailUsuario", email);
  }

  document.getElementById("nomeUsuario").textContent = nome;
  document.getElementById("emailUsuario").textContent = email;

  alert("Perfil atualizado com sucesso!");
});
