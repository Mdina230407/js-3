
let you = prompt('введите ваше имя')
let year = prompt('введите нынешний год')
let birth = prompt('введите год рождения')
function people (name,now,born) {

     if(born > now){
        alert('год рождения не может быть больше нынешнего года')
        return
    } 
    console.log('Ваше имя: ' + name);
    console.log('Нынешний год: ' + now);
    console.log('Ваш год рождения: ' + born);  

    }
    
console.log(people(you, year, birth));