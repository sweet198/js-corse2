/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promos = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        promoList = document.querySelector('.promo__interactive-list'),
        promoForm = document.querySelector('form.add'),
        promoFormInput = promoForm.querySelector('.adding__input'),
        promoFormCheck = promoForm.querySelector('[type="checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };



    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };



    const sortArr = (arr) => {
        arr.sort();
    };



    const formPromoList = (films, parent) => {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((item, index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${index + 1} ${item}
                <div class="delete"></div>
            </li>
            `;
        });
        promoList.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                formPromoList(films, parent);
            });
        });
    };

    promoForm.addEventListener('submit', event => {
        event.preventDefault();

        let newFilm = promoFormInput.value;
        const favorite = promoFormCheck.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            formPromoList(movieDB.movies, promoList);
        }

        event.target.reset();
    });


    deleteAdv(promos);
    makeChanges();

    formPromoList(movieDB.movies, promoList);


});





