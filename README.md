# MedPráctica

Simulador de examen práctico de **Anatomía** (30 s por estructura) e **Histología** (1 min por estructura), con exámenes de 10 preguntas en dos modalidades: **Examen escrito** y **Examen de opción múltiple** (tres nombres por imagen), feedback visual inmediato, repaso automático de errores y un **Modo Cuestiones** independiente para practicar teoría.

## Estructura del proyecto

```
index.html            la aplicación (HTML + CSS + JS)
config.js             contraseña del Modo administrador
manifest.webmanifest  datos de la app instalable (PWA)
sw.js                 modo sin conexión y actualizaciones
data/estructuras.json estructuras oficiales (lo genera el botón "Exportar para GitHub")
data/preguntas.json   preguntas del Modo Cuestiones
data/img/             imágenes de las estructuras (las crea la exportación)
icons/                íconos de la app (4 PNG)
docs/                 guía del Modo Cuestiones
```

## Publicar (GitHub Pages)

1. Sube todos los archivos a la raíz del repositorio, **incluidas las carpetas `icons` y `data`**.
2. Settings → Pages → Deploy from a branch → `main` / root.
3. Las versiones nuevas se aplican solas cuando los usuarios vuelven a abrir la app.

## Cargar estructuras oficiales

1. Abre la app → pie de página → **Modo administrador** (contraseña en `config.js`).
2. Entra a Anatomía o Histología → una región → **Banco de imágenes** y registra las estructuras.
3. Pulsa **Exportar para GitHub**, extrae el zip y sube la carpeta `data` a la raíz del repositorio (Commit changes).
4. Todos los usuarios verán las estructuras al abrir el enlace. Solo el administrador puede editarlas.

> No subas una carpeta `data` vacía encima de la tuya: borraría lo publicado.

Cada persona puede crear sus propias estructuras en **Mis estructuras**; quedan solo en su dispositivo.

Aplicación desarrollada por [@gustavohelenox](https://instagram.com/gustavohelenox).
