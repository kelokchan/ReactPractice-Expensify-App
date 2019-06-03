// const person = {
//   name: 'Kelok',
//   age: 23,
//   location: {
//     city: 'Kuala Lumpur',
//     temp: 33
//   }
// }

// const { name = 'Anonymous', age } = person; // object destructuring with default
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature = 100 } = person.location; // object destructuring with rename and default
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-publisher' } = book.publisher;
// console.log(publisherName);

const address = ['18 Jalan Manja 2', 'Bandar Menjalara', 'Kuala Lumpur', '52200'];
const [, city, state = 'New York'] = address; // follow element index
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);
