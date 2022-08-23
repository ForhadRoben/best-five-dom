function getElementValueById(element) {
    const amountElement = document.getElementById(element);
    const amountElementString = amountElement.value;
    const amount = parseFloat(amountElementString);
    return amount;
}
