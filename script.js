let password = "";

const correctPassword = "2810";

function updateDisplay() {

    document.getElementById("passwordDisplay").innerText =
        password || "_ _ _ _";
}

function addNumber(number) {

    if (password.length < 4) {

        password += number;

        updateDisplay();
    }
}

function clearPassword() {

    password = "";

    updateDisplay();

    document.getElementById("message").innerText = "";
}

function checkPassword() {

    const message =
        document.getElementById("message");

    if (password === correctPassword) {

        startBirthdaySequence();

    } else {

        message.style.color = "#FFB6D9";

        message.innerText = "Wrong Password";
    }
}

function startBirthdaySequence() {

    const message =
        document.getElementById("message");

    message.style.color = "#9EFFB0";

    message.innerText = "Welcome, my Love ❤️";

    setTimeout(() => {

        message.innerText = "3...";

    }, 1000);

    setTimeout(() => {

        message.innerText = "2...";

    }, 2000);

    setTimeout(() => {

        message.innerText = "1...";

    }, 3000);

    setTimeout(() => {

        document.querySelector(".main-layout")
            .style.display = "none";

        document.getElementById("birthdayScreen")
            .style.display = "flex";

    }, 4000);
}

function showCakeScreen() {

    document.getElementById("birthdayScreen")
        .style.display = "none";

    document.getElementById("cakeScreen")
        .style.display = "flex";
}

function blowCandles() {

    document.querySelector(".cake-wrapper")
        .style.display = "none";

    document.getElementById("blowBtn")
        .style.display = "none";

    document.getElementById("cakeTitle")
        .innerHTML = "HAPPY BIRTHDAY<br>MY LOVE ❤️";

    document.getElementById("wishMessage")
        .innerHTML = `

        <p>

            ✨ My Heaven,

            <br><br>

            May all your dreams come true,
            today and always.

            <br><br>

            You deserve all the happiness,
            love and beautiful moments
            in the world. ✨

            <br><br>

            I Love You ❤️

        </p>

        <br><br>

        <button
            class="continue-btn"
            onclick="showLetterScreen()">

            💌 Continue

        </button>

    `;

    document.getElementById("wishMessage")
        .style.display = "block";
}

function showLetterScreen() {

    document.getElementById("cakeScreen")
        .style.display = "none";

    document.getElementById("letterScreen")
        .style.display = "flex";
}

function showVideoScreen() {

    document.getElementById("letterScreen")
        .style.display = "none";

    document.getElementById("videoScreen")
        .style.display = "flex";
}