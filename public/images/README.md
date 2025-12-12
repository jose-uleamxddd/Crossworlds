# Estructura de Imágenes

## 📋 Guía de migración desde Supabase

### 1. Logos (`/images/logos/`)
Descarga y coloca aquí:
- `logo_cross-removebg-preview.png` - Logo principal de Crossworlds

### 2. Home (`/images/home/`)
Descarga y coloca aquí:
- `hero-background.png` (antes: Gemini_Generated_Image_9oetkn9oetkn9oet.png)
- `get-involved-background.jpg` (antes: WhatsApp Image 2025-12-05 at 3.58.08 PM.jpeg)

### 3. Ministries (`/images/ministries/`)

#### Coser para Vivir (`/ministries/coser-para-vivir/`)
Descarga todas las imágenes de la carpeta `ministries/coser para vivir` en Supabase

#### Praise & Worship Camp (`/ministries/praise-worship-camp/`)
Descarga todas las imágenes de la carpeta `ministries/Praise & Worship Camp` en Supabase

#### Crossworlds Center for Connections (`/ministries/crossworlds-center/`)
Descarga todas las imágenes de la carpeta `ministries/Crossworlds Center for connections` en Supabase

#### Roots and Routes (`/ministries/roots-and-routes/`)
Descarga todas las imágenes de la carpeta `ministries/roots and routes` en Supabase

#### High Notes & High Hopes (`/ministries/high-notes-high-hopes/`)
Descarga todas las imágenes de la carpeta `High Notes & High Hopes` en Supabase

#### Giving New Life (`/ministries/giving-new-life/`)
Descarga todas las imágenes de la carpeta `ministries/giving new life` en Supabase

---

## 🎯 Acceso en el código

Las imágenes se acceden usando:
```tsx
<img src="/images/home/hero-background.png" alt="..." />
```

O con Next.js Image:
```tsx
<Image src="/images/home/hero-background.png" alt="..." fill />
```

## 📝 Notas

- Todas las imágenes deben estar en formato web-optimizado (WebP preferido)
- Usa nombres descriptivos en inglés, sin espacios (usa guiones)
- Next.js optimizará automáticamente las imágenes al usar el componente `<Image>`
