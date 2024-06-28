const items = document.querySelectorAll('.item');
const cursorImage = document.querySelector('.cursorImage');

items.forEach(item => {
    const imageSrc = item.getAttribute('data-img');

    item.addEventListener('mouseover', () => {
        cursorImage.innerHTML = `<img src="${imageSrc}" alt="Image">`;
        cursorImage.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        cursorImage.innerHTML = '';
        cursorImage.style.display = 'none';
    });

    item.addEventListener('mousemove', (event) => {
        const offsetX = 400;
        const offsetY = 0;
        const cursorWidth = cursorImage.offsetWidth;
        const cursorHeight = cursorImage.offsetHeight;
        let posX = event.pageX + offsetX;
        let posY = event.pageY + offsetY;

        // Ensure the image stays within the viewport
        if (posX + cursorWidth > window.innerWidth) {
            posX = window.innerWidth - cursorWidth;
        }
        if (posY + cursorHeight > window.innerHeight + window.scrollY) {
            posY = window.innerHeight + window.scrollY - cursorHeight;
        }

        cursorImage.style.left = posX + 'px';
        cursorImage.style.top = posY + 'px';
    });
});
