const sections=[...document.querySelectorAll('details.section')];
function toggleAll(open){sections.forEach(s=>s.open=open)}
const search=document.getElementById('search');
if(search){search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();document.querySelectorAll('.searchable').forEach(el=>{const hit=!q||el.innerText.toLowerCase().includes(q);el.classList.toggle('hide',!hit);if(q&&hit)el.open=true})});}
