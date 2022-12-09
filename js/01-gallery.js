import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, {
    preview,
    original,
    description
}) => acc + `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`, '');

gallery.insertAdjacentHTML('beforeend', markup);
// console.log(markup);

gallery.addEventListener('click', selectImage);

function selectImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    console.log(event.target.dataset.source);

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)

    instance.show()


    gallery.addEventListener('keydown', onEscKeyPress);

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';

    if (event.code === ESC_KEY_CODE) {
        instance.close();
    }
}
}

