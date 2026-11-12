# 🎮 GameVault

**GameVault** es un sitio web ficticio de catálogo de videojuegos desarrollado como Trabajo Práctico Integrador para la materia **Diseño y Desarrollo Web** de UADE.

La propuesta permite descubrir videojuegos de distintos géneros mediante una interfaz inspirada en plataformas de gaming.

> **Tu próxima aventura empieza acá.**

El proyecto se desarrolló en dos etapas: una primera entrega centrada en HTML y CSS, y una segunda que incorpora interactividad mediante JavaScript vanilla.

---

## Información académica

- **Universidad:** Universidad Argentina de la Empresa — UADE.
- **Materia:** Diseño y Desarrollo Web.
- **Docente:** Prof. Lic. Alejandro Lucas Potente.
- **Trabajo:** Trabajo Práctico Integrador — Entregas 1 y 2.
- **Año:** 2026.

### Integrantes

- Gonzalo Butafuoco.
- Tobias Citarella.

---

## Objetivo del proyecto

Desarrollar un sitio web One Page que aplique estructura semántica, diseño responsive, distribución mediante Flexbox e interacciones en el navegador.

GameVault funciona como un catálogo de videojuegos. Su versión actual permite explorar juegos, filtrarlos por género, consultar sus detalles y guardar favoritos.

---

## Entrega 1 — Estructura y diseño

La primera etapa se realizó con HTML5 y CSS3, sin JavaScript.

Se trabajó en:

- Estructura semántica con header, nav, main, section, article y footer.
- Navegación interna mediante anclas.
- Hero de presentación.
- Catálogo de videojuegos con cards.
- Sección de destacados y géneros.
- Sección “Sobre nosotros”.
- Contacto mediante enlace de correo.
- Footer con redes sociales y acceso para volver al inicio.
- Distribución de elementos mediante Flexbox.
- Adaptación a diferentes tamaños de pantalla con media queries.
- Imágenes con texto alternativo.
- Identidad visual, colores, tipografía, transiciones y estados hover.

Las cards del catálogo se escribían directamente en HTML.

---

## Entrega 2 — JavaScript e interactividad

La segunda etapa conserva la temática y el diseño de la primera entrega e incorpora JavaScript en el archivo externo `js/main.js`.

### Arrays de objetos

Se utilizan dos colecciones principales:

- `juegos`: contiene los videojuegos, con ID, título, género, descripción e información de la imagen.
- `generos`: contiene las opciones utilizadas para generar los filtros.

### Catálogo dinámico

Las cards se generan desde el array de juegos mediante manipulación del DOM.

Se utilizan métodos como `createElement()`, `append()` y `appendChild()`, y se asigna el contenido textual mediante `textContent`.

El contenedor se vacía antes de cada renderizado para evitar duplicados.

### Carrusel de videojuegos

Presenta todos los juegos de la colección.

- Se genera desde el mismo array del catálogo.
- Permite desplazarse mediante botones.
- Admite desplazamiento horizontal en dispositivos táctiles.
- Mantiene la colección completa al filtrar el catálogo.
- Tiene principio y final.

Está desarrollado con CSS y JavaScript vanilla, sin librerías.

### Filtros por género

Permiten mostrar todos los juegos o seleccionar un género.

El filtrado utiliza `filter()` y actualiza:

- Las cards visibles.
- La cantidad de resultados.
- El estado visual del botón seleccionado.
- El atributo `aria-pressed` de los controles.

### Modal de detalles

Cada card incluye un botón “Ver detalles”.

Al seleccionarlo, se busca el juego mediante su ID y se muestra un elemento `<dialog>` con:

- Portada.
- Título.
- Género.
- Descripción.

Se puede cerrar mediante su botón de cierre o con Escape.

### Favoritos

Cada card permite agregar o quitar el juego de favoritos.

La interfaz incluye:

- Estado visual del botón de cada juego.
- Contador de favoritos.
- Opción “Solo favoritos”.
- Combinación de favoritos con el filtro por género.
- Mensaje cuando no existen resultados.

