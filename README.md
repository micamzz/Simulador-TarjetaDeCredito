💳 #Simulador Interactivo de Tarjeta de Crédito
Este proyecto forma parte del desafío de Frontend Mentor, que consiste en construir un formulario interactivo para simular el ingreso de datos de una tarjeta de crédito.
La tarjeta se actualiza visualmente en tiempo real, y todas las entradas cuentan con validaciones robustas para asegurar una experiencia realista y confiable.

🔗 ##Desafío original:
https://www.frontendmentor.io/solutions/interactive-card-details-form-using-html-css-and-javascript-N8QH2WgExf

##Características:
-Validación Robusta:
Verificación de formato, longitud y validación avanzada de la fecha de caducidad (mes/año) para asegurar que la tarjeta no esté vencida.

-Actualización Dinámica (Real-Time):
El nombre, número, fecha de expiración y CVC se reflejan al instante en la tarjeta visual.

-Formato Asistido:
Implementación de Cleave.js para formatear automáticamente el número de tarjeta en grupos de cuatro dígitos.

-Flujo de Éxito:
Cuando todas las validaciones son correctas, se muestra una pantalla de “Gracias” indicando que los datos se cargaron correctamente.

 ##Puntos Clave del Desarrollo
Este proyecto consolidó la aplicación de JavaScript nativo en un entorno real con enfoque en la experiencia de usuario y la seguridad de datos mediante validación.
-Validación de Fechas: Implementación de lógica para comparar el mes y año ingresados contra la fecha actual, incluyendo el manejo del caso donde el año es el actual, pero el mes ya expiró.
-Modularidad de Errores: Creación de funciones reutilizables (validateField, renderError) para gestionar dinámicamente la creación y eliminación de mensajes de error en el DOM.
-Gestión del Estado: Manejo de la transición entre el formulario y la pantalla de éxito, y el posterior restablecimiento completo de la aplicación al hacer clic en "Continue".

## 🛠️ Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
