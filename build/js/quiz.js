let button_next = document.getElementsByClassName('button_next')[0];
let button_prev = document.getElementsByClassName('button_prev')[0];
let quiz__section1 = document.getElementsByClassName('quiz__section1')[0];
let quiz__section2 = document.getElementsByClassName('quiz__section2')[0];
let quiz__section3 = document.getElementsByClassName('quiz__section3')[0];
let quiz__question1 = document.getElementsByClassName('quiz__question1')[0];
let quiz__question2 = document.getElementsByClassName('quiz__question2')[0];
let quiz__question3 = document.getElementsByClassName('quiz__question3')[0];
let checkboxes = document.getElementsByClassName('quiz_form__input-checkbox');
let quiz__answer1 = document.getElementsByClassName('quiz__answer1')[0];
let quiz__answer2 = document.getElementsByClassName('quiz__answer2')[0];
let quiz_radio_buttons = document.getElementsByClassName("quiz_form__input-radio");
let quiz_checkbox_buttons = document.getElementsByClassName("quiz_form__input-checkbox");
quiz__question1.onclick = function (event) {
  event.preventDefault();
  quiz__section1.style.display = 'block';
  quiz__section3.style.display = 'none';
  quiz__section2.style.display = 'none';
}
quiz__question2.onclick = function (event) {
  event.preventDefault();
  quiz__section1.style.display = 'none';
  quiz__section3.style.display = 'none';
  quiz__section2.style.display = 'block';
}
quiz__question3.onclick = function (event) {
  event.preventDefault();
  quiz__section1.style.display = 'none';
  quiz__section3.style.display = 'block';
  quiz__section2.style.display = 'none';
}
button_prev.onclick = function (event) {
  event.preventDefault();
  if (window.getComputedStyle(quiz__section2).display == "block") {
    button_prev.style.display = 'none';
    quiz__section1.style.display = 'block';
    quiz__section3.style.display = 'none';
    quiz__section2.style.display = 'none';
    quiz__question2.style.display = 'none';
    quiz__question1.classList.add('current');

  } else if (window.getComputedStyle(quiz__section3).display == "block") {
    button_prev.style.display = 'inline-block';
    quiz__section3.style.display = 'none';
    quiz__section1.style.display = 'none';
    quiz__section2.style.display = 'block';
    quiz__question3.style.display = 'none';
    quiz__question2.classList.add('current');
  }
}
button_next.onclick = function (event) {
  event.preventDefault();
  if (window.getComputedStyle(quiz__section1).display == "block") {
    button_prev.style.display = 'inline-block';
    quiz__section1.style.display = 'none';
    quiz__section3.style.display = 'none';
    quiz__section2.style.display = 'block';
    quiz__question2.style.display = 'flex';
    quiz__question2.classList.add('current');
    quiz__question1.classList.remove('current');
  } else if (window.getComputedStyle(quiz__section2).display == "block") {
    quiz__section1.style.display = 'none';
    quiz__section3.style.display = 'block';
    quiz__section2.style.display = 'none';
    quiz__question3.style.display = 'flex';
    quiz__question3.classList.add('current');
    quiz__question2.classList.remove('current');
  } else if (window.getComputedStyle(quiz__section3).display == "block") {
    button_prev.style.display = 'none';
    quiz__section3.style.display = 'none';
    quiz__section1.style.display = 'block';
    quiz__section2.style.display = 'none';
    quiz__question3.style.display = 'none';
    quiz__question2.style.display = 'none';
    quiz__question1.classList.add('current');
    quiz__question3.classList.remove('current');
    quiz__answer1.textContent = '';
    for (button of quiz_radio_buttons) {
      button.classList.remove('highlighted');
    }
    for (checkbox_button of quiz_checkbox_buttons) {
      checkbox_button.classList.remove('highlighted');
    }
    quiz__answer2.textContent = '';
  }
}

for (let radio_button of quiz_radio_buttons) {
  if (radio_button) {
    radio_button.onclick = function () {
      for (button of quiz_radio_buttons) {
        button.classList.remove('highlighted');
        quiz__answer2.textContent = '';
      }
      radio_button.classList.add('highlighted');
      quiz__answer2.textContent = radio_button.innerText;

    }
  }
};

let quiz__checkbox_answers = [];

for (let checkbox_button of quiz_checkbox_buttons) {
  if (checkbox_button) {
    checkbox_button.onclick = function (event) {
      event.preventDefault();
      let checkbox_value = checkbox_button.querySelector('input').value;
      if (checkbox_button.classList.contains('highlighted')) {
        checkbox_button.classList.remove('highlighted');
        quiz__checkbox_answers = quiz__checkbox_answers.filter(x => x.id != checkbox_value);
      } else {
        checkbox_button.classList.add('highlighted');
        quiz__checkbox_answers = [...quiz__checkbox_answers, {
          id: checkbox_value,
          answer: checkbox_button.innerText
        }]

      }

      quiz__answer1.textContent = quiz__checkbox_answers.map(x => x.answer).join(". ");
    }
  }
};

const customSelect = document.querySelector(".quiz__select");
const selectBtn = document.querySelector(".select-button");

const selectedValue = document.querySelector(".selected-value");
const optionsList = document.querySelectorAll(".select-dropdown li");

selectBtn.addEventListener("click", () => {
  customSelect.classList.toggle("active");
});

optionsList.forEach((option) => {
  function handler(e) {
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      customSelect.classList.remove("active");
    }
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelect.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

