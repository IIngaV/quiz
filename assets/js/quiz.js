let button_next = document.getElementsByClassName('button_next')[0];
let button_prev = document.getElementsByClassName('button_prev')[0];
let quiz__section1 = document.getElementsByClassName('quiz__section1')[0];
let quiz__section2 = document.getElementsByClassName('quiz__section2')[0];
let quiz__section3 = document.getElementsByClassName('quiz__section3')[0];
button_prev.onclick = function (event) {
    event.preventDefault();
     if(window.getComputedStyle(quiz__section2).display == "block"){
        button_prev.style.display = 'none';
        quiz__section1.style.display = 'block';
        quiz__section3.style.display = 'none';
        quiz__section2.style.display = 'none';
      }else if(window.getComputedStyle(quiz__section3).display == "block"){
        button_prev.style.display = 'inline-block';
        quiz__section3.style.display = 'none';
        quiz__section1.style.display = 'none';
        quiz__section2.style.display = 'block';
      }    
}
button_next.onclick = function (event) {
    event.preventDefault();
    if(window.getComputedStyle(quiz__section1).display == "block"){
        button_prev.style.display = 'inline-block';
        quiz__section1.style.display = 'none';
        quiz__section3.style.display = 'none';
        quiz__section2.style.display = 'block';
      }else if(window.getComputedStyle(quiz__section2).display == "block"){
        
        quiz__section1.style.display = 'none';
        quiz__section3.style.display = 'block';
        quiz__section2.style.display = 'none';
      }else if(window.getComputedStyle(quiz__section3).display == "block"){
        button_prev.style.display = 'none';
        quiz__section3.style.display = 'none';
        quiz__section1.style.display = 'block';
        quiz__section2.style.display = 'none';
      }    
}
let quiz_radio_buttons = document.getElementsByClassName("quiz_form__input-radio");
for (let radio_button of quiz_radio_buttons) {
    if (radio_button) {
        radio_button.onclick = function () {
            for (button of quiz_radio_buttons) {
                button.classList.remove('highlighted');
            }
            radio_button.classList.add('highlighted');
        }
    }
};

let quiz_checkbox_buttons = document.getElementsByClassName("quiz_form__input-checkbox");
for (let checkbox_button of quiz_checkbox_buttons) {
    if (checkbox_button) {
        checkbox_button.onclick = function (event) {
            event.preventDefault();
            console.log(checkbox_button.classList);
            if ( checkbox_button.classList.contains('highlighted')){
                checkbox_button.classList.remove('highlighted');
            }else{
                checkbox_button.classList.add('highlighted');
            }
            
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
