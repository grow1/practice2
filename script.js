/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = "skydiving";
// user.premium = false;

// const ourKeys = Object.keys(user)
// for (const key of ourKeys) {
//     console.log(`${key}: ${user[key]}`)
// }
/**
 *? У нас є об'єкт, у якому зберігаються зарплати
 *? нашої команди
 *? Напишіть код для підсумовування всіх зарплат і
 *? збережіть його результат у змінній sum.
 *? Якщо об'єкт salaries порожній, то результат має бути 0
 */

 const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
const  salariesArray = Object.values(salaries)
let sum = 0;
for (const item of salariesArray){
  sum += item;
}
console.log(sum);