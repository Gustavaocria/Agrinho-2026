document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. COMPONENTE EXPANSÍVEL (ACCORDION DE BENEFÍCIOS)
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Alterna o estado de visibilidade ARIA e atributo hidden
            header.setAttribute('aria-expanded', !isExpanded);
            if (!isExpanded) {
                content.removeAttribute('hidden');
                item.classList.add('active');
            } else {
                content.setAttribute('hidden', '');
                item.classList.remove('active');
            }
        });
    });

    // ==========================================
    // 2. FORMULÁRIO DE INSCRIÇÃO NO SEMINÁRIO
    // ==========================================
    const registerForm = document.getElementById('register-form');
    const successMsg = document.getElementById('form-success-msg');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Estrutura de captação de dados
        const formData = {
            name: document.getElementById('inp-name').value,
            email: document.getElementById('inp-email').value,
            city: document.getElementById('inp-city').value,
            state: document.getElementById('inp-state').value,
            country: document.getElementById('inp-country').value
        };

        console.log('Inscrição interceptada com sucesso:', formData);

        // Feedback visual imediato e higienização do form
        successMsg.removeAttribute('hidden');
        registerForm.reset();

        setTimeout(() => {
            successMsg.setAttribute('hidden', '');
        }, 5000);
    });

    // ==========================================
    // 3. ÁREA DE COMENTÁRIOS DA COMUNIDADE
    // ==========================================
    const commentForm = document.getElementById('comment-form');
    const txtComment = document.getElementById('txt-comment');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = txtComment.value.trim();

        if (commentText) {
            const commentItem = document.createElement('div');
            commentItem.classList.add('comment-item');
            
            // Segurança básica contra ataques XSS injetados na caixa de texto
            commentItem.innerHTML = `
                <p class="comment-meta"><strong>Leitor da Plataforma</strong> — Agora mesmo</p>
                <p class="comment-body">${escapeHTML(commentText)}</p>
            `;

            commentsList.prepend(commentItem);
            txtComment.value = '';
        }
    });

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // ==========================================
    // 4. PAINEL DE ACESSIBILIDADE FLUTUANTE
    // ==========================================
    
    // Controle Gradual do Tamanho da Fonte
    let currentFontSize = 100; // Porcentagem padrão base
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');

    btnIncreaseFont.addEventListener('click', () => {
        if (currentFontSize < 135) {
            currentFontSize += 5;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    btnDecreaseFont.addEventListener('click', () => {
        if (currentFontSize > 85) {
            currentFontSize -= 5;
            document.documentElement.style.fontSize = `${currentFontSize}%`;
        }
    });

    // Alternador de Cores (Tema Claro / Escuro)
    const btnToggleTheme = document.getElementById('btn-toggle-theme');
    btnToggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('agro-theme-pref', isDark ? 'dark' : 'light');
    });

    // Carregamento de preferência de persistência do leitor
    if (localStorage.getItem('agro-theme-pref') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // ==========================================
    // 5. LEITURA POR VOZ (SpeechSynthesis API NATIVA)
    // ==========================================
    const btnTtsStart = document.getElementById('btn-tts-start');
    const btnTtsStop = document.getElementById('btn-tts-stop');
    let utteranceInstance = null;

    btnTtsStart.addEventListener('click', () => {
        window.speechSynthesis.cancel(); // Previne enfileiramento infinito de vozes

        const mainContent = document.getElementById('main-content');
        
        // Seleciona cirurgicamente elementos de texto editorial para não ler botões, labels e inputs do formulário
        const validTextNodes = mainContent.querySelectorAll('.text-article p, .text-article blockquote, .ia-section h2, .ia-section .section-intro, .accordion-content p');
        let consolidatedText = "";

        validTextNodes.forEach(node => {
            consolidatedText += node.textContent + " ";
        });

        if (consolidatedText.trim() === "") return;

        utteranceInstance = new SpeechSynthesisUtterance(consolidatedText);
        utteranceInstance.lang = 'pt-BR';
        utteranceInstance.rate = 1.0; 

        window.speechSynthesis.speak(utteranceInstance);
    });

    btnTtsStop.addEventListener('click', () => {
        window.speechSynthesis.cancel();
    });
});
