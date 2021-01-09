//Storing components and values in variables.
const connectButton = document.querySelectorAll('.buttonClassNames');
const inviteMessage = document.getElementById("inputId");
const inviteButton = document.querySelectorAll('.buttonClassNames');
var nameOfTheProspect = document.getElementById("idOfNameNode").nodeValue;

//A loop that will run as long as users are less than and equal to 50.
for (nthButton = 50;  connectButton.length <= nthButton;)
{
    //Click The Conncection Button.
    connectButton.click()
    .then((success) => {
        //Wait till button clicks then set the input value value to the string.
        inviteMessage.nodeValue = `String Text With ${nameOfTheProspect}`;
        success = "Input Value Was Set Successfuly"
        console.log(success);
    })
    .catch((err) => {
        err = "could not send set the value"
        console.log(err);
    })

    //Check if input value was set successfuly then press the invite button.
    if (inviteMessage.length)
    {
        inviteButton.click();
        console.log("Invites sent successfuly!");
    }

    else 
    {
        console.log("could not send invites.")
    }

};