document.getElementById("btn-total").addEventListener("click", function () {
    const kiloMetersField = document.getElementById('Kilometers-field');
    const totalKilometers = kiloMetersField.value;
    kiloMetersField.value = '';
    const Kilometers = parseFloat(totalKilometers);

    const busFareString = document.getElementById('bus-fare').innerText;
    const busFare = parseFloat(busFareString);
    
    const totalFare = Kilometers * busFare;
    const total = totalFare.toFixed(2);
    
    
})