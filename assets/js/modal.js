let open_modal = document.querySelectorAll('.open_modal');
let input_file = document.getElementsByClassName('input-file')[0];
let text_input_file = document.getElementsByClassName('modal-form__text-input-file')[0];
let modal_form_warning = document.getElementsByClassName('modal-form__warning')[0];
let close_modal = document.getElementsByClassName('close')[0];
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
let modal_contact = document.getElementsByClassName('modal__contact-form')[0];
let modal_success = document.getElementsByClassName('modal__contact-success')[0];
let back_to_site = document.getElementsByClassName('back-to-site')[0];
open_modal[0].onclick = function () {
    modal.classList.add('modal_visible');
    body.classList.add('body_block');
    let button_modal = document.getElementsByClassName('button-modal')[0];
    let modal_radio_buttons = document.getElementsByClassName("modal_form__input-radio");
    for (let radio_button of modal_radio_buttons) {
        if (radio_button) {
            radio_button.onclick = function () {
                for (button of modal_radio_buttons) {
                    button.classList.remove('highlighted');
                }
                radio_button.classList.add('highlighted');
            }
        }
    };
    let modal_file_button = document.getElementsByClassName('modal-file-button')[0];
    const modal_file_button_content = modal_file_button.innerHTML;
    let button_file = document.getElementById("button_file");
    modal_file_button.addEventListener("click", (event) => {
        button_file.click();
        event.preventDefault();
    });
    button_file.addEventListener("change", () => {
        if (button_file.value) {

            const acceptedImageTypes = ['image/jpg', 'image/png'];
            const file = button_file.files[0];
            if (acceptedImageTypes.includes(file['type'])) {

                modal_file_button.textContent = file['name'];
            } else {
                modal_file_button.innerHTML = modal_file_button_content;
            }

        } else {
            modal_file_button.innerHTML = modal_file_button_content;
        }

    });
    button_modal.onclick = function (event) {
        event.preventDefault();
        if (text_input_file.value) {
            modal_success.style.display='block';
            modal_contact.style.display='none';          

        } else {
            modal_form_warning.style.display = 'block';
            input_file.classList.add('error');
            text_input_file.classList.add('error');
           
        }
    }
    text_input_file.onclick = function () {
        input_file.classList.remove('error');
        text_input_file.classList.remove('error');
        modal_form_warning.style.display = 'none'; 
    }
    back_to_site.onclick = function(){
        window.setTimeout(function () {
            modal.classList.remove('modal_visible');
            body.classList.remove('body_block');
        }, 500)
    }
};
close_modal.onclick = function () {
    window.setTimeout(function () {
        modal.classList.remove('modal_visible');
        body.classList.remove('body_block');
    }, 500);
};


