'use client';

import { useState, useEffect } from 'react';
import { getImagesFromFolder } from '@/lib/supabase';

interface ImageData {
  name: string;
  url: string;
  metadata: any;
}

export function useSupabaseImages(bucket: string, folder: string) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);
        setError(null);
        const imageData = await getImagesFromFolder(bucket, folder);
        setImages(imageData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load images');
        console.error('Error loading images:', err);
      } finally {
        setLoading(false);
      }
    }

    if (bucket && folder) {
      loadImages();
    }
  }, [bucket, folder]);

  return { images, loading, error };
}
