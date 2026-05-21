// ACCORDION

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {

    const content = header.nextElementSibling;
    const icon = header.querySelector("span");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});

// FORMULÁRIO

const form = document.getElementById("seminarioForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  formMessage.innerHTML = `
    <p style="margin-top:20px; color:#00ffaa; font-weight:600;">
      Inscrição realizada com sucesso!
    </p>
  `;

  form.reset();
});

// COMENTÁRIOS

const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");

commentBtn.addEventListener("click", () => {

  const text = commentInput.value.trim();

  if (text === "") {
    alert("Digite um comentário antes de enviar.");
    return;
  }

  const comment = document.createElement("div");
  comment.classList.add("comment");

  comment.innerHTML = `
    <p>${text}</p>
  `;

  commentsList.prepend(comment);

  commentInput.value = "";
});
