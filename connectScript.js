///// Declaring Variables And Functions
let buttons = document.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
let connectName;

/////
function clickingAddNote() {
    let addANoteBtn = document.querySelectorAll('.mr1.artdeco-button.artdeco-button--muted.artdeco-button--3.artdeco-button--secondary.ember-view');
    let clickAddNote = addANoteBtn[0];
    var accessName = document.getElementsByClassName('flex-1');
    
    setTimeout(() => {
        connectName = accessName[0].childNodes[2].textContent;
        clickAddNote.click();
    }, 2000)
}

function addMessage() {
    setTimeout(() => {
        let inviteMessage = document.getElementById("custom-message");
        inviteMessage.value = `Hello ${connectName}`;
    }, 2000);
}


//// One Line Script
buttons.forEach(button => {if (button.innerText.length == 7) {button.click(), clickingAddNote(), addMessage()} });