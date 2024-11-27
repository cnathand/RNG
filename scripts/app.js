let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let codeStackEmail = document.getElementById('codeEmail');
let personalEmail = document.getElementById('personalEmail');
let rngBtn = document.getElementById('rngBtn');
let previousNames = [];
let previousFive = document.getElementById('previousFive');

function getNames(){
    fetch('../data/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        rngNames(data)
    });
}

function rngNames(data){
let randomPerson = data[Math.floor(Math.random() * data.length)];
firstName.innerText = randomPerson.firstName
lastName.innerText = randomPerson.lastName
codeStackEmail.innerText = randomPerson.codeStackEmail
personalEmail.innerText = randomPerson.personalEmail
previousData(randomPerson);
}

function previousData(randomPerson){
    previousNames.push(randomPerson)
    if(previousNames.length > 5){
        previousNames.shift();
    }
    displayText = previousNames

    .map(randomPerson => 

        `
        First Name: ${randomPerson.firstName}
        Last Name: ${randomPerson.lastName}
        CodeStack Email: ${randomPerson.codeStackEmail}
        Personal Email: ${randomPerson.personalEmail}
        -----------------
        `
    )

    previousFive.innerText = displayText;
}

rngBtn.addEventListener('click', function(event){
    getNames();
});

