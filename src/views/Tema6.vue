<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Accesibilidad digital (WCAG 2.1)
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 ¿Qué es la accesibilidad digital?



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Normatividad y estándares




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 La inclusión digital como política de estado




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Principios POUR




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Prácticas esenciales para accesibilidad en multimedia




    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.6 Técnicas de adaptación





</template>

<script>
export default {
  name: 'Tema6',
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
