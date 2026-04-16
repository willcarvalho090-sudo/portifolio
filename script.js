const projetos = [
    {
        nome: "Site Pessoal",
        descricao: "Um site simples feito com HTML e CSS.",
        link: "#"
    },
    {
        nome: "Calculadora",
        descricao: "Calculadora feita em JavaScript.",
        link: "#"
    },
    {
        nome: "Lista de Tarefas",
        descricao: "App de tarefas com armazenamento local.",
        link: "#"
    }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
    `;

    container.appendChild(card);
});
