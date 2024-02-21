let guests = ["Ali", "akber", "shayan", "bilal", "farhan"];

// Print the number of people being invited to dinner
console.log(`You are inviting ${guests.length} people to dinner.`);

// Print invitation messages to each person
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\n\nI would like to invite you to dinner. It would be an honor to have your company.`);
}

// Inform people about the change in plans
console.log("\nSorry, but the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, but we can't invite you to dinner.`);
}

// Print invitation messages to the remaining two people
console.log("\nInvitations to the two remaining guests:");

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\n\nYou're still invited to dinner. Hope to see you there!\n\nSincerely,\n[Your Name]`);
}

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the list to ensure it's empty
console.log("\nEmpty guest list:", guests);