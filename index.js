const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let isAlive = false
let password1 = document.getElementById("pass1")
let password2 = document.getElementById("pass2")
let option1 = document.getElementById("opt1")
let option2 = document.getElementById("opt2")
let password_length = prompt("Amount of characters you would like to use: ")



function generateCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]

}

function generatePassword() {
    isAlive = true;
    let randomPassword1 = ""
    option1.textContent = "Option 1: "
    password1.style.border = "3px solid #699985"
    password1.style.backgroundColor = "white"
    for (let i = 0; i < password_length; i++) {
        randomPassword1 += generateCharacter()
        password1.textContent = randomPassword1      
    }

    let randomPassword2 = ""
    option2.textContent = "Option 2: "
    password2.style.border = "3px solid #699985"
    password2.style.backgroundColor = "white"
    for (let i = 0; i < password_length; i++) {
        randomPassword2 += generateCharacter()
        password2.textContent = randomPassword2     
    }
    return randomPassword1, randomPassword2
}

