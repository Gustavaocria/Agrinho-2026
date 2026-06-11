document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SISTEMA COMPLETO DE ACCORDION (EXPANSÍVEL)
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Comportamento focado na acessibilidade: inverte o estado ARIA
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
    // 2. VALIDAÇÃO AVANÇADA DO FORMULÁRIO DE INSCRIÇÃO
    // ==========================================
    const registerForm = document.getElementById('register-form');
    const emailInput = document.getElementById('inp-email');
    const successMsgBox = document.getElementById('form-success-msg');

    // Validação de E-mail em tempo real com expressão regular robusta
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() === "" || validateEmail(emailInput.value)) {
            emailInput.classList.remove('invalid');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;
        const inputs = registerForm.querySelectorAll('input[required]');

        // Varre todos os inputs obrigatórios verificando preenchimento
        inputs.forEach(input => {
            if (input.value.trim
