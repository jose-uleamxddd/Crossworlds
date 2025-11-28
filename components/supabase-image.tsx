'use client';

import { useState, useEffect } from 'react';
import { getImageUrl } from '@/lib/supabase';
import Image from 'next/image';

interface SupabaseImageProps {
  bucket: string;
  folder: string;
  fileName: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export default function SupabaseImage({
  bucket,
  folder,
  fileName,
  alt,
  className = '',
  width,
  height,
  fill = false,
  priority = false,
}: SupabaseImageProps) {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const url = getImageUrl(bucket, folder, fileName);
    setImageUrl(url);
  }, [bucket, folder, fileName]);

  if (!imageUrl) {
    return (
      <div className={`bg-muted animate-pulse ${className}`} style={{ width, height }} />
    );
  }

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
    />
  );
}
