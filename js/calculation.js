document.getElementById('calculate').addEventListener('click', function () {
    const perplayerAmount = getElementValueById('player-salary');

    const selectedPlayer = document.querySelectorAll('#player-select li');

    const totalPlayerCost = selectedPlayer.length * perplayerAmount;
    console.log(totalPlayerCost);

    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = totalPlayerCost;


});

document.getElementById('total-calculation').addEventListener('click', function () {
    const managerAmount = getElementValueById('manager-salary');
    const coachAmount = getElementValueById('coach-salary');

    const playerAmountString = document.getElementById('player-expense').innerText;
    const playerAmount = parseFloat(playerAmountString);
    const totalCostAmount = playerAmount + managerAmount + coachAmount;

    const totalamount = document.getElementById('cost');
    totalamount.innerText = totalCostAmount;

});