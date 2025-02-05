// Simulácia databázy (pre reálny projekt nahraď API/Databázou)  
let memorials = JSON.parse(localStorage.getItem('memorials')) || [];  
  
// Načítanie pamiatok na hlavnú stránku  
function loadMemorials() {  
    const container = document.getElementById('memorials');  
    if(!container) return;  
  
    container.innerHTML = memorials.map(memorial => `  
        <div class="memorial-card">  
            <h3>${memorial.name} (${memorial.species})</h3>  
            <p class="date">🕯️ ${memorial.date}</p>  
            <p>${memorial.text.substring(0, 100)}...</p>  
        </div>  
    `).join('');  
}  
  
// Spracovanie formulára  
const form = document.getElementById('memorialForm');  
if(form) {  
    form.addEventListener('submit', (e) => {  
        e.preventDefault();  
        const newMemorial = {  
            name: e.target[0].value,  
            species: e.target[1].value,  
            date: e.target[2].value,  
            text: e.target[3].value,  
            photo: null  
        };  
  
        memorials.unshift(newMemorial);  
        localStorage.setItem('memorials', JSON.stringify(memorials));  
        window.location.href = 'index.html';  
    });  
}  
  
// Inicializácia  
loadMemorials();
