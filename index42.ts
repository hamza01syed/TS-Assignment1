function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians){
    for(let i=0;i<magicians.length;i++){
        magicians[i]="the great "+magicians[i]
    }

}
let magician_names=["mike","harry","taylor","philip"]
// Call make_great() to modify magician names
make_great(magician_names);

// Call show_magicians() to see the modified list
show_magicians(magician_names);