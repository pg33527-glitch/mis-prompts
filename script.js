function butterfly(){
 const b=document.createElement('div');
 b.textContent='🦋';
 b.style.position='fixed';
 b.style.left=(window.innerWidth/2+Math.random()*120-60)+'px';
 b.style.top=(window.innerHeight/2)+'px';
 b.style.fontSize='28px';
 b.style.transition='all 1.5s ease-out';
 document.body.appendChild(b);
 setTimeout(()=>{b.style.transform=`translate(${Math.random()*300-150}px,${-200-Math.random()*200}px)`;b.style.opacity='0';},20);
 setTimeout(()=>b.remove(),1600);
}
function flower(){
 const f=document.createElement('div');
 f.textContent='🌸';
 f.style.position='fixed';
 f.style.left=(window.innerWidth/2+Math.random()*120-60)+'px';
 f.style.top=(window.innerHeight/2)+'px';
 f.style.fontSize='24px';
 f.style.transition='all 1.5s ease-out';
 document.body.appendChild(f);
 setTimeout(()=>{f.style.transform=`translate(${Math.random()*300-150}px,${-180-Math.random()*200}px)`;f.style.opacity='0';},20);
 setTimeout(()=>f.remove(),1600);
}
function copyPrompt(){
 const t=document.getElementById('prompt');
 navigator.clipboard.writeText(t.value);
 document.getElementById('msg').textContent='✨ ¡Prompt copiado!';
 for(let i=0;i<12;i++){setTimeout(butterfly,i*50);setTimeout(flower,i*50);}
}

body{margin:0;font-family:Arial;background:linear-gradient(135deg,#ffd9ec,#ffeefe);display:flex;flex-direction:column;align-items:center;min-height:100vh}
header{text-align:center;padding:30px}
h1{color:#d84fa0;font-size:3rem}
.card{width:min(90%,700px);background:#ffffffaa;backdrop-filter:blur(10px);padding:20px;border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,.15)}
textarea{width:100%;height:220px;border-radius:15px;padding:12px}
button{margin-top:15px;width:100%;padding:15px;border:none;border-radius:30px;background:#ff7fbe;color:white;font-size:18px;cursor:pointer}
button:hover{transform:scale(1.02)}
#msg{text-align:center;color:#b03f8c;font-weight:bold}
@media(max-width:700px){h1{font-size:2.2rem}.card{width:95%}}
