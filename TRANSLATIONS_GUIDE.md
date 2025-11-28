# 🌐 Sistema de Traducciones - Crossworlds Connection

## ✅ ¿Qué se ha implementado?

### Idiomas Soportados:
- **Inglés** (EN)
- **Español** (ES)

### Componentes Traducidos:
1. ✅ **Navigation** - Menú de navegación
2. ✅ **Hero Section** - Sección principal del home
3. ✅ **Call to Action (CTA)** - Botones de acción
4. ✅ **Donation Section** - Sección de donaciones
5. ✅ **Contact Page** - Página de contacto completa
6. ✅ **Ministries Page** - Página de ministerios completa
7. ✅ **Language Toggle** - Botón para cambiar idioma

## 🎯 Cómo Funciona

### 1. Cambiar Idioma
El usuario puede cambiar el idioma haciendo clic en el botón **EN/ES** en el navbar.

### 2. Traducciones Automáticas
Todas las páginas y componentes traducidos cambiarán automáticamente de idioma.

## 🛠️ Cómo Agregar Nuevas Traducciones

### Paso 1: Agregar textos al archivo de traducciones
Edita: `lib/i18n.ts`

```typescript
export const translations = {
  en: {
    // ... traducciones existentes
    tuSeccion: {
      titulo: 'Your Title',
      descripcion: 'Your description',
    },
  },
  es: {
    // ... traducciones existentes
    tuSeccion: {
      titulo: 'Tu Título',
      descripcion: 'Tu descripción',
    },
  },
};
```

### Paso 2: Usar las traducciones en un componente

#### Para componentes client-side ('use client'):
```tsx
'use client';

import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function TuComponente() {
  const { language } = useLanguage();
  
  return (
    <div>
      <h1>{getTranslation(language, 'tuSeccion.titulo')}</h1>
      <p>{getTranslation(language, 'tuSeccion.descripcion')}</p>
    </div>
  );
}
```

#### Para páginas:
Todas las páginas deben ser client-side para usar traducciones:

```tsx
'use client';

import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function TuPagina() {
  const { language } = useLanguage();
  
  return (
    <main>
      <h1>{getTranslation(language, 'tuSeccion.titulo')}</h1>
    </main>
  );
}
```

## 📚 Estructura de Traducciones

```typescript
translations = {
  nav: {...},           // Navegación
  home: {...},          // Página principal
  about: {...},         // Página sobre nosotros
  ministries: {         // Página de ministerios
    title: '...',
    subtitle: '...',
    list: {             // Lista de ministerios
      sewing: {...},
      music: {...},
      // etc.
    }
  },
  contact: {...},       // Página de contacto
  donation: {...},      // Sección de donaciones
  cta: {...},          // Call to action
  footer: {...},       // Footer
  getInvolved: {...},  // Página de participación
}
```

## 🎨 Ejemplos de Uso

### Ejemplo 1: Texto Simple
```tsx
const { language } = useLanguage();
<h1>{getTranslation(language, 'contact.title')}</h1>
// EN: "Contact Us"
// ES: "Contáctanos"
```

### Ejemplo 2: Texto Anidado
```tsx
<p>{getTranslation(language, 'home.stats.students')}</p>
// EN: "Students"
// ES: "Estudiantes"
```

### Ejemplo 3: En Atributos
```tsx
<input 
  placeholder={getTranslation(language, 'donation.emailPlaceholder')}
/>
// EN: "your@email.com"
// ES: "tu@correo.com"
```

## 🔧 Páginas Pendientes de Traducir

Si necesitas traducir más páginas:

1. **About Page** (`app/about/page.tsx`)
2. **Get Involved Page** (`app/get-involved/page.tsx`)
3. **Ministry Detail Pages** (`app/ministries/[slug]/page.tsx`)
4. **Footer Component** (`components/footer.tsx`)

### Plantilla para nuevas páginas:

```tsx
'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/get-translation';

export default function TuPagina() {
  const { language } = useLanguage();
  
  return (
    <main>
      <Navigation />
      
      <section>
        <h1>{getTranslation(language, 'tuSeccion.title')}</h1>
        <p>{getTranslation(language, 'tuSeccion.subtitle')}</p>
      </section>
      
      <Footer />
    </main>
  );
}
```

## 🌍 Agregar un Nuevo Idioma

Para agregar un tercer idioma (ej: Francés):

### 1. Actualizar tipos en `lib/i18n.ts`:
```typescript
export type Language = 'en' | 'es' | 'fr';
```

### 2. Agregar traducciones:
```typescript
export const translations = {
  en: {...},
  es: {...},
  fr: {
    nav: {
      home: 'Accueil',
      // ... etc
    },
    // ... todas las traducciones
  },
};
```

### 3. Actualizar el Language Toggle:
Edita `components/language-toggle.tsx` para incluir el nuevo idioma.

## 📝 Notas Importantes

1. **Siempre usa 'use client'** en componentes que usen traducciones
2. **No olvides importar** `useLanguage` y `getTranslation`
3. **Usa keys descriptivas** en el archivo de traducciones
4. **Mantén consistencia** entre EN y ES (misma estructura)
5. **El contexto se mantiene** entre navegaciones (no se pierde el idioma seleccionado)

## 🎉 Resultado

- ✅ Cambio de idioma instantáneo
- ✅ Traducciones en todas las páginas principales
- ✅ Botón EN/ES siempre visible en el navbar
- ✅ Sistema escalable para agregar más textos o idiomas
