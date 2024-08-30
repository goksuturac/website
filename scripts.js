document.addEventListener('DOMContentLoaded', function() {
  const downloadButton = document.getElementById('download-button');
  const heroImage = document.querySelector('.hero-left img');
  let firstClick = true;

  downloadButton.addEventListener('click', function(event) {
      if (firstClick) {
          // İlk tıklamada indir ve kutlama animasyonunu başlat
          firstClick = false;

          // Confetti animasyonu başlat
          confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
          });

          // Fotoğrafın dönmesini başlat
          heroImage.classList.add('rotate');

          // Fotoğrafın dönüşünü animasyon bitiminde kaldır
          setTimeout(() => {
              heroImage.classList.remove('rotate');
          }, 1000); // 1000 ms, CSS'deki transition süresiyle aynı olmalı
      } else {
          // Sonraki tıklamalarda indirmenin gerçekleşmesini engelle
          event.preventDefault();
      }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

 
function toggleMobileMenu() {
    var menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
}
