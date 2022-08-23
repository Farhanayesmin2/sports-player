// 

document.getElementById('player-container').addEventListener("click", function (event) {

    if (event.target.innerText == 'Select') {
        const playerName = event.target.parentNode.parentNode.children[0].innerText;

        const playerCount = document.querySelectorAll("#players li");
        // for (let i = 0; i <playerCount.length ; i++)
        const playerCountLength = playerCount.length;
        console.log(playerCountLength);
        if (playerCountLength > 4) {
            return alert("You can't select more than five!");
        }
    
        const playerList = document.getElementById('players');
        const li = document.createElement("li");
      
        li.append(playerName);
        playerList.append(li);
        const disabled = event.target.setAttribute("disabled", "true");
        // Change the color of disable button
     if (disabled != false) {
         event.target.style.backgroundColor = "rgb(220 38 38)";
     }
    }   
    });
       
    


    
