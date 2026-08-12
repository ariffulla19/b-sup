/* =====================================================
   BIRTHDAY WEBSITE - FINAL JAVASCRIPT
===================================================== */


/* =====================================================
   GET SCREENS
===================================================== */

const intro =
    document.getElementById("intro");

const birthday =
    document.getElementById("birthday");

const gift =
    document.getElementById("gift");

const finalScreen =
    document.getElementById("final");


/* =====================================================
   GET BUTTONS
===================================================== */

const startBtn =
    document.getElementById("startBtn");

const continueBtn =
    document.getElementById("continueBtn");

const giftBox =
    document.getElementById("giftBox");


/* =====================================================
   BACKGROUND MUSIC
===================================================== */
/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const bgMusic = new Audio("music/birthday.mp3");

bgMusic.loop = true;
bgMusic.volume = 1.0;




/* =====================================================
   SCREEN TRANSITION
===================================================== */

function showScreen(screen) {

    if (!screen) {
        console.log("Screen not found!");
        return;
    }

    document.querySelectorAll(".screen").forEach(function (item) {
        item.classList.remove("active");
    });

    setTimeout(function () {
        screen.classList.add("active");
    }, 100);

}


/* =====================================================
   PARTICLES
===================================================== */

function createParticles(amount) {

    const container =
        document.getElementById("particles");

    if (!container) return;

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.animationDuration =
            (4 + Math.random() * 6) + "s";

        particle.style.animationDelay =
            Math.random() * 3 + "s";

        particle.style.width =
            (2 + Math.random() * 4) + "px";

        particle.style.height =
            particle.style.width;

        container.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 10000);
    }
}


/* =====================================================
   BIRTHDAY MESSAGE - ONLY 2 LINES
===================================================== */

const birthdayLines = [

    "Some moments become unforgettable because of the person who makes them special. ✨",

    "And today, we celebrate you, Chathurika — Happy Birthday! 🎂❤️"

];

const lineContainer =
    document.getElementById("lineText");

let currentLine = 0;


/* =====================================================
   SHOW NEXT BIRTHDAY LINE
===================================================== */

function showNextLine() {

    if (!lineContainer) return;

    if (
        currentLine <
        birthdayLines.length
    ) {

        const line =
            document.createElement("div");

        line.classList.add(
            "birthday-line-text"
        );

        line.textContent =
            birthdayLines[currentLine];

        lineContainer.appendChild(line);

        currentLine++;

        setTimeout(
            showNextLine,
            1500
        );

    }
}


/* =====================================================
   START LINE ANIMATION
===================================================== */

function startLineAnimation() {

    if (!lineContainer) return;

    lineContainer.innerHTML = "";

    currentLine = 0;

    setTimeout(
        showNextLine,
        500
    );
}

/* =====================================================
   START EXPERIENCE
===================================================== */

if (startBtn) {

    startBtn.addEventListener("click", function () {

        console.log("BEGIN BUTTON CLICKED");

        // Move to birthday screen
        showScreen(birthday);

        // Start particles
        createParticles(50);

        // Start birthday lines
        startLineAnimation();

        // Start music
        bgMusic.play().catch(function (error) {
            console.log("Music blocked:", error);
        });

    });

}

/* =====================================================
   BIRTHDAY → GIFT
===================================================== */

if (continueBtn) {

    continueBtn.addEventListener(
        "click",
        () => {

            showScreen(gift);

            createParticles(40);

        }
    );

}


/* =====================================================
   FINAL SCREEN LINES
===================================================== */

const finalLines = [

    "May your life always be filled with happiness.",

    "May every dream you have come true.",

    "May you always have reasons to smile.",

    "And may this year bring you beautiful moments. ✨"

];

const finalLineContainer =
    document.getElementById(
        "finalLines"
    );


function showFinalLines() {

    if (!finalLineContainer) return;

    finalLineContainer.innerHTML = "";

    finalLines.forEach(
        (text, index) => {

            const line =
                document.createElement("p");

            line.classList.add(
                "final-line"
            );

            line.textContent =
                text;

            line.style.animationDelay =
                (index * 0.7) + "s";

            finalLineContainer.appendChild(
                line
            );

        }
    );
}


/* =====================================================
   OPEN GIFT → FINAL SCREEN
===================================================== */

