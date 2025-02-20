// подключение express
const express = require("express");

// подключение path
const path = require('path')

// создаем объект приложения
const app = express();

// указываем путь до папки со статикой
app.use(express.static(path.join(__dirname, '../public')))

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
    // отправляем ответ
    response.sendFile("/public/index.html", {'root': './'});
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
console.log("Server listening 3000");