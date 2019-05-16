'use strict';

var celsius;
var fahrenheit;
// Zadeklaruj zmienną headStyle i przypisz do niej wyszukanie elementu o konkretnej wartości id
var headStyle = document.getElementById('text');

// Create function that ouput some text and add a new line each time
var span = function (text, target) {
    target.innerHTML = text;
};
// Create function to calculate Celsius to Fahrenheit and return value
var celToFah = function (deg) {
    var result = (deg * 1.8) + 32;
    return result;
};

var fahToCel = function (deg) { // Create function to calculate Fahrenheit to Celsius and return value
    var result = (deg - 32) / 1.8;
    return result;
};

var outputCalc = function (temp) { // Create function that takes Celsius value and return some text
    //Jeśli parametr temp isNaN (nie jest liczbą) i użytkownik nie wpisał liczby to zwróć jakiś tekst
    if (isNaN(temp)) {
        return 'Is this a number? Check again.';
    }
    //Jeśli temp jest pusta i użytkownik kliknął cancel po wywołaniu prompt to zwróć jakiś tekst
    else if (temp === null) {
        return 'Are you leaving?';
    }
    //Jeśli użytkownik nic nie wpisał i kliknął ok to zwróć stosowny komunikat
    else if (temp === '') {
        return 'Type your number first!';
    } else {
        //Zamień za pomocą funkcji parseInt wynik z parametru temp i nadpisz ją do zmiennej temp
        temp = parseInt(temp);
        //Sprawdź czy wynik jest mniejszy niż lub równy 0, jeśli warunek jest prawdziwy to zwróć tekst
        if (temp <= 0) {
            return 'Better to wear some really warm clothes. It\'s a Russian temperature!' + '<br>' + 'The water status: frozen.' + '<br><br>';
        }
        //Jeśli zwracany wynik jest mniejszy niż 0 "i" wynik jest mniejszy niż 100 stopni zwróć jakiś tekst  
        if (temp > 0 && temp < 100) {
            return 'Are you in California? It is hot outside! Wear only some light clothes.' + '<br>' + 'The water status: liquid.' + '<br><br>';
        }
        if (temp >= 100) {
            return 'If you are in Iran better to wear any hat to keep you safe from this hooot temperature. Trust me, I know what I am saying.' + '<br>' + 'The water status: gas.' + '<br><br>';
        }
    }
};

//Odwołaj się do wartości id z boksa/diva
var output = document.getElementById('greeter-output');

var output2 = document.getElementById('greeter-output_2');

//Przypisz zmienną output która odwołuje się do id elementu i wyświetl tekst za pomocą innerHTML w obu boksach/divach  
output.innerHTML = 'Click the button! Tell me your Celsius temperature!' + '<br><br>' + output.innerHTML;

output2.innerHTML = 'Click the button! Tell me your Fahrenheit temperature!' + '<br><br>' + output2.innerHTML;

//Odwołaj się do wartości id obu przycisków
var button = document.getElementById('greeter-button');
var button2 = document.getElementById('greeter-button_2');

// Przypisz zmienną button która odwołuje się do id przycisku i za pomocą funkcji która nasłuchuje użyj argumentu click aby przycisk mógł być klikalny i zapisz w funkcji
button.addEventListener('click', function () {

    // CHANGE CELSIUS TO FAHRENHEIT  

    //Wyświetl okienko po kliknięciu w guzik i zapisz wartość którą wpisał użytkownik w zmiennej celsius
    celsius = window.prompt('What is your Celsius temperature currently? Type any number.');
    //Spraw aby tekst po wciśnięciu guzika i wyświetleniu wartości był pusty, aby nadpisywał automatycznie tekst za każdym razem
    output.innerHTML = '';
    //Zadeklaruj zmienną celResult równą funkcji celToFah która zwraca wynik przeliczając Celsjusze na Fahrenheity
    var celResult = celToFah(celsius);
    //Zadeklaruj zmienną html, przypisz tekst i wyświetl wartość przechowaną w zmiennej celsius wpisaną przez użytkownika, i wyświetl zmienną celResult która przechowuje wynik w funkcji która przelicza Celsjusze na Fahrenheity
    var html = 'Celsius Temperature: ' + celsius + '!' + '<br>' + 'Fahrenheit Temperature: ' + celResult + '!' + '<br><br>'
    //Dopisz do zmiennej html wynik sprawdzający warunki które sprawdzają i zwracają informację o stanie skupienia wody
    html = html + outputCalc(celsius);
    //Użyj funkcji span do wyświetlenia tekstu od nowej linii
    span(html, output);
});

// CHANGE FAHRENHEIT TO CELSIUS

button2.addEventListener('click', function () {

    fahrenheit = window.prompt('What is your Fahrenheit temperature currently? Type any number.');
    var fahResult = fahToCel(fahrenheit);
    var html = 'Fahrenheit Temperature: ' + fahrenheit + '!' + '<br>' + 'Celsius Temperature: ' + fahResult + '!' + '<br><br>';
    html = html + outputCalc(fahResult);
    span(html, output2);
});
// Użyj funkcji span która wyświetli tekst od nowej linii, tym razem za pomocą tagu <br>
span('CHECK<br>TEMPERATURE', headStyle);