const offBtn = document.querySelector('.off-btn');
const hibernateBtn = document.querySelector('.hibernate-btn');

offBtn.addEventListener('click', () => {
    sendRequest('http://192.168.1.100:3000/SWITCHOFF'); // Замените IP-адрес на ваш IP и порт на порт вашего сервера
});

hibernateBtn.addEventListener('click', () => {
    sendRequest('http://192.168.1.100:3000/HIBERNATE'); // Замените IP-адрес на ваш IP и порт на порт вашего сервера
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