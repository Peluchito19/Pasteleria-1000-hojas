# Pastelería 1000 Hojas - Catálogo Web

Este proyecto es un catálogo web para la Pastelería 1000 Hojas, construido con React, Vite y Tailwind CSS.

## Despliegue en Vercel

El proyecto está listo para ser desplegado en Vercel. Sigue estos pasos:

1. **Sube el código a GitHub:**
   Crea un repositorio en tu cuenta de GitHub y sube todos los archivos de este proyecto.

2. **Conecta con Vercel:**
   - Ve a [Vercel](https://vercel.com/) e inicia sesión.
   - Haz clic en **"Add New..."** y selecciona **"Project"**.
   - Importa el repositorio de GitHub que acabas de crear.

3. **Configuración del Proyecto en Vercel:**
   - Vercel detectará automáticamente que es un proyecto de **Vite**.
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

4. **Variables de Entorno (Environment Variables):**
   Si tu aplicación utiliza la API de Gemini u otras claves, asegúrate de agregarlas en la sección de "Environment Variables" antes de desplegar:
   - `GEMINI_API_KEY`: [Tu clave de API de Gemini]

5. **Despliegue:**
   Haz clic en **"Deploy"**. Vercel construirá y publicará tu sitio web en unos minutos.

## Notas Adicionales
- El archivo `vercel.json` ya está incluido para asegurar que el enrutamiento funcione correctamente si decides agregar múltiples páginas en el futuro.
