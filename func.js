function getInnerTextByID(id) {
    let element = document.getElementById(id).value;
    let elementNumber = parseFloat(element);
    element.value = "";
    return elementNumber;
}

function getPreElementByID(id){
    let preElement = document.getElementById(id).innerText;
    let preElementNumber = parseFloat(preElement);

    return preElementNumber;
}

function setById(id, value){
    let element = document.getElementById(id);
    element.innerText = value;
}


