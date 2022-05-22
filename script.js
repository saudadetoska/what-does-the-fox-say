//concept: arrays, conditionals, loops, functions

//determine .length of buttons
var animalButtons = document.querySelectorAll("button"); //10

//adding eventListener for all buttons
for (let i = 0; i < animalButtons.length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function playSound() {
        //play specific animal sound based on the button id
        let audio = new Audio("/sounds/" + this.id + ".mp3");
        audio.play();
    });
}

// cycle (ordered) foxSounds
var foxSounds = ["fox0", 'fox1', 'fox2', 'fox3', "fox4"];
const fox = document.getElementById("fox"); //selects fox button
let clicks = 0;

fox.addEventListener("click", function foxSays() {
    let audio = new Audio("/sounds/" + foxSounds[clicks] + ".mp3");
    audio.play();
    clicks++;
    //reset clicks to 0 upon reaching last index
    if (clicks === foxSounds.length) {
        clicks = 0;
    }
});

// //random foxSounds
// let foxSounds = ["/sounds/fox1.mp3", "/sounds/fox2.mp3", "/sounds/fox3.mp3"];

// fox.addEventListener("click", function foxSays() {
//     let audio = new Audio(foxSounds[Math.floor(Math.random() * foxSounds.length)]);
//     audio.play();
// });