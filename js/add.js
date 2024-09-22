document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault()
    let inputAmount = inputValueWithId('amout');
    let currentValance = getValueFromInnerText('balance');

    let mainBalance = inputAmount + currentValance;
    setInnerText('balance',mainBalance);
    addMonyTranscription(inputAmount,mainBalance,'add')
    
})