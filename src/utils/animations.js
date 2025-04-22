export function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

export function initSkeletonLoading() {
  const skeletons = document.querySelectorAll('.skeleton');
  
  skeletons.forEach(skeleton => {
    const images = skeleton.querySelectorAll('img');
    let loadedImages = 0;
    
    if (images.length === 0) {
      skeleton.classList.add('loaded');
      return;
    }

    images.forEach(img => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === images.length) {
            skeleton.classList.add('loaded');
          }
        });
      }
    });

    if (loadedImages === images.length) {
      skeleton.classList.add('loaded');
    }
  });
}