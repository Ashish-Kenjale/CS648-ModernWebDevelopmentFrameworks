//STEP 1
var favMovies = ["Inception", "Joker", "Pokemon", "2012", "Armageddon"];
window.console.log(favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "Joker";
movies[2] = "Pokemon";
movies[3] = "2012";
movies[4] = "Armageddon";
window.console.log(movies[0]);

//STEP 3
var movies2 = new Array(5);
movies2[0] = "Inception";
movies2[1] = "Joker";
movies2[2] = "Pokemon";
movies2[3] = "2012";
movies2[4] = "Armageddon";

movies2.splice(2, 0, "Gravity");
window.console.log(movies2.length);

//STEP 4
var favMovies2 = [];
favMovies2[0] = "Inception";
favMovies2[1] = "Joker";
favMovies2[2] = "Pokemon";
favMovies2[3] = "2012";
favMovies2[4] = "Armageddon";

delete favMovies2[0];
window.console.log(favMovies2);

//STEP 5
var favMovies3 = [];
favMovies3[0] = "Inception";
favMovies3[1] = "Joker";
favMovies3[2] = "Pokemon";
favMovies3[3] = "2012";
favMovies3[4] = "Armageddon";
favMovies3[5] = "Stuart Little";
favMovies3[6] = "Baby's Day Out";

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

//STEP 6
var favMovies4 = [];
favMovies4[0] = "Inception";
favMovies4[1] = "Joker";
favMovies4[2] = "Pokemon";
favMovies4[3] = "2012";
favMovies4[4] = "Armageddon";
favMovies4[5] = "Stuart Little";
favMovies4[6] = "Baby's Day Out";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

//STEP 7
var favMovies5 = [];
favMovies5[0] = "Inception";
favMovies5[1] = "Joker";
favMovies5[2] = "Pokemon";
favMovies5[3] = "2012";
favMovies5[4] = "Armageddon";
favMovies5[5] = "Stuart Little";
favMovies5[6] = "Baby's Day Out";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

//STEP 8
var favMovies6 = [];
favMovies6[0] = "Inception";
favMovies6[1] = "Joker";
favMovies6[2] = "Pokemon";
favMovies6[3] = "2012";
favMovies6[4] = "Armageddon";
favMovies6[5] = "Stuart Little";
favMovies6[6] = "Baby's Day Out";

var leastFavMovies = [];
leastFavMovies[0] = "Twenty One";
leastFavMovies[1] = "Life of Walter Mitty";
leastFavMovies[2] = "Curious Sam";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

//STEP 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

//STEP 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());