//Store all the components you will use in variables.
const messageButtons = document.querySelectorAll('.btnClasses');
var oldMessages = document.getElementById("idNamesAndFindValue");
var automatedMessage =  document.getElementById("idName");
const sendButtons = document.querySelectorAll('.btnClasses');
var nameOfTheProspect = document.getElementById("idOfNameNode").nodeValue;

//Initilize loop that will send messages to 50 users.
for (nthUser = 50; messageButtons.length && sendButtons.length <= nthUser; )
{
    messageButtons.click()
    .then(() => {
        //Check if user has replied to our message if not then send, else don't send.
        if (!oldMessages.length)
        {
            automatedMessage.nodeValue = `Message String With ${nameOfProspect}`
        }

        else
        {
            console.log("ERROR 111: did not set value, the user has responded already.");
        }
    })
    .catch((err) => {
        err = "ERROR 222: could not check whether user has sent a message or not."
        console.log(err);
    })

    if (automatedMessage.length)
    {
        sendButtons.click();
    }

    else 
    {
        console.log("ERROR 333: could not send the message to the user.")
    }
}