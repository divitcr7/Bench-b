import React, { useState, useRef, useEffect } from "react";
import "./OptimizedImage.scss";
import { imageMonitor } from "../../../utils/performanceMonitoring";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  aspectRatio?: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  priority = false,
  placeholder,
  onLoad,
  onError,
  aspectRatio,
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackLoad = useRef(imageMonitor.trackImageLoad(src));

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === "eager") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px", // Start loading 50px before image comes into view
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    trackLoad.current(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    trackLoad.current(false);
    onError?.();
  };

  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio,
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
  };

  return (
    <div
      ref={containerRef}
      className={`optimized-image-container ${className}`}
      style={containerStyle}
    >
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="image-skeleton">
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              className="placeholder-image"
              aria-hidden="true"
            />
          ) : (
            <div className="skeleton-loader" />
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="image-error">
          <div className="error-icon">📷</div>
          <span>Failed to load image</span>
        </div>
      )}

      {/* Main image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`main-image ${isLoaded ? "loaded" : "loading"}`}
          decoding="async"
          style={{
            width: width ? `${width}px` : undefined,
            height: height ? `${height}px` : undefined,
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
