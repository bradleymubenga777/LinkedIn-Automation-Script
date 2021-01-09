//Storing components and values in variables.
const connectButtons = document.querySelectorAll('.buttonClassNames');
const inviteMessage = document.getElementById("inputId");
const inviteButtons = document.querySelectorAll('.buttonClassNames');
var nameOfTheProspect = document.getElementById("idOfNameNode").textContent;

//A loop that will run as long as users are less than and equal to 50.
for (nthUser = 50;  connectButtons.length <= nthUser;)
{
    //Click The Conncection Button.
    connectButtons.click()
    .then((success) => {
        //Wait till button clicks then set the input value value to the string.
        inviteMessage.value = `Invite Message Text With ${nameOfTheProspect}`;
        success = "Input Value Was Set Successfuly"
        console.log(success);
    })
    .catch((err) => {
        err = "ERROR 111: could not send set the value"
        console.log(err);
    })

    //Check if input value was set successfuly then press the invite button.
    if (inviteMessage.length)
    {
        inviteButtons.click();
        console.log("Invites sent successfuly!");
    }

    else 
    {
        console.log("ERROR 222: could not send invites.");
    }

};