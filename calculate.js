// 

document.getElementById('player-container').addEventListener("click", function (event) {

    if (event.target.innerText == 'Select') {
        const playerName = event.target.parentNode.parentNode.children[0].innerText;

        const playerCount = document.querySelectorAll("#players li");
     
        const playerCountLength = playerCount.length+1;
        const empty = playerCountLength + ".  ";
        const name = empty + playerName;
        console.log(name);
        if (playerCountLength > 5) {
            return alert("Can't select more than five Player.");
        }
    
        const playerList = document.getElementById('players');
        const li = document.createElement("li");
      
        li.append(name);
        playerList.append(li);
        const disabled = event.target.setAttribute("disabled", "true");
        // Change the color of disable button
     if (disabled != false) {
         event.target.style.backgroundColor = "rgb(220 38 38)";
     }
    }   
    });
       
    


    
