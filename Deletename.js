//Delete one letter at a Time

//JavaScript
let name = prompt("Enter your name:");
for (let i = name.length; i>0; i--) {
    console.log(name.slice(0,i));
}