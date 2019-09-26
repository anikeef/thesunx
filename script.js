const button = document.querySelector('button');
const progress = document.querySelector('.progress');

let percent = 0;

button.addEventListener('click', function(e) {
  percent += 1;
  if (percent === 90) {
    button.classList.add('run');
  }
  progress.textContent = percent + '%';
})

const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', function() {
  const header = document.querySelector('header');
  header.style.position = 'relative';
})