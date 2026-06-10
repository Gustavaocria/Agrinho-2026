
// ===== LOGIN SYSTEM =====
document.getElementById("loginBtn").onclick=()=>{
const u=document.getElementById("user").value;
const p=document.getElementById("pass").value;

if(u && p){
document.getElementById("loginScreen").style.display="none";
document.getElementById("app").classList.remove("hidden");
}
};

// ===== NAVIGATION =====
function show(id){
document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

// ===== THEME =====
document.getElementById("theme").onclick=()=>{
document.body.classList.toggle("light");
};

// ===== FAKE API DATA =====
const apiData=[
{label:"Soja",value:"92% produtividade"},
{label:"Milho",value:"78% eficiência"},
{label:"Algodão",value:"85% qualidade"},
{label:"Café",value:"90% exportação"}
];

const box=document.getElementById("apiBox");

apiData.forEach(d=>{
const div=document.createElement("div");
div.innerHTML=`<b>${d.label}</b>: ${d.value}`;
box.appendChild(div);
});

// ===== CHAT =====
document.getElementById("send").onclick=()=>{
const msg=document.getElementById("msg").value;

if(msg){
const div=document.createElement("div");
div.innerText="🧑 "+msg;
document.getElementById("list").appendChild(div);
}
};

// ===== CHART ENGINE =====
function draw(id,color){
const c=document.getElementById(id);
const x=c.getContext("2d");

let data=[20,40,60,80,100];

data.forEach((v,i)=>{
x.fillStyle=color;
x.fillRect(i*15,100-v,10,v);
});
}

setTimeout(()=>{
draw("c1","#00ffcc");
draw("c2","#1e5eff");
draw("c3","#1dbf73");
},500);

// ===== AUTO UPDATE SIMULATION =====
setInterval(()=>{
document.getElementById("apiBox").innerHTML="";

apiData.forEach(d=>{
const div=document.createElement("div");
div.innerHTML=`<b>${d.label}</b>: ${d.value} (atualizado)`;
box.appendChild(div);
});
},5000);
