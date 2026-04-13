<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Herramientas para revisión de accesibilidad
    p.mb-5 Este es el paso del #[b conocimiento teórico a la auditoría técnica]. No basta con saber que existen las herramientas, sino entender qué errores detecta cada una y cuáles son sus limitaciones. La validación de accesibilidad es un proceso híbrido. Las herramientas automáticas detectan aproximadamente el #[b 30-40 %] de los errores; el resto depende de la supervisión asistida y el juicio humano. Estas herramientas de revisión se dividen en #[b automáticas, manuales y asistidas].
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Herramientas automáticas
    p.mb-5 La evaluación de accesibilidad puede apoyarse en herramientas automáticas que permiten detectar de forma rápida errores estructurales, problemas de contraste o incumplimientos de estándares. Estas soluciones facilitan la validación técnica en etapas tempranas del desarrollo de productos multimedia. La verificación de la accesibilidad digital puede apoyarse en diversas herramientas ampliamente utilizadas, entre las que se destacan las siguientes:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 WAVE (#[i Web Accessibility Evaluation Tool])
                p.mb-0 Proporciona una inspección directa sobre la página al insertar indicadores visuales que señalan errores, alertas y elementos estructurales. Resulta especialmente útil para revisar la jerarquía de encabezados y la organización semántica del contenido.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img123.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Lighthouse (Google Chrome)]
                p.mb-0 Integrada en las herramientas de desarrollo del navegador, permite evaluar accesibilidad junto con aspectos de rendimiento y posicionamiento. Genera una puntuación global entre 0 y 100 que orienta procesos de optimización técnica.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img124.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 AChecker
                p.mb-0 Facilita la validación del cumplimiento de estándares específicos de accesibilidad, como WCAG en diferentes versiones o marcos normativos equivalentes. Además, proporciona recomendaciones sobre los aspectos que requieren corrección.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img125.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 axe DevTools
                p.mb-0 Considerada una herramienta de referencia para desarrolladores, ofrece análisis precisos y reduce la aparición de falsos positivos. Su extensión para navegadores permite detectar problemas de accesibilidad desde las primeras fases del desarrollo de recursos digitales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img126.png', alt='' style="max-width: 500px").m-auto
    p El uso sistemático de estas herramientas contribuye a mejorar la calidad técnica de los productos multimedia y a fortalecer el cumplimiento de criterios internacionales de accesibilidad.
    p.mb-5 Se invita a consultar el video #[b Evaluar accesibilidad a través de Wave], donde se explica el uso de esta herramienta para identificar aspectos de accesibilidad en páginas web. Ideal para #[b fortalecer la evaluación práctica de accesibilidad digital].
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/60LBU6VEcEI" title="Evaluar accesibilidad a través de Wave"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Evaluar accesibilidad a través de Wave
    p.mb-5 En el siguiente video, se explica cómo utilizar #[b WCAG Checker] para identificar aspectos de accesibilidad en sitios web. Ideal para #[b fortalecer la evaluación práctica de accesibilidad digital].
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yP4VVoNpGno" title="Chequear accesibilidad con WCAG Checker" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Chequear accesibilidad con WCAG Checker.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Herramientas de contraste
    p.mb-5 La verificación del contraste cromático constituye una tarea fundamental en los procesos de evaluación de accesibilidad digital. Estas herramientas permiten comprobar la legibilidad de los elementos visuales y anticipar dificultades de percepción relacionadas con condiciones como daltonismo o baja visión. La validación del contraste de color puede realizarse mediante diversas herramientas especializadas, entre las que se destacan las siguientes:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Contrast Checker (<em>WebAIM</em>)")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img127.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Contrast Checker (#[i WebAIM])
            p.mb-0 Herramienta web que permite validar la relación de contraste mediante el ingreso de códigos de color en formato hexadecimal. Facilita comprobar el cumplimiento de los criterios establecidos en las pautas WCAG.
      .py-3.py-md-4(titulo="Color <em>Oracle</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img128.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Color #[i Oracle]
            p.mb-0 Simulador de daltonismo disponible para diferentes sistemas operativos. Permite analizar en tiempo real cómo perciben los colores las personas con deficiencias comunes en la visión cromática.
      .py-3.py-md-4(titulo="Accessible <em>Colors</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img129.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Accessible #[i Colors]
            p.mb-0 Además de verificar el contraste, sugiere combinaciones cromáticas cercanas que cumplen con los estándares de accesibilidad cuando la paleta propuesta no resulta adecuada.
    p Por ejemplo, estas herramientas pueden emplearse para evaluar si los colores utilizados en un gráfico comparativo resultan distinguibles para estudiantes con dificultades en la percepción del color.
    p.mb-5 En este recurso, se aprecia cómo las personas con #[b deficiencias en la visión del color] perciben una paleta cromática. Ideal para #[b diseño accesible].
    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 6.
          span Percepción de una paleta de colores en personas con deficiencias en la visión del color
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img130.png', alt='Ilustración de interfaz de herramienta de color que presenta una paleta circular en escala de grises junto a un menú de opciones de simulación de visión cromática como deuteranopía, protanopía, tritanopía y modo monocromático. ').m-auto
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Herramientas asistidas
    p.mb-5 En esta sección se evalúa la experiencia real de interacción con tecnologías de asistencia. Un código puede ser semánticamente correcto desde el punto de vista técnico, pero si el lector de pantalla no comunica la información de manera fluida, la práctica de accesibilidad no resulta efectiva. La validación de la interacción inclusiva en productos multimedia puede apoyarse en herramientas asistidas como las siguientes:
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="NVDA (<em>NonVisual Desktop Access</em>)").ajuste-cajaAcordion
            p.mb-3 Lector de pantalla gratuito y de código abierto para sistema operativo Windows. Constituye una referencia en pruebas de bajo costo y alta fidelidad. Puede ejecutarse directamente sin instalación previa, lo que facilita su uso en procesos de evaluación.
          .row(titulo="JAWS (<em>Job Access With Speech</em>)").ajuste-cajaAcordion
            p.mb-3 Lector de pantalla de carácter comercial ampliamente utilizado en entornos corporativos. Ofrece soporte avanzado para aplicaciones complejas y flujos interactivos extensos.
          .row(titulo="VoiceOver").ajuste-cajaAcordion
            p.mb-3 Tecnología integrada en dispositivos del ecosistema Apple. Permite evaluar accesibilidad en entornos móviles y en interacciones basadas en gestos táctiles.
          .row(titulo="Web Disability Simulator").ajuste-cajaAcordion
            p.mb-3 Extensión de navegador que permite simular diversas condiciones funcionales, como temblores en el cursor, dificultades de lectura o reducción del campo visual.
          .row(titulo="Screen Reader Focus Visualizer").ajuste-cajaAcordion
            p.mb-3 Herramienta que resalta visualmente el elemento que está siendo interpretado por el lector de pantalla, facilitando el proceso de depuración técnica.
          .row(titulo="Validadores de HTML semántico (W3C Validator)").ajuste-cajaAcordion
            p.mb-3 Permiten verificar la validez estructural del código. Un marcado incorrecto puede afectar el árbol de accesibilidad y limitar el funcionamiento de tecnologías de asistencia.
    p.mb-5 Se invita a conocer el funcionamiento del lector de pantalla NVDA y su aporte a la accesibilidad digital.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uzuezEaG4s4" title="Demostración programa NVDA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Demostración programa NVDA.
    p.mb-5 El uso combinado de estas herramientas permite evaluar la accesibilidad desde la perspectiva real de las personas usuarias y fortalecer la calidad técnica de los productos multimedia. A continuación, se presenta una síntesis comparativa de aspectos técnicos evaluados durante la validación de accesibilidad.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Resumen de validación: aspectos evaluados
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Categoría
                    th.ajuste-border-tabla.texto-left Herramienta recomendada
                    th.texto-left Objetivo técnico
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Contraste cromático]
                    td.ajuste-border-tabla.texto-left Contrast Checker
                    td.texto-left Verificar el cumplimiento del ratio mínimo de contraste en elementos textuales
                  tr
                    td.ajuste-border-tabla.texto-left #[b Etiquetas y atributos ARIA]
                    td.ajuste-border-tabla.texto-left axe DevTools
                    td.texto-left Confirmar que cada control interactivo cuente con un nombre accesible
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Navegación mediante teclado]
                    td.ajuste-border-tabla.texto-left Uso manual de teclas de navegación
                    td.texto-left Garantizar la ausencia de bloqueos o “trampas de foco”
                  tr
                    td.ajuste-border-tabla.texto-left #[b Orden del foco]
                    td.ajuste-border-tabla.texto-left WAVE (modo estructura)
                    td.texto-left Validar la coherencia del flujo de lectura y de interacción
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b HTML semántico]
                    td.ajuste-border-tabla.texto-left W3C Validator
                    td.texto-left Evitar errores estructurales que afecten el funcionamiento de tecnologías de asistencia.
        p.mb-0 La exploración continua de herramientas orientadas a la accesibilidad permite mejorar la inclusión digital y fortalecer el carácter técnico de los proyectos multimedia.
</template>

<script>
export default {
  name: 'Tema7',
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
