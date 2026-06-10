// ================= LOGIN =================
document.getElementById("enter").onclick = () => {
const u = document.getElementById("user").value;
const p = document.getElementById("pass").value;

if(u && p){
document.getElementById("login").style.display="none";
document.getElementById("app").classList.remove("hidden");
startSystem();
}
};

// ================= NAVIGATION =================
document.querySelectorAll(".sidebar button").forEach(btn=>{
btn.addEventListener("click",()=>{
if(btn.id==="theme") return;

let id = btn.textContent.toLowerCase()
.replace(/[^a-z]/g,"")
.replace("overview","dashboard")
.replace("analytics","analytics")
.replace("computegird","compute")
.replace("aisystems","ai")
.replace("datacenters","datacenter")
.replace("alerts","alerts")
.replace("logs","logs")
.replace("researchlab","research");

document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
document.getElementById(id).classList.add("active");
});
});

// ================= SYSTEM CORE =================
function startSystem(){

// STREAM LIVE
const stream = document.getElementById("stream");

setInterval(()=>{
const msgs = [
"GPU MATRIX OPTIMIZED",
"NEURAL THREAD SYNC OK",
"GLOBAL NODE STABLE",
"AI LOAD BALANCED",
"ENERGY ROUTING ACTIVE"
];

stream.innerHTML += msgs[Math.floor(Math.random()*msgs.length)]+"<br>";
stream.scrollTop = stream.scrollHeight;
},500);

// LOG SYSTEM
const logs = document.getElementById("logsBox");

setInterval(()=>{
logs.innerHTML += `[CORE] heartbeat OK :: ${Date.now()}<br>`;
logs.scrollTop = logs.scrollHeight;
},800);

// ALERT ENGINE
setInterval(()=>{
const alerts = document.querySelector(".alerts");
if(alerts){
const a = document.createElement("div");
a.className="alert";
a.textContent = Math.random()>0.5
? "✔ System stable"
: "⚠ Minor fluctuation detected";
alerts.appendChild(a);

if(alerts.children.length>8){
alerts.removeChild(alerts.firstChild);
}
}
},2500);

// AI SIMULATION (fake "thinking")
setInterval(()=>{
const titles = document.querySelectorAll("h3");
titles.forEach(t=>{
if(Math.random()>0.7){
t.style.color="#fff";
setTimeout(()=>t.style.color="#00ff9d",300);
}
});
},1200);

// ENERGY PULSE BACKGROUND
setInterval(()=>{
document.body.style.filter =
`hue-rotate(${Math.random()*10}deg)`;
},2000);

// FAKE CHARTS
draw("g1");
draw("g2");
draw("g3");
}

// ================= CHART ENGINE =================
function draw(id){
const c = document.getElementById(id);
if(!c) return;

const ctx = c.getContext("2d");

function render(){
ctx.clearRect(0,0,c.width,c.height);

let bars = Array.from({length:6},()=>Math.random()*100);

bars.forEach((v,i)=>{
ctx.fillStyle="#00ff9d";
ctx.fillRect(i*20,100-v,10,v);
});

requestAnimationFrame(render);
}

render();
}

// ================= BACKGROUND LIVING SYSTEM =================
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for(let i=0;i<220;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
ctx.fillStyle="rgba(0,255,157,0.4)";
ctx.fillRect(p.x,p.y,2,2);

p.y += 0.6;
if(p.y>canvas.height) p.y=0;
});

requestAnimationFrame(animate);
}

animate();
