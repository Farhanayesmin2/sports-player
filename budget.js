// get the function for per player 
function nameEveryPlayer() {
    const perPlayerValue = document.getElementById('per-player');
    const perPlayerValueString = perPlayerValue.value;
    const perPlayer = parseInt(perPlayerValueString);
// get player list item by querySelectorAll
    const perPlayerList = document.querySelectorAll("#players li");
// get the list item length for multiply by each player cost
    const playerCount = perPlayerList.length;
   // multiply by each player cost
    const totalPayer = playerCount * perPlayer;
   
    perPlayerValue.value = "";
    return totalPayer;
}

 function getTheValue(number) {
    const getValueNumber = document.getElementById(number);
    const getValueNumberString = getValueNumber.value;
    const getTheNumber = parseInt(getValueNumberString);
    return getTheNumber;
} 
function getTheInnerTextValue(innerValue) {
    const getValueInnerText = document.getElementById(innerValue);
    const getValueInnerTextString = getValueInnerText.innerText;
    const getTheTextValue = parseInt(getValueInnerTextString);
    return getTheTextValue;
} 



function setTheValueInnerText(number, newValue) {
    const setValueNumber = document.getElementById(number);
    const setValueNumberString = setValueNumber.innerText;
    const setTheTextNumber = parseInt(setValueNumberString);
    setValueNumber.innerText = newValue;
    return  newValue;
}

// calculate button for player cost
document.getElementById('calculate-btn').addEventListener('click', function () {

    // called the function in calculate button
   const player= nameEveryPlayer();
  
    const playerExpenses = getTheInnerTextValue('player-expenses'); 
   
    const playerExpensesTotal = setTheValueInnerText('player-expenses', player);
// 
 /*    const manager = setTheValueInnerText('manager-field');

    const coach = setTheValueInnerText('coach-field');
    const theTotalCost = playerExpensesTotal + manager + coach;
    console.log(theTotalCost); */
})

document.getElementById('total-calculate-btn').addEventListener('click', function () {

  // get the all player cost
  const playerExpensesTotalAmount =getTheInnerTextValue('player-expenses'); 
    
    const manager = getTheValue('manager-field');
   
    const coach = getTheValue('coach-field');
   
    const addTheTwoValue = manager + coach;

    const theTotalCost = playerExpensesTotalAmount + addTheTwoValue;
   
    getTheInnerTextValue('total-cost');
    setTheValueInnerText('total-cost', theTotalCost)
   // console.log(theTotalCost);
    
})