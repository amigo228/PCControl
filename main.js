const offBtn = document.querySelector('.off-btn');
const hibernateBtn = document.querySelector('.hibernate-btn');

offBtn.addEventListener('click', () => {
    sendRequest('https://192.168.0.100:3000/SWITCHOFF');
});

hibernateBtn.addEventListener('click', () => {
    sendRequest('https://192.168.0.100:3000/HIBERNATE');
});

function sendRequest(url) {
    fetch(url, {
        method: 'POST',
    })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Результат выполнения команды на сервере
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
}