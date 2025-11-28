# Configuración de Supabase Storage

## Paso 1: Configurar variables de entorno

1. Ve a tu proyecto en Supabase: https://app.supabase.com/project/hldpvkbebodmtiajldjg
2. Ve a Settings > API
3. Copia el `anon/public` key
4. Actualiza el archivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://hldpvkbebodmtiajldjg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

## Paso 2: Configurar el Storage Bucket

1. Ve a Storage en tu dashboard de Supabase
2. Asegúrate de que el bucket "Imagenes" sea público
3. Estructura de carpetas:
   - `Imagenes/Home/` - Imágenes para la página principal
   - `Imagenes/ministries/` - Imágenes para ministerios
   - `Imagenes/Favicon/` - Favicon e iconos

## Paso 3: Subir imágenes

Sube tus imágenes a las carpetas correspondientes en Supabase Storage.

## Ejemplos de Uso

### 1. Usar una imagen específica

```tsx
import SupabaseImage from '@/components/supabase-image';

<SupabaseImage
  bucket="Imagenes"
  folder="Home"
  fileName="hero-image.jpg"
  alt="Hero Image"
  width={1200}
  height={600}
  className="rounded-lg"
/>
```

### 2. Mostrar una galería completa

```tsx
import SupabaseGallery from '@/components/supabase-gallery';

<SupabaseGallery
  bucket="Imagenes"
  folder="ministries"
  columns={3}
  className="my-8"
/>
```

### 3. Usar el hook personalizado

```tsx
'use client';

import { useSupabaseImages } from '@/hooks/use-supabase-images';

export default function MyComponent() {
  const { images, loading, error } = useSupabaseImages('Imagenes', 'Home');

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {images.map((img) => (
        <img key={img.name} src={img.url} alt={img.name} />
      ))}
    </div>
  );
}
```

### 4. Obtener URL de imagen manualmente

```tsx
import { getImageUrl } from '@/lib/supabase';

const imageUrl = getImageUrl('Imagenes', 'Home', 'logo.png');
```

## Mapeo de Carpetas

- **Home** → Página principal (`app/page.tsx`)
- **ministries** → Página de ministerios (`app/ministries/page.tsx`)
- **Favicon** → Favicon y logos (`app/layout.tsx`, `components/navigation.tsx`)

## Notas Importantes

1. Asegúrate de que el bucket "Imagenes" tenga permisos públicos
2. Las imágenes se cargan de forma lazy por defecto
3. Next.js optimiza automáticamente las imágenes
4. El hook `useSupabaseImages` maneja errores y estado de carga automáticamente

## Solución de Problemas

### Las imágenes no cargan
- Verifica que el bucket sea público
- Verifica que las variables de entorno estén configuradas
- Verifica que los nombres de archivos y carpetas sean correctos

### Error de CORS
- Asegúrate de que tu dominio esté en la lista blanca en Supabase
- En desarrollo, localhost debería funcionar automáticamente
