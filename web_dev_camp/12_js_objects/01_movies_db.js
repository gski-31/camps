/* Create an array of movie objects. each movie should have a title, rating, and hasWatched properties. iterate thrugh the array and print out something that looks like:

You have watched "In Burges" - 5 stars
You have not seen "Frozen" - 4.5 stars
You have seen "Mad Max Fury Road" - 5 stars
You have not seen "Les Miserables" -3.5 stars */

let movies = [
    {
        title: 'Zombieland',
        rating: 5,
        viewed: true,
    },
    {
        title: 'Wristcutters',
        rating: 5,
        viewed: true,
    },
    {
        title: 'The Jacket',
        rating: 4,
        viewed: true,
    },
    {
        title: 'Jurassic World',
        rating: 2,
        viewed: false,
    },
    {
        title: 'Rocknrolla',
        rating: 5,
        viewed: true,
    },
];

for(let i = 0 ; i < movies.length ; i++){
    if(movies[i].viewed === true){
        console.log(`you have seen ${movies[i].title} and rated it a ${movies[i].rating}`);
    } else {
        console.log(`you haven't seen ${movies[i].title} so your rating of ${movies[i].rating} needs to be adjusted`)
    }
}

movies.forEach(function(my_movie){
    if (my_movie.viewed === true) {
        console.log(`you have seen ${my_movie.title} and rated it a ${my_movie.rating}`);
    } else {
        console.log(`you haven't seen ${my_movie.title} so your rating of ${my_movie.rating} needs to be adjusted`)
    }
});