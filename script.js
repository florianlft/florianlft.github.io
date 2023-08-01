const items = document.querySelectorAll('.item');
const cursorImage = document.querySelector('.cursorImage');

items.forEach(item => {
  const imageSrc = item.getAttribute('data-img'); // Remplacez data-img-src par data-img

  item.addEventListener('mouseover', () => {
    cursorImage.innerHTML = `<img src="${imageSrc}" alt="Image">`;
    cursorImage.style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    cursorImage.innerHTML = '';
    cursorImage.style.display = 'none';
  });

  item.addEventListener('mousemove', (event) => {
    const offsetX = 20;
    const offsetY = 20;
    cursorImage.style.left = (event.pageX + offsetX) + 'px';
    cursorImage.style.top = (event.pageY + offsetY) + 'px';
  });
});