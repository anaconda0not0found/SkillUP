/* =========================================================
   SKILLUP PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("pageLoader")
            .classList.add("hide");

    }, 1800);

});


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}


/* =========================================================
   CURSOR TRAIL
========================================================= */

const trail = document.getElementById("cursor-trail");

let mouseX = 0;
let mouseY = 0;

let trailX = 0;
let trailY = 0;

document.addEventListener("mousemove", function (e) {

    mouseX = e.clientX;
    mouseY = e.clientY;

    trail.style.opacity = "1";

});

function animateTrail() {

    trailX += (mouseX - trailX) * 0.18;
    trailY += (mouseY - trailY) * 0.18;

    trail.style.left = trailX + "px";
    trail.style.top = trailY + "px";

    requestAnimationFrame(animateTrail);

}

animateTrail();

document.addEventListener("mouseleave", function () {

    trail.style.opacity = "0";

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   INDIA TIME
   Kolkata timezone used internally.
   Location name is NOT displayed.
========================================================= */

function updateIndiaTime() {

    const now = new Date();

    const time =
        new Intl.DateTimeFormat("en-IN", {

            timeZone: "Asia/Kolkata",

            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",

            hour12: true

        }).format(now);


    const date =
        new Intl.DateTimeFormat("en-IN", {

            timeZone: "Asia/Kolkata",

            weekday: "long",
            day: "numeric",
            month: "long"

        }).format(now);


    document.getElementById("indiaTime")
        .textContent = time;

    document.getElementById("indiaDate")
        .textContent = date;

}

updateIndiaTime();

setInterval(updateIndiaTime, 1000);


/* =========================================================
   MODALS
========================================================= */

const lessonModal =
    document.getElementById("lessonModal");

const comingModal =
    document.getElementById("comingModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalBody =
    document.getElementById("modalBody");

const modalIcon =
    document.getElementById("modalIcon");


function closeLesson() {

    lessonModal.classList.remove("active");

}


function comingSoon() {

    comingModal.classList.add("active");

}


function closeComing() {

    comingModal.classList.remove("active");

}


window.addEventListener("click", function (e) {

    if (e.target === lessonModal) {

        closeLesson();

    }

    if (e.target === comingModal) {

        closeComing();

    }

});


document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeLesson();
        closeComing();
        closeQuiz();

    }

});


/* =========================================================
   LESSONS
========================================================= */

