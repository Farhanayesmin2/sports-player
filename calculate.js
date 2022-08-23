// Take a event handler

document.getElementById('player-container').addEventListener("click", function (event) {

    if (event.target.innerText == 'Select') {
        const playerName = event.target.parentNode.parentNode.children[0].innerText;
        // Here,playerName varible to Get 'Select' text from button click.

        const playerCount = document.querySelectorAll("#players li");
     // querySelectorAll for get the all list item from id="players".
        
        //  Count the list item Length.
        const playerCountLength = playerCount.length + 1;
        
        const empty = playerCountLength + ".  ";
        const name = empty + playerName;
        // Condition add for alert text for more then 5 player added.
        if (playerCountLength > 5) {
            return alert("Can't select more than five Player.");
        }
    // Take a players list from id="players".
        const playerList = document.getElementById('players');
        const li = document.createElement("li");
      // Here, Append the list items.
        li.append(name);
        playerList.append(li);
        // Here,After select Disable the button.
        const disabled = event.target.setAttribute("disabled", "true");
        // Change the color of disable button
     if (disabled != false) {
         event.target.style.backgroundColor = "rgb(203 213 225)";
     }
    }   
    });
       
    


    
