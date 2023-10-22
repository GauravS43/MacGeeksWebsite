id = 0;
console.log(document.cookie)
missingCookies = !document.cookie
console.log(missingCookies)

function getCookieValue(name) {
    const regex = new RegExp(`(^| )${name}=([^;]+)`)
    const match = document.cookie.match(regex)
    if (match) {
        return match[2]
    }
}


window.onload = function () {
    let passTitle = document.getElementById("passTitle");

    if (window.innerWidth > 100) {
        console.log("w");
        for (let i = 1; i < 17; i++) {
            if (missingCookies) {
                document.cookie = "grid" + i + "=false";
            }
            else if (getCookieValue("grid" + i) == "true") {
                document.getElementById("grid" + i).innerHTML = "X";
            }


            document.getElementById("grid" + i).onclick = function () {
                id = i
                passTitle.innerHTML = "Passcode for Q".concat(i.toString())
            }
        }
    }
}

passcodes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]



document.getElementById("passForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let passcode = document.getElementById("passInput");

    if (passcode.value == passcodes[id - 1]) {
        alert("Correct!");
        document.getElementById("grid" + id).innerHTML = "X";
        document.cookie = "grid" + id + "=true";
        passcode.value = "";
    } else {
        alert("Incorrect!");
    }
});