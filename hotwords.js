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
var tick = false;
var timer = teams * 5;

var change = function (id) {
    $('.current').toggleClass('current');
    $('#' + id).toggleClass('current');
};

$(document).ready(function () {
    
    //events
    $('#play').click(function () {
        words.sort(function () { return Math.random() - 0.5 });
        change('green');
    });

    $('#green').mousedown(function () {
        tick = true;
        $('.word').html(words[iter]);
        change('word');
    });

    $('#word').mouseup(function () {
        change('progress');
    });

    $('#progress').click(function () {
        tick = false;
        change('reveal');
    });

    $('#reveal').mousedown(function () {
        ++iter;
        $('.word').html(words[iter]);
        tick = true;
        change('word');
    });

    $('#end').click(function () {
        change('main');
    });

    $('h2').css('line-height', $(window).height() + 'px');
     
    //timer

    setInterval(function () {
        if (tick)
            timer--;
        if (timer == 0)
            change('end');
    }, 1000);
});