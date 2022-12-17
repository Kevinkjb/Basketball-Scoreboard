let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0
// Home scoring
function plusOne(){
    homeCount += 1
    homeScore.textContent = homeCount
}
function plusTwo(){
    homeCount += 2
    homeScore.textContent = homeCount
}
function plusThree(){
    homeCount += 3
    homeScore.textContent = homeCount
}

// Guest Scoring
function plusOneGuest(){
    guestCount += 1
    guestScore.textContent = guestCount
}
function plusTwoGuest(){
    guestCount += 2
    guestScore.textContent = guestCount
}
function plusThreeGuest(){
    guestCount += 3
    guestScore.textContent = guestCount
}
// RESET Control AND MINUS FOR MAIN SCORE

function reset(){
    guestScore.textContent = "0"
    homeCount = 0
    homeScore.textContent = "0"
    guestCount = 0
    homeFoulCount.textContent = "0"
    foulCount = 0
    guestFoulCount.textContent = "0"
    foulCountTwo = 0
    period.textContent = "1"
    periodC = 0
}
function minusOne(){
    let minusHome = homeCount -= 1
    homeScore.textContent = minusHome
}
function minusOneGuest(){
    let  minusGuest = guestCount -= 1
    guestScore.textContent = minusGuest
    
} 

// Foul Count
let homeFoulCount = document.getElementById("foul-countHome")
let guestFoulCount = document.getElementById("foul-countGuest")
let foulCount = 0
let foulCountTwo = 0

function homeFoul(){
    foulCount += 1
    homeFoulCount.textContent = foulCount
}
function guestFoul(){
    foulCountTwo += 1
    guestFoulCount.textContent = foulCountTwo 
}

// FOUL MINUS SECTION
function homeFoulMinus(){
    homeFoulCount.textContent = foulCount -= 1
}
function guestFoulMinus(){
    guestFoulCount.textContent = foulCountTwo -= 1
}

// PERIOD COUNT SECTION
let period = document.getElementById("period-count")
let periodC = 0

function periodCount(){
    periodC += 1
    period.textContent = periodC
}