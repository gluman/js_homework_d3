
select_data = [
    { label: 'Драма', value: 'drama' },
    { label: 'Комедия', value: 'comedy' },
    { label: 'Фантастика', value: 'sci-fi' }]


const film_name = document.getElementById('name')
const film_genre = document.getElementById('genre')

// console.log(film_name)
// console.log(film_genre)
select_data.forEach(element => {
    option = document.createElement('option')
    option.text = element.label
    option.value = element.value
    film_genre.add(option)
});

const btn = document.querySelector('button')
const content = document.getElementsByClassName('content')
const input_film = document.querySelector('.input')
btn.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(content)
    // if (input_film) {
        const content_data = document.createElement('p');
        content.append(content_data);
        content_data.textContent = `Название фильма: ${input_film.value}`;
        
        // console.log(content)
        const genre_data = document.createElement('p');
        content.append(genre_data);
        genre_data.textContent = `Жанр: ${film_genre.value || 'не выбран'}`;
                // console.log(content);
    // }
});