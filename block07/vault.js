/*
First thing is first, create a string that consist of the message you want to send to the user. 
This is accomplished with a "const message" because we arent going to want the message to change at all
*/
const message ="You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

/*
similarly to the message, create three strings using arithmetic operators that equal out to the desired numbers 
10 - 40 - 39
*/
const first = 3 * 3 + 1
const sec = 10 * 4 + 6 - 3 + 2 - 5
const last = 30 + 9


/*
lastly, you can concatenate your strings within an alert message
this will create a pop-up which displays both the required message and the appropriate numbers to 
open the vault
*/
alert(message + first + '-' + sec + '-' + last)

