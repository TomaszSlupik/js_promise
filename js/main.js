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





// async function testowanie() {
//     await one();
//     await two();
//     await three ()
// }

// testowanie();