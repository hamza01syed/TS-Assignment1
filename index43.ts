function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians){
    let modified_magicians= [];
    for (let magician of magicians) {
        modified_magicians.push("the Great " + magician);
    }
    return modified_magicians;
}

let magician_names= ["David", "Harry", "Penn", "Teller"];

// Call make_great() with a copy of the magician_names array
let modified_magicians = make_great(["David", "Harry", "Penn", "Teller"]);

// Call show_magicians() with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nModified Magicians:");
show_magicians(modified_magicians);
