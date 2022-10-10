/**
 * @file: Lab 9 Övningar i JavaScript Arrays och Switches
 * @author: Lars-Erik Jemt
 * @version: 1.0
 *
 */

/*********************
 *  Arrays övningar  *
 ********************/

// 1. Skapar en array med 8 personer (object)
const persons = [
    {name: 'Olle', age: 25, height: 1.95},
    {name: 'Kalle', age: 67, height: 1.75},
    {name: 'Nils', age: 19, height: 2.03},
    {name: 'Helmer', age: 45, height: 1.87},
    {name: 'Johan', age: 37, height: 1.69},
    {name: 'Bertil', age: 43, height: 1.92},
    {name: 'Adam', age: 72, height: 2.06},
    {name: 'Sture', age: 85, height: 1.87}
];
console.log(persons); // Skiver ut för att se att det blev rätt

//2. Skapar en array med 4 personer (object)
const persons2 = [
                {name: 'Per', age: 25, height: 1.78},
                {name: 'Halvar', age: 25, height: 1.89},
                {name: 'Ove', age: 25, height: 2.11},
                {name: 'Magnus', age: 25, height: 1.90}
            ];
console.log(persons2); // Skiver ut för att se att det blev rätt

// 3. Lägg in personerna från första arrayen in i andra arrayen.
persons2.splice(persons2.length, 0, ...persons);

console.log(persons2); // Skiver ut för att se att det blev rätt

// 4. Filtrera ut en nya array med personer längre än 2 meter
const tallPersons = persons2.filter((element) => {
    return element.height > 2.0; 
});

console.log(tallPersons); // Skiver ut för att se att det blev rätt

// 5. Skriv ut med forEach() alla längre än 2 meter
tallPersons.forEach((element) => {
    console.log(element);
});


/*********************
 *  Switch övningar  *
 ********************/

// 1.
// Skapa ett slumpvis valt nummer mellan 0 och 4 för att testa switchen.
const switchNumber = Math.floor(Math.random() * 5);
console.log(switchNumber);

switch(switchNumber) {
    case 0:
        console.log('Nisse');
        break;
    case 1:
        console.log('Per');
        break;
    case 2:
        console.log('Johannes');
        break;
    case 3:
        console.log('Joakim');
        break;
            
    default:
        console.log('Hans');
  }

// 2.
// Skapa ett slumpvis valt nummer mellan 0 och 24 för att testa switchen.
  const switchNumber2 = Math.floor(Math.random() * 25);
  console.log(switchNumber2);
  
  switch(true) {
    case (switchNumber2 === 0) :
        console.log('Umeå');
        break;

    case (switchNumber2 >= 1 && switchNumber2 <= 5) :
        console.log('Stockholm');
        break;
    case (switchNumber2 >= 6 && switchNumber2 <= 9) :
        console.log('Mora');
        break;
    case (switchNumber2 >= 10 && switchNumber2 <= 14) :
      console.log('Västerås');
      break;
    case (switchNumber2 >= 15 && switchNumber2 <= 19) :
      console.log('Göteborg');
      break;
                    
    default:
        console.log('Malmö');
  }

/*  switch(switchNumber2) {
    case 0:
        console.log('Umeå');
        break;
    case 1: case 2: case 3: case 4: case 5 :
        console.log('Stockholm');
        break;
    case 6: case 7: case 8: case 9:
        console.log('Mora');
        break;
      case 10: case 11: case 12: case 13: case 14:
      console.log('Västerås');
      break;
  case 15: case 16: case 17: case 18: case 19:
      console.log('Göteborg');
      break;
                    
    default:
        console.log('Malmö');
  }
*/
