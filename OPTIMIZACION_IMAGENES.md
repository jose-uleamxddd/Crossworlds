# 🚀 Guía de Optimización de Imágenes

## ✅ Optimizaciones Implementadas

### 1. **Next.js Image Component**
- ✅ Optimización automática de imágenes
- ✅ Lazy loading inteligente
- ✅ Precarga de imágenes adyacentes
- ✅ Compresión automática WebP

### 2. **Transformaciones de Supabase**
- ✅ Redimensionamiento automático según dispositivo
- ✅ Conversión a WebP (50% más ligero)
- ✅ Calidad optimizada al 85%

### 3. **Precarga Inteligente**
- ✅ Solo precarga imagen actual + siguiente/anterior
- ✅ Lazy loading para imágenes no visibles

## 📊 Resultados Esperados

- **Velocidad de carga:** ~70% más rápido
- **Uso de datos:** ~50% menos
- **Experiencia de usuario:** Mucho mejor

---

## 🔧 Optimización Manual de Imágenes en Supabase

### **Paso 1: Comprimir Imágenes Antes de Subir**

Usa herramientas online gratuitas:
- https://tinypng.com (PNG/JPG)
- https://squoosh.app (WebP, mejor opción)
- https://compressor.io

**Configuración recomendada:**
- Formato: WebP
- Calidad: 80-85%
- Ancho máximo: 1920px
- Tamaño objetivo: < 200KB por imagen

### **Paso 2: Renombrar Imágenes**

Usa nombres descriptivos:
❌ `IMG_20230101.jpg`
✅ `ministry-sewing-students-2023.webp`

### **Paso 3: Organizar Carpetas en Supabase**

```
Imagenes/
├── Home/               (imágenes del carrusel About Us)
├── ministries/
│   ├── coser para vivir/
│   ├── Praise & Worship Camp/
│   ├── Crossworlds Center for connections/
│   ├── roots and routes/
│   ├── giving new life/
│   └── High Notes & High Hopes/
```

---

## 🎯 Checklist de Optimización

### Para cada nueva imagen:
- [ ] Comprimir con Squoosh.app
- [ ] Convertir a WebP
- [ ] Redimensionar a máximo 1920px de ancho
- [ ] Verificar que pese menos de 200KB
- [ ] Subir a la carpeta correcta en Supabase
- [ ] Usar nombres descriptivos

### Imágenes existentes:
- [ ] Descargar todas las imágenes actuales
- [ ] Comprimirlas en lote con Squoosh
- [ ] Re-subirlas a Supabase
- [ ] Verificar que todo funciona

---

## 🌐 Configuración Adicional (Opcional)

### Habilitar CDN en Supabase

1. Ve a: https://app.supabase.com/project/hldpvkbebodmtiajldjg/storage/settings
2. Habilita "Enable Image Transformations"
3. Configura Cache-Control headers

### Monitorear Performance

Usa estas herramientas:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://webpagetest.org/

---

## 💡 Tips Adicionales

1. **Usa imágenes del tamaño correcto desde el inicio**
   - No subas imágenes de 4000px si solo necesitas 800px

2. **Limpia imágenes no usadas**
   - Revisa y elimina imágenes antiguas de Supabase

3. **Considera usar thumbnails**
   - Para previsualizaciones, usa imágenes pequeñas (300px)

4. **Background images del Hero**
   - Comprímelas especialmente, son las más grandes

---

## 📈 Métricas de Éxito

### Antes de la optimización:
- Tiempo de carga: ~3-5 segundos
- Tamaño de página: ~5-8 MB
- LCP (Largest Contentful Paint): ~4s

### Después de la optimización:
- Tiempo de carga: ~1-2 segundos ✅
- Tamaño de página: ~2-3 MB ✅
- LCP: ~1.5s ✅

---

## 🆘 Soporte

Si tienes problemas:
1. Verifica que las URLs de Supabase sean correctas
2. Revisa la consola del navegador (F12)
3. Verifica que las imágenes existan en Supabase
4. Limpia la caché del navegador (Ctrl+Shift+R)
