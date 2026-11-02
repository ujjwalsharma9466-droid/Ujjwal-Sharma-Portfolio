var WA='<a href="https://wa.me/917452046844" target="_blank" rel="noopener">7452046844</a>',
MAIL='<a href="mailto:ujjwalsharma9466@gmail.com">ujjwalsharma9466@gmail.com</a>',
IG='<a href="https://www.instagram.com/abhieie.06" target="_blank" rel="noopener">@abhieie.06</a>';
var KB=[
{k:['hi','hello','hey','namaste','sup'],a:'Hi! I’m Ujjwal’s assistant. Ask me about his skills, education, hobbies or how to reach him.'},
{k:['who','about','introduce','yourself','tell me','name','ujjwal'],a:'Ujjwal Sharma is a first-year B.Tech AI &amp; ML student at KIET Group of Institutions (Deemed to be University). He builds full-stack web apps and dashboards, loves debugging, and takes part in hackathons and coding competitions.'},
{k:['skill','tech','stack','language','know','programming','tools'],a:'Ujjwal works with JavaScript, HTML, CSS, Node.js, Python and C++. He specialises in frontend and backend web development, web app dashboards and debugging.'},
{k:['frontend','front','ui','css','html'],a:'On the frontend he uses HTML, CSS and JavaScript to build responsive pages and dashboard interfaces.'},
{k:['backend','back','node','server','api'],a:'On the backend he works with Node.js and Python to build the server logic behind web apps and dashboards.'},
{k:['dashboard','webapp','web app'],a:'Web app dashboards are one of Ujjwal’s specialities. He handles both the interface and the server side.'},
{k:['debug','bug','fix','error'],a:'Debugging is one of Ujjwal’s strengths. He enjoys tracking down tricky bugs and fixing them properly.'},
{k:['college','university','kiet','btech','b.tech','aiml','ai','ml','study','studying','year','course','degree'],a:'Ujjwal is in the first year of B.Tech in Artificial Intelligence &amp; Machine Learning at KIET Group of Institutions (Deemed to be University).'},
{k:['school','gayatri','agra','12th','12','class','pcm','subject','stream'],a:'Ujjwal studied at Gayatri Public School, Agra, up to Class 12. His Class 12 stream was PCM, with subjects Physics, Chemistry, Mathematics, English and Physical Education.'},
{k:['percent','marks','score','result','grade','10th','10','88','board','academic'],a:'Ujjwal scored 88% in Class 10 and 88% in Class 12 (PCM).'},
{k:['hobby','hobbies','interest','free','fun','cricket','gaming','game','play'],a:'Ujjwal’s hobbies are developing tricky projects, playing cricket and gaming.'},
{k:['hackathon','competition','contest','compete','coding'],a:'Ujjwal is an avid hackathon and coding-competition enthusiast. He enjoys building something working under time pressure.'},
{k:['project','built','build','work','portfolio','made'],a:'Ujjwal likes developing tricky projects, mostly web apps and dashboards, often for hackathons. For specifics, message him on WhatsApp: '+WA},
{k:['whatsapp','phone','number','call','mobile','contact','reach','message','hire','talk'],a:'You can reach Ujjwal on WhatsApp at '+WA+', by email at '+MAIL+', or on Instagram '+IG+'.'},
{k:['email','mail','gmail'],a:'His email is '+MAIL+'.'},
{k:['instagram','insta','ig','social'],a:'His Instagram handle is '+IG+'.'},
{k:['thanks','thank','bye','ok','cool','nice'],a:'Happy to help! If you want to reach Ujjwal directly, use the WhatsApp button on this page.'}
];
var log=document.getElementById('log'),q=document.getElementById('q'),panel=document.getElementById('panel'),cb=document.getElementById('cb'),started=false;
function add(t,c){var d=document.createElement('div');d.className='m '+c;if(c==='b')d.innerHTML=t;else d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight}
function reply(s){
var w=s.toLowerCase().replace(/[^a-z0-9. ]/g,' ').split(/\s+/),best=null,top=0;
KB.forEach(function(e){var n=0;e.k.forEach(function(k){if(k.indexOf(' ')>-1?s.toLowerCase().indexOf(k)>-1:w.indexOf(k)>-1)n+=k.length>2?2:1});if(n>top){top=n;best=e}});
return best?best.a:'I don’t have that detail yet. Try asking about his skills, education, hobbies or contact info, or message him directly on WhatsApp: '+WA}
function ask(s){s=s.trim();if(!s)return;add(s,'u');q.value='';setTimeout(function(){add(reply(s),'b')},350)}
function openChat(o){panel.classList.toggle('open',o);cb.setAttribute('aria-expanded',o);cb.textContent=o?'Close chat':'Ask my AI';
if(o&&!started){started=true;add('Hi! I’m Ujjwal’s assistant. What would you like to know about him?','b')}if(o)q.focus()}
cb.onclick=function(){openChat(!panel.classList.contains('open'))};
document.getElementById('x').onclick=function(){openChat(false)};
document.getElementById('heroChat').onclick=function(){openChat(true)};
document.getElementById('send').onclick=function(){ask(q.value)};
q.addEventListener('keydown',function(e){if(e.key==='Enter')ask(q.value)});
var sug=document.getElementById('sug');
['Who is Ujjwal?','Skills','Education','Hobbies','Contact'].forEach(function(t){var b=document.createElement('button');b.textContent=t;b.onclick=function(){ask(t==='Contact'?'How can I contact you?':t==='Skills'?'What are your skills?':t)};sug.appendChild(b)});
