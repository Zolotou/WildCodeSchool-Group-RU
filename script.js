const persons = ["Nazar", "Diana", "Anastasiya", "Natalia", "Aliaksei", "Artur", "Tatsiana", "Irina", "Vadzim", "Arseny"]
const list = document.querySelector(".list");
const button = document.querySelector(".button-choose");
const result = document.querySelector(".result-person");

function randomizer(array =[]) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let resultRandomArray = [array[randomNumber], randomNumber];
    return resultRandomArray
}

function passedPerson(id){

}

const arrayOfPersons = [];
const arrayOfPassedPersons = [];
while (persons.length != 0) {
    let randomPerson = randomizer(persons);
    arrayOfPersons.unshift(randomPerson[0]);
    persons.splice(randomPerson[1], 1);
    let divList = document.createElement('div');
    divList.className = 'person'
    divList.insertAdjacentHTML("afterbegin", `<input id=${persons.length} type ="checkbox"><h2>${randomPerson[0]}</h2>`)
    list.appendChild(divList);
}

list.addEventListener("change", (e) =>{
    console.log(e.target.id)

})

button.addEventListener('click', () => {
    let arrayOfVictim = arrayOfPersons.filter((value, index) => {
        if(document.getElementById(index).checked == false){
            return value
        }
    })
    if(arrayOfVictim.length >0){
        let victim = randomizer(arrayOfVictim);
        result.innerHTML = victim[0];
        let checkbox = arrayOfPersons.findIndex((v) => v == victim[0]);
        document.getElementById(checkbox).checked = true;
    }
    else result.innerHTML = "All victims has been chosen"
})