### Persistencia con localStorage

Los favoritos se guardan con la clave:

`gamevault-favoritos`

Se almacenan únicamente los IDs de los juegos, utilizando `JSON.stringify()`. Al cargar la página se recuperan con `JSON.parse()`.

La recuperación valida que el contenido sea un array, descarta IDs inexistentes y elimina duplicados. Si los datos guardados son inválidos, el sitio comienza con una lista vacía.

Los filtros vuelven a su estado inicial al recargar; los favoritos se conservan.

### Eventos y funciones

Los eventos se registran mediante `addEventListener()`, sin usar manejadores inline en el HTML.

La lógica se organiza en funciones para crear cards, renderizar contenido, filtrar juegos, abrir y cerrar detalles, y administrar favoritos.

---

## Tecnologías utilizadas

- **HTML5:** estructura y contenido.
- **CSS3:** estilos, transiciones y adaptación responsive.
- **Flexbox:** distribución de componentes.
- **JavaScript vanilla:** datos, DOM, funciones y eventos.
- **localStorage:** persistencia local de favoritos.
- **Google Fonts:** tipografía Inter.

No se utilizan frameworks ni librerías de JavaScript.

---

## Estructura del proyecto

```text
gamevault/
├── index.html
├── styles.css
├── README.md
├── integrantes.txt
├── js/
│   ├── main.js
└── img/
    ├── Imágenes de identidad GameVault
    └── Portadas de videojuegos
```

### Archivos principales

- **`index.html`:** estructura de la página, contenedores dinámicos y modal.
- **`styles.css`:** identidad visual, componentes y estilos responsive.
- **`js/main.js`:** datos y funcionalidades de la segunda entrega.
- **`js/games.json`:** referencia de los datos iniciales, si se conserva. La implementación actual utiliza los datos definidos en `main.js`.
- **`img/`:** recursos gráficos.
- **`README.md`:** documentación del proyecto para el repositorio.
- **`README.txt`:** copia de la documentación solicitada para la entrega.
- **`integrantes.txt`:** integrantes del grupo.

---

## Secciones del sitio

### Inicio

Incluye la navegación, la identidad de GameVault y el hero con accesos al catálogo y a la presentación del proyecto.

### Carrusel

Permite recorrer visualmente las portadas de todos los videojuegos.

### Juegos

Contiene el catálogo dinámico, filtros por género, contador de resultados y controles de favoritos.

### Destacados

Presenta visualmente los géneros de la colección.

### Nosotros

Explica el concepto y el objetivo de GameVault.

### Contacto

Permite iniciar un correo mediante un enlace `mailto:`.

### Footer

Incluye información de la marca, enlaces a redes sociales y acceso para volver al inicio.

---

## Catálogo actual

La versión actual contiene **18 videojuegos**, distribuidos de la siguiente manera:

| Género | Cantidad |
|---|---:|
| RPG | 3 |
| Acción | 5 |
| Aventura | 4 |
| Carreras | 1 |
| Estrategia | 1 |
| Simulación | 1 |
| Deportes | 1 |
| Terror | 1 |
| Supervivencia | 1 |
| **Total** | **18** |

---

## Identidad visual

GameVault utiliza fondos oscuros con acentos violetas y azules.

| Elemento | Color |
|---|---|
| Fondo principal | `#080A10` |
| Fondo secundario | `#0F121C` |
| Cards | `#151925` |
| Bordes | `#272C3B` |
| Violeta principal | `#7C3AED` |
| Violeta claro | `#A855F7` |
| Azul | `#22D3EE` |
| Texto principal | `#FFFFFF` |
| Texto secundario | `#A6A9B7` |

**Tipografía:** Inter, obtenida mediante Google Fonts.

---

## Diseño responsive y accesibilidad

El sitio utiliza Flexbox y media queries para adaptar la navegación, el hero, las secciones y el modal a diferentes pantallas.

Se incorporan:

