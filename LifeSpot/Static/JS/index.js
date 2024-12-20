
let session = new Map();

function handleSession() {
    session.set("startDate", new Date().toLocaleString());
    session.set("userAgent", window.navigator.userAgent);
}

function checkAge() {
    const age = prompt("Пожалуйста, введите ваш возраст?");
    if (age !== null) {
        session.set("age", Number(age));
        if (session.get("age") >= 18) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        } else {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            window.location.href = "http://www.google.com";
        }
    } else {
        alert("Возраст не введен. Вы будете перенаправлены.");
        window.location.href = "http://www.google.com";
    }
}

let sessionLog = function logSession() {
    for (let [key, value] of session) {
        console.log(`${key}: ${value}`);
    }
};

function inputParseFunction() {
    const input = document.getElementById('input');
    return input ? input.value : '';
}

function filterContent() {
    let elements = document.getElementsByClassName('video-container');
    let searchQuery = inputParseFunction().toLowerCase();

    for (let i = 0; i < elements.length; i++) {
        let videoText = elements[i].querySelector('.video-title').innerText;
        if (!videoText.toLowerCase().includes(searchQuery)) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

document.getElementById('input').addEventListener('input', filterContent);

handleSession();
checkAge();
sessionLog();
