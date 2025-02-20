select_data = [
    { label: 'Драма', value: 'drama' },
    { label: 'Комедия', value: 'comedy' },
    { label: 'Фантастика', value: 'sci-fi' }]


let film_name = document.getElementById('name')
let film_genre = document.getElementById('genre')

document.addEventListener('DOMContentLoaded', (event) => {
    select_data.forEach(element => {
        event.preventDefault()
        option = document.createElement('option')
        option.text = element.label
        option.value = element.value
        film_genre.add(option)
    });
})

const form = document.querySelector('form')
let content = document.querySelector('.content')
let input_film = document.querySelector('input')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(content)
    if (input_film.value != '') {
        const content_data = document.createElement('p');
        content_data.textContent = `Название фильма: ${film_name.value}`;
        content.appendChild(content_data)
        const genre_data = document.createElement('p');
        genre_data.textContent = `Жанр: ${film_genre.options[film_genre.options.selectedIndex].text || 'не выбран'}`;
        content.appendChild(genre_data)
        film_name.value = ``
    }
});