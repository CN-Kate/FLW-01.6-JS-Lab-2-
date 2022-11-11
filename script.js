
// task 1: declare your selector variables for tiles 1-9. There should be 9 variables total.
let tile1=document.querySelector(".tile1");
let tile2=document.querySelector(".tile2");
let tile3=document.querySelector(".tile3");
let tile4=document.querySelector(".tile4");
let tile5=document.querySelector(".tile5");
let tile6=document.querySelector(".tile6");
let tile7=document.querySelector(".tile7");
let tile8=document.querySelector(".tile8");
let tile9=document.querySelector(".tile9");


/********* NOTE: unsure which tile is which? Be sure to reference the HTML when you need to double-check! ************/


// task 2: tile 1 feels a little sad. Update the inner HTML to show an encouraging message! Something like "YOU GOT THIS!" or even a "You're a beautiful person!" 

tile1.innerHTML=`<h1>You got this!</h1>`;


// task 3: tile 2 has a button. Create a click event and have the background color of tile 2 change to a shade of green.BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.Can you see if there's a way to toggle it???

let tile2Button=document.querySelector(".tile2Button");
tile2Button.onclick = function() {
tile2.style.backgroundColor="green";
  
}

// task 4: what's this? A totoro? Where's his friends? Using either appendChild or insertAdjacentHTML, add a friend to tile 3. Need some inspiration? Go to giphy.com, search a character and choose the "stickers".

tile3.insertAdjacentHTML('beforeend','<iframe src="https://giphy.com/embed/aMhaPCG2LXUzVxLwYB" width="100" height="100" frameBorder="0" class="giphy-embed"></iframe>');

// task 5: Oh no! A broken image! We need to fix this - update the src for tile 4 to have an image of your favorite TV show.

tile4.src="https://m.media-amazon.com/images/M/MV5BMTY1MWUwYjItY2JmYi00ZDgyLTgzMjUtNzNkMzg0NjNjYTdkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg";


/*******These following tasks may require a little bit of digging. Unsure how to complete the task? Use your resources! Code Nation reference table might help. Can't find it there? Google search the keywords of what you're trying to do and use web dev documentation! W3schools, MDN Web Docs, and Stack Overflow all super reliable 😊*********/


// task 6: Hmm. Looks like the font is too small. Update the font-size of tile 5 to 35 pixels.

tile5.style.fontSize="35px";

// task 7: Another sad box! Let make this tile 6 feel special and add a gradient background! What kind of gradient? What color? YOU CHOOSE!

tile6.style.background ="linear-gradient(to right top, yellow, green)";

// task 8: Too many squares. Let's change tile 7 to have rounded edges - be sure to search for which CSS property does this :)


tile7.style.borderRadius="30px";

// task 9: task 9: Replace the image with your favorite emoji. Try going to this site to search: https://emojipedia.org/

tile8.src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/cowboy-hat-face_1f920.png";

// task 10: Display a random number in the tile when the button is clicked.BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.

let button9=document.querySelector(".randomButton");
button9.onclick=function(){
  let random = Math.floor(Math.random() *10);
tile9.innerHTML= `${random}`;
}

