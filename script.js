function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// Atualiza o relógio a cada minuto
setInterval(updateClock, 1000);

// Inicializa o relógio
updateClock();