const lessons = {


    /* ================= MATHS ================= */

    average: {

        title: "Average",
        icon: "x̄",

        content: `
            <div class="lesson-text">

                <p>
                    Average tells us the central value
                    of a group of numbers.
                </p>

                <div class="rule-box">
                    <strong>Formula:</strong><br><br>
                    Average =
                    Sum of all values ÷ Number of values
                </div>

                <p><strong>Example:</strong></p>

                <div class="example">
                    Numbers: 10, 20, 30<br><br>

                    Sum = 10 + 20 + 30 = 60<br>

                    Number of values = 3<br><br>

                    Average = 60 ÷ 3 = 20
                </div>

            </div>
        `

    },


    percentage: {

        title: "Percentage",
        icon: "%",

        content: `
            <div class="lesson-text">

                <p>
                    Percentage means "out of 100".
                </p>

                <div class="rule-box">
                    <strong>Formula:</strong><br><br>

                    Percentage =
                    (Part ÷ Total) × 100
                </div>

                <p><strong>Example:</strong></p>

                <div class="example">
                    You scored 45 marks out of 60.<br><br>

                    (45 ÷ 60) × 100<br>
                    = 75%
                </div>

            </div>
        `

    },


    cp: {

        title: "Cost Price & Selling Price",
        icon: "₹",

        content: `
            <div class="lesson-text">

                <p>
                    <strong>CP</strong> means Cost Price —
                    the price at which an item is bought.
                </p>

                <p>
                    <strong>SP</strong> means Selling Price —
                    the price at which an item is sold.
                </p>

                <div class="rule-box">
                    <strong>Profit:</strong><br>
                    SP − CP

                    <br><br>

                    <strong>Loss:</strong><br>
                    CP − SP
                </div>

                <div class="example">
                    CP = ₹500<br>
                    SP = ₹600<br><br>

                    Profit = ₹600 − ₹500<br>
                    Profit = ₹100
                </div>

            </div>
        `

    },


    profitloss: {

        title: "Profit & Loss",
        icon: "₹",

        content: `
            <div class="lesson-text">

                <div class="rule-box">
                    <strong>Profit:</strong><br>
                    SP > CP

                    <br><br>

                    <strong>Loss:</strong><br>
                    CP > SP

                    <br><br>

                    <strong>Profit %:</strong><br>
                    (Profit ÷ CP) × 100

                    <br><br>

                    <strong>Loss %:</strong><br>
                    (Loss ÷ CP) × 100
                </div>

                <div class="example">
                    CP = ₹1000<br>
                    SP = ₹1200<br><br>

                    Profit = ₹200<br>

                    Profit % =
                    (200 ÷ 1000) × 100
                    = 20%
                </div>

            </div>
        `

    },


    simpleinterest: {

        title: "Simple Interest",
        icon: "SI",

        content: `
            <div class="lesson-text">

                <p>
                    Simple Interest is calculated only
                    on the original principal.
                </p>

                <div class="rule-box">
                    <strong>Formula:</strong><br><br>

                    SI = (P × R × T) ÷ 100

                    <br><br>

                    P = Principal<br>
                    R = Rate<br>
                    T = Time
                </div>

                <div class="example">
                    P = ₹1000<br>
                    R = 10%<br>
                    T = 2 years<br><br>

                    SI = (1000 × 10 × 2) ÷ 100<br>
                    SI = ₹200
                </div>

            </div>
        `

    },


    compoundinterest: {

        title: "Compound Interest",
        icon: "CI",

        content: `
            <div class="lesson-text">

                <p>
                    Compound Interest is calculated on
                    the principal plus previously earned interest.
                </p>

                <div class="rule-box">
                    <strong>Formula:</strong><br><br>

                    Amount = P(1 + R/100)ᵀ

                    <br><br>

                    CI = Amount − Principal
                </div>

                <div class="example">
                    P = ₹1000<br>
                    R = 10%<br>
                    T = 2 years<br><br>

                    Amount = 1000(1.10)²<br>
                    Amount = ₹1210<br><br>

                    CI = ₹1210 − ₹1000<br>
                    CI = ₹210
                </div>

            </div>
        `

    },


    tables: {

        title: "Multiplication Tables 2–20",
        icon: "×",

        content: generateTables()

    },


    /* ================= ENGLISH ================= */

    tenses: {

        title: "All English Tenses",
        icon: "T",

        content: `
            <div class="lesson-text">

                <p>
                    There are 12 main English tenses.
                    Each tense tells us when an action happens.
                </p>


                <div class="rule-box">

                    <strong>1. Simple Present</strong><br>
                    Identity: Subject + V1 + Object<br>
                    Example: I play cricket.

                    <br><br>

                    <strong>2. Present Continuous</strong><br>
                    Identity: Subject + is/am/are + V1-ing + Object<br>
                    Example: I am playing cricket.

                    <br><br>

                    <strong>3. Present Perfect</strong><br>
                    Identity: Subject + has/have + V3 + Object<br>
                    Example: I have played cricket.

                    <br><br>

                    <strong>4. Present Perfect Continuous</strong><br>
                    Identity: Subject + has/have been + V1-ing<br>
                    Example: I have been playing cricket.

                </div>


                <div class="rule-box">

                    <strong>5. Simple Past</strong><br>
                    Identity: Subject + V2 + Object<br>
                    Example: I played cricket.

                    <br><br>

                    <strong>6. Past Continuous</strong><br>
                    Identity: Subject + was/were + V1-ing<br>
                    Example: I was playing cricket.

                    <br><br>

                    <strong>7. Past Perfect</strong><br>
                    Identity: Subject + had + V3 + Object<br>
                    Example: I had played cricket.

                    <br><br>

                    <strong>8. Past Perfect Continuous</strong><br>
                    Identity: Subject + had been + V1-ing<br>
                    Example: I had been playing cricket.

                </div>


                <div class="rule-box">

                    <strong>9. Simple Future</strong><br>
                    Identity: Subject + will + V1 + Object<br>
                    Example: I will play cricket.

                    <br><br>

                    <strong>10. Future Continuous</strong><br>
                    Identity: Subject + will be + V1-ing<br>
                    Example: I will be playing cricket.

                    <br><br>

                    <strong>11. Future Perfect</strong><br>
                    Identity: Subject + will have + V3<br>
                    Example: I will have played cricket.

                    <br><br>

                    <strong>12. Future Perfect Continuous</strong><br>
                    Identity: Subject + will have been + V1-ing<br>
                    Example: I will have been playing cricket.

                </div>

            </div>
        `

    },


    passive: {

        title: "Passive Voice — All Tenses",
        icon: "P",

        content: `
            <div class="lesson-text">

                <p>
                    In Passive Voice, the focus is mainly on
                    the action or the object receiving the action.
                </p>


                <div class="rule-box">

                    <strong>1. Simple Present Passive</strong><br>
                    Identity:
                    Object + is/am/are + V3 + by + Subject

                    <br><br>

                    Active:
                    Ram writes a letter.

                    <br>

                    Passive:
                    A letter is written by Ram.

                </div>


                <div class="rule-box">

                    <strong>2. Present Continuous Passive</strong><br>
                    Identity:
                    Object + is/am/are + being + V3 + by + Subject

                    <br><br>

                    Active:
                    Ram is writing a letter.

                    <br>

                    Passive:
                    A letter is being written by Ram.

                </div>


                <div class="rule-box">

                    <strong>3. Present Perfect Passive</strong><br>
                    Identity:
                    Object + has/have + been + V3 + by + Subject

                    <br><br>

                    Active:
                    Ram has written a letter.

                    <br>

                    Passive:
                    A letter has been written by Ram.

                </div>


                <div class="rule-box">

                    <strong>4. Present Perfect Continuous</strong><br>

                    A standard passive form is generally
                    not used in normal English.

                    <br><br>

                    Focus on the active form instead.
                </div>


                <div class="rule-box">

                    <strong>5. Simple Past Passive</strong><br>
                    Identity:
                    Object + was/were + V3 + by + Subject

                    <br><br>

                    Active:
                    Ram wrote a letter.

                    <br>

                    Passive:
                    A letter was written by Ram.

                </div>


                <div class="rule-box">

                    <strong>6. Past Continuous Passive</strong><br>
                    Identity:
                    Object + was/were + being + V3 + by + Subject

                    <br><br>

                    Active:
                    Ram was writing a letter.

                    <br>

                    Passive:
                    A letter was being written by Ram.

                </div>


                <div class="rule-box">

                    <strong>7. Past Perfect Passive</strong><br>
                    Identity:
                    Object + had + been + V3 + by + Subject

                    <br><br>

                    Active:
                    Ram had written a letter.

                    <br>

                    Passive:
                    A letter had been written by Ram.

                </div>


                <div class="rule-box">

                    <strong>8. Past Perfect Continuous</strong><br>

                    A standard passive form is generally
                    not used in normal English.

                </div>


                <div class="rule-box">

                    <strong>9. Simple Future Passive</strong><br>
                    Identity:
                    Object + will be + V3 + by + Subject

                    <br><br>

                    Active:
                    Ram will write a letter.

                    <br>

                    Passive:
                    A letter will be written by Ram.

                </div>


                <div class="rule-box">

                    <strong>10. Future Continuous Passive</strong><br>

                    A standard passive form is generally
                    not used in normal English.

                </div>


                <div class="rule-box">

                    <strong>11. Future Perfect Passive</strong><br>
                    Identity:
                    Object + will have been + V3 + by + Subject

                    <br><br>

                    Active:
                    Ram will have written a letter.

                    <br>

                    Passive:
                    A letter will have been written by Ram.

                </div>


                <div class="rule-box">

                    <strong>12. Future Perfect Continuous</strong><br>

                    A standard passive form is generally
                    not used in normal English.

                </div>


                <div class="rule-box">

                    <strong>Quick Trick</strong><br><br>

                    Passive Voice commonly uses:
                    <br><br>

                    is/am/are + V3<br>
                    was/were + V3<br>
                    has/have been + V3<br>
                    had been + V3<br>
                    will be + V3<br>
                    will have been + V3

                </div>

            </div>
        `

    },


    noun: {

        title: "Noun",
        icon: "N",

        content: `
            <div class="lesson-text">

                <p>
                    A noun is the name of a person, place,
                    thing or idea.
                </p>

                <div class="example">
                    Person → Rahul<br>
                    Place → India<br>
                    Thing → Book<br>
                    Idea → Honesty
                </div>

            </div>
        `

    },


    pronoun: {

        title: "Pronoun",
        icon: "P",

        content: `
            <div class="lesson-text">

                <p>
                    A pronoun is used instead of a noun.
                </p>

                <div class="example">
                    Rahul is a student.<br>
                    He is a student.
                </div>

                <br>

                Common pronouns:
                <strong>he, she, it, they, we, you, I</strong>.

            </div>
        `

    },


    adjective: {

        title: "Adjective",
        icon: "A",

        content: `
            <div class="lesson-text">

                <p>
                    An adjective describes a noun or pronoun.
                </p>

                <div class="example">
                    A <strong>beautiful</strong> flower.<br>
                    A <strong>fast</strong> car.<br>
                    A <strong>smart</strong> student.
                </div>

            </div>
        `

    },


    conjunction: {

        title: "Conjunction",
        icon: "&",

        content: `
            <div class="lesson-text">

                <p>
                    A conjunction connects words,
                    phrases or sentences.
                </p>

                <div class="example">
                    I like tea <strong>and</strong> coffee.<br><br>
                    Hurry up <strong>or</strong> you will be late.<br><br>
                    I stayed home <strong>because</strong> it was raining.
                </div>

            </div>
        `

    },


    /* ================= CHESS ================= */

    italian: {

        title: "Italian Game",
        icon: "♟",

        content: `
            <div class="lesson-text">

                <p>
                    A classical chess opening focused on
                    rapid development and central control.
                </p>

                <div class="example">
                    1. e4 e5<br>
                    2. Nf3 Nc6<br>
                    3. Bc4
                </div>

            </div>
        `

    },


    sicilian: {

        title: "Sicilian Defense",
        icon: "♟",

        content: `
            <div class="lesson-text">

                <p>
                    One of the strongest and most popular
                    responses to 1.e4.
                </p>

                <div class="example">
                    1. e4 c5
                </div>

            </div>
        `

    },


    queensgambit: {

        title: "Queen's Gambit",
        icon: "♟",

        content: `
            <div class="lesson-text">

                <p>
                    White challenges Black's centre
                    with the c-pawn.
                </p>

                <div class="example">
                    1. d4 d5<br>
                    2. c4
                </div>

            </div>
        `

    },


    ruylopez: {

        title: "Ruy Lopez",
        icon: "♟",

        content: `
            <div class="lesson-text">

                <p>
                    A classical opening that puts pressure
                    on Black's knight and centre.
                </p>

                <div class="example">
                    1. e4 e5<br>
                    2. Nf3 Nc6<br>
                    3. Bb5
                </div>

            </div>
        `

    },


    /* ================= CODING ================= */

    html: {

        title: "Basic HTML",
        icon: "</>",

        content: `
            <div class="lesson-text">

                <p>
                    HTML is used to structure webpages.
                </p>

                <div class="example">
                    &lt;h1&gt;Hello World&lt;/h1&gt;<br><br>
                    &lt;p&gt;This is my website.&lt;/p&gt;
                </div>

            </div>
        `

    },


    css: {

        title: "Basic CSS",
        icon: "#",

        content: `
            <div class="lesson-text">

                <p>
                    CSS controls the appearance of webpages.
                </p>

                <div class="example">
                    body {<br>
                    &nbsp;&nbsp;background: white;<br>
                    &nbsp;&nbsp;color: black;<br>
                    }
                </div>

            </div>
        `

    },


    javascript: {

        title: "JavaScript",
        icon: "JS",

        content: `
            <div class="lesson-text">

                <p>
                    JavaScript adds interaction and logic.
                </p>

                <div class="example">
                    let name = "SkillUp";<br>
                    console.log(name);
                </div>

            </div>
        `

    },


    python: {

        title: "Python",
        icon: "Py",

        content: `
            <div class="lesson-text">

                <p>
                    Python is a beginner-friendly
                    programming language.
                </p>

                <div class="example">
                    name = "SkillUp"<br>
                    print(name)
                </div>

            </div>
        `

    }

};


