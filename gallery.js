export function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous images
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        gallery.appendChild(img);
    });
}
