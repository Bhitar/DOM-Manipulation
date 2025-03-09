const images = [
  './images/image1.jpg',
  './images/image2.jpg',
  ];


let currentImageIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
  sliderImage.src = images[currentImageIndex];
}

updateImage();

nextBtn.addEventListener('click', function() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateImage();
});

prevBtn.addEventListener('click', function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateImage();
});