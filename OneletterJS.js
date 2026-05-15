//Write one letter at a time:

//Javascript
let name = prompt("Enter your name:");
for (let i = 0;i <name.length; i++) {
    console.log(name.slice(0,i+1));
}