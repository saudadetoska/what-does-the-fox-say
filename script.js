//concept: arrays, conditionals, loops, functions

// audio NOT working on github (development).
// dev tools said: Failed to load resource: the server responded with a status of 404 ()
// yang2674.github.io/:1 Uncaught (in promise) DOMException: Failed to load because no supported source was found.
// This lead me to: https://googlechrome.github.io/samples/play-return-promise/index.html
// Still need solution

// 5/25/22 - Update
// Jarvis recommended using template literals instead of string concatenation

//determine .length of buttons
var animalButtons = document.querySelectorAll("button"); //10

//adding eventListener for all buttons
for (let i = 0; i < animalButtons.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function playSound() {
        //play specific animal sound based on the button id
        let audio = new Audio(`sounds/${this.id}.mp3`);
        audio.play();
    });
}

// cycle (ordered) foxSounds
var foxSounds = ["fox0", 'fox1', 'fox2', 'fox3', "fox4"];
const fox = document.getElementById("fox"); //selects fox button
let clicks = 0;

fox.addEventListener("click", function foxSays() {
    let audio = new Audio("sounds/" + foxSounds[clicks] + ".mp3");
    audio.play();
    clicks++;
    //reset clicks to 0 upon reaching last index
    if (clicks === foxSounds.length) {
        clicks = 0;
    }
});