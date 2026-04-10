<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Revisión manual básica de accesibilidad
    p La revisión manual constituye el puente entre el cumplimiento técnico y la inclusión efectiva. En esta fase se analiza la lógica, la intención pedagógica del diseño y la calidad real de la experiencia de interacción.
    p.mb-5 Aunque las herramientas automáticas permiten detectar errores de tipo estructural, la revisión manual evalúa la semántica del contenido y la experiencia de usuario. Una interfaz puede presentar resultados técnicos adecuados y aun así resultar inutilizable para personas con discapacidad. La revisión manual de accesibilidad exige verificar los siguientes aspectos fundamentales:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Orden lógico de lectura
                p Se debe comprobar que la secuencia de la información tenga coherencia pedagógica. Una forma de validarlo consiste en desactivar los estilos CSS para analizar la lectura lineal del documento.
                p.mb-0 #[b Ejemplo]. El título de un tema debe aparecer antes que la actividad o el botón de envío. También se recomienda verificar que los encabezados #[b &lt;h1&gt; a &lt;h6&gt;] mantengan una jerarquía progresiva sin saltos de nivel.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img131.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estados visibles de los controles
                p.mb-0 Es necesario confirmar que el usuario pueda identificar en todo momento qué elemento tiene el foco. Un botón accesible debe cambiar claramente su apariencia en estados como: #[b #[i hover, focus y active]], evitando indicadores imperceptibles o inexistentes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img132.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Contraste entre texto y fondo
                p La revisión manual permite analizar el contraste en estados dinámicos. Puede ocurrir que un enlace sea legible en reposo, pero pierda visibilidad al cambiar de color durante la interacción. También deben evaluarse iconos, bordes de campos y otros elementos gráficos.
                p.mb-0 #[b Ejemplo]. Un enlace azul sobre fondo blanco que al ponerle el cursor encima cambia a un azul más claro que ya no es legible.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img133.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Funcionamiento sin uso del ratón
                p.mb-0 La navegación debe realizarse únicamente mediante teclado utilizando Tab, Shift + Tab, Enter, barra espaciadora o flechas de dirección. Esta verificación permite identificar bloqueos de foco o recorridos sin salida.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img134.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Claridad de mensajes y retroalimentación
                p Los mensajes del sistema deben emplear lenguaje sencillo y ofrecer confirmaciones comprensibles. 
                p.mb-0 #[b Ejemplo]. Tras enviar una tarea, debe aparecer un mensaje que diga: "#[b Tarea enviada con éxito. Recibirás la nota en 48 horas]", en lugar de un código técnico como "Status: 200 OK".
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img135.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Consistencia en la identificación de componentes
                p Los iconos o controles que cumplen la misma función deben mantener denominación y representación visual uniforme en todo el producto.
                p.mb-0 #[b Ejemplo]. Si el icono de "ajustes" es una tuerca en una página, no debe ser un engranaje diferente o una palabra distinta en otra sección.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img136.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Claridad del propósito del enlace
                p Los enlaces deben tener significado propio sin depender del contexto inmediato. Es recomendable sustituir expresiones genéricas por descripciones específicas de la acción, como indicar la descarga de un recurso determinado.
                p.mb-0 #[b Ejemplo]. Cambiar "Haz clic aquí" por "Descargar guía de accesibilidad en PDF".
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img137.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Redimensionamiento del texto
                p Al aplicar niveles de ampliación entre el 200 % y el 400 %, el contenido no debe superponerse ni desaparecer. Los contenedores deben reorganizarse de forma flexible. 
                p.mb-0 #[b Ejemplo]. Al poner el zoom al 200 %, el menú de navegación debe convertirse en un menú hamburguesa o reorganizarse verticalmente sin perder funciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img138.png', alt='' style="max-width: 500px").m-auto
    p La revisión manual complementa la validación automatizada al centrarse en la experiencia real de interacción. Este proceso permite detectar barreras que no pueden identificarse únicamente mediante herramientas técnicas y favorece la construcción de entornos digitales verdaderamente inclusivos.
    p.mb-5 En la revisión manual también es necesario comprobar que los elementos interactivos presenten indicadores claros de foco, lo cual permite identificar el componente activo durante la navegación con teclado. A continuación, se presenta un ejemplo de estilo CSS que mejora la visibilidad del foco en botones interactivos.
    .row.justify-content-center.mb-5
      .col-xl-9
        .code-window(data-aos="zoom-in")
          .window-header
            span.dot.red
            span.dot.yellow
            span.dot.green
          pre.ajuste___pre_1
            code.
              /* Focus para accesibilidad */
              .btn:focus {
                  outline: 4px solid #FFD700;
                  outline-offset: 2px;
              }

              .btn {
                  padding: 12px 24px;
                  background-color: #007BFF;
                  border: none;
                  border-radius: 6px;
                  color: white;
                  cursor: pointer;
                  transition: all 0.3s;
              }
    p.mb-0 Este tipo de configuración permite que el usuario identifique con claridad el elemento activo durante la interacción, lo que favorece la operabilidad y reduce la desorientación en la navegación mediante teclado.
</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
