
document.addEventListener("DOMContentLoaded", () => {


    const featuredImage = document.querySelector('figure img');
    const figcaption = document.querySelector('figcaption');

    const thumbnails = document.querySelectorAll('#thumbnailList img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            
            const fullSrc = this.getAttribute('data-full');
            const altText = this.alt;
            featuredImage.src = fullSrc;
            featuredImage.alt = altText;
            figcaption.textContent = altText;

            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            this.classList.add('active');
        });
    });


    if (thumbnails.length > 0) {
        thumbnails[0].click();
    }
});
