//1) Написать функцию, преобразующую число в объект.
//Передавая на вход число от 0 до 999, надо получить
//на выходе объект, в котором в соответствующих
//свойствах описаны единицы, десятки и сотни.
//Например, для числа 245 надо получить следующий
//объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
//Если число превышает 999, необходимо выдать
//соответствующее сообщение с помощью console.log и
//вернуть пустой объект.
//
const empty = {};
let number;
number = prompt('enter number');
	if (number > 999 || number < 0) {
		console.log(empty);
    } else {
   		function fromNumberToObject() {
    		let numberLot = {
    			unit: number % 10,
    			ten: Math.floor(number / 10 % 10),
    			hundred: Math.floor(number / 100),
    	       }
	        return numberLot;
   	       }
        let result = fromNumberToObject();
        console.log(result);
}

//2) Продолжить работу с интернет-магазином:
//
//В прошлом домашнем задании вы реализовали
//корзину на базе массивов. Какими объектами
//можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на
//объектно-ориентированную базу.

//3) * Подумать над глобальными сущностями.
//К примеру, сущность «Продукт» в интернет-магазине
//актуальна не только для корзины, но и для каталога.
//Стремиться нужно к тому, чтобы объект «Продукт» имел
//диную структуру для различных модулей сайта, но в
//разных местах давал возможность вызывать разные методы.

let cart = {
    goods: [],
    countCartPrice: function(){
        let sum = 0;
        for(let i = 0; i < this.goods.length; i++){
            sum = sum + this.goods[i].price * this.goods[i].item;
        }
        return sum;
    }
}

let goods = [
    {name: 'Buzz', price: 1000, item: 20},
    {name: 'Tommygun', price: 5000, item: 1},
    {name: 'Pipboy', price: 10000, item: 1}
];

cart.goods = goods;

console.log("total price: " + cart.countCartPrice())






