let timeLeft = 60;
let timer;
let currentQuestion = 1;
let answered = false;
let score = 0;

function startTimer() {
    timer = setInterval(() => {
        document.getElementById("time").textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("result").textContent = "Hết thời gian!";
            disableOptions();
            showCorrectAnswers();
            answered = true;
        }
    }, 1000);
}

startTimer();

function nextQuestion() {
    // Ẩn câu hỏi hiện tại
    document.getElementById("question" + currentQuestion).style.display = "none";
    currentQuestion++;

    // Hiển thị câu hỏi tiếp theo
    if (currentQuestion <= 10) {
        document.getElementById("question" + currentQuestion).style.display = "block";
    } else {
        // Nếu đã đến câu hỏi cuối cùng, ẩn nút "Câu tiếp theo" và hiển thị nút "Trả lời"
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "block";
    }
}

function submitAnswer() {
    if (answered) return; // Prevent multiple submissions
    clearInterval(timer);
    const correctAnswers = ["30/4", "Lý Thường Kiệt", "1950", "2/9/1945", "Đỗ Mười", "Điện Biên", "Coup Liên hiệp quân sự", "30/4/1975", "Chùa Một Cột", "Nguyễn Phú Trọng"];

    const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
    selectedOptions.forEach(selectedOption => {
        const questionIndex = parseInt(selectedOption.name.replace("option", "")) - 1;
        const correctAnswer = correctAnswers[questionIndex];
        const userAnswer = selectedOption.value;
        if (userAnswer === correctAnswer) {
            score++;
        }
    });

    document.getElementById("result").textContent = "Điểm của bạn: " + score + "/10";
    disableOptions();
    showCorrectAnswers();
    answered = true;
}

function disableOptions() {
    const options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = true;
    });
}

function showCorrectAnswers() {
    const correctAnswers = ["30/4", "Lý Thường Kiệt", "1950", "2/9/1945", "Đỗ Mười", "Điện Biên", "Coup Liên hiệp quân sự", "30/4/1975", "Chùa Một Cột", "Nguyễn Phú Trọng"];
    correctAnswers.forEach((correctAnswer, index) => {
        const optionId = "option" + String.fromCharCode(65 + index);
        const label = document.querySelector(`label[for="${optionId}"]`);
        label.innerHTML += correctAnswer === document.getElementById(optionId).value ? " - Đúng" : " - Sai";
    });
}
