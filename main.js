const submit_btn = document.querySelector('.submit-btn');
const rating_container = document.querySelector('.rating-container');
const submitted_container = document.querySelector('.submitted-container');
const rating_btns = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let rating_score = 0;

submit_btn.addEventListener('click', () => {
    score.textContent = rating_score;
    rating_container.classList.add('hide');
    submitted_container.classList.remove('hide');
});

rating_btns.forEach(btn => {
    btn.addEventListener('click', handleRatingClick);
});

function handleRatingClick(event){
    rating_btns.forEach(btn => {
        btn.classList.remove('active');
    });

    if (event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }

    rating_score = event.target.textContent;
}