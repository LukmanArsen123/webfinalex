document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-lang-en]');
    const quizOptions = document.querySelectorAll('.quiz-option');
    const submitQuizButton = document.getElementById('submit-quiz');
    const quizResult = document.getElementById('quiz-result');
    const quizScore = document.getElementById('quiz-score');
    const quizMessage = document.getElementById('quiz-message');
   });
quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const question = this.closest('.quiz-question');
            question.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    submitQuizButton.addEventListener('click', function() {
        let correctAnswers = 0;
        quizOptions.forEach(option => {
            if (option.classList.contains('selected') && option.getAttribute('data-answer') === 'correct') {
                correctAnswers++;
            }
        });

        const totalQuestions = document.querySelectorAll('.quiz-question').length;
        quizScore.textContent = ${correctAnswers} / ${totalQuestions};
        quizMessage.textContent = correctAnswers === totalQuestions ? 'Congratulations! You won!' : 'Try again to get all answers correct.';
        quizResult.style.display = 'block';
    });
});



quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const question = this.closest('.quiz-question');
            question.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    submitQuizButton.addEventListener('click', function() {
        let correctAnswers = 0;
        quizOptions.forEach(option => {
            if (option.classList.contains('selected') && option.getAttribute('data-answer') === 'correct') {
                correctAnswers++;
            }
        });

        const totalQuestions = document.querySelectorAll('.quiz-question').length;
        quizScore.textContent = ${correctAnswers} / ${totalQuestions};
        quizMessage.textContent = correctAnswers === totalQuestions ? 'Congratulations! You won!' : 'Try again to get all answers correct.';
        quizResult.style.display = 'block';
    });
});
