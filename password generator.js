let characters = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "b",
    "v",
    "c",
    "x",
    "z",
    "M",
    "N",
    "B",
    "V",
    "C",
    "X",
    "Z",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "P",
    "O",
    "I",
    "U",
    "Y",
    "T",
    "R",
    "E",
    "W",
    "Q",
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "{",
    "]",
    "}",
    "\'",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
    " ",
    ]


let randomPassword = "";

for (let i = 0; i < [12, 13, 14, 15, 16, 17][Math.floor(Math.random() * 6)]; i++) {
    if (!randomPassword.includes(i)) {
        randomPassword += characters[Math.floor(Math.random() * characters.length)];
    }
}
console.log(randomPassword);

document.querySelector('#pword').addEventListener('click', function() {
    document.querySelector('.generate').style.display = "block";
});

document.querySelector('.generate').addEventListener('click', function() {
    document.querySelector('#pword').value = randomPassword;
    document.querySelector('.generate').style.display = "none";
});

document.querySelector('#hS').addEventListener('click', toggle);

function toggle() {
    let p = document.querySelector('#pword');
    if (p.type === "password") {
        p.type = "text";
        document.querySelector('#hS').src = "icons8-eye-30.png";
    }
    else {
        p.type = "password";
        document.querySelector('#hS').src = "icons8-hide-30.png";
    }
}

