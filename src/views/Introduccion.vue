<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La creación de productos multimedia no depende únicamente de su apariencia visual; también requiere comprender #[b cómo interactúan las personas con los contenidos], cómo se comportan los elementos ante las acciones del usuario y qué tan eficiente y accesible #[b resulta la experiencia completa]. Este componente formativo profundiza en esa dimensión funcional del diseño, donde la interactividad, la usabilidad y la accesibilidad se convierten en los pilares que determinan la calidad de cualquier producto digital.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .box___style_1.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Este componente formativo se orienta al estudio práctico de las acciones del usuario, los tipos de interacción, los estados de los elementos y la definición de flujos que permiten estructurar experiencias coherentes. Además, introduce #[b principios de usabilidad y criterios de accesibilidad] que fortalecen la calidad del diseño y #[b favorecen la inclusión] de diferentes perfiles de usuario.
        p.mb-0 Se exploran métodos para analizar la eficacia de una interfaz, identificar problemas de navegación, evaluar la percepción del usuario y aplicar técnicas de mejora basadas en pruebas formales. Se abordan también instrumentos de evaluación que permiten documentar hallazgos y transformar prototipos en productos funcionales y comprensibles.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img2.png", alt="").m-auto
    .box___style_2(data-aos="zoom-in")
      p.mb-0 Este recorrido proporciona herramientas conceptuales y prácticas para diseñar experiencias interactivas completas y optimizadas, garantizando que los productos multimedia no solo se vean bien, sino #[b que también funcionen adecuadamente y sean accesibles para todas las personas].
</template>

<script>
export default {
  name: 'Introduccion',
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
