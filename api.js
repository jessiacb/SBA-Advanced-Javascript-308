export async function getDogImages(breed) {
    const url = breed ? `https://dog.ceo/api/breed/${breed}/images` : 'https://dog.ceo/api/breeds/image/random/10';
    const response = await fetch(url);
    const data = await response.json();
    return data.message;
}
