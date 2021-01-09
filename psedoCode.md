# LinkedIn Automation Tool
Make sure you test each step you make.

## Connect Automation Script
- 1. Store all components that you will be using in individual variables (e.g the button, text input, name of the prospect)

- 2. Initilize a for loop that runs as long as the total number of buttons is less than 50 [ for (buttonName.length < 50) {} ]

- 3. Start the application process by doing the following:
    - Add a click function to the 'connect' button.
    - Fill the text input of the popup with the string template and assign the name of the user to the user's name variable that you stored earlier [e.g `{nameVariable}` ]
    - Check if the input was set successfuly and then...
    - Add a click function to the 'conncet' button that sends the invite.

## Automated Messages Script
- 1. Store all components that you will be using in individual variables (e.g the button, text input, name of the prospect)

- 2. Initilize a for loop that runs as long as the total number of buttons is less than 50 [ for (buttonName.length < 50) {} ]

- 3. Start the automation application by doing the following:
    - Click the button to enter the message component.
    - Then in the message component check if you have not recieved a message from your client if the condition is true then set the message value to the auto message template. If the condition is not true then send a error message in the console.
    - Check if the input has value, if the condition is true then click the button to send the message. If the condition is false send a error message to the console.