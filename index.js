let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let titleHomeEl = document.getElementById("title-home")
let titleGuestEl = document.getElementById("title-guest")

let homeScore = 0
let guestScore = 0

function higlightLeader() {
    if (homeScore > guestScore) {
        titleHomeEl.style.color = "#FBBF24"
        titleGuestEl.style.color = "#EEEEEE"
    } else if (guestScore > homeScore) {
        titleGuestEl.style.color = "#FBBF24"
        titleHomeEl.style.color = "#EEEEEE"
    } else {
        titleHomeEl.style.color = "#EEEEEE"
        titleGuestEl.style.color = "#EEEEEE"
    }
}

function homePlusOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    higlightLeader()
}

function homePlusTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    higlightLeader()
}

function homePlusThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    higlightLeader()
}

function guesttPlusOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    higlightLeader()
}

function guestPlusTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    higlightLeader()
}

function guestPlusThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    higlightLeader()
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    higlightLeader()
}