import { getDogImages } from './api.js';
import { displayImages } from './gallery.js';

document.getElementById('search-btn').addEventListener('click', async () => {
    const breed = document.getElementById('breed-input').value;
    try {
        const images = await getDogImages(breed);
        displayImages(images);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
});

// Display random dog images on page load
window.onload = async () => {
    const images = await getDogImages();
    displayImages(images);
};
