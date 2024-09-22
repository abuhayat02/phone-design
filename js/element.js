


function inputValueWithId(id) {
    let inputValue = document.getElementById(id).value;
    inputValue = parseFloat(inputValue);
    return inputValue;
}

function getValueFromInnerText(id) {
    let tageValue = document.getElementById(id).innerText;
    tageValue = parseFloat(tageValue);
    return tageValue;
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function pageShow(id) {
    document.getElementById('add-many-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transcrip-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function addMonyTranscription(inputAmount , mainBalance , str){
    
    let p = document.createElement('p');
    if(str == 'add'){
        p.innerHTML = `
        <h1 class = "bg-blue-900 my-2 w-full text-white  font-bold rounded-md py-1 px-4 ">Add ${inputAmount} and main balance ${mainBalance}</h1>
    `}else{
        p.innerHTML = `
        <h1 class = "bg-red-950 w-full  text-white font-bold  rounded-md py-1 px-4 ">Out ${inputAmount} and main balance ${mainBalance}</h1>
    `
    }

    document.getElementById('transcrip-page').appendChild(p);
}
