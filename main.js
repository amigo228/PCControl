const btn = document.querySelector('.off-btn');
const hibernateBtn = document.querySelector('.hibernate-btn');

btn.addEventListener('click', () => {
    sendRequest('SWITCHOFF');
});

hibernateBtn.addEventListener('click', () => {
    sendRequest('HIBERNATE');
});

function sendRequest(action) {
    fetch(`http://localhost:3000/${action}`, {
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