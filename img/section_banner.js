let banner_button = document.getElementsByClassName('banner_button')[0];

banner_button.onclick = (event) => {
  event.preventDefault();
  let quiz_block = document.getElementsByClassName('quiz')[0];
  quiz_block.scrollIntoView({ behavior: "smooth" });
}