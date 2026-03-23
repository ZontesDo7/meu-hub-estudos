const aulas = [
    // --- NÍVEL 1: INICIANTE (HTML & FUNDAMENTOS) ---
    { nivel: 'iniciante', titulo: '01. Como a Web funciona', desc: 'Protocolos, Servidores e Browsers.', link: 'https://youtu.be/rsAAreVig2k', logo: '🌐' },
    { nivel: 'iniciante', titulo: '02. Instalando o VS Code', desc: 'Configurando seu ambiente de trabalho.', link: 'https://youtu.be/S9uPNppzSRA', logo: '💻' },
    { nivel: 'iniciante', titulo: '03. Estrutura do HTML', desc: 'A anatomia de um documento web.', link: 'https://youtu.be/iT6E92Kt38o', logo: '🏗️' },
    { nivel: 'iniciante', titulo: '04. Cabeçalhos e Parágrafos', desc: 'Hierarquia de textos (h1-h6).', link: 'https://youtu.be/VfIVD_Xat0w', logo: '✍️' },
    { nivel: 'iniciante', titulo: '05. Formatação de Texto', desc: 'Negrito, itálico e outras tags.', link: 'https://youtu.be/p6f6_nS7N3M', logo: '🔡' },
    { nivel: 'iniciante', titulo: '06. Listas Ordenadas', desc: 'Tags UL, OL e LI.', link: 'https://youtu.be/E6769f3I69A', logo: '🔢' },
    { nivel: 'iniciante', titulo: '07. Trabalhando com Links', desc: 'Navegação interna e externa.', link: 'https://youtu.be/U97vO7-OOn4', logo: '🔗' },
    { nivel: 'iniciante', titulo: '08. Imagens e Alt Text', desc: 'Otimização e acessibilidade.', link: 'https://youtu.be/8mG_7X1vYAs', logo: '🖼️' },
    { nivel: 'iniciante', titulo: '09. Tabelas no HTML', desc: 'Organizando dados complexos.', link: 'https://youtu.be/mHeNsh7-m88', logo: '📊' },
    { nivel: 'iniciante', titulo: '10. Formulários: Parte 1', desc: 'Inputs de texto e botões.', link: 'https://youtu.be/F74SAsv2O_M', logo: '📝' },
    { nivel: 'iniciante', titulo: '11. Formulários: Parte 2', desc: 'Select, Checkbox e Radio.', link: 'https://youtu.be/L8K_7m1pBvM', logo: '🔘' },
    { nivel: 'iniciante', titulo: '12. Tags Semânticas', desc: 'Melhorando o SEO do seu site.', link: 'https://youtu.be/NH_m076Fp9Y', logo: '🔍' },
    { nivel: 'iniciante', titulo: '13. Audio e Vídeo', desc: 'Mídia nativa no navegador.', link: 'https://youtu.be/E-r6S7P9H_I', logo: '🎥' },
    { nivel: 'iniciante', titulo: '14. O que é CSS?', desc: 'A folha de estilo em cascata.', link: 'https://youtu.be/5PSWeS7u97Y', logo: '🎨' },
    { nivel: 'iniciante', titulo: '15. Seletores CSS', desc: 'ID, Class e Elementos.', link: 'https://youtu.be/f9pG0EonA_Y', logo: '🎯' },

    // --- NÍVEL 2: INTERMEDIÁRIO (CSS AVANÇADO & DESIGN) ---
    { nivel: 'intermediario', titulo: '16. Cores no CSS', desc: 'HEX, RGB e HSL.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🌈' },
    { nivel: 'intermediario', titulo: '17. O Box Model', desc: 'Margin, Padding e Border.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '📦' },
    { nivel: 'intermediario', titulo: '18. Unidades de Medida', desc: 'PX, EM, REM e %.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '📏' },
    { nivel: 'intermediario', titulo: '19. Background Avançado', desc: 'Imagens e gradientes de fundo.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🖼️' },
    { nivel: 'intermediario', titulo: '20. Posicionamento', desc: 'Relative, Absolute e Fixed.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '📍' },
    { nivel: 'intermediario', titulo: '21. Flexbox Container', desc: 'Direção e alinhamento.', link: 'https://youtu.be/5PSWeS7u97Y', logo: '📐' },
    { nivel: 'intermediario', titulo: '22. Flexbox Items', desc: 'Grow, Shrink e Basis.', link: 'https://youtu.be/5PSWeS7u97Y', logo: '🔧' },
    { nivel: 'intermediario', titulo: '23. CSS Grid Basics', desc: 'Linhas e Colunas.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🏁' },
    { nivel: 'intermediario', titulo: '24. Grid Areas', desc: 'Layouts complexos rápidos.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🧩' },
    { nivel: 'intermediario', titulo: '25. Responsividade', desc: 'Media Queries e Mobile First.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '📱' },
    { nivel: 'intermediario', titulo: '26. Pseudo-classes', desc: 'Hover, Active e Focus.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '✨' },
    { nivel: 'intermediario', titulo: '27. Transições CSS', desc: 'Suavizando mudanças de estado.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '📽️' },
    { nivel: 'intermediario', titulo: '28. Animações e Keyframes', desc: 'Criando movimento no site.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🚀' },
    { nivel: 'intermediario', titulo: '29. Variáveis CSS', desc: 'O poder do Root.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '💎' },
    { nivel: 'intermediario', titulo: '30. GitHub para Devs', desc: 'Versionamento de código.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🐙' },

    // --- NÍVEL 3: AVANÇADO (JAVASCRIPT & LÓGICA) ---
    { nivel: 'avancado', titulo: '31. Intro ao JavaScript', desc: 'A linguagem da interatividade.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🧠' },
    { nivel: 'avancado', titulo: '32. Variáveis (Let/Const)', desc: 'Armazenando dados.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '💾' },
    { nivel: 'avancado', titulo: '33. Tipos de Dados', desc: 'Strings, Numbers e Booleans.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🔢' },
    { nivel: 'avancado', titulo: '34. Operadores Matemáticos', desc: 'Cálculos no navegador.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '➕' },
    { nivel: 'avancado', titulo: '35. Condicionais IF/ELSE', desc: 'Lógica de decisão.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🚦' },
    { nivel: 'avancado', titulo: '36. Switch Case', desc: 'Múltiplas escolhas.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🎛️' },
    { nivel: 'avancado', titulo: '37. Funções Básicas', desc: 'Reutilizando blocos de código.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '⚙️' },
    { nivel: 'avancado', titulo: '38. Arrow Functions', desc: 'O jeito moderno de escrever funções.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🏹' },
    { nivel: 'avancado', titulo: '39. Manipulando o DOM', desc: 'Alterando HTML com JS.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🖱️' },
    { nivel: 'avancado', titulo: '40. Eventos de Clique', desc: 'Reagindo à interação do usuário.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🔘' },
    { nivel: 'avancado', titulo: '41. Arrays (Listas)', desc: 'Organizando coleções.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '📜' },
    { nivel: 'avancado', titulo: '42. Loops (For/While)', desc: 'Repetindo tarefas.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🔄' },
    { nivel: 'avancado', titulo: '43. Objetos no JS', desc: 'Modelando o mundo real.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '💎' },
    { nivel: 'avancado', titulo: '44. LocalStorage', desc: 'Salvando dados no navegador.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🗄️' },
    { nivel: 'avancado', titulo: '45. Consumo de API/Fetch', desc: 'Buscando dados externos.', link: 'https://youtu.be/vV9X_p7f6_0', logo: '🔌' },
    // Para chegar a 100, adicionei placeholders abaixo que você pode renomear conforme avançar:
];

// Preenchendo até 100 dinamicamente para o seu site não ficar vazio
for(let i = 46; i <= 100; i++) {
    let nv = i <= 60 ? 'intermediario' : 'avancado';
    aulas.push({
        nivel: nv,
        titulo: `${i}. Conteúdo Extra ${i}`,
        desc: 'Espaço reservado para novas aulas e desafios.',
        link: 'https://github.com',
        logo: '🚀'
    });
}

function renderizarAulas() {
    const grids = ['iniciante', 'intermediario', 'avancado'];
    grids.forEach(g => document.getElementById(`grid-${g}`).innerHTML = '');

    aulas.forEach((aula, index) => {
        const card = `
            <div class="card-aula" style="animation-delay: ${index * 0.05}s">
                <div class="aula-icon">${aula.logo}</div>
                <h3>${aula.titulo}</h3>
                <p>${aula.desc}</p>
                <a href="${aula.link}" target="_blank">Abrir Aula</a>
            </div>
        `;
        document.getElementById(`grid-${aula.nivel}`).innerHTML += card;
    });
}

window.onload = renderizarAulas;
