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
