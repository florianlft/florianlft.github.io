const cursorImage = document.querySelector('.cursorImage');

document.addEventListener('mousemove', (event) => {
  const imageSrc = event.target.getAttribute('data-img');
  if (imageSrc) {
    cursorImage.innerHTML = `<img src="${imageSrc}" alt="Image">`;
    cursorImage.style.display = 'block';
    cursorImage.style.left = (event.pageX - cursorImage.offsetWidth / 2) + 'px';
    cursorImage.style.top = (event.pageY - cursorImage.offsetHeight / 2) + 'px';
  } else {
    cursorImage.innerHTML = '';
    cursorImage.style.display = 'none';
  }
});
