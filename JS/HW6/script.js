//1.Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
// sj не розуміє в одній стрічці однакові лапки. за допомогою екранування їх можна показати наприклад зворотніми лапками або бекслешем

//2.Які засоби оголошення функцій ви знаєте?
// не дуже зрозуміле питання. відповім як зрозумів його. є функції function expretion та function declaration

//3.Що таке hoisting, як він працює для змінних та функцій?
// це вспливання. наприклад функцію можна викликати в будь якому місці коду

function createNewUser(name, lastName, birthday){
    newUser = {
        name,
        lastName,
        birthday,
        getLogin: function(){
            login =  this.name[0] + this.lastName;
            console.log(login.toLowerCase(login));
        },
        getBirthday: function(){
            arrBir = birthday.split('.').reverse().join('.');
            fullyear = (new Date() - new Date(arrBir)) / 1000 / 60 / 60 / 24 / 365.25;;
            realYear = Math.floor(fullyear)
            console.log(realYear);
        },
        getPassword: function (){
            password = name[0].toUpperCase(this.name[0]) + this.lastName.toLowerCase() + new Date(arrBir).getFullYear();
            console.log(password);
        }
    };

}
createNewUser(prompt('your name is?'), prompt('your last name?'), prompt('you birthday?'))
console.log(newUser);
newUser.getLogin();
newUser.getBirthday()
newUser.getPassword()