/* =========================================================
   TABLE GENERATOR
========================================================= */

function generateTables() {

    let html = `
        <div class="lesson-text">

        <p>
            Practice multiplication tables from 2 to 20.
        </p>
    `;

    for (let table = 2; table <= 20; table++) {

        html += `
            <div class="rule-box">

                <strong>Table of ${table}</strong><br><br>
        `;

        for (let i = 1; i <= 10; i++) {

            html +=
                `${table} × ${i} = ${table * i}<br>`;

        }

        html += `
            </div>
        `;

    }

    html += `
        </div>
    `;

    return html;

}


/* =========================================================
   OPEN LESSON
========================================================= */

function openLesson(type) {

    const lesson = lessons[type];

    if (!lesson) {

        comingSoon();

        return;

    }

    modalTitle.textContent = lesson.title;

    modalIcon.textContent = lesson.icon;

    modalBody.innerHTML = lesson.content;

    lessonModal.classList.add("active");

}


/* =========================================================
   QUOTE OF THE DAY
========================================================= */

const quotes = [

    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },

    {
        text: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },

    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        text: "Knowledge is power.",
        author: "Francis Bacon"
    },

    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },

    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },

    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },

    {
        text: "Small steps every day.",
        author: "Unknown"
    },

    {
        text: "Stay curious. Keep learning.",
        author: "Unknown"
    },

    {
        text: "A little progress each day adds up to big results.",
        author: "Unknown"
    },

    {
        text: "Dream big. Start small. Act now.",
        author: "Robin Sharma"
    },

    {
        text: "Your only limit is your mind.",
        author: "Unknown"
    },

    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },

    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },

    {
        text: "Do something today that your future self will thank you for.",
        author: "Unknown"
    },

    {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },

    {
        text: "The beautiful thing about learning is that nobody can take it away from you.",
        author: "B.B. King"
    },

    {
        text: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },

    {
        text: "Discipline is choosing between what you want now and what you want most.",
        author: "Unknown"
    },

    {
        text: "Learning is not a race. Keep moving at your own pace.",
        author: "Unknown"
    },

    {
        text: "Don't be afraid to start over.",
        author: "Unknown"
    }

];


