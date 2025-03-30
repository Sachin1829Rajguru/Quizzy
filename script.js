const arraydata = [
    {
        question: "HTML stands for what ?",
        options: ["Hyper Text Markup Language",
            "Hyperlinks & Text Markup Language",
            "High Text Machine Language",
            "Hyper Tag Marking Language"],
        correct: 0
    },
    {
        question: "What does CSS stand for ?",
        options: [
            "Creative Style System",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Scripts"],
        correct: 2
    },
    {
        question: "What is the correct file extension for a stylesheet ?",
        options: [
            ".html",
            ".css",
            ".js",
            ".png"],
        correct: 1
    },
    {
        question: "Which tag is used to specify meta descriptions ?",
        options: [
            "head",
            "title",
            "meta",
            "description"],
        correct: 2
    },
    {
        question: "Which tag is used to create a hyperlink ?",
        options: [
            "link",
            "a",
            "href",
            "url"],
        correct: 1
    }
]
let quiz = document.querySelector(".quiz");
let answerelm = document.querySelectorAll(".answer");
let questionelm = document.getElementById("question");
let option_1 = document.getElementById("option_1");
let option_2 = document.getElementById("option_2");
let option_3 = document.getElementById("option_3");
let option_4 = document.getElementById("option_4");
let subbtn = document.getElementById("submit");
let currquiz = 0;
let score = 0;
let loadquiz = () => {
    questionelm.innerText = arraydata[currquiz].question;
    option_1.innerHTML = arraydata[currquiz].options[0];
    option_2.innerHTML = arraydata[currquiz].options[1];
    option_3.innerHTML = arraydata[currquiz].options[2];
    option_4.innerHTML = arraydata[currquiz].options[3];
}
const deselectans = () => {
    answerelm.forEach((curelm) => curelm.checked = false);
}
const datafetch = () => {
    let ans_index;
    answerelm.forEach((curelm, index) => {
        if (curelm.checked)
            ans_index = index;
    });
    if (ans_index === arraydata[currquiz].correct)
        score++;
}
loadquiz();
subbtn.addEventListener("click", () => {
    datafetch();
    currquiz++;
    if (currquiz < arraydata.length) {
        deselectans();
        loadquiz();
    }
    else {
        quiz.innerHTML = `
        <div class="result">
       <div class="inner">
       <div class="one">Your Score : ${score}/${arraydata.length}</div>
       <div class="two">Congrulations on completing the quiz! </div>
        <button class="reload" onclick="location.reload()">Play Again</button>
       </div>
        </div>
        `;
    }
});