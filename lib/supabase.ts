import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hldpvkbebodmtiajldjg.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseAnonKey) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY. Please add it to your .env.local file');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Get the public URL for an image from Supabase storage
 * @param bucket - The bucket name (e.g., 'Imagenes')
 * @param folder - The folder name (e.g., 'Home', 'ministries', 'Favicon')
 * @param fileName - The file name
 * @returns The public URL of the image
 */
export function getImageUrl(bucket: string, folder: string, fileName: string): string {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(`${folder}/${fileName}`);
  
  return data.publicUrl;
}

/**
 * List all files in a specific folder
 * @param bucket - The bucket name
 * @param folder - The folder name
 * @returns Array of file objects
 */
export async function listImages(bucket: string, folder: string) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(folder);
  
  if (error) {
    console.error('Error listing images:', error);
    return [];
  }
  
  return data;
}

/**
 * Get all images from a folder with their public URLs
 * @param bucket - The bucket name
 * @param folder - The folder name
 * @returns Array of image objects with URLs
 */
export async function getImagesFromFolder(bucket: string, folder: string) {
  const files = await listImages(bucket, folder);
  
  return files.map(file => ({
    name: file.name,
    url: getImageUrl(bucket, folder, file.name),
    metadata: file.metadata
  }));
}