function getDailyQuote() {

    const today = new Date();

    const start =
        new Date(today.getFullYear(),0,0);

    const diff =
        today -
        start +
        (
            (start.getTimezoneOffset() -
            today.getTimezoneOffset()) *
            60000
        );

    const oneDay =
        1000 * 60 * 60 * 24;

    const dayOfYear =
        Math.floor(diff / oneDay);

    return quotes[
        dayOfYear % quotes.length
    ];

}


function showDailyQuote() {

    const quote = getDailyQuote();

    document.getElementById("dailyQuote")
        .textContent =
        `"${quote.text}"`;

    document.getElementById("quoteAuthor")
        .textContent =
        "— " + quote.author;

}

showDailyQuote();


/* =========================================================
   MATH QUIZ
========================================================= */

const quizQuestions = [

    {
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        answer: 2
    },

    {
        question: "What is the average of 10, 20 and 30?",
        options: ["15", "20", "25", "30"],
        answer: 1
    },

    {
        question: "If CP = ₹500 and SP = ₹600, what is the profit?",
        options: ["₹50", "₹75", "₹100", "₹150"],
        answer: 2
    },

    {
        question: "What is 15% of 300?",
        options: ["30", "35", "45", "60"],
        answer: 2
    },

    {
        question: "What is the average of 5, 10, 15 and 20?",
        options: ["10", "12.5", "15", "20"],
        answer: 1
    },

    {
        question: "If CP = ₹1000 and SP = ₹900, what is the loss?",
        options: ["₹50", "₹75", "₹100", "₹150"],
        answer: 2
    },

    {
        question: "What is 10% of ₹500?",
        options: ["₹25", "₹50", "₹75", "₹100"],
        answer: 1
    },

    {
        question: "What is 12 × 5?",
        options: ["50", "55", "60", "65"],
        answer: 2
    },

    {
        question: "What is the average of 20 and 40?",
        options: ["20", "25", "30", "35"],
        answer: 2
    },

    {
        question: "What is the simple interest on ₹1000 at 10% for 1 year?",
        options: ["₹10", "₹50", "₹100", "₹110"],
        answer: 2
    }

];


