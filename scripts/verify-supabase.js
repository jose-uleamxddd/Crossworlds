/**
 * Script para verificar la configuración de Supabase
 * Ejecutar con: node scripts/verify-supabase.js
 */

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hldpvkbebodmtiajldjg.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

async function verifySupabaseSetup() {
  console.log('🔍 Verificando configuración de Supabase...\n');

  // Check environment variables
  console.log('1️⃣ Verificando variables de entorno:');
  console.log(`   URL: ${supabaseUrl}`);
  console.log(`   ANON_KEY: ${supabaseAnonKey ? '✅ Configurada' : '❌ Falta configurar'}\n`);

  if (!supabaseAnonKey) {
    console.log('❌ ERROR: NEXT_PUBLIC_SUPABASE_ANON_KEY no está configurada');
    console.log('   → Agrega tu ANON_KEY al archivo .env.local\n');
    return;
  }

  // Initialize Supabase client
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Test connection and bucket access
  console.log('2️⃣ Verificando acceso al bucket "Imagenes":');
  
  try {
    const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
    
    if (bucketsError) {
      console.log(`   ❌ Error al listar buckets: ${bucketsError.message}\n`);
      return;
    }

    const imagenesBucket = buckets?.find(b => b.name === 'Imagenes');
    if (imagenesBucket) {
      console.log('   ✅ Bucket "Imagenes" encontrado');
      console.log(`   → Público: ${imagenesBucket.public ? 'Sí' : 'No'}\n`);
    } else {
      console.log('   ❌ Bucket "Imagenes" no encontrado\n');
      return;
    }

    // Check folders
    console.log('3️⃣ Verificando carpetas:');
    const folders = ['Home', 'ministries', 'Favicon'];
    
    for (const folder of folders) {
      const { data, error } = await supabase.storage
        .from('Imagenes')
        .list(folder);

      if (error) {
        console.log(`   ❌ ${folder}: Error - ${error.message}`);
      } else if (data && data.length > 0) {
        console.log(`   ✅ ${folder}: ${data.length} archivo(s) encontrado(s)`);
      } else {
        console.log(`   ⚠️  ${folder}: Carpeta vacía`);
      }
    }

    console.log('\n4️⃣ Resumen:');
    console.log('   ✅ Configuración correcta');
    console.log('   → Puedes usar Supabase Storage en tu aplicación\n');

  } catch (error) {
    console.log(`   ❌ Error: ${error.message}\n`);
  }
}

verifySupabaseSetup();
