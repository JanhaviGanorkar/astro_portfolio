type AnimationConfig = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export const initInViewAnimation = (
  elements: NodeListOf<Element> | Element[],
  config: AnimationConfig = {}
) => {
  const { threshold = 0.1, rootMargin = "0px", once = true } = config;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold, rootMargin }
  );

  elements.forEach((el) => observer.observe(el));
  return observer;
};

export const initSkeletonLoading = (elements: NodeListOf<Element> | Element[]) => {
  elements.forEach((skeleton) => {
    const images = skeleton.getElementsByTagName("img");
    let loadedImages = 0;
    
    if (images.length === 0) {
      skeleton.classList.add("loaded");
      return;
    }

    Array.from(images).forEach((img) => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener("load", () => {
          loadedImages++;
          if (loadedImages === images.length) {
            skeleton.classList.add("loaded");
          }
        });
      }
    });

    if (loadedImages === images.length) {
      skeleton.classList.add("loaded");
    }
  });
};