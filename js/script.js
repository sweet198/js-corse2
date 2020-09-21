/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promos = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const promoBg = document.querySelector('.promo__bg');
const promoList = document.querySelector('.promo__interactive-list');
const promoItems = promoList.querySelectorAll('.promo__interactive-item');

promos.forEach((item) =>{
    item.remove();
});

genre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';


promoItems.forEach(item => {
    item.remove();
})

movieDB.movies.sort();

movieDB.movies.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('promo__interactive-item');
    li.innerHTML = `<span>${index + 1}</span>${movieDB.movies[index]}<div class="delete"></div>`;
    promoList.append(li);
});
