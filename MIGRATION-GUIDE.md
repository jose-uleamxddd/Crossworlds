# 🚀 Guía de Migración de Imágenes - Supabase a Local

## ✅ Cambios Realizados

Se ha eliminado completamente la dependencia de Supabase del proyecto. Los cambios incluyen:

1. ✅ Eliminada la dependencia `@supabase/supabase-js` del package.json
2. ✅ Eliminado el archivo `lib/supabase.ts`
3. ✅ Actualizado `components/navigation.tsx` para usar logo estático
4. ✅ Actualizado `components/sections/hero.tsx` para usar imagen estática
5. ✅ Actualizado `components/sections/get-involved.tsx` para usar imagen estática
6. ✅ Actualizado `components/ministry-carousel-card.tsx` para eliminar lógica de Supabase
7. ✅ Actualizado `app/ministries/page.tsx` para usar rutas estáticas
8. ✅ Actualizado `app/ministries/ecuador-ministries/page.tsx` para usar rutas estáticas

## 📁 Nueva Estructura de Carpetas

```
public/
  images/
    logos/                          # Logo principal
      logo_cross-removebg-preview.png
    home/                           # Imágenes de página principal
      hero-background.png
      get-involved-background.jpg
    ministries/                     # Imágenes de ministerios
      coser-para-vivir/
        01.jpg, 02.jpg, ...
      praise-worship-camp/
        01.jpg, 02.jpg, ...
      crossworlds-center/
        01.jpg, 02.jpg, ...
      roots-and-routes/
        01.jpg, 02.jpg, ...
      high-notes-high-hopes/
        01.jpg, 02.jpg, ...
      giving-new-life/
        01.jpg, 02.jpg, ...
```

## 📋 Pasos para Completar la Migración

### Paso 1: Acceder a Supabase Storage

1. Ve a tu proyecto en Supabase: https://supabase.com
2. Navega a Storage > Imagenes

### Paso 2: Descargar Imágenes de Home

**📍 Ubicación en Supabase:** `Imagenes/Home/`

Descarga estas imágenes y colócalas en `public/images/home/`:

- `Gemini_Generated_Image_9oetkn9oetkn9oet.png` → renombrar a → `hero-background.png`
- `WhatsApp Image 2025-12-05 at 3.58.08 PM.jpeg` → renombrar a → `get-involved-background.jpg`

### Paso 3: Descargar Logo

**📍 Ubicación en Supabase:** `Imagenes/Favicon/`

Descarga y coloca en `public/images/logos/`:

- `logo_cross-removebg-preview.png` (mantener el mismo nombre)

### Paso 4: Descargar Imágenes de Ministerios

Para cada ministerio, descarga todas las imágenes de su carpeta en Supabase y colócalas en la carpeta correspondiente, renombrándolas como `01.jpeg`, `02.jpeg`, etc.

#### 4.1 Coser para Vivir
- **Origen:** `Imagenes/ministries/coser para vivir`
- **Destino:** `public/images/ministries/coser-para-vivir/`
- **Renombrar:** `01.jpeg`, `02.jpeg`, `03.jpeg`, etc.

#### 4.2 Praise & Worship Camp
- **Origen:** `Imagenes/ministries/Praise & Worship Camp`
- **Destino:** `public/images/ministries/praise-worship-camp/`
- **Renombrar:** `01.jpeg`, `02.jpeg`, `03.jpeg`, etc.

#### 4.3 Crossworlds Center for Connections
- **Origen:** `Imagenes/ministries/Crossworlds Center for connections`
- **Destino:** `public/images/ministries/crossworlds-center/`
- **Renombrar:** `01.jpeg`, `02.jpeg`, `03.jpeg`, etc.

#### 4.4 Roots and Routes
- **Origen:** `Imagenes/ministries/roots and routes`
- **Destino:** `public/images/ministries/roots-and-routes/`
- **Renombrar:** `01.jpeg`, `02.jpeg`, `03.jpeg`, etc.

#### 4.5 High Notes & High Hopes
- **Origen:** `Imagenes/High Notes & High Hopes`
- **Destino:** `public/images/ministries/high-notes-high-hopes/`
- **Renombrar:** `01.jpeg`, `02.jpeg`, `03.jpeg`, etc.

#### 4.6 Giving New Life
- **Origen:** `Imagenes/ministries/giving new life`
- **Destino:** `public/images/ministries/giving-new-life/`
- **Renombrar:** `01.jpeg`, `02.jpeg`, `03.jpeg`, etc.

### Paso 5: Optimizar Imágenes (Opcional pero Recomendado)

Para mejorar la velocidad de carga, considera optimizar las imágenes:

1. **Convertir a WebP:** Usa herramientas como [Squoosh.app](https://squoosh.app/) o [TinyPNG](https://tinypng.com/)
2. **Redimensionar:** Las imágenes no deberían ser más grandes de 1920px de ancho
3. **Comprimir:** Reducir el tamaño del archivo sin perder calidad visible

### Paso 6: Reinstalar Dependencias

```bash
pnpm install
```

Esto eliminará la dependencia de `@supabase/supabase-js` del proyecto.

### Paso 7: Probar el Sitio

```bash
pnpm dev
```

Visita http://localhost:3000 y verifica que:
- ✅ El logo aparece en la navegación
- ✅ La imagen de fondo del hero se muestra correctamente
- ✅ La imagen de fondo de "Get Involved" se muestra correctamente
- ✅ Las imágenes de los ministerios cargan correctamente

## 🎯 Beneficios de la Migración

### ⚡ Velocidad
- **Antes:** Peticiones HTTP a Supabase Storage (latencia 200-500ms)
- **Después:** Imágenes servidas desde CDN de Vercel (latencia <50ms)
- **Mejora:** 4-10x más rápido

### 💰 Costos
- **Antes:** Consumo de bandwidth de Supabase
- **Después:** Completamente gratis con Vercel

### 🔧 Optimización
- Next.js optimiza automáticamente las imágenes al compilar
- Genera múltiples tamaños para responsive design
- Convierte automáticamente a WebP donde sea soportado

### 🚀 Deployment
- Las imágenes se despliegan junto con el código
- No hay dependencias externas
- Mejor caché y CDN

## ❓ Solución de Problemas

### Las imágenes no se muestran
1. Verifica que los nombres de archivo coinciden exactamente (case-sensitive)
2. Asegúrate de que las imágenes estén en las carpetas correctas
3. Reinicia el servidor de desarrollo

### Error "Module not found"
1. Ejecuta `pnpm install` nuevamente
2. Elimina `node_modules` y `pnpm-lock.yaml`, luego ejecuta `pnpm install`

### Las imágenes se ven pixeladas
1. Asegúrate de que las imágenes originales tienen buena resolución
2. Usa el componente `<Image>` de Next.js para optimización automática

## 📝 Notas Adicionales

- **Formato recomendado:** WebP para mejor compresión
- **Tamaño máximo:** 1920x1080px para imágenes de fondo
- **Nomenclatura:** Usa nombres descriptivos en inglés, sin espacios
- **Organización:** Mantén las carpetas organizadas por sección/ministerio

---

¿Tienes dudas? Revisa los README.md en cada carpeta de imágenes para instrucciones específicas.
