/**
 * Simple performance monitoring utilities for image loading
 */

interface ImageLoadMetrics {
  url: string;
  loadTime: number;
  size?: number;
  status: "success" | "error";
  timestamp: number;
}

class ImagePerformanceMonitor {
  private metrics: ImageLoadMetrics[] = [];
  private enabled = process.env.NODE_ENV === "development";

  /**
   * Track image loading performance
   * @param url - Image URL being loaded
   * @returns Function to call when load completes
   */
  trackImageLoad(url: string) {
    if (!this.enabled) return () => {};

    const startTime = performance.now();

    return (success: boolean = true) => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;

      const metric: ImageLoadMetrics = {
        url,
        loadTime,
        status: success ? "success" : "error",
        timestamp: Date.now(),
      };

      this.metrics.push(metric);

      // Log slow loading images
      if (loadTime > 1000) {
        console.warn(
          `Slow image load detected: ${url} took ${loadTime.toFixed(2)}ms`
        );
      }

      // Keep only last 100 metrics
      if (this.metrics.length > 100) {
        this.metrics = this.metrics.slice(-100);
      }
    };
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary() {
    if (!this.enabled || this.metrics.length === 0) return null;

    const successful = this.metrics.filter((m) => m.status === "success");
    const totalLoadTime = successful.reduce((sum, m) => sum + m.loadTime, 0);
    const averageLoadTime = totalLoadTime / successful.length;
    const slowestImage = successful.reduce((slowest, current) =>
      current.loadTime > slowest.loadTime ? current : slowest
    );

    return {
      totalImagesLoaded: successful.length,
      averageLoadTime: averageLoadTime.toFixed(2) + "ms",
      slowestImage: {
        url: slowestImage.url,
        loadTime: slowestImage.loadTime.toFixed(2) + "ms",
      },
      errorCount: this.metrics.filter((m) => m.status === "error").length,
    };
  }

  /**
   * Reset metrics
   */
  reset() {
    this.metrics = [];
  }

  /**
   * Log performance summary to console
   */
  logSummary() {
    if (!this.enabled) return;

    const summary = this.getPerformanceSummary();
    if (summary) {
      console.group("📊 Image Loading Performance");
      console.log("Total images loaded:", summary.totalImagesLoaded);
      console.log("Average load time:", summary.averageLoadTime);
      console.log(
        "Slowest image:",
        summary.slowestImage.url,
        summary.slowestImage.loadTime
      );
      console.log("Failed loads:", summary.errorCount);
      console.groupEnd();
    }
  }
}

// Global instance
export const imageMonitor = new ImagePerformanceMonitor();

// Auto-log summary after 30 seconds in development
if (process.env.NODE_ENV === "development") {
  setTimeout(() => {
    imageMonitor.logSummary();
  }, 30000);
}
