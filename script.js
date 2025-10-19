//your code here
let container = document.querySelector('#container');
let message = document.querySelector('#message')
let verify = document.querySelector('#verify')
let reset = document.querySelector('#reset');
let isClick = false;
let verifyValue = 0;
let verifyImage = [];


function suffleImage() {
  for (let i = 1; i <= 5; i++) {
    let j = Math.floor(Math.random() * 2);
    let img = document.createElement('img');
    img.setAttribute('class', `img${i}`);
    if (j)
      container.appendChild(img);
    else
      container.prepend(img);
  }
  let lastImage = document.createElement('img');
  let imageNumber = Math.floor(Math.random() * (5) + 1);
  lastImage.setAttribute('class', `img${imageNumber}`);
  container.appendChild(lastImage);

  let images = document.querySelectorAll('img');

  images.forEach(image => {
    image.addEventListener('click', (e) => {
      isClick = true;
      if (isClick) reset.style.display = "inline";
      verifyValue++;
      let num = e.target.getAttribute('class').slice(-1);
      verifyImage.push(num)
      if (verifyValue == 2)
        verify.style.display = "inline";
      else verify.style.display = "none";
    })
  });
}
suffleImage();

verify.addEventListener('click', (e) => {
  message.style.display="block";
  if (verifyImage[0] == verifyImage[1])
    message.textContent = "You are a human. Congratulations!";
  else message.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
})

reset.addEventListener('click', (e) => {
  container.innerHTML = "";
  suffleImage();
  isClick = false;
  verifyValue = 0;
  verifyImage = [];
  reset.style.display = 'none';
  verify.style.display = 'none';
  message.style.display='none';

});