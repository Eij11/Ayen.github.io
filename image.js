const containers = document.querySelectorAll(".image-container");
const delayBetweenImages = 500;

function getRandomIndex(images) {
    return Math.floor(Math.random() * images.length);
}

function showRandomImages(container) {
    const images = container.querySelectorAll("img");

    // Show all images in the container initially
    images.forEach((img) => {
        img.style.display = "block";
    });

    setInterval(() => {
        // Hide all images in the container
        images.forEach((img) => {
            img.style.display = "none";
        });

        // Show a random image in the container
        const randomIndex = getRandomIndex(images);
        images[randomIndex].style.display = "block";
    }, delayBetweenImages);
}

containers.forEach((container) => {
    showRandomImages(container);
});
