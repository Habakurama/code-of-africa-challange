document.addEventListener('DOMContentLoaded', () => {
  // Add click event listeners to all images in the first gallery
  const images = document.querySelectorAll('.images_container .imageinfo');
  images.forEach(image => {
    image.addEventListener('click', () => {
      alert(`You clicked on: ${image.alt}`);
    });
  });

  // Add click event listeners to all images in the third gallery
  const images03 = document.querySelectorAll('.images_container03 .imageinfo03');
  images03.forEach(image => {
    image.addEventListener('click', () => {
      alert(`You clicked on: ${image.alt}`);
    });
  });

  //  dynamically changing text content
  const introParagraph = document.querySelector('.intro .palagraph');
  introParagraph.addEventListener('mouseover', () => {
    introParagraph.textContent = 'Welcome to the Interactive Gallery!';
  });

  introParagraph.addEventListener('mouseout', () => {
    introParagraph.textContent = 'Intro';
  });

 
});
