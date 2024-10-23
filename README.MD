# Una Aventura Especial

Una Aventura Especial es una aplicación interactiva desarrollada en **React** que ofrece una experiencia narrativa personalizada. Diseñada para sorprender y emocionar a Jhos, esta aventura permite explorar diferentes rutas, descubrir mensajes especiales y finalizar con un feedback personalizado.

## 📖 Descripción

Este proyecto crea una historia interactiva donde el usuario, Jhos, puede elegir diferentes caminos que la historia tomará. Cada elección lleva a nuevas escenas con textos, imágenes y opciones que reflejan sentimientos y momentos especiales. La aplicación utiliza **styled-components** para estilizar los componentes y **framer-motion** para añadir animaciones suaves y transiciones entre escenas.

## 🚀 Características

- **Introducción Animada:** Una pantalla de bienvenida que saluda a Jhos de manera especial.
- **Transiciones Suaves:** Animaciones fluidas entre escenas para una experiencia inmersiva.
- **Responsividad:** Diseño adaptado para verse bien en dispositivos móviles, tabletas y computadoras.
- **Feedback Visual:** Animaciones en los botones de elección para mejorar la interactividad.
- **Formulario de Feedback:** Al final de la aventura, Jhos puede dejar sus comentarios y opiniones.
- **Personalización:** Fuentes y colores seleccionados para crear una estética agradable y personalizada.

## 🛠️ Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Styled-Components:** Librería para estilizar componentes en React usando CSS-in-JS.
- **Framer Motion:** Librería para añadir animaciones y transiciones en React.
- **Create React App:** Herramienta para configurar rápidamente un entorno de desarrollo de React.

## 📦 Instalación

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/una-aventura-especial.git
    ```

2. **Navega al directorio del proyecto:**
    ```bash
    cd una-aventura-especial
    ```

3. **Instala las dependencias:**
    ```bash
    npm install
    ```

4. **Inicia la aplicación:**
    ```bash
    npm start
    ```

La aplicación se ejecutará en `http://localhost:3000`.

## 📈 Uso

Una vez que la aplicación esté corriendo, verás una pantalla de bienvenida animada. Después de unos segundos, la aventura comenzará con la primera escena. A continuación, Jhos podrá elegir entre diferentes opciones que guiarán la historia hacia distintos finales.

## 🖼️ Imágenes

Las imágenes utilizadas en cada escena están alojadas en [Imgur](https://i.imgur.com/i3QWUCX.jpeg). Puedes reemplazar estas URLs con imágenes más personalizadas si lo deseas.

## 💬 Feedback

Al finalizar la aventura, Jhos podrá dejar sus comentarios en el formulario de feedback. Actualmente, el feedback se muestra mediante una alerta, pero puedes expandir esta funcionalidad para enviar los comentarios a un servidor o almacenarlos en una base de datos.

## 🎨 Personalización

Puedes personalizar las fuentes y colores en el archivo `Game.js` mediante **styled-components**. Además, puedes agregar más escenas o modificar las existentes en el archivo `scenes.js` para adaptar la historia según tus necesidades.

## 📂 Estructura del Proyecto

```plaintext
una-aventura-especial/
├── src/
│   ├── components/
│   │   └── Game.js
│   ├── scenes/
│   │   └── scenes.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── public/
│   └── index.html
├── package.json
└── README.md