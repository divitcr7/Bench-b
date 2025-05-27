import { useEffect, useState } from 'react';

interface PreloadImagesProps {
  images: string[];
  children: React.ReactNode;
}

export default function PreloadImages({ images, children }: PreloadImagesProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Handle errors as well
    });
  }, [images]);

  if (!imagesLoaded) {
    return null; // or a loading placeholder
  }

  return <>{children}</>;
} 