// Exibe a data de hoje
document.getElementById('data-atual').innerText = new Date().toLocaleDateString();

// Função para contar quantas aulas foram marcadas
function atualizarProgresso() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let concluidas = 0;

    checkboxes.forEach(item => {
        if (item.checked) {
            concluidas++;
        }
    });

    document.getElementById('concluidas-count').innerText = concluidas;
}

function mostrarSecao(nome) {
    alert("Você clicou em: " + nome + ". Em breve você aprenderá a criar rotas para mudar de página!");
}
.notes-area {
    margin-top: 30px;
    background: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
}

textarea {
    width: 100%;
    height: 150px;
    background: #121212;
    color: var(--accent);
    border: 1px solid #333;
    border-radius: 5px;
    padding: 10px;
    font-family: 'Courier New', monospace; /* Fonte estilo código */
    resize: vertical;
}

#status-salvamento {
    font-size: 12px;
    color: #777;
    margin-top: 5px;
    display: none; /* Só aparece quando estiver salvando */
}
