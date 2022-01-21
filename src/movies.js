const movies = require('./data');


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  
  let directors = movies.map((total)=>{
    return total.director;
  })
return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let SpielbergMovies = movies.filter((movie)=>{
    return   movie.director  === 'Steven Spielberg' &&  movie.genre.includes('Drama');
  })
  return SpielbergMovies.length ;
  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let averageScore = movies.reduce((acc, value) =>{
    return acc + value.score;
  }, 0)
  
  if (movies.length === 0) return 0;
  return Number((averageScore/ movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaAverage = movies.filter((dramaMovies)=>{
    return  dramaMovies.genre.includes('Drama')
  });
  if (dramaAverage.length === 0) return 0;

  let average = dramaAverage.reduce((acc, value)=>{
   return (acc + value.score)
  }, 0)
  return Number((average/ dramaAverage.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
