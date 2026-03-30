# 🌾 Agrinho 2026: Plataforma Agro-Tech Sustentável

![GitHub repo size](https://img.shields.io/github/repo-size/seu-usuario/nome-do-repositorio?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/seu-usuario/nome-do-repositorio?color=red&style=for-the-badge)
![JS Logic](https://img.shields.io/badge/Logic-LocalStorage_&_Modals-blueviolet?style=for-the-badge)

Este é um projeto de alta complexidade desenvolvido para o concurso **Agrinho 2026**, focado na intersecção entre produtividade agrícola e preservação ambiental. O site utiliza tecnologias modernas de front-end para criar uma experiência imersiva e funcional.

---

## 🚀 Novas Funcionalidades Implementadas

Diferente de um site estático comum, esta versão conta com:

* **🔐 Sistema de Autenticação (Simulado):** * Uso de `localStorage` para persistência de dados.
    * Lógica de "Cadastro Automático": Se o e-mail não existe, o sistema cria a conta; se existe, valida a senha.
    * Feedback dinâmico para o usuário (mensagens de erro ou sucesso sem recarregar a página).

* **🎥 Galeria de Vídeos Interativa:**
    * Interface baseada em cards com *thumbnails* dinâmicas do YouTube.
    * **Sistema de Modal (Lightbox):** Os vídeos abrem em uma camada flutuante sobre o site, utilizando `iframes` injetados via JavaScript para otimizar o carregamento.

* **📱 UX/UI Avançada:**
    * Efeito de vidro (Glassmorphism) nos formulários.
    * Animações de entrada sincronizadas com o scroll (AOS Library).

---

## 🛠️ Tecnologias e Ferramentas

| Ferramenta | Descrição |
| :--- | :--- |
| **JavaScript ES6** | Manipulação de DOM, Event Listeners e LocalStorage. |
| **HTML5 Video API** | Integração com API de incorporação do YouTube. |
| **CSS Grid & Flex** | Arquitetura de layout complexa e responsiva. |
| **AOS.js** | Biblioteca de animações para scroll tecnológico. |

---

## 📂 Estrutura de Arquivos

```text
├── index.html       # Estrutura com seções de Login e Vídeos
├── style.css        # Design Dark Mode, Modais e Glassmorphism
├── script.js        # Lógica de Login, Validação e Controle de Vídeo
└── README.md        # Documentação técnica do projeto
