// Skapar en array med 5 namn
const names = ["Olle", "Pelle", "Kalle", "Lisa", "Tove"];
console.log(names); // Skiver ut för att se att det blev rätt

// Tar bort sista positionen i arrayen
names.pop();
console.log(names); // Skiver ut för att se att det blev rätt

// Ändrara namn i postion 2
names[1] = "Karl";
console.log(names); // Skiver ut för att se att det blev rätt

// Lägger till ett namn sist i arrayen
names.push("Joakim");
console.log(names); // Skiver ut för att se att det blev rätt

// Sorterar arraye i bokstavordning (ascanding)
names.sort();
console.log(names); // Skiver ut för att se att det blev rätt

// Plockar ut index i arrayen på första hittade positionen av "Joakim" via callback funtionen 
let index = names.findIndex(findAName);

// Skriver ut index (positionen) på consolen med hjälp av 
console.log(`Joakim har indexplats ${index}`);

// Call back till findIndex
function findAName(value, index, array) {
    return value == "Joakim";
}

// Obs positionen index kommer att vara tom (undefined) operatorn delete tar bara bort värdet i positionen 
delete names [index];
console.log(names); // Skiver ut för att se att det blev rätt

// Lopar igenom arrayen och skriver ut namen på consolen. 
names.forEach(printAName);

// Call back funtion till forEach
function printAName(value, index, array) {
    console.log(value); 
}
