// Alterna entre Cadastro e Login
document.getElementById("irLogin").addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
});

document.getElementById("irCadastro").addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById("login").classList.add("hidden");
  document.getElementById("cadastro").classList.remove("hidden");
});

// Validação de senha (mínimo 6 caracteres, maiúscula, minúscula, número e especial)
function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  return regex.test(senha);
}

// Cadastro
document.getElementById("formCadastro").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const confirmar = document.getElementById("confirmar").value.trim();
  const erro = document.getElementById("erroCadastro");

  if (!nome || !email || !senha || !confirmar) {
    erro.textContent = "Preencha todos os campos!";
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    erro.textContent = "O e-mail deve ser Gmail!";
    return;
  }

  if (senha !== confirmar) {
    erro.textContent = "As senhas não coincidem!";
    return;
  }

  if (!validarSenha(senha)) {
    erro.textContent = "A senha deve ter pelo menos 6 caracteres, incluindo maiúscula, minúscula, número e caractere especial.";
    return;
  }

  erro.textContent = "";

  // Salva nome e email no localStorage
  localStorage.setItem("nomeUsuario", nome);
  localStorage.setItem("emailUsuario", email);

  window.location.href = "menu.html";
});

// Login
document.getElementById("formLogin").addEventListener("submit", function(e){
  e.preventDefault();

  const nomeLogin = document.getElementById("loginNome").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginSenha").value.trim();
  const erro = document.getElementById("erroLogin");

  if (!nomeLogin || !email || !senha) {
    erro.textContent = "Preencha todos os campos!";
    return;
  }

  if (!validarSenha(senha)) {
    erro.textContent = "A senha deve ter pelo menos 6 caracteres, incluindo maiúscula, minúscula, número e caractere especial.";
    return;
  }

  // Salva no localStorage
  localStorage.setItem("nomeUsuario", nomeLogin);
  localStorage.setItem("emailUsuario", email);

  erro.textContent = "";
  window.location.href = "menu.html";
});
