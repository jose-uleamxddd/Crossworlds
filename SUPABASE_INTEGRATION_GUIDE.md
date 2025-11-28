# Guía de Integración de Supabase por Vista

## 📋 Resumen de Configuración

### Estructura de Carpetas en Supabase Storage
```
Imagenes/
├── Home/          → Imágenes para la página principal
├── ministries/    → Imágenes para cada ministerio (7 imágenes)
└── Favicon/       → Logo y favicon
```

## 🏠 Página Principal (`app/page.tsx`)

### Opción 1: Hero con imagen de fondo
```tsx
import SupabaseImage from '@/components/supabase-image';

<div className="relative">
  <SupabaseImage
    bucket="Imagenes"
    folder="Home"
    fileName="hero-background.jpg"
    alt="Hero Background"
    fill
    priority
    className="object-cover opacity-20"
  />
  {/* Contenido del hero */}
</div>
```

### Opción 2: Galería de imágenes
```tsx
import SupabaseGallery from '@/components/supabase-gallery';

<SupabaseGallery
  bucket="Imagenes"
  folder="Home"
  columns={3}
  className="my-12"
/>
```

## 🎵 Página de Ministerios (`app/ministries/page.tsx`)

### Usar componente con imágenes de Supabase
```tsx
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

### O actualizar MinistryCard individualmente
```tsx
import SupabaseImage from '@/components/supabase-image';

<SupabaseImage
  bucket="Imagenes"
  folder="ministries"
  fileName={`ministry-${index + 1}.jpg`}
  alt={ministry.title}
  width={400}
  height={300}
  className="rounded-t-lg"
/>
```

## 🎨 Logo y Favicon

### Ya está configurado en:
1. **Navigation** (`components/navigation.tsx`) - ✅ Implementado
2. **Layout** (`app/layout.tsx`) - ✅ Implementado

El logo se carga desde: `Imagenes/Favicon/crossworlds-logo.png`

## 📝 Página de Contacto (`app/contact/page.tsx`)

### Agregar imagen de contacto
```tsx
import SupabaseImage from '@/components/supabase-image';

<div className="relative h-64 mb-8">
  <SupabaseImage
    bucket="Imagenes"
    folder="Home"
    fileName="contact-banner.jpg"
    alt="Contact Us"
    fill
    className="object-cover rounded-lg"
  />
</div>
```

## 🙏 Página About (`app/about/page.tsx`)

### Galería del equipo o instalaciones
```tsx
import SupabaseGallery from '@/components/supabase-gallery';

<section>
  <h2>Nuestras Instalaciones</h2>
  <SupabaseGallery
    bucket="Imagenes"
    folder="Home"
    columns={4}
  />
</section>
```

## 🎯 Página Get Involved (`app/get-involved/page.tsx`)

### Imagen motivacional
```tsx
import SupabaseImage from '@/components/supabase-image';

<SupabaseImage
  bucket="Imagenes"
  folder="Home"
  fileName="volunteer.jpg"
  alt="Get Involved"
  width={800}
  height={400}
/>
```

## 🔧 Checklist de Implementación

### Paso 1: Configuración Inicial
- [ ] Instalar dependencias: `pnpm add @supabase/supabase-js`
- [ ] Obtener ANON_KEY de Supabase
- [ ] Actualizar `.env.local` con las credenciales
- [ ] Reiniciar servidor de desarrollo

### Paso 2: Subir Imágenes a Supabase
- [ ] Crear bucket "Imagenes" (público)
- [ ] Crear carpeta "Home"
- [ ] Crear carpeta "ministries"
- [ ] Crear carpeta "Favicon"
- [ ] Subir el logo a "Favicon/crossworlds-logo.png"
- [ ] Subir 7 imágenes a "ministries/" (una por ministerio)
- [ ] Subir imágenes generales a "Home/"

### Paso 3: Hacer el Bucket Público
1. Ve a Storage en Supabase
2. Selecciona el bucket "Imagenes"
3. Click en "Settings"
4. Habilita "Public bucket"

### Paso 4: Verificar Permisos (Policies)
```sql
-- Permitir lectura pública
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'Imagenes' );
```

### Paso 5: Actualizar Componentes
- [ ] Navigation (logo) - ✅ Ya implementado
- [ ] Layout (favicon) - ✅ Ya implementado
- [ ] Hero section
- [ ] Ministries page
- [ ] Contact page (opcional)
- [ ] About page (opcional)

## 🚀 Comandos Útiles

```bash
# Reiniciar servidor después de cambiar .env.local
npm run dev

# Build para producción
npm run build

# Ejecutar en producción
npm start
```

## ⚠️ Problemas Comunes

### Las imágenes no cargan
1. Verifica que el bucket sea público
2. Verifica NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local
3. Reinicia el servidor después de cambiar .env.local
4. Verifica los nombres de archivos (case-sensitive)

### Error 404 en imágenes
- Los nombres de carpetas y archivos deben coincidir exactamente
- Usa el explorador de Supabase para verificar las rutas

### Imágenes muy lentas
- Considera usar tamaños optimizados
- Supabase Storage usa CDN automáticamente
- Next.js optimiza las imágenes automáticamente

## 📞 Soporte

Si necesitas ayuda:
1. Revisa SUPABASE_SETUP.md
2. Verifica la consola del navegador
3. Revisa los logs del servidor