let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

const quizModal =
    document.getElementById("quizModal");

const quizQuestion =
    document.getElementById("quizQuestion");

const quizOptions =
    document.getElementById("quizOptions");

const quizCounter =
    document.getElementById("quizCounter");

const quizFeedback =
    document.getElementById("quizFeedback");

const nextQuestion =
    document.getElementById("nextQuestion");


function openQuiz() {

    quizIndex = 0;

    quizScore = 0;

    quizAnswered = false;

    quizModal.classList.add("active");

    showQuizQuestion();

}


function closeQuiz() {

    quizModal.classList.remove("active");

}


function showQuizQuestion() {

    const question =
        quizQuestions[quizIndex];

    quizAnswered = false;

    quizCounter.textContent =
        `${quizIndex + 1} / ${quizQuestions.length}`;

    quizQuestion.textContent =
        question.question;

    quizOptions.innerHTML = "";

    quizFeedback.textContent = "";

    nextQuestion.style.display = "none";


    question.options.forEach(function (option, index) {

        const button =
            document.createElement("button");

        button.className =
            "quiz-option";

        button.textContent =
            option;

        button.onclick = function () {

            answerQuiz(index, button);

        };

        quizOptions.appendChild(button);

    });

}


function answerQuiz(selected, selectedButton) {

    if (quizAnswered) {
        return;
    }

    quizAnswered = true;

    const question =
        quizQuestions[quizIndex];

    const buttons =
        document.querySelectorAll(".quiz-option");


    buttons.forEach(function (button) {

        button.classList.add("disabled");

    });


    if (selected === question.answer) {

        quizScore++;

        selectedButton.classList.add("correct");

        quizFeedback.textContent =
            "✓ Correct!";

    } else {

        selectedButton.classList.add("wrong");

        buttons[question.answer]
            .classList.add("correct");

        quizFeedback.textContent =
            "✗ Not quite. The correct answer is " +
            question.options[question.answer];

    }


    if (quizIndex === quizQuestions.length - 1) {

        nextQuestion.textContent =
            "Finish Quiz";

    } else {

        nextQuestion.textContent =
            "Next Question";

    }

    nextQuestion.style.display =
        "block";

}


