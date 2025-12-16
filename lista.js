
const lojas = [
  "Lorac",
  "GM Glamour",
  "Ana Makeup",
  "Victory Modas",
  "LL Imports",
  "Caline Modas",
  "Lana Calçados",
  "Top Girl",
  "ML Jóias e Acessórios",
  "SNN Confecções e Calçados",
  "LC Importados",
  "Jucines"
];

const lista = document.getElementById("listaDesejos");
const input = document.getElementById("novoItem");
const botao = document.getElementById("adicionarItem");

// Carrega lista salva no localStorage
let desejos = JSON.parse(localStorage.getItem("listaDesejos")) || [];

// Exibe lista na tela
function renderizarLista() {
  lista.innerHTML = "";
  desejos.forEach((item, index) => {
    const li = document.createElement("li");

    const nomeItem = document.createElement("span");
    nomeItem.textContent = item.nome;
    if (item.comprado) nomeItem.classList.add("comprado");
    li.appendChild(nomeItem);

    const select = document.createElement("select");
    select.innerHTML = `<option value="">Selecione a loja</option>`;
    lojas.forEach(loja => {
      const opt = document.createElement("option");
      opt.value = loja;
      opt.textContent = loja;
      if (item.loja === loja) opt.selected = true;
      select.appendChild(opt);
    });

    select.addEventListener("change", () => {
      desejos[index].loja = select.value;
      salvarLista();
    });

    li.appendChild(select);

    const btnComprado = document.createElement("button");
    btnComprado.textContent = item.comprado ? "Desmarcar" : "Marcar como comprado";
    btnComprado.addEventListener("click", () => {
      desejos[index].comprado = !desejos[index].comprado;
      salvarLista();
      renderizarLista();
    });
    li.appendChild(btnComprado);

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => {
      desejos.splice(index, 1);
      salvarLista();
      renderizarLista();
    });
    li.appendChild(btnExcluir);

    lista.appendChild(li);
  });
}

// Salva no localStorage
function salvarLista() {
  localStorage.setItem("listaDesejos", JSON.stringify(desejos));
}

// Adicionar novo item
botao.addEventListener("click", () => {
  const nome = input.value.trim();
  if (!nome) return;
  desejos.push({ nome, comprado: false, loja: "" });
  salvarLista();
  renderizarLista();
  input.value = "";
});

renderizarLista();
