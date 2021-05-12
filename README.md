[![Build Status](https://travis-ci.com/VladislavBryl/Deployment-on-Heroku.svg?branch=main)
# Browser Battlefield

# About

Це маленька браузерна гра у жанрі пошагова стратегія, у стадії розробки

## Реалізація

Реалізовано за допомогою Node.js.

# Deployment on Heroku

<p align="center">
  <img src="https://user-images.githubusercontent.com/37350375/113612015-1f0e5280-9604-11eb-83b6-925f444367da.png">
</p>

Для початку, нам потрібен аккаунт хостинга Heroku. [Зареєструємось для його отримання](heroku.com)
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117588852-7b462400-b126-11eb-9902-b0aa924ac607.png">
</p>

Перейдемо на сторінку [Dashboard](https://dashboard.heroku.com)
<p align="center">
  <img src="https://user-images.githubusercontent.com/37350375/113612574-e1f69000-9604-11eb-8a71-c9db5f189bee.png">
</p>

Оберемо з меню зверху пункт `New -> Create new app` і задамо назву
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117589221-94e86b00-b128-11eb-92a6-056a3831ff2e.png">
</p>

І ми створили наш додаток на піддомені heroku.com

Теперь ми попадаємо в оверв'ю проекту, тут мі можемо побачити останню активність в проекті, список розробників (колабораторів), а також вибраний при регістрації тарифний план (Безкоштовний - у моему випадку)
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117589369-4daeaa00-b129-11eb-8ef4-61543ebb7e11.png">
</p>

На наступній вкладці ресурсів ми можемо додавати плагіни до нашего проекту, які вже за нас люб'язно підготував хероку.
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117589475-0543bc00-b12a-11eb-97b6-6b5888a9807a.png">
</p>

Наприклад по пошуку можно вибрати постгрес і додати базу данних до свого проекту (Хоча мені зараз це не потрібно, але якщо уявити, що проект буде розвиватися - то знадобиться база даних)
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117589504-273d3e80-b12a-11eb-935c-62dd097e752a.png">
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117589505-2e644c80-b12a-11eb-8ddf-e9b0318896cf.png">
</p>

На вкладці Деплой розташован необхідний функціонал для деплою (тобто розташуванню на домені в інтернеті) додатка\сайта

<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117589630-fe697900-b12a-11eb-9402-f4a1d26db31c.png">
</p>

Тут є декілька способів надати хероку код сайту, я обрав гітхаб, та авторизувався через нього
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117589669-425c7e00-b12b-11eb-8259-3c4ef02f8f44.png">
</p>

Теперь потрібно обрати репозиторій з кодом нашого сайту
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117589690-69b34b00-b12b-11eb-864b-7e25ab0c4040.png">
</p>

Натиснувши 'Connect' - ми під'еднали код до домену, хероку теперь знає який код буде завантажений

<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117590421-ad0fb880-b12f-11eb-935c-67bff8038e75.png">
</p>

Тепер ми можемо виконати деплой нашого сайту на домен, для цього натиснувши відповідку кнопку
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117590445-c44ea600-b12f-11eb-8957-b7ede847cb09.png">
</p>

Хероку підтягую код додатка з гітхабу, встанавлює середовище для нього, завантажує залежності й запускає
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117590476-de888400-b12f-11eb-918b-dc6a9a36deb5.png">
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117590493-f5c77180-b12f-11eb-90b6-7e8bab85d450.png">
</p>

З першого разу в мене сайт не відкрився, мене привітало вікно помилки у якому мені хероку радив глянути логи
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117590654-d41aba00-b130-11eb-98e7-76be1ec23e5b.png">
</p>

І дійсно, якщо щось пішло не так, то ми можем відкрити панель логів серверу вибравши в верхньому меню More -> View logs
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117590572-75edd700-b130-11eb-9aac-6a79893bd5d8.png">
</p>
Запустимо збірку знову для того щоб теперь вловити проблему в логах
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117590556-62427080-b130-11eb-94bc-868645a3dd16.png">
</p>

Теперь виправим шлях до модулю і [мій сайт](https://test-battlefield.herokuapp.com) запрацюэ!
Теперь мій сайт знаходиться на домені test-battlefield.herokuapp.com і доступен за посиланням https://test-battlefield.herokuapp.com
<p align="center">
  <img src="https://user-images.githubusercontent.com/54996000/117591828-74bfa880-b136-11eb-9064-7d2dbb49040a.png">
</p>
