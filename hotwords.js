// JavaScript source code
// install mustache js
var words = [
    "Ice Hockey",
    "Barbeque",
    "Remote Control",
    "Justin Bieber",
    "SAT test",
    "Pikachu",
    "Binders Full of Women",
    "Harry Potter",
    "Electrified",
    "Michael Jackson",
    "Santa",
    "Eye Liner",
    "Pi",
    "Drinking",
    "Darth Vader",
    "Turkey",
    "Tetris",
    "Constipation",
    "Chemistry",
    "Rihanna",
    "Grenade",
    "Fish Bowl",
    "Avatar",
    "Ninja",
    "Batman",
    "Superman",
    "Rubik's Cube",
    "Basket",
    "Arrest",
    "Rollercoaster",
    "Blind",
    "Brain",
    "Lose",
    "Eraser",
    "Hunger Games",
    "Toy Story",
    "Titanic",
    "Lion King",
    "Finding Nemo",
    "Aladdin"
]

var iter = 0;
var teams = 2;
var timer = 2 * 45;

//starting will shuffle the words
$('#play').click(function() {
    words.sort( function() { return Math.random() - 0.5});
});

//displays the word
$('.h2').append(words[iter]);

//next button moves the words
$('#next').click(function () {
    ++iter;
});

//timer
setInterval(function () {
    timer--;
    if (timer == 0)
        window.location = "endgame.html";
}, 1000);



