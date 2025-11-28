'use client';

import { useState, useEffect } from 'react';
import { getImagesFromFolder } from '@/lib/supabase';
import Image from 'next/image';

interface SupabaseGalleryProps {
  bucket: string;
  folder: string;
  className?: string;
  imageClassName?: string;
  columns?: number;
}

interface ImageData {
  name: string;
  url: string;
  metadata: any;
}

export default function SupabaseGallery({
  bucket,
  folder,
  className = '',
  imageClassName = '',
  columns = 3,
}: SupabaseGalleryProps) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      const imageData = await getImagesFromFolder(bucket, folder);
      setImages(imageData);
      setLoading(false);
    }

    loadImages();
  }, [bucket, folder]);

  if (loading) {
    return (
      <div className={`grid gap-4 ${className}`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No images found in this folder.
      </div>
    );
  }

  return (
    <div className={`grid gap-4 ${className}`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={image.url}
            alt={image.name}
            fill
            className={`object-cover ${imageClassName}`}
            sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${100 / columns}vw`}
          />
        </div>
      ))}
    </div>
  );
}