- Texto alternativo en imágenes.
- Botones HTML para las acciones.
- Nombres accesibles en controles.
- Indicadores de foco.
- Estados de selección mediante `aria-pressed`.
- Modal con título y descripción asociados.
- Cierre del modal mediante Escape.
- Controles que pueden utilizarse con teclado.

Las acciones de cada card se agrupan al pie para mantener su alineación dentro de cada fila, aunque las descripciones tengan distintas longitudes.

---

## Cómo ejecutar el proyecto

1. Descargar o descomprimir el proyecto completo.
2. Mantener la estructura de carpetas.
3. Abrir la carpeta en Visual Studio Code.
4. Iniciar `index.html` con la extensión Live Server.
5. Acceder a la dirección que abre el navegador.

No se necesita un backend ni instalar dependencias del proyecto.

Para comprobar la persistencia, utilizar siempre el mismo navegador y la misma dirección del sitio.

Google Fonts necesita conexión para cargar Inter. Si no está disponible, se utiliza la alternativa `sans-serif`.

---

## Cómo probar las funcionalidades

### Catálogo y filtros

1. Abrir el sitio.
2. Comprobar que “Todos” muestra 18 juegos.
3. Seleccionar RPG: deben aparecer 3 juegos.
4. Seleccionar Acción: deben aparecer 5 juegos.
5. Volver a “Todos”.
6. Comprobar que no se duplican las cards.
7. Verificar el contador y el botón activo.

### Carrusel

1. Usar las flechas para avanzar y retroceder.
2. Comprobar que se pueden recorrer todos los juegos.
3. Probar el desplazamiento táctil en móvil.
4. Aplicar un filtro al catálogo y verificar que el carrusel mantiene todos los juegos.

### Modal

1. Abrir “Ver detalles” en distintos juegos.
2. Comprobar que los datos corresponden al juego elegido.
3. Cerrar mediante el botón.
4. Volver a abrir y cerrar con Escape.
5. Verificar que se conserva el filtro del catálogo.

### Favoritos y persistencia

1. Agregar dos juegos a favoritos.
2. Comprobar sus botones y el contador.
3. Recargar la página.
4. Verificar que siguen seleccionados.
5. Activar “Solo favoritos”.
6. Combinar esa opción con un género.
7. Quitar un favorito y comprobar la actualización.
8. Recargar y verificar que continúa eliminado.
9. Comprobar el mensaje cuando no hay coincidencias.

### Validación de datos guardados

Esta prueba reemplaza los favoritos de prueba existentes.

1. Abrir la consola del navegador.
2. Ejecutar:

   `localStorage.setItem('gamevault-favoritos', 'dato-invalido');`

3. Recargar la página.
4. Comprobar que el catálogo funciona y comienza sin favoritos.
5. Agregar un favorito y recargar para verificar que vuelve a guardarse correctamente.

### Responsive y teclado

1. Revisar el sitio en móvil, tablet y escritorio.
2. Comprobar que no existe desplazamiento horizontal de la página.
3. Verificar que el carrusel permite su propio desplazamiento.
4. Recorrer los controles con Tab.
5. Activar botones con Enter o Espacio.
6. Comprobar que el foco es visible y que el modal puede utilizarse con teclado.
7. Revisar que la consola no muestre errores y que todas las imágenes carguen.

---


## Alcance y limitaciones

- GameVault es un proyecto académico y ficticio.
- No permite comprar ni descargar videojuegos.
- No incluye registro, inicio de sesión ni backend.
- Los favoritos se almacenan en el navegador y origen utilizados.
- Los favoritos no se sincronizan entre dispositivos o navegadores.
- Al borrar los datos del sitio se eliminan las selecciones guardadas.
- El contacto utiliza un enlace de correo y depende de la configuración del dispositivo.
- Las redes sociales enlazan a plataformas externas.

---


## Uso académico y recursos

Proyecto desarrollado con fines académicos para Diseño y Desarrollo Web — UADE.

Los nombres, marcas y portadas de videojuegos pertenecen a sus respectivos titulares. Su inclusión no implica afiliación con GameVault.

© 2026 GameVault — Proyecto académico.