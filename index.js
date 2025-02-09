
select_data = [
{label: 'Драма', value: 'drama'},
{label: 'Комедия', value: 'comedy'},
{label: 'Фантастика', value: 'sci-fi'}]


const film_name = document.getElementById('name')
const  film_genre = document.getElementById('genre')

console.log(film_name)
console.log(film_genre)
select_data.forEach(element => {
    option = document.createElement('option')
    console.log(element('label'))
    console.log(element('value'))
    option.text = element('label')
    option.value = element('value')
    film_genre.add()
});
