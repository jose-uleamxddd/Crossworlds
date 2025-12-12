# Script de Verificacion de Imagenes
# Ejecuta este script para ver que imagenes te faltan

Write-Host "Verificando imagenes..." -ForegroundColor Cyan
Write-Host ""

$baseDir = "c:\Users\ASUS I5\OneDrive\Desktop\pagina web Cross\public\images"
$missing = @()
$found = @()

# Imagenes criticas
$criticalImages = @(
    "logos/logo_cross-removebg-preview.png",
    "home/hero-background.png",
    "home/get-involved-background.jpg"
)

# Imagenes de ministerios (al menos una por carpeta)
$ministryImages = @(
    "ministries/coser-para-vivir/01.jpeg",
    "ministries/praise-worship-camp/01.jpeg",
    "ministries/crossworlds-center/01.jpeg",
    "ministries/roots-and-routes/01.jpeg",
    "ministries/high-notes-high-hopes/01.jpeg",
    "ministries/giving-new-life/01.jpeg"
)

Write-Host "IMAGENES CRITICAS" -ForegroundColor Yellow
Write-Host "==================" -ForegroundColor Yellow
foreach ($img in $criticalImages) {
    $fullPath = Join-Path $baseDir $img
    if (Test-Path $fullPath) {
        Write-Host "[OK] $img" -ForegroundColor Green
        $found += $img
    } else {
        Write-Host "[FALTA] $img" -ForegroundColor Red
        $missing += $img
    }
}

Write-Host ""
Write-Host "IMAGENES DE MINISTERIOS" -ForegroundColor Yellow
Write-Host "========================" -ForegroundColor Yellow
foreach ($img in $ministryImages) {
    $fullPath = Join-Path $baseDir $img
    if (Test-Path $fullPath) {
        Write-Host "[OK] $img" -ForegroundColor Green
        $found += $img
    } else {
        Write-Host "[FALTA] $img" -ForegroundColor Red
        $missing += $img
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "RESUMEN" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Encontradas: $($found.Count) de $($criticalImages.Count + $ministryImages.Count)" -ForegroundColor Green
Write-Host "Faltantes: $($missing.Count)" -ForegroundColor $(if ($missing.Count -eq 0) { "Green" } else { "Red" })

if ($missing.Count -eq 0) {
    Write-Host ""
    Write-Host "Todas las imagenes estan en su lugar!" -ForegroundColor Green
    Write-Host "Puedes ejecutar: pnpm dev" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Aun faltan imagenes por descargar." -ForegroundColor Yellow
    Write-Host "Consulta MIGRATION-GUIDE.md para mas detalles." -ForegroundColor Yellow
}

Write-Host ""