function nextQuizQuestion() {

    if (!quizAnswered) {
        return;
    }


    if (quizIndex === quizQuestions.length - 1) {

        closeQuiz();

        if (quizScore === 10) {

            showCelebration();

        } else {

            alert(
                `Quiz complete! You scored ${quizScore}/10.`
            );

        }

        return;

    }


    quizIndex++;

    showQuizQuestion();

}


/* =========================================================
   PERFECT SCORE CELEBRATION
========================================================= */

function showCelebration() {

    const celebration =
        document.getElementById("celebration");

    celebration.classList.add("active");


    createSparkles();


    setTimeout(function () {

        celebration.classList.remove("active");

    }, 4000);

}


function createSparkles() {

    const container =
        document.querySelector(".sparkles");

    container.innerHTML = "";


    for (let i = 0; i < 45; i++) {

        const sparkle =
            document.createElement("span");

        sparkle.textContent =
            Math.random() > .5 ? "✦" : "✧";

        sparkle.style.position =
            "absolute";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.fontSize =
            (8 + Math.random() * 22) + "px";

        sparkle.style.animation =
            `sparkleIndividual ${1 + Math.random() * 2}s ease-out forwards`;

        sparkle.style.animationDelay =
            Math.random() * .5 + "s";

        container.appendChild(sparkle);

    }

}


/* =========================================================
   BUTTON CURSOR EFFECT
========================================================= */

const hoverButtons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .lesson-list button, .email-btn, .coming-box"
    );


hoverButtons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        trail.style.width = "22px";
        trail.style.height = "22px";

    });


    button.addEventListener("mouseleave", function () {

        trail.style.width = "12px";
        trail.style.height = "12px";

    });

});