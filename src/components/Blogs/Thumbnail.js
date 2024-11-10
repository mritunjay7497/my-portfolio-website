// Utility function to extract the src value of the first <img> tag
function extractFirstImageSrc(description) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    const img = doc.querySelector('img');

    return img ? img.getAttribute('src') : null;
}

export default extractFirstImageSrc;