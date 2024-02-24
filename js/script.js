'use strict';

document.addEventListener('DOMContentLoaded', () => { // дождаться загрузки DOM -- вместо document может быть  window
    const movieDB = {  // весь код
        movies: [
            "Одержимость",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Скотт Пилигрим против..."
        ]
    };

    //1) Удалить все рекламные блоки со страницы (правая часть сайта)
    const advers = document.querySelectorAll(".promo__adv img"), 
        poster = document.querySelector(".promo__bg"), // 3 один на странице
        filmsPrGen = poster.querySelector(".promo__genre"), // 2 жанр берем с постера
        filmsList = document.querySelector('.promo__interactive-list'), // 1
       
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),// value -что ввели
        checkbox = addForm.querySelector('[type="checkbox"]') //атрибуты

        ;
     
/* 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. 
Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value; */
//2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

   


    //ф-я удаления рекламы
    const deleteAdv = (advers) => {        
        advers.forEach(item => {item.remove();  }
    )};
     

 
    //filmsPr.forEach(item => (item.value == ))
    //2) Изменить жанр фильма, поменять "комедия" на "драма"

    const makeChanges = () => {
        filmsPrGen.textContent = 'Драма'; // заменить со
        poster.style.backgroundImage = 'url("img/bg.jpg")' // ot html 
   }


   // sort
   const sortArr = (arr) => {arr.sort()};
    

    // 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
/*     films.innerHTML = '' // очистить лист - вставить текст
    movieDB.movies.sort(); */
    // формируем верстку и помещаем
    
    // films.innerHTML -- это строка, получает всн содержимое внутри эл
    
    // в ф-я  вывода списка фильмов из базы
 
    function createMovieList(films, parent){
        parent.innerHTML = '';
         films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film} 
                <div class="delete"></div>
            </li>
        `;
        })

        //3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
        // пройти по детям навесить удалить реакцию на корзину
        let n = parent.children.length;
        console.log('ch' , n, parent.children);

            for(let i=0; i < n; i++ ) {
                let item = parent.children[i];            
                const del = item.querySelector(".delete");
                
                del.addEventListener('click', () => {
                    // find item.value in db and delete
                    console.log('delete item:',  item);
                //    item.remove();
                //    movieDB.movies.splice(i, 1);
                    films.splice(i, 1);
                    console.log('new del',  movieDB.movies);  // вырезает i элемент 1 из массива или slice
            //   movieDB.movies =  movieDB.movies.slice(0,i).concat(movieDB.movies.slice(i+1));

                createMovieList(films, parent);
                })            
            }
        // версия учителя
/*         document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        }); */

    }

deleteAdv (advers);
sortArr(movieDB.movies);
createMovieList(movieDB.movies, filmsList)

addForm.addEventListener('submit', (event) => {
    event.preventDefault(); // нет станд реакции, стран не перегр

    let newFilm = addInput.value;// value -что ввели
    const favorite = checkbox.checked; //checkbox - значение
    console.log ("favorite - ", favorite, newFilm, ' - new!!');
    if (newFilm) {
        //2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`//newFilm.slise(0,21) + '...'
         }
        movieDB.movies.push(newFilm) // add Film in movieDB
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, filmsList);
        addForm.reset(); // сбросить текст из формы --или event.target 
        if (favorite) {console.log (newFilm, ' - любимый!!')};
    }

}) 


/* console.log('ch' , films.children);
console.log('фильмы ',  movieDB.movies); 
console.log('slice 2 ',  movieDB.movies[2] , '\n___start', movieDB.movies.slice(0,2)); 
console.log('TALE ',  movieDB.movies[2] ,  movieDB.movies.slice(2+1));

console.log('ALL ',  movieDB.movies); */
console.log(' -----\n', movieDB.movies); 
createMovieList(movieDB.movies, filmsList);

}); //совсем конец