// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
//
// function User(id, name, surname, email, phone) {
//     this["id"] = id;
//     this["name"] = name;
//     this["surname"] = surname;
//     this["email"] = email;
//     this["phone"] = phone;
//
// }
//
// let users = [];
// users[0] =new User(1,'vasya','Petrov','1212k@.mail', 4646451);
// users[1] =new User(2,'petya','Petrov', '1212k@.mail', 4646452);
// users[2] =new User(3,'vasya','Petrov', '1212k@.mail', 4646450);
// users[3] =new User(4,'petya','Petrov', '1212k@.mail', 464645);
// users[4] =new User(5,'vasya','Petrov', '1212k@.mail', 464645);
// users[5] =new User(6,'petya','Petrov', '1212k@.mail', 464645);
// users[6] =new User(7,'vasya','Petrov', '1212k@.mail', 464645);
// users[7] =new User(8,'petya','Petrov', '1212k@.mail', 464645);
// users[8] =new User(9,'vasya','Petrov', '1212k@.mail', 464645);
// users[9] =new User(10,'petya','Petrov', '1212k@.mail', 464645);
//
// console.log(users);
//
// // // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// let filterId = users.filter(value => value.id%2===0);
// console.log(filterId)
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// let sortId = users.sort((user1, user2) => user1.id - user2.id);
// console.log(sortId);

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
//
// class Client{
//     constructor(id, name, surname, email, phone,order) {
//         this["id"] = id;
//         this["name"] = name;
//         this["surname"] = surname;
//         this["email"] = email;
//         this["phone"] = phone;
//         this["order"] = [order];
//
//     }
//
// }
//
// let Clients = [];
// Clients[0] =new Client(1,'vasya','Petrov','1212k@.mail', 4646451,['chips','bread']);
// Clients[1] =new Client(2,'petya','Petrov', '1212k@.mail', 466646452,['milk','oil']);
// Clients[2] =new Client(3,'vasya','Petrov', '1212k@.mail', 4646450,['oil','bread']);
// Clients[3] =new Client(4,'petya','Petrov', '1212k@.mail', 46466645,['milk','bread','chips','oil']);
// Clients[4] =new Client(5,'vasya','Petrov', '1212k@.mail', 464645,['milk','bread']);
// Clients[5] =new Client(6,'petya','Petrov', '1212k@.mail', 46455645,['milk','bread','oil']);
// Clients[6] =new Client(7,'vasya','Petrov', '1212k@.mail', 4644645,['milk','bread']);
// Clients[7] =new Client(8,'petya','Petrov', '1212k@.mail', 4643645,['milk','bread']);
// Clients[8] =new Client(9,'vasya','Petrov', '1212k@.mail', 46884645,['bread','chips']);
// Clients[9] =new Client(10,'petya','Petrov', '1212k@.mail', 46460045,['milk','bread','oil']);
// console.log(Clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
// Clients.sort(({order:order1}, {order:order2}) => order1.length - order2.length);
// console.log(Clients);

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function car(Model, Producer, Year, MaxSpeed, engine) {
//     this.Model = Model;
//     this.Producer = Producer;
//     this.Year = Year;
//     this.MaxSpeed = MaxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${MaxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (const keys in this) {
//             if (typeof this[keys] !== 'function')
//                 console.log(`${keys} - ${this[keys]}`);
//         }
//
//     };
//     this.increaseMaxSpeed = function () {
//         console.log(`NewMaxSpeed - ${newSpeed + this.MaxSpeed}`);
//     };
//     this.changeYear = function () {
//         this.Year = newValue;
//         console.log(newValue);
//     };
//
//     this.addDriver = function () {
//         console.log(Driver)
//     };
//
//
// }
//
// let cars=new car('Avensis', 'Toyota', 2008, 240, 2.2);
// cars.drive();
// cars.info();
// let newSpeed=110
// cars.increaseMaxSpeed();
// let newValue = 2010;
// cars.changeYear();
// let Driver = {name: 'Petro', age: 34};
// cars.addDriver()



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//     class car {
//         constructor(Model, Producer, Year, MaxSpeed, engine) {
//             this.Model = Model;
//             this.Producer = Producer;
//             this.Year = Year;
//             this.MaxSpeed = MaxSpeed;
//             this.engine = engine;
//             this.drive = function () {
//                 console.log(`їдемо зі швидкістю ${MaxSpeed} на годину`);
//             };
//             this.info = function () {
//                 for (const keys in this) {
//                     if (typeof this[keys] !== 'function')
//                         console.log(`${keys} - ${this[keys]}`);
//                 }
//
//             };
//             this.increaseMaxSpeed = function () {
//                 console.log(`NewMaxSpeed - ${newSpeed + this.MaxSpeed}`);
//             };
//             this.changeYear = function () {
//                 this.Year = newValue;
//                 console.log(newValue);
//             };
//
//             this.addDriver = function () {
//                 console.log(Driver)
//             };
//
//         }
//     }
//
// let cars=new car('Avensis', 'Toyota', 2008, 240, 2.2);
// cars.drive();
// cars.info();
// let newSpeed=110
// cars.increaseMaxSpeed();
// let newValue = 2010;
// cars.changeYear();
// let Driver = {name: 'Petro', age: 34};
// cars.addDriver()


// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Popelushka{
//     constructor( name, age,footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//
//
//     }
// }
//
// let girls = [
//     new Popelushka('ira', 21, 36),
//     new Popelushka('Mariya', 22, 36),
//     new Popelushka('Vika', 23, 37),
//     new Popelushka('Katya', 24, 36),
//     new Popelushka('Vika', 25, 40),
//     new Popelushka('ira', 25, 39),
//     new Popelushka('Katya', 27, 38),
//     new Popelushka('Mariya', 28, 39),
//     new Popelushka('Katya', 29, 38),
//     new Popelushka('ira', 28, 37),
//
// ];
// let prince={name: `Pedro`,age:30, footSize:40}
// for (const girl of girls) {
//     if (prince.footSize === girl.footSize) {
//         console.log(`name is ${girl.name}`);
//     } else {
//         console.log(`Popelushka was not found`);
//     }
// }
//
// findPopelushka=girls.find(girl=>girl.name==='Vika')
// console.log(findPopelushka);