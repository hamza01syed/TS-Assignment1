let persons=["ali","arshad","akber"]
let guestsNotcome=persons[1];
for(let i=0;i<persons.length;i++){
    console.log("I am inviting you",persons[i],"for a dinner");
}
console.log(`Unfortunately, ${guestsNotcome} can't make it to the dinner.`);

persons[1] = "faraz";

console.log("\nSecond set of invitation messages:");

for (let i = 0; i < persons.length; i++) {
    console.log(`Dear ${persons[i]},\n\nI would like to invite you to dinner. It would be an honor to have your company.\n\nSincerely,\nHamza`);
}
