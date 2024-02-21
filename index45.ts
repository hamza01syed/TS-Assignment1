function carInfo(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };

    for (let option of options) {
        for (let key in option) {
            car.options[key] = option[key];
        }
    }

    return car;
}

// Call the function with required information and additional name-value pairs
let myCar = carInfo("Toyota", "Camry", { color: "blue" }, { year: 2022 });

// Print the returned Object
console.log(myCar);