if (giftBox) {

    giftBox.addEventListener(
        "click",
        () => {

            /* -----------------------------
               PREVENT MULTIPLE CLICKS
            ----------------------------- */

            if (
                giftBox.classList.contains(
                    "open"
                )
            ) {

                return;

            }


            /* -----------------------------
               DISABLE GIFT
            ----------------------------- */

            giftBox.style.pointerEvents =
                "none";


            /* -----------------------------
               OPEN GIFT ANIMATION
            ----------------------------- */

            giftBox.classList.add(
                "open"
            );


            /* -----------------------------
               PARTICLES
            ----------------------------- */

            createParticles(80);


            /* -----------------------------
               WAIT FOR GIFT ANIMATION
            ----------------------------- */

            setTimeout(
                () => {

                    showScreen(
                        finalScreen
                    );

                    createConfetti(150);

                    createParticles(100);

                    showFinalLines();

                },
                1200
            );

        }
    );

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti(amount) {

    const container =
        document.getElementById(
            "confetti"
        );

    if (!container) return;

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("div");

        piece.classList.add(
            "confetti-piece"
        );

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.width =
            (5 + Math.random() * 7) + "px";

        piece.style.height =
            (8 + Math.random() * 12) + "px";

        piece.style.background =
            getRandomColor();

        piece.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(
            piece
        );

        setTimeout(
            () => {

                piece.remove();

            },
            9000
        );

    }
}


/* =====================================================
   CONFETTI COLORS
===================================================== */

function getRandomColor() {

    const colors = [

        "#ff8bc7",
        "#ffd166",
        "#ffffff",
        "#9b5cff",
        "#ff6b6b",
        "#7df9ff"

    ];

    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];
}


/* =====================================================
   SPECIAL MESSAGE
===================================================== */

const secretBtn =
    document.getElementById(
        "secretBtn"
    );

const messageOverlay =
    document.getElementById(
        "messageOverlay"
    );

const closeMessage =
    document.getElementById(
        "closeMessage"
    );

const typedMessage =
    document.getElementById(
        "typedMessage"
    );

const messageSignature =
    document.querySelector(
        ".message-signature"
    );


/* =====================================================
   PERSONAL MESSAGE
===================================================== */

const specialMessage =

    "Today is not just about celebrating " +

    "another year of your life. " +

    "It is about celebrating the beautiful " +

    "person you are. " +

    "May your days always be filled with " +

    "genuine happiness, beautiful surprises " +

    "and people who truly care about you. " +

    "Never stop smiling, never stop dreaming, " +

    "and always remember that you are more " +

    "special than you realize. " +

    "Once again, wishing you the happiest " +

    "birthday, Chathurika. " +

    "May this new chapter of your life " +

    "be filled with beautiful moments " +

    "and unforgettable memories.";


/* =====================================================
   OPEN SPECIAL MESSAGE
===================================================== */

if (secretBtn) {

    secretBtn.addEventListener(
        "click",
        () => {

            if (!messageOverlay) return;

            messageOverlay.classList.add(
                "show"
            );

            if (typedMessage) {

                typedMessage.textContent =
                    "";

            }

            if (messageSignature) {

                messageSignature.classList.remove(
                    "visible"
                );

            }

            typeMessage();

        }
    );

}


/* =====================================================
   TYPEWRITER MESSAGE
===================================================== */

function typeMessage() {

    if (!typedMessage) return;

    let index = 0;

    const typingSpeed = 35;


    function type() {

        if (
            index <
            specialMessage.length
        ) {

            typedMessage.textContent +=
                specialMessage.charAt(
                    index
                );

            index++;

            setTimeout(
                type,
                typingSpeed
            );

        }

        else {

            setTimeout(
                () => {

                    if (
                        messageSignature
                    ) {

                        messageSignature.classList.add(
                            "visible"
                        );

                    }

                },
                500
            );

        }

    }

    type();

}


/* =====================================================
   CLOSE MESSAGE
===================================================== */

if (closeMessage) {

    closeMessage.addEventListener(
        "click",
        () => {

            if (!messageOverlay) return;

            messageOverlay.classList.remove(
                "show"
            );

        }
    );

}


/* =====================================================
   CLICK OUTSIDE MESSAGE
===================================================== */

if (messageOverlay) {

    messageOverlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                messageOverlay
            ) {

                messageOverlay.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            messageOverlay
        ) {

            messageOverlay.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   CONTINUOUS PARTICLES
===================================================== */

setInterval(
    () => {

        const activeScreen =
            document.querySelector(
                ".screen.active"
            );

        if (activeScreen) {

            createParticles(2);

        }

    },
    1800
);