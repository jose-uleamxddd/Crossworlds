'use client';

import { useEffect } from 'react';

export default function PreloadImages() {
  useEffect(() => {
    // Precargar imágenes críticas
    const criticalImages = [
      '/images/home/hero-background.png',
      '/images/logos/logo_cross-removebg-preview.png',
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
