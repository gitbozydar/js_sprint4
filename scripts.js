//Podstawy funkcji w JavaScript.

// Wyświetl wyniki w konsoli

//PODSTAWY FUNKCJI:

// 1. Napisz funkcję dodającą dwie liczby
const sum = (x, y) => x + y;
let sumReturn = sum(10, 5);
console.log(sumReturn); // output: 15

// 2. Napisz funkc  ję zwracającą długość tablicy
const fruits = ["apple", "grape", "orange"];
const lenghtOfArray = () => fruits.length;
let fruitsLenght = lenghtOfArray();
console.log(fruitsLenght); //output: 3

// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
const isNumberEven = (z) => {
  let check =
    z % 2 === 0
      ? console.log("Liczba jest parzysta")
      : console.log("Liczba jest nieparzysta");
  return check;
};
isNumberEven(6); //output: Liczba jest parzysta

// 4. Napisz funkcję obliczającą pole kwadratu
const squareArea = (a) => {
  const area = a * a;
  return area;
};
let area = squareArea(15);
console.log(area); //output: 225

// 5. Napisz funkcję zwracającą odwrotność liczby
const reverseNumber = (c) => {
  let numberReverse = (c = 1 / c);
  return numberReverse;
};
let reverse = reverseNumber(10);
console.log(reverse); //output: 0.1

// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
const celsiusToFahrenheit = (degree) => {
  let fahrenheit = (9 / 5) * degree + 32;
  return fahrenheit;
};
let transition = celsiusToFahrenheit(23);
console.log(transition); //output: 73.4

// 7. Napisz funkcję zwracającą pierwszy element tablicy
const cars = ["van", "sedan", "coupe", "hatchback"];
const firstElement = () => {
  return cars[0];
};
let first = firstElement();
console.log(first); //output: "van"

// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string
const connector = (text1, text2) => {
  const addedText = text1 + text2;
  const fail = "Fail";
  if (typeof text1 === "string" && typeof text2 === "string") {
    return addedText;
  } else {
    return fail;
  }
};
let text = connector("Oby ", "działało...");
console.log(text); // Output: "Oby działało..."

// 9. Napisz funkcję zwracającą typ zmiennej
const typeOfVar = (typeCheck) => {
  return typeof typeCheck;
};
let typeDisplay = typeOfVar(61);
console.log("Typ zmiennej to: " + typeDisplay); //output: Typ zmiennej to: number

// 10. Napisz funkcję zwracającą absolutną wartość liczby
const absoluteNumber = (age) => {
  return Math.abs(age);
};
let absolute = absoluteNumber(8.3);
console.log(absolute); //output: 8.3

//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
const incrementation = () => {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
};
incrementation(); //output: 1,2,3,4,5,6,7,8,9,10

// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
const displayFunction = () => {
  let j = 0;
  while (j < 18) {
    j += 2;
    console.log(j);
  }
};
displayFunction(); //output: 2,4,6,8,10,12,14,16,18

// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
const decrementation = () => {
  let k = 10;
  do {
    k--;
    console.log(k);
  } while (k > 1);
};
decrementation(); //output: 9,8,7,6,5,4,3,2,1
// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
const achiveFive = () => {
  let l = 0;
  while (l < 100) {
    l++;
    console.log(l);
    if (l === 5) {
      break;
    }
  }
};
achiveFive(); //output: 1, 2, 3, 4, 5

// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
const assaultRifles = {
  first: "AK-47",
  second: "M16",
  third: "SCAR-L",
  fourth: "AUG",
};
const rifleIteration = () => {
  for (let order in assaultRifles) {
    console.log(
      `The ${order} most popular assault rifle is ${assaultRifles[order]}.`
    );
  }
};
rifleIteration(); //output:
// The first most popular assault rifle is AK-47.
// The second most popular assault rifle is M16.
// The third most popular assault rifle is SCAR-L.
// The fourth most popular assault rifle is AUG.

// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
const vegetables = ["tomato", "carrot", "onion", "parsley"];
const vegIteration = () => {
  for (let allVeg of vegetables) {
    console.log(allVeg);
  }
};
vegIteration(); //output:
// tomato
// carrot
// onion
// parsley

// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy
const temperatures = [23, -3, 20, 15];
const temperatureSum = () => {
  let sum = 0;
  for (let temperatureSum of temperatures) {
    sum += temperatureSum;
  }
  console.log("Sum of all elements is: " + sum);
};
temperatureSum();
// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków
const reverseString = (toReverseText) => {
  let str = "";
  let i = toReverseText.length - 1;
  while (i >= 0) {
    str += toReverseText[i];
    i--;
  }
  return str;
};
let reverseFunction = reverseString("JavaScript");
console.log(reverseFunction); //output: tpircSavaJ

// // 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy
const highestNumber = (exampleArray) => {
  for (let maxValue of exampleArray) {
    return Math.max.apply(null, exampleArray);
  }
};
let highestNumberFunction = highestNumber([23, 4, 5, 12]);
console.log(highestNumberFunction); //output: 23

// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
const person = {
  name: "John",
  age: 45,
  email: "lodam@gmail.com",
};
const keyAndValue = () => {
  for (let pair in person) {
    console.log(pair + ": " + person[pair]);
  }
};
keyAndValue(); //output:
// name: John
// age: 45
// email: lodam@gmail.com

//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
const gamesArray = [];
const pushFunction = (newElement) => {
  gamesArray.push(newElement);
  return gamesArray;
};
let push = pushFunction("FIFA");
console.log(push);
//output: [ 'FIFA' ]

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
const companies = ["Devstock", "Amazon", "SpaceX"];
const popFunction = () => {
  companies.pop();
  return companies;
};
let pop = popFunction();
console.log(pop);

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
const instruments = ["piano", "guitar", "drums"];
const shiftFunction = () => {
  instruments.shift();
  return instruments;
};
let shift = shiftFunction();
console.log(shift); //output: [ 'guitar', 'drums' ]

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
const color = ["red", "yellow", "brown", "black"];
const unshiftFunction = (newFirstElement) => {
  color.unshift(newFirstElement);
  return color;
};
let unshift = unshiftFunction("white");
console.log(unshift); // output: [ 'white', 'red', 'yellow', 'brown', 'black' ]

// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
const dishes = ["spaghetti", "pizza", "hamburger", "lasagna"];
const doublePush = (firstPush, secondPush) => {
  dishes.push(firstPush, secondPush);
  return dishes;
};
let doublePushFunction = doublePush("steak", "soup");
console.log(doublePushFunction); //output: [ 'spaghetti', 'pizza', 'hamburger', 'lasagna', 'steak', 'soup' ]

// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
const vehicles = ["plane", "car", "bus", "bike"];
const doublePop = () => {
  for (i = 0; i < 2; i++) {
    vehicles.pop();
  }
  return vehicles;
};
let doublePopFunction = doublePop();
console.log(doublePopFunction); //output: [ 'plane', 'car' ]

// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
const fishes = ["shark", "pike", "catfish", "salmon"];
const doubleShift = () => {
  for (i = 0; i < 2; i++) {
    fishes.shift();
  }
  return fishes;
};
let doubleShiftFunction = doubleShift();
console.log(doubleShiftFunction); //output: [ 'catfish', 'salmon' ]

// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
const drugs = ["cannabis", "cocaine"];
const doubleUnshift = (firstUnshift, secondUnshift) => {
  drugs.unshift(firstUnshift, secondUnshift);
  return drugs;
};
let doubleUnshiftFunction = doubleUnshift("amphetamine", "LSD");
console.log(doubleUnshiftFunction); //output: [ 'amphetamine', 'LSD', 'cannabis', 'cocaine' ]

// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
const emails = ["poran@gmail.com", "idwos@gmail.com", "wkdos@gmail.com"];
const pushAndPop = (pushThenPopElement) => {
  emails.push(pushThenPopElement);
  console.log(emails); //after push output: ['poran@gmail.com', 'idwos@gmail.com','wkdos@gmail.com','pushandpop@gmail.com']
  emails.pop();
  return emails; //after pop output: [ 'poran@gmail.com', 'idwos@gmail.com', 'wkdos@gmail.com' ]
};
let pushAndPopFunction = pushAndPop("pushandpop@gmail.com");
console.log(pushAndPopFunction); // output: [ 'poran@gmail.com', 'idwos@gmail.com', 'wkdos@gmail.com' ]

// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
const passwords = ["mfeak21005", "yoookr2001", "mmmar2011"];
const unshiftAndShift = (unshiftThenShiftElement) => {
  passwords.unshift(unshiftThenShiftElement);
  console.log(passwords); // after unshift output: [ 'borekkk123', 'mfeak21005', 'yoookr2001', 'mmmar2011' ]
  passwords.shift();
  return passwords; // after shift output: [ 'mfeak21005', 'yoookr2001', 'mmmar2011' ]
};
let unshiftAndShiftFunction = unshiftAndShift("borekkk123");
console.log(unshiftAndShiftFunction);

// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
const prices = [9, 19, 29, 39, 49, 59];
const inflatedPrices = prices.map((price) => {
  let result = price + 1;
  return result;
});
console.log(inflatedPrices); //output: [ 10, 20, 30, 40, 50, 60 ]

// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
const findEvenNumbers = [1, 3, 7, 4, 75, 2, 7, 4, 57, 3, 6, 835];
const evenNumbers = findEvenNumbers.filter((even) => {
  let result = even % 2 === 0;
  return result;
});
console.log(evenNumbers); //output: [ 4, 2, 4, 6 ]
// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
const tax = [142, 163, 731, 221];
const doubledTaxes = tax.map((x) => {
  let result = x * 2;
  return result;
});
console.log(doubledTaxes); //output: [ 284, 326, 1462, 442 ]

// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
const arrayOfNumbers = [9, 8, 13, 11, 10, 16, 25, 4, 2, 5, 10.1];
const moreThan10 = arrayOfNumbers.filter((x) => {
  let result = x > 10;
  return result;
});
console.log(moreThan10); //output: [ 13, 11, 16, 25, 10.1 ]

// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
const splitString = "Example of split";
const split = splitString.split(" ");
console.log(split); //output: [ 'Example', 'of', 'split' ]

// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
const arrayOfStrings = ["ball", "bottle", "glass", "voleyball"];
const stringToLenght = arrayOfStrings.map((x) => {
  x = x.length;
  return x;
});
console.log(stringToLenght); //output: [ 4, 6, 5, 9 ]

// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
const arrayOfNumbers2 = [213, 46842, 46822, 2248, 8];
const oddNumbers = arrayOfNumbers2.filter((x) => {
  let result = x % 2 !== 0;
  return result;
});
console.log(oddNumbers); //output: [ 213 ]
// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
const arrayOfNumbers3 = [2, 52, 6, 23, 8, 6];
const squaredNumbers = arrayOfNumbers3.map((x) => {
  let result = x * x;
  return result;
});
console.log(squaredNumbers); //output: [ 4, 2704, 36, 529, 64, 36 ]

// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
const arrayOfStrings2 = ["phone", "eye", "key", "car", "bar", "book"];
const longStrings = arrayOfStrings2.filter((x) => {
  let result = x.length > 3;
  return result;
});
console.log(longStrings); //output: [ 'phone', 'book' ]

// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
const arrayOfStrings3 = ["help", "home", "contact", "menu"];
const capitalStrings = arrayOfStrings3.map((x) => {
  let result = x.toUpperCase();
  return result;
});
console.log(capitalStrings); //output: [ 'HELP', 'HOME', 'CONTACT', 'MENU' ]
