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
var timer;
var beepBeep = [false, false, false];
var change = function (id) {
    $('.current').toggleClass('current');
    $('#' + id).toggleClass('current');
};
var playerNumb = 2;

document.addEventListener('touchstart', function (e) {
    var id = $('.current').attr('id');
    if (id == 'green') {
        tick = true;
        $('.word').html(words[iter]);
        change('word');
    } else if (id == 'reveal') {
        tick = true;
        ++iter;
        $('.word').html(words[iter]);
        change('word');
    }
});
document.addEventListener('touchend', function (e) {
    var id = $('.current').attr('id');
    if (id == 'word') {
        change('progress');
    }
})


$('#word').click(function () {
    change('progress');
});
$(document).ready(function () {

    //sound initialization
    var beep = document.createElement('audio');
    beep.setAttribute('src', 'beep.mp3');
    var alarm = document.createElement('audio');
    alarm.setAttribute('src', 'alarm.mp3');
    $.get();

    //events
    $('#up').click(function () {
        playerNumb++;
        if (playerNumb >= 4) {
            playerNumb = 4;
            $('#up').css('color', 'grey'); $('#playernumb').html(playerNumb + '');
        } else {
            $('#playernumb').html(playerNumb + '');
            $('#down').css('color', 'green');
        }
    });

    $('#down').click(function () {
        playerNumb--;
        if (playerNumb <= 2) {
            playerNumb = 2;
            $('#down').css('color', 'grey'); $('#playernumb').html(playerNumb + '');
        } else {
            $('#playernumb').html(playerNumb + '');
            $('#up').css('color', 'green');
        }
    });

    $('#play').click(function () {
        change('players');
    });

    $('#start').click(function () {
        words.sort(function () { return Math.random() - 0.5 });
        timer = teams * 5;
        change('green');
    })
    //beep beeps
    
    setInterval(function () {
        if (tick) {
            beep.play();
            $('#progress').toggleClass('blanca');
            setTimeout('$("#progress").toggleClass("blanca")', 100);
        }
    }, 500);
    /*
    setInterval(function () {
        if (tick && beepBeep[1])
            beep.play();
    }, 1000);
    setInterval(function () {
        if (tick && beepBeep[2])
            beep.play();
    }, 1500);

    setInterval(function () {
        beepBeep = [false, false, false];
        beepBeep[Math.floor(Math.random() * 3)] = true;
    }, 5000);
    */

    $('#progress').click(function () {
        tick = false;
        change('reveal');
    });

    $('#end').click(function () {
        tick = false;
        change('main');
    });

    $('h2').css('line-height', $(window).height() + 'px');
     
    //timer

    setInterval(function () {
        if (tick) {
            timer--;
            if (timer == 0) {
                change('end');
                tick = false;
                alarm.play();
            }
        }
    }, 1000);
});