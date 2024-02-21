let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(val of numbers){
    let ordinal: string;
    
    if (val === 1) {
        ordinal = "st";
    } else if (val === 2) {
        ordinal = "nd";
    } else if (val === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    
    console.log(`${val}${ordinal}`);

}