//1. Создать пустой массив, с помощью push добавить в него цифры от 1 до 15
let numbers=[];
for (let index = 0; index < 15; index++) {
    numbers.push(index+1);
    
}
console.dir(numbers);

//2. Добавить значение 0 в начало в массив из пред задания
numbers.unshift(0);

//3. Удалить один элемент с конца из массива пред задания
numbers.pop();

//4. Удалить один элемент где нибудь в середине (splice) из массива пред задания
numbers.splice(5,1);

//5. Добавить цифру 5 в середину массива (splice) из пред задания
numbers.splice( Math.round(numbers.length/2-1),0,);

//6. Клонировать весь массив (slice или Object.assign) из пред задания
let numbersClone = numbers.slice();

//7. У клона массива пред задания удалить первую половину элементов (индексы от 0 до array.length/2 - 1)
numbersClone.splice(0,numbersClone.length/2-1);

//8. Создать пустой массив на 8 empty ячеек
let emptyArray = new Array(8);

//9. Заполнить массив от половины (от индекса 3) до конца значениями null (fill),
emptyArray.fill(null,3);

//10. Отфильтровать от пустых ячеек (forEach+push или filter)
let filteredList = [];
filteredList =emptyArray.filter( item =>item!=="empty");
console.dir(filteredList);

//11. Создать массив с числами от 1 до 10. На основе него создать массив квадратов значений (map).
let numbersRange = new Array(10);
for(let i = 0; i < numbersRange.length;i++)
{
    numbersRange[i] = i + 1;
}
let numbersRangeNew = numbersRange.map(item => Math.sqrt(item));
console.dir(numbersRangeNew);

//12. Перевести массив из предыдущего задания в строку, с разделителем " && " (join)
let strNum = numbersRangeNew.join("&&");
console.dir(strNum);

//13. * Создать массив Склада. Заполнить массив от 3 до 5 продуктами
//Каждый продукт имеет свойства - наименование, базовая цена, колво на складе.
let product1 =
{
    title : "Apple",
    price : 1.22,
    amount : 4
};
let product2 =
{
    title : "Banana",
    price : 2.22,
    amount : 35
};
let product3 =
{
    title : "Orange",
    price : 2.12,
    amount : 25
};
let container = [];
container.push(product1);
container.push(product2);
container.push(product3);
for (let index = 0; index < container.length; index++) {
   console.log(container[index]);
}

//14. * Написать функцию которая будет фильтровать массив продуктов по количеству на складе больше 5 шт . 
//И потом сортировать по возрастанию цены. (filter().sort()).
//Функция возвращает новый массив - результат фильтрации.
let filteredProductsAmount = [];
filteredProductsAmount = container.filter(item => item.amount > 5);
console.dir(filteredProductsAmount.sort((item1,item2)=>item1.amount > item2.amount));

//15. * Создать массив для Корзины покупок.
//Спрашивать у пользователя ИД продукта (индекс массива склада) который он хочет положить в Корзину покупок.
//Клонировать_ в Корзину обьект продукта, взятый из массива Склада (по ИД выбранному пользователем).
let corzina = [];
let userAnswer = Number(prompt("Enter ID product: "));
corzina.push(container[userAnswer]);
console.dir(corzina);

//16. * Создать функ. конструктор Пользователь.
//Принимать параметры - username, age, isMale, password.
function User(username, age, isMale,password)
{
    this.username=username;
    this.age = age;
    this.isMale =isMale;
    this.password = password;
}

//17. * Циклом создать 5 пользователей (new User) и поместить каждого в массив users.
//Имена, возрасты, пол, и пароль случайны (пусть зависят от индекса ("username1", "username2" ...)

let usersList = [];
const amountUsers = 5;
for(let i = 0; i < amountUsers; i++)
{
    let userRand = Math.random() * (3 - 1) + 1;
    let userTemplate = {};

    switch (Math.round(userRand)) {
        case 1:
            userTemplate = new User("Maks",18,true,'qwerty123');
            break;
        case 2:
            userTemplate = new User("Jully",28,false,'qwerty423');
            break;
        case 3:
            userTemplate = new User("Petr",22,true,'qwerty987');
            break;
        default:
            break;
    }
    usersList.push(userTemplate);
}

usersList.forEach(element => console.log(element) 
    
);

//unshift

class MyArray
{
    container = [];
    size = 0;

    push_front(pasted_item) {
        let tmp = new Array(this.size + 1);
        if(this.size === 0)
        {
            tmp[this.size] = pasted_item;
            this.container = tmp;
            this.size++;
        }
        else if(this.size > 0) // if items in array bigger then 0
        {
            for (let index = 0; index < this.container.length; index++) {
                
                tmp[index + 1] = this.container[index];
            }
            
            tmp[0] = pasted_item;
            this.size++;
            this.container = tmp;
        }
    }
}


let example = new MyArray();

example.push_front(12);
example.push_front(22);
example.push_front(13);
example.push_front(13);
example.push_front(13);
console.dir(example.container);