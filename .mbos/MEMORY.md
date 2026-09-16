# 🧠 MEMORY.md - Log Histórico de Aprendizajes y Decisiones

## [2026-09-16] - 🚀 Nacimiento del Landing Page: VetMetro RD
- **Contexto:** Creación de una landing page de alta conversión para Clínica Veterinaria Metropolitana (@vetmetropolitanard) en Santo Domingo.
- **Investigación Realizada:**
  * Se analizaron perfiles oficiales de Facebook (`VetMetropolitanaRD`), Instagram (`@vetmetropolitanard`) y portal web (`vetmetro.do`).
  * Se extrajeron los 4 centros en Santo Domingo: Km 8 Independencia (frente a Sirena Market, al lado de Expreso Bony), Ensanche Paraíso (guardia 24h), Arroyo Hondo y Gazcue.
  * Se consolidaron los números de contacto y WhatsApp específicos: `809-643-7816`, `809-493-3737`, `809-532-7839`, central `809-472-4848` y línea de emergencia `809-383-3234`.
- **Arquitectura Implementada:**
  * Stack moderno: React 18 + TypeScript + Vite + Tailwind CSS + Lucide Icons.
  * Paleta cromática exacta extraída de sus posts e imagen corporativa: `#DB045A` (Magenta), `#15B6B8` (Teal Clínico), `#FFF9FB` (Blush suave).
  * 13 componentes modulares: Banner 24h, Navbar con selector de sucursales, Hero con widget de reserva rápida por WhatsApp, Catálogo de servicios con filtros por categoría, Calculadora interactiva de salud para mascotas (PetCareEstimator), Directorio interactivo de las 4 sucursales con mapas y horarios, Sección de pilares Fear Free, Feed de Instagram en vivo simulado con enlace directo a `@vetmetropolitanard`, Reseñas de 5 estrellas de dueños dominicanos, Acordeón de preguntas frecuentes, Botones flotantes de WhatsApp con flyout selector de sucursal, Modal universal de citas y Footer completo.
- **Verificación:**
  * Compilación exitosa con `npm run build` (`tsc && vite build`) completada en 11.37s con 0 errores de tipado o CSS.
  * Servidor configurado para ejecución local en puerto `5174`.
