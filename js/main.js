// zad 1.
function one() {
    setTimeout(() => {
        console.log("one")
    }, 2000)
}

function two() {
    setTimeout(() => {
        console.log("two")

    }, 5000)
}

function three() {
    setTimeout(() => {
        console.log("three")
    }, 3000)
}

// Podaj w kolejności: One, następnie two, a na samym końcu three? 
// Rozwiązanie:

function first() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("one")
            resolve()
        }, 2000)


    })
}

function second() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("two")
            resolve()
        }, 5000)


    })
}

function third() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("three")
            resolve()
        }, 3000)


    })
}

first().then(second).then(third)

// Zad 2 Przekaż parametr do kolejnej funkcji 
// Przekazanie parametru do kolejnej funkcji:

function fourth() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("four")
            const z = 'Przekaż parametr do funkcji drugiej'
            resolve(z)
        }, 2000)


    })
}

function fifth(zFunkcjiFourth) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("five", zFunkcjiFourth)
            resolve()
        }, 5000)


    })
}

function sixth() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("six")
            resolve()
        }, 3000)


    })
}

fourth().then(fifth).then(sixth)

// zad 3. Funkcja z rejectem 
function getCheck(id) {
    return new Promise((resolve, reject) => {
        if (id === '123') {
            resolve('Istnieje ID')
        } else {
            reject('Nie isteniej')
        }
    })
}

getCheck("123")
    .then(el => console.log(el))
    .catch(error => console.log(error))
    .finally(() => console.log("Koniec"))

// Zad 4. Dodanie do tablicy nowego uzytkownika i wyświetlenie ich po 5 sekundach w window 

const dataArray = [{
        name: "Jan Kowalski",
        age: 32
    },
    {
        name: "Jacek Nowak",
        age: 81
    },
    {
        name: "Marian Koniak",
        age: 14
    }
]

function addData(add) {
    return new Promise((resolve, reject) => {
        dataArray.push(add)
        console.log(dataArray)
        resolve()
    })
}

function getData() {

    setTimeout(() => {
        let output = "";
        dataArray.forEach((el, index, arrr) => {
            output += `<li> ${index + 1}.  ${el.name} ${el.age} </li>`
        })
        document.body.innerHTML = output
    }, 5000)
}

addData({
        name: "Jan Miłosz",
        age: 45
    })
    .then(getData)


// zad 5. Async - await 

async function run() {
    await first()
    await second()
    await third()
}

run()

// zad 6. Dodanie do przeglądarki za pomocą await i asyc 

const personMen = [{
        name_men: "tomek",
        age_men: 22
    },
    {
        name_men: "Leszek",
        age_men: 44
    }

]

const addNewPerson = (add) => {
    return new Promise((resolve, reject) => {
        personMen.push(add)
        console.log(personMen)
        resolve()
    })
}

function getNextData() {

    setTimeout(() => {
        let output = "";
        personMen.forEach((el, index, arrr) => {
            output += `<li> ${index + 1}.  ${el.name_men} ${el.age_men} </li>`
        })
        document.body.innerHTML = output
    }, 3000)
}


async function addNext() {
    await addNewPerson({
        name_men: "Jan Miłosz",
        age_men: 45
    })

    await getNextData()
}


addNext()

// Pobieranie dancyh - fetch 

const URL = "https://dog.ceo/api/breeds/image/random";

fetch(URL)
    .then(data => data.json())
    .then(data => console.log("data", data))



// Pobieranie danych - fetch - i używanie async + await


async function getUrl() {

    const urlAwait = "https://dog.ceo/api/breeds/image/random"

    const apiValue = await fetch(urlAwait)
    const apiValueJson = await apiValue.json()
    console.log("dataAsyncAwait", apiValueJson)
}

getUrl()