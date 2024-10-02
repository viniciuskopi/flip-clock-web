function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;

    updateProgressBar(now);
}

function updateProgressBar(now) {
    const startOfWorkDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0); // 08:00
    const endOfWorkDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0); // 18:00

    const totalWorkDayMilliseconds = endOfWorkDay - startOfWorkDay;
    const elapsedMilliseconds = now - startOfWorkDay;

    // Calcula a porcentagem do dia de trabalho que passou
    let progressPercent = (elapsedMilliseconds / totalWorkDayMilliseconds) * 100;

    // Se for antes das 08:00 ou depois das 18:00
    if (progressPercent < 0) progressPercent = 0;
    if (progressPercent > 100) progressPercent = 100;

    // Atualiza a largura da barra de progresso
    document.getElementById('progress-bar').style.width = progressPercent + '%';
}

// Atualiza o relógio e a barra de progresso a cada minuto
setInterval(updateClock, 1000);

// Inicializa o relógio e a barra de progresso
updateClock();
