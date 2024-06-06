document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const fullImage = document.getElementById('full-image');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const fullSrc = thumbnail.getAttribute('data-full');
      const altText = thumbnail.querySelector('img').alt;
      fullImage.src = fullSrc;
      captionText.innerHTML = altText;
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
