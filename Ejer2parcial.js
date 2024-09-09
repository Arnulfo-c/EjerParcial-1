//Arnulfo Josue Velasquez Cruz 

// 1. Crear un array que contenga al menos 5 películas, cada una con su título y género.
let peliculas = [
    { titulo: 'Interstellar', genero: 'Ciencia Ficción' },
    { titulo: 'After Everything', genero: 'Romance' },
    { titulo: 'Al filo del Mañana', genero: 'Acción' },
    { titulo: 'Inside Out 2', genero: 'Drama' },
    { titulo: 'Spider-Man: Un nuevo Universo', genero: 'Animacion' }
];

// 2. Usar una variable para almacenar el género de película que el usuario desea ver.
let generoDeseado = 'Animacion'; // Puedes cambiar este valor para probar con diferentes géneros

// 3. Utilizar sentencias if, else if y else para buscar una película dentro del array que coincida con el género seleccionado.
let peliculaRecomendada = null;

for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genero === generoDeseado) {
        peliculaRecomendada = peliculas[i].titulo;
        break;
    }
}

// 4. Usar console.log para mostrar el título de la película recomendada o un mensaje indicando que no hay películas disponibles para el género seleccionado.
if (peliculaRecomendada) {
    console.log('Te recomendamos ver: ${peliculaRecomendada}');
} else {
    console.log('No hay recomendaciones disponibles para el género seleccionado.');
}