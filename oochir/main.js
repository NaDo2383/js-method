const queueLine = ["Бат", "Дорж", "Пунцаг", "Готов", "Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар", "Сүхээ"];
queueLine.splice(queueLine.indexOf("Гончигсумлай") + 1, 2);
queueLine.slice(0, 9);
console.log(queueLine);
