let current_users= ["ali", "babar", "admin", "emma", "anus"];
let new_users = ["yousuf", "ali", "faizan", "Sara", "ANUS"];

// Convert all usernames to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(user => user.toLowerCase());

for (let new_user of new_users) {
    // Check if the lowercase version of the new username exists in the lowercase version of current_users
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, the username '${new_user}' is available.`);
    }
}
