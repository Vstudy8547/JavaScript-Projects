const modal = document.getElementById("myLightbox");
const modalImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("lightbox-caption");
const closeBtn = document.getElementsByClassName("lightbox-close")[0];


const images = document.querySelectorAll(".image");

// Loop through each image and add a click event
images.forEach((img) => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src; // Sets the modal image source to the clicked image source
        captionText.innerHTML = this.alt; // Sets the caption text to the alt text
    });
});

// When the user clicks on the close button (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal image, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}