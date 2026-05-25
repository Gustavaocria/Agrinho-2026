const body =
document.body;

const sidebar =
document.getElementById("sidebar");

const sidebarToggle =
document.getElementById("sidebarToggle");

const accordionHeaders =
document.querySelectorAll(".accordion-header");

const form =
document.getElementById("seminarioForm");

const formMessage =
document.getElementById("formMessage");

const commentBtn =
document.getElementById("commentBtn");

const commentInput =
document.getElementById("commentInput");

const commentsList =
document.getElementById("commentsList");

const increaseBtn =
document.getElementById("increase-font");

const decreaseBtn =
document.getElementById("decrease-font");

const toggleTheme =
document.getElementById("toggle-theme");

const startReading =
document.getElementById("start-reading");

const stopReading =
document.getElementById("stop-reading");

let currentFontSize = 16;

let speech = null;

sidebarToggle.addEventListener("click",()=>{

  sidebar.classList.toggle("hidden");

});

accordionHeaders.forEach(header=>{

  header.addEventListener("click",()=>{

    const content =
    header.nextElementSibling;

    const icon =
    header.querySelector("span");

    const isOpen =
    content.style.maxHeight;

    document
    .querySelectorAll(".accordion-content")
    .forEach(item=>{

      item.style.maxHeight = null;

    });

    document
    .querySelectorAll(".accordion-header span")
    .forEach(span=>{

      span.textContent = "+";

    });

    if(!isOpen){

      content.style.maxHeight =
      content.scrollHeight + "px";

      icon.textContent = "−";

    }

  });

});

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const inputs =
  form.querySelectorAll("input");

  let valid = true;

  inputs.forEach(input=>{

    if(input.value.trim() === ""){

      valid = false;

      input.style.border =
      "2px solid red";

    }else{

      input.style.border =
      "2px solid transparent";

    }

  });

  if(!valid){

    formMessage.innerHTML = `
      <p style="
        color:#ff5c5c;
        margin-top:20px;
        font-weight:700;
      ">
        Preencha todos os campos.
      </p>
    `;

    return;

  }

  formMessage.innerHTML = `
    <p style="
      color:#00ff9d;
      margin-top:20px;
      font-weight:700;
    ">
      Inscrição realizada com sucesso!
    </p>
  `;

  form.reset();

});

function saveComments(){

  localStorage.setItem(
    "agroComments",
    commentsList.innerHTML
  );

}

function loadComments(){

  const saved =
  localStorage.getItem("agroComments");

  if(saved){

    commentsList.innerHTML = saved;

  }

}

function createComment(text){

  const comment =
  document.createElement("div");

  comment.classList.add("comment");

  const date =
  new Date().toLocaleDateString("pt-BR");

  comment.innerHTML = `
    <p>${text}</p>

    <small style="
      opacity:.7;
      display:block;
      margin-top:10px;
    ">
      ${date}
    </small>
  `;

  commentsList.prepend(comment);

  saveComments();

}

commentBtn.addEventListener("click",()=>{

  const text =
  commentInput.value.trim();

  if(text === ""){

    commentInput.style.border =
    "2px solid red";

    return;

  }

  commentInput.style.border =
  "none";

  createComment(text);

  commentInput.value = "";

});

commentInput.addEventListener("keypress",(e)=>{

  if(e.key === "Enter" && !e.shiftKey){

    e.preventDefault();

    commentBtn.click();

  }

});

increaseBtn.addEventListener("click",()=>{

  currentFontSize += 1;

  if(currentFontSize > 24){

    currentFontSize = 24;

  }

  document.documentElement
  .style
  .setProperty(
    "--font-size",
    currentFontSize + "px"
  );

});

decreaseBtn.addEventListener("click",()=>{

  currentFontSize -= 1;

  if(currentFontSize < 12){

    currentFontSize = 12;

  }

  document.documentElement
  .style
  .setProperty(
    "--font-size",
    currentFontSize + "px"
  );

});

toggleTheme.addEventListener("click",()=>{

  body.classList.toggle("light-mode");

  const isLight =
  body.classList.contains("light-mode");

  localStorage.setItem(
    "theme",
    isLight ? "light" : "dark"
  );

});

function loadTheme(){

  const savedTheme =
  localStorage.getItem("theme");

  if(savedTheme === "light"){

    body.classList.add("light-mode");

  }

}

startReading.addEventListener("click",()=>{

  window.speechSynthesis.cancel();

  const content =
  document.getElementById("main-content")
  .innerText;

  speech =
  new SpeechSynthesisUtterance(content);

  speech.lang = "pt-BR";

  speech.rate = 1;

  speech.pitch = 1;

  speech.volume = 1;

  window.speechSynthesis.speak(speech);

});

stopReading.addEventListener("click",()=>{

  window.speechSynthesis.cancel();

});

window.addEventListener("scroll",()=>{

  const navbar =
  document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.backdropFilter =
    "blur(20px)";

    navbar.style.background =
    "rgba(0,0,0,.65)";

  }else{

    navbar.style.background =
    "transparent";

  }

});

window.addEventListener("load",()=>{

  loadTheme();

  loadComments();

});

document.querySelectorAll("a[href^='#']")
.forEach(anchor=>{

  anchor.addEventListener("click",(e)=>{

    e.preventDefault();

    const target =
    document.querySelector(
      anchor.getAttribute("href")
    );

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      });

    }

  });

});
