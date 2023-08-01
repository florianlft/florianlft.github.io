const items = document.querySelectorAll('.item');
const cursorImage = document.querySelector('.cursorImage img');

items.forEach(item => {
  const imageSrc = item.getAttribute('data-img');

  item.addEventListener('mouseover', () => {
    cursorImage.src = imageSrc; // Modifiez seulement la source de l'image
    cursorImage.style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    cursorImage.style.display = 'none';
  });

  item.addEventListener('mousemove', (event) => {
    const offsetX = -20; // Valeur négative pour déplacer l'image à gauche
    const offsetY = -20; // Valeur négative pour déplacer l'image vers le haut
    cursorImage.style.left = (event.pageX + offsetX) + 'px';
    cursorImage.style.top = (event.pageY + offsetY) + 'px';
  });
});