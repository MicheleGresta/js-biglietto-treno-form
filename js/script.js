
// const userName = document.getElementById("nome");
const usernameInputElement = document.querySelector("[name='username']");
const userKmInputElement =  document.getElementById("km");
const userAgeInputElement = document.getElementById("eta");
const userOld = 65;
const userYoung = 18;





const login = document.getElementById("btw-login");


login.addEventListener("click", function () {
    console.dir(usernameInputElement);
    console.dir(userKmInputElement);
    console.dir(userAgeInputElement);

    const userAge = parseInt(userAgeInputElement.value)
    const userKm = parseInt(userKmInputElement.value)
    const username = usernameInputElement.value;

    const userPrice = ((userKm * 0.21).toFixed(2));
    const scontoYoung = (((userPrice * 80) / 100).toFixed(2));
    const scontoOld = (((userPrice * 60) / 100).toFixed(2));

    


    if (userAge < userYoung) {
    document.getElementById("prezzo-finale").innerHTML = "Gentile " + username + ", rientra nella categoria più giovane, pertanto le aspetta uno sconto del 20%, per un importo totale di " + scontoYoung + " €. Buon viaggio!" 
    console.log = "Gentile " + username + ", rientra nella categoria più giovane, pertanto le aspetta uno sconto del 20%, per un importo totale di " + scontoYoung + " €. Buon viaggio!"
    document.getElementById("prezzo-finale").style.color = "red"
} else if (userAge > userOld) {
    document.getElementById("prezzo-finale").innerHTML = "Gentile " + username + ", rientra nella categoria più adulta, pertanto le aspetta uno sconto del 40%, per un importo totale di " + scontoOld + " €. Buon viaggio!"
    console.log = "Gentile " + username + ", rientra nella categoria più adulta, pertanto le aspetta uno sconto del 40%, per un importo totale di " + scontoOld + " €. Buon viaggio!"
    document.getElementById("prezzo-finale").style.color = "brown"

} else 
    document.getElementById("prezzo-finale").innerHTML = "Gentile " + username + ", il prezzo del biglietto è di" + userPrice + " €. Buon viaggio!"
    console.log = "Gentile " + username + ", il prezzo del biglietto è di" + userPrice + " €. Buon viaggio!"
})