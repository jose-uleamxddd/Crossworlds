# ✅ Configuración Completa de Supabase Storage

## 🎉 ¿Qué se ha configurado?

### Archivos Creados:
1. ✅ `lib/supabase.ts` - Cliente y funciones de Supabase
2. ✅ `components/supabase-image.tsx` - Componente para imágenes individuales
3. ✅ `components/supabase-gallery.tsx` - Componente para galerías
4. ✅ `components/ministries-with-supabase.tsx` - Ministerios con imágenes
5. ✅ `hooks/use-supabase-images.ts` - Hook personalizado
6. ✅ `.env.local` - Variables de entorno
7. ✅ `scripts/verify-supabase.js` - Script de verificación

### Archivos Actualizados:
1. ✅ `components/navigation.tsx` - Logo desde Supabase
2. ✅ `app/layout.tsx` - Favicon desde Supabase
3. ✅ `package.json` - Dependencia @supabase/supabase-js agregada

## 📋 PRÓXIMOS PASOS (En orden)

### Paso 1: Obtener tu ANON_KEY ⚡ URGENTE
```
1. Ve a: https://app.supabase.com/project/hldpvkbebodmtiajldjg/settings/api
2. Copia el "anon public" key
3. Abre: .env.local
4. Reemplaza YOUR_ANON_KEY_HERE con tu key
5. Guarda el archivo
```

### Paso 2: Configurar el Bucket en Supabase
```
1. Ve a: https://app.supabase.com/project/hldpvkbebodmtiajldjg/storage/buckets
2. Crea un bucket llamado "Imagenes" (si no existe)
3. Haz clic en el bucket > Settings
4. Marca como "Public bucket" ✅
5. Guarda cambios
```

### Paso 3: Crear la estructura de carpetas
```
En el bucket "Imagenes", crea estas carpetas:
- Home/
- ministries/
- Favicon/
```

### Paso 4: Subir las imágenes
```
📁 Favicon/
   └── crossworlds-logo.png (tu logo actual)

📁 ministries/
   ├── ministry-1.jpg (Coser para Vivir)
   ├── ministry-2.jpg (High Notes & High Hopes)
   ├── ministry-3.jpg (Tesoros del Rey)
   ├── ministry-4.jpg (English Ministry)
   ├── ministry-5.jpg (Giving Ministry)
   ├── ministry-6.jpg (New Life Ministry)
   └── ministry-7.jpg (Roots & Routes)

📁 Home/
   ├── hero-background.jpg (opcional)
   ├── gallery-1.jpg
   ├── gallery-2.jpg
   └── ... (cualquier imagen para la página principal)
```

### Paso 5: Configurar permisos (Políticas)
```
En Supabase, ve a Storage > Policies
Asegúrate de tener una política que permita lectura pública:

Nombre: "Public Access"
Tipo: SELECT
Tabla: objects
Condición: bucket_id = 'Imagenes'
```

### Paso 6: Reiniciar el servidor
```bash
# Detén el servidor actual (Ctrl+C)
npm run dev
```

### Paso 7: Verificar configuración
```bash
node scripts/verify-supabase.js
```

## 🔥 Uso Rápido

### 1. Imagen individual
```tsx
import SupabaseImage from '@/components/supabase-image';

<SupabaseImage
  bucket="Imagenes"
  folder="Home"
  fileName="hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
/>
```

### 2. Galería completa
```tsx
import SupabaseGallery from '@/components/supabase-gallery';

<SupabaseGallery
  bucket="Imagenes"
  folder="ministries"
  columns={3}
/>
```

### 3. Hook personalizado
```tsx
import { useSupabaseImages } from '@/hooks/use-supabase-images';

const { images, loading } = useSupabaseImages('Imagenes', 'Home');
```

## 📚 Documentación Completa

- `SUPABASE_SETUP.md` - Configuración detallada
- `SUPABASE_INTEGRATION_GUIDE.md` - Guía por vista

## ⚡ Ejemplos ya implementados

1. **Logo en Navigation** ✅
   - Archivo: `components/navigation.tsx`
   - Carpeta: `Imagenes/Favicon/crossworlds-logo.png`

2. **Favicon** ✅
   - Archivo: `app/layout.tsx`
   - Carpeta: `Imagenes/Favicon/crossworlds-logo.png`

## 🎯 Para implementar en las vistas:

### Home (`app/page.tsx`)
```tsx
// Opción 1: Reemplazar hero actual
import HeroWithBackground from '@/components/sections/hero-with-supabase';

// Opción 2: Agregar galería
import SupabaseGallery from '@/components/supabase-gallery';
<SupabaseGallery bucket="Imagenes" folder="Home" columns={3} />
```

### Ministries (`app/ministries/page.tsx`)
```tsx
// Reemplazar el componente actual
import MinistriesWithSupabase from '@/components/ministries-with-supabase';

export default function Ministries() {
  return (
    <main>
      <Navigation />
      <MinistriesWithSupabase />
      <Footer />
    </main>
  );
}
```

## 🚨 Checklist Final

- [ ] Obtener ANON_KEY de Supabase
- [ ] Actualizar .env.local
- [ ] Crear bucket "Imagenes" (público)
- [ ] Crear carpetas: Home, ministries, Favicon
- [ ] Subir logo a Favicon/
- [ ] Subir 7 imágenes a ministries/
- [ ] Configurar política de acceso público
- [ ] Reiniciar servidor
- [ ] Ejecutar script de verificación
- [ ] Verificar que el logo aparece en la navegación
- [ ] Actualizar componentes según necesites

## 💡 Tips

1. Los nombres de archivos son **case-sensitive**
2. Usa formatos optimizados: JPG para fotos, PNG para logos
3. Tamaños recomendados:
   - Logo: 200x200px (PNG transparente)
   - Ministerios: 800x600px
   - Hero: 1920x1080px
4. Supabase Storage usa CDN automáticamente
5. Next.js optimiza las imágenes automáticamente

## ❓ ¿Necesitas ayuda?

Si algo no funciona:
1. Verifica la consola del navegador (F12)
2. Ejecuta `node scripts/verify-supabase.js`
3. Revisa que el bucket sea público
4. Verifica que reiniciaste el servidor después de cambiar .env.local
