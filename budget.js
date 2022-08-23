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
   // clear the input field 
    perPlayerValue.value = "";
    return totalPayer;
}
// Create a function for Number type input field.
 function getTheValue(number) {
    const getValueNumber = document.getElementById(number);
    const getValueNumberString = getValueNumber.value;
    const getTheNumber = parseInt(getValueNumberString);
    return getTheNumber;
} 
// Create a function for innerText Value.
function getTheInnerTextValue(innerValue) {
    const getValueInnerText = document.getElementById(innerValue);
    const getValueInnerTextString = getValueInnerText.innerText;
    const getTheTextValue = parseInt(getValueInnerTextString);
    return getTheTextValue;
} 


// Create a function for set the innerText
function setTheValueInnerText(number, newValue) {
    const setValueNumber = document.getElementById(number);
    const setValueNumberString = setValueNumber.innerText;
    const setTheTextNumber = parseInt(setValueNumberString);
    setValueNumber.innerText = newValue;
    return  newValue;
}

// calculate button for player cost
document.getElementById('calculate-btn').addEventListener('click', function () {

    // called the  nameEveryPlayer() function in calculate button.
   const player= nameEveryPlayer();
  // called the  getTheInnerTextValue() function.
    const playerExpenses = getTheInnerTextValue('player-expenses'); 
   // here, set the innerText value setTheValueInnerText(number, newValue).
    const playerExpensesTotal = setTheValueInnerText('player-expenses', player);
// Called id="per-player" for alert if input field in not a valid number.
    const alertTextPerPlayerInput = document.getElementById('per-player');
if(isNaN( alertTextPerPlayerInput) )  {
    return alert("Please Give The Correct Amount.");
    }
})

// Create a function for event Handler for Total calculate Button.
document.getElementById('total-calculate-btn').addEventListener('click', function () {

  // Get the all player Cost value for addition for total amount
  const playerExpensesTotalAmount =getTheInnerTextValue('player-expenses'); 
    
    // called the getTheValue() function for manager input field and coach input field value for addition for total amount.
    const manager = getTheValue('manager-field');
   
    const coach = getTheValue('coach-field');
   
    const addTheTwoValue = manager + coach;
// Addition the total amount.
    const theTotalCost = playerExpensesTotalAmount + addTheTwoValue;
   // called the  getTheInnerTextValue(); for get number value.
    getTheInnerTextValue('total-cost');
    // set the number value that's whay called setTheValueInnerText(number, newValue) . 
    setTheValueInnerText('total-cost', theTotalCost)
   // Shpw the alert text for 
   /* if (typeof manager != 'number' ) {
    return alert("Can't select more string");
   } */
    const managerInput = document.getElementById('manager-field');
    const coachInput = document.getElementById('coach-field');

    // show the alert text when give wrong number
 if(isNaN( managerInput) ||  isNaN(coachInput) )  {
    return alert("Please Give The Correct Amount.");
    }
})


/* if (typeof manager != 'number' ) {
    return alert("Can't select more string");
}
else if(manager <0) {
    return alert("Can't select more string");
} */