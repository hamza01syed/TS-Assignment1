let personName: string = "Eric";

// Convert to lowercase
let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);

// Convert to uppercase
let uppercaseName: string = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);

// Convert to titlecase
let titlecaseName: string = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log("Titlecase:", titlecaseName);