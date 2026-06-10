// ACCORDION
document.querySelectorAll(".acc-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// FONT CONTROL
let size = 16;

document.getElementById("aMais").onclick=()=>{
  size++;
  document.body.style.fontSize = size+"px";
};

document.getElementById("aMenos").onclick=()=>{
  size--;
  document.body.style.fontSize = size+"px";
};

// DARK MODE
document.getElementById("dark").onclick=()=>{
  document.body.classList.toggle("dark");
};

// SPEECH
const synth = window.speechSynthesis;

document.getElementById("ler").onclick=()=>{
  const text = document.getElementById("mainContent").innerText;
  const msg = new SpeechSynthesisUtterance(text);
  synth.speak(msg);
};

document.getElementById("parar").onclick=()=>{
  synth.cancel();
};

// FORM
document.getElementById("enviar").onclick=()=>{
  const nome = document.getElementById("nome").value;

  if(nome===""){
    document.getElementById("msg").innerText="Preencha os campos!";
  } else {
    document.getElementById("msg").innerText="Inscrição enviada com sucesso!";
  }
};

// COMMENTS
document.getElementById("addComment").onclick=()=>{
  const text = document.getElementById("comentario").value;

  if(text.trim()!==""){
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerText = text;

    document.getElementById("listaComentarios").appendChild(div);

    document.getElementById("comentario").value="";
  }
};
