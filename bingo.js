let id = 0;
console.log(document.cookie)
missingCookies = !document.cookie
console.log(missingCookies)

let bingoArr = [
    [0, 0, 0, 0]
    , [0, 0, 0, 0]
    , [0, 0, 0, 0]
    , [0, 0, 0, 0]
]

function getCookieValue(name) {
    const regex = new RegExp(`(^| )${name}=([^;]+)`)
    const match = document.cookie.match(regex)
    console.log(match)
    if (match) {
        return match[2]
    }
}

window.onload = function () {
    let passTitle = document.getElementById("passTitle");

    if (!document.cookie){
        alert("If you are playing on an Incognito Browser, please disable Incognito mode to save answers.");
    }
    if (window.innerWidth > 100) {
        for (let i = 1; i < 17; i++) {
            if (missingCookies) {
                document.cookie = "grid" + i + "=false; expires=Thu, 7 Nov 2024 12:00:00 UTC";
            }
            else if (getCookieValue("grid" + i) == "true") {
                document.getElementById("grid" + i).style.opacity = 0;
                bingoArr[Math.floor((i - 1) / 4)][(i - 1) % 4] = 1;
                updateScore();
            }


            document.getElementById("grid" + i).onclick = function () {
                id = i
                if (id == 10 || id == 12){
                    alert("Please show any GEEKS Executive member to get the passcode!")
                }
                letters = ["A", "B", "C", "D"]
                passTitle.innerHTML = "Passcode for " + letters[Math.floor((i - 1) / 4)] + ((i - 1) % 4 + 1)
            }
        }
    }
}

passcodes = ["THEALLEY", "KYUN", "JACKBOX", "FISHY", "THANKYOU", "MEDIA", "ARTCORE", "EGGHEAD", "AMQCHAMP", "NOTIFIED", "POSE28", "JOLLY", "CRANE", "IDOL", "P1NG00", "ANIFEST"]



document.getElementById("passForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let passcode = document.getElementById("passInput");

    if (passcode.value.trim().toUpperCase() == passcodes[id - 1]) {
        alert("Correct!");
        document.getElementById("grid" + id).style.opacity = 0;
        document.cookie = "grid" + id + "=true; expires=Thu, 7 Nov 2024 12:00:00 UTC";
        passcode.value = "";
        bingoArr[Math.floor((id - 1) / 4)][(id - 1) % 4] = 1;
        updateScore();
    } else {
        alert("Incorrect!");
    }
});

function updateScore() {
    let tickets = 0
    for (let i = 0; i < 4; i++) {
        // Horizontal row done
        if (bingoArr[i][0] && bingoArr[i][1] && bingoArr[i][2] && bingoArr[i][3]) {
            tickets++;
        }
        // Vertical row done
        if (bingoArr[0][i] && bingoArr[1][i] && bingoArr[2][i] && bingoArr[3][i]) {
            tickets++;
        }
    }
    // Diagonal rows
    if (bingoArr[0][0] && bingoArr[1][1] && bingoArr[2][2] && bingoArr[3][3]) {
        tickets++;
    }
    if (bingoArr[0][3] && bingoArr[1][2] && bingoArr[2][1] && bingoArr[3][0]) {
        tickets++
    }
    console.log(tickets)
    document.getElementById("ticketCounter").innerHTML = "Tickets Won: " + tickets;
}