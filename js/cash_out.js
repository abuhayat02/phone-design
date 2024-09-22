document.getElementById('acash-out-btn').addEventListener('click', function (e){
    e.preventDefault();
    let outAmount = inputValueWithId('out-amount');
    let currentValance = getValueFromInnerText('balance');
    let totalAmount =currentValance - outAmount  ;

    setInnerText( 'balance', totalAmount);
    addMonyTranscription(outAmount,totalAmount,'out')



})