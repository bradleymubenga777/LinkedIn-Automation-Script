//Storing components and values in variables.
let connectButton = document.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
let addANoteBtn = document.querySelectorAll('.mr1.artdeco-button.artdeco-button--muted.artdeco-button--3.artdeco-button--secondary.ember-view');
let inviteMessage = document.getElementById("custom-message");
let sendInviteButton = document.querySelectorAll('.buttonClassNames');
var nameOfTheProspect = document.getElementsByTagName('strong');
var nameOfClient = nameOfTheProspect[0];


for (i = 0;  connectButton.length <= i; i++)
{
    userBtn = connectButtons[i];

    if (userBtn.textContent.length == 14)
    {
        userBtn.click();
    }

    inviteMessage.value = "Text String!"

};