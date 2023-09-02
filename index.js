//! task 1
console.log("task 1");
const clients1 = [
  "Гилберт",
  "Сальваторе",
  "Пирс",
  "Соммерс",
  "Форбс",
  "Донован",
  "Беннет",
];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];
const clientTotal = clients1.concat(clients2);
const clientFilter = [...new Set(clientTotal)];

console.table(clientFilter);

//! task 2
console.log("task 2");
const characters = [
  {
    name: "Елена",
    lastName: "Гилберт",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Кэролайн",
    lastName: "Форбс",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Аларик",
    lastName: "Зальцман",
    age: 31,
    gender: "man",
    status: "human",
  },
  {
    name: "Дэймон",
    lastName: "Сальваторе",
    age: 156,
    gender: "man",
    status: "vampire",
  },
  {
    name: "Ребекка",
    lastName: "Майклсон",
    age: 1089,
    gender: "woman",
    status: "vempire",
  },
  {
    name: "Клаус",
    lastName: "Майклсон",
    age: 1093,
    gender: "man",
    status: "vampire",
  },
];
const charactersShortInfo = characters.map((objects) => ({
  name: objects.name,
  lastName: objects.lastName,
  age: objects.age,
}));
console.table(charactersShortInfo);
//! task 3
console.log("task 3");
const user1 = {
  name: "John",
  years: 30,
};

const { name, years: age, isAdmin = false } = user1;

console.log(name, age, isAdmin);

//! task 4
console.log("task 4");

const satoshi2020 = {
  name: "Nick",
  surname: "Sabo",
  age: 51,
  country: "Japan",
  birth: "1979-08-21",
  location: {
    lat: 38.869422,
    lng: 139.876632,
  },
};

const satoshi2019 = {
  name: "Dorian",
  surname: "Nakamoto",
  age: 44,
  hidden: true,
  country: "USA",
  wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  browser: "Chrome",
};

const satoshi2018 = {
  name: "Satoshi",
  surname: "Nakamoto",
  technology: "Bitcoin",
  country: "Japan",
  browser: "Tor",
  birth: "1975-04-05",
};
let finalLIst = { ...satoshi2018, ...satoshi2019, ...satoshi2020 };
console.table(finalLIst);
//! task 5
console.log("task 5");
const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};
library = [bookToAdd, ...books];
console.table(library);
//! task 6
console.log("task 6");
const employer = {
  name: "Snape",
  surname: "Salazar",
};
// console.log(employer);
employer.age = "46";
employer.salary = "10000";

console.table(employer);

//! task 7
console.log("task 7");

const array = ["value", () => "showValue"];

// Допишіть код тут
const [value, showValue] = array;

console.log(value); // має бути виведено 'value'
console.log(showValue()); // має бути виведено 'showValue'
