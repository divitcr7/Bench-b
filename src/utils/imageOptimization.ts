/**
 * Preload images for better user experience
 * @param imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  const promises = imageUrls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });
  });

  return Promise.allSettled(promises).then(() => []);
};

/**
 * Critical images that should be preloaded immediately
 */
export const CRITICAL_IMAGES = [
  "/assets/icons/trusted.png",
  "/assets/images/partners/Group 22.png",
  "/assets/images/partners/image 1.png",
  "/assets/images/partners/NAIOP LOGO 2.png",
  "/assets/images/partners/Northmarq Capital 1.png",
  "/assets/images/partners/unnamed 1.png",
];

/**
 * Create WebP version fallback checker
 * @param imageUrl - Original image URL
 * @returns WebP URL if supported, original otherwise
 */
export const getOptimizedImageUrl = (imageUrl: string): string => {
  // Simple WebP support check
  const supportsWebP = (() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  })();

  if (supportsWebP && imageUrl.match(/\.(jpg|jpeg|png)$/i)) {
    // For future WebP optimization - replace extension
    return imageUrl.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  }

  return imageUrl;
};

/**
 * Lazy load images when they enter viewport
 * @param target - Element to observe
 * @param callback - Function to call when element enters viewport
 * @param rootMargin - Margin around root
 */
export const createImageObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  rootMargin = "50px"
): IntersectionObserver => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin,
      threshold: 0.1,
    }
  );
};

/**
 * Get image dimensions without loading the full image
 * @param url - Image URL
 * @returns Promise with width and height
 */
export const getImageDimensions = (
  url: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = url;
  });
};
