// Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.

// Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується пароль через prompt:

// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
// В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в message рядок 'Доступ заборонений, невірний пароль!'
// Після всіх перевірок вивести в alert значення змінної message.

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const checkPass = prompt("Введіть пароль!");
if (checkPass===null) {
  message = "Скасовано користувачем!";
} else if (checkPass === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}
alert(message);
