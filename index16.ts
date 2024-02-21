let guests=["ali","arshad","akber"]
let guestsNotcome=guests[1];
for(let i=0;i<guests.length;i++){
    console.log("I am inviting you",guests[i],"for a dinner");
}
console.log(`Unfortunately, ${guestsNotcome} can't make it to the dinner.`);

guests[1] = "faraz";

console.log("\nSecond set of invitation messages:");

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\n\nI would like to invite you to dinner. It would be an honor to have your company.\n\nSincerely,\nHamza`);
}
console.log("\n I found a bigger dinner table for you");

guests.unshift("Arsalan"); // Add new guest to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Faizan"); // Add new guest to the middle
guests.push("sami"); // Add new guest to the end

console.log("\nThird set of invitation messages:");

for(let i=0;i<guests.length;i++){
    console.log("I am inviting you",guests[i],"for a bigger dinner \n Sincerely,\n Hamza");
}