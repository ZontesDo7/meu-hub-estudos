const aulas = [
    // --- NÍVEL 1: INICIANTE (HTML5) ---
    { nivel: 'iniciante', titulo: '01. O que é HTML5?', desc: 'A base da internet.', link: 'https://www.youtube.com/watch?v=epDCjksKMok', logo: '🌐' },
    { nivel: 'iniciante', titulo: '02. Instalando o VS Code', desc: 'Configurando seu editor.', link: 'https://www.youtube.com/watch?v=S9uPNppzSRA', logo: '💻' },
    { nivel: 'iniciante', titulo: '03. Primeiros Passos', desc: 'Sua primeira página.', link: 'https://www.youtube.com/watch?v=iT6E92Kt38o', logo: '🏗️' },
    { nivel: 'iniciante', titulo: '04. Parágrafos e Títulos', desc: 'Hierarquia h1 a h6.', link: 'https://www.youtube.com/watch?v=VfIVD_Xat0w', logo: '✍️' },
    { nivel: 'iniciante', titulo: '05. Desafio das Mensagens', desc: 'Praticando o que aprendeu.', link: 'https://www.youtube.com/watch?v=p6f6_nS7N3M', logo: '🏆' },
    { nivel: 'iniciante', titulo: '06. Imagens no HTML', desc: 'Formatos e carregamento.', link: 'https://www.youtube.com/watch?v=8mG_7X1vYAs', logo: '🖼️' },
    { nivel: 'iniciante', titulo: '07. Favicons', desc: 'O ícone da aba do navegador.', link: 'https://www.youtube.com/watch?v=689N_0O_m6Y', logo: '🔖' },
    { nivel: 'iniciante', titulo: '08. Listas Ol e Ul', desc: 'Organizando itens.', link: 'https://www.youtube.com/watch?v=E6769f3I69A', logo: '🔢' },
    { nivel: 'iniciante', titulo: '09. Links Externos', desc: 'Navegando para outros sites.', link: 'https://www.youtube.com/watch?v=U97vO7-OOn4', logo: '🔗' },
    { nivel: 'iniciante', titulo: '10. Links Internos', desc: 'Navegação entre suas páginas.', link: 'https://www.youtube.com/watch?v=I_AnT8p54O0', logo: '📂' },

    // --- NÍVEL 2: INTERMEDIÁRIO (CSS3) ---
    { nivel: 'intermediario', titulo: '11. Introdução ao CSS', desc: 'Estilos inline, internos e externos.', link: 'https://www.youtube.com/watch?v=5PSWeS7u97Y', logo: '🎨' },
    { nivel: 'intermediario', titulo: '12. Cores e Representações', desc: 'RGB, Hex e HSL.', link: 'https://www.youtube.com/watch?v=vV9X_p7f6_0', logo: '🌈' },
    { nivel: 'intermediario', titulo: '13. Degradês no CSS', desc: 'Fundo com gradientes.', link: 'https://www.youtube.com/watch?v=f9pG0EonA_Y', logo: '🎭' },
    { nivel: 'intermediario', titulo: '14. Primeiro Projeto CSS', desc: 'Criando um site real.', link: 'https://www.youtube.com/watch?v=gTIn6_U-Pps', logo: '🚀' },
    { nivel: 'intermediario', titulo: '15. Fontes no Google Fonts', desc: 'Tipografia profissional.', link: 'https://www.youtube.com/watch?v=v_uNAsOof_s', logo: '🔤' },
    { nivel: 'intermediario', titulo: '16. Alinhamento de Textos', desc: 'Text-align e espaçamentos.', link: 'https://www.youtube.com/watch?v=E_I_I9mS6uI', logo: '📏' },
    { nivel: 'intermediario', titulo: '17. O Modelo de Caixas', desc: 'Padding, Border e Margin.', link: 'https://www.youtube.com/watch?v=E_I_I9mS6uI', logo: '📦' },
    
    // --- NÍVEL 3: AVANÇADO (JAVASCRIPT) ---
    { nivel: 'avancado', titulo: '18. Intro ao JavaScript', desc: 'Lógica e interatividade.', link: 'https://www.youtube.com/watch?v=BXqUH86F-kA', logo: '🧠' },
    { nivel: 'avancado', titulo: '19. Variáveis e Dados', desc: 'Onde o JS guarda info.', link: 'https://www.youtube.com/watch?v=VbHCmN_6i_A', logo: '💾' },
    { nivel: 'avancado', titulo: '20. Funções no JS', desc: 'Criando ações dinâmicas.', link: 'https://www.youtube.com/watch?v=mEbeS8vT5Kk', logo: '⚙️' }
];

// Gerador automático das outras 80 aulas para completar as 100
for(let i = 21; i <= 100; i++) {
    let nv = i <= 40 ? 'iniciante' : (i <= 80 ? 'intermediario' : 'avancado');
    aulas.push({
        nivel: nv,
        titulo: `Aula ${i}: Em breve`,
        desc: `Continue sua jornada para completar as 100 aulas!`,
        link: 'https://www.youtube.com/results?search_query=curso+programacao',
        logo: '🚀'
    });
}

function renderizarAulas() {
    const grids = ['iniciante', 'intermediario', 'avancado'];
    grids.forEach(g => {
        const el = document.getElementById(`grid-${g}`);
        if(el) el.innerHTML = '';
    });

    aulas.forEach((aula, index) => {
        const card = `
            <div class="card-aula" style="animation-delay: ${index * 0.03}s">
                <div class="aula-icon">${aula.logo}</div>
                <h3>${aula.titulo}</h3>
                <p>${aula.desc}</p>
                <a href="${aula.link}" target="_blank">Assistir Agora</a>
            </div>
        `;
        const container = document.getElementById(`grid-${aula.nivel}`);
        if(container) container.innerHTML += card;
    });
}

window.onload = renderizarAulas;
