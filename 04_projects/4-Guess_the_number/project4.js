
let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const PreviousGuesses=document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevguess=[]
let numguess=1

let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })

}

function validateGuess(guess){
    if(isNaN(guess)||guess<1||guess>100){
        alert("Please enter a valid number between 1 and 100")
    }else{
        prevguess.push(guess)
        if(numguess==11){
            displayGuess(guess)
            displayMessage(`Game Over! The number was ${randomNumber}`)
            EndGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`Congratulations! You guessed it right`)
        EndGame()
    }else if(guess<randomNumber){
        displayMessage(`Your guess is too low`)
    }else if(guess>randomNumber){
        displayMessage(`Your guess is too high`)
    }

}

function displayGuess(guess){//cleanup function
    userInput.value=''
    PreviousGuesses.innerHTML+=`${guess},  `
    numguess++
    remaining.innerHTML=`${11-numguess}`

}

function displayMessage(message){
    lowOrHi.innerHTML=`${message}`

}



function EndGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playgame=false
    newGame()
    
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
        newGameButton.addEventListener('click',function(){
            randomNumber=parseInt(Math.random()*100+1);
            prevguess=[]
            numguess=1
            PreviousGuesses.innerHTML=''
            remaining.innerHTML=`10`
            lowOrHi.innerHTML=``
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            playgame=true
        })

}


