<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Guion de interactividad
    p.mb-5 Esta unidad presenta los fundamentos del guion de interactividad como documento técnico que describe las acciones realizadas por el usuario y las respuestas generadas por el sistema. Su comprensión permite planificar flujos, eventos, estados y rutas que estructuran la lógica interactiva de un producto multimedia.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 ¿Qué es un guion de interactividad?
    p.mb-5 A continuación, se presenta un video sobre el guion de interactividad, en el que se explican sus componentes fundamentales y su importancia en el diseño de productos multimedia.
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/usf1zlTZ3xQ" title="¿Qué es un guion de interactividad?"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. ¿Qué es un guion de interactividad?
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Componentes del guion de interactividad
    p.mb-5 La construcción de un guion de interactividad implica la organización de diversos elementos que permiten estructurar la lógica funcional del producto multimedia. Estos componentes garantizan claridad en la planificación del comportamiento del sistema y en la experiencia del usuario. Los elementos más habituales en este tipo de documento técnico se organizan en la siguiente clasificación comparativa:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identificación del escenario o pantalla
                p.mb-0 Cada módulo o pantalla debe contar con una denominación clara que facilite su ubicación en el flujo del producto. Ejemplos frecuentes incluyen #[b inicio, contenido, actividad, evaluación, recursos o mapa de navegación].
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Acción del usuario
                p.mb-0 Describe el comportamiento esperado durante la interacción, como clic, selección de opciones, acciones de arrastre, desplazamiento en pantalla, ingreso de datos o activación de controles.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Respuesta del sistema
                p.mb-0 Define las consecuencias funcionales posteriores a la acción del usuario, tales como presentar contenido, modificar el estado de un elemento, desplegar mensajes, registrar interacciones, activar recursos de audio o video o abrir rutas alternativas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estados del elemento
                p.mb-0 Establece las variaciones funcionales o visuales de los componentes interactivos, entre ellas #[b normal], #[b #[i hover]], #[b activo], #[b deshabilitado], #[b error] o #[b completado]. La definición precisa de estos estados fortalece la usabilidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Retroalimentación
                p.mb-0 Integra mecanismos de confirmación o guía que pueden ser #[b visuales] (cambios de color o iconos), #[b auditivos] (sonidos breves), #[b textuales] (mensajes de confirmación) o #[b funcionales] (avances, desbloqueos o registros).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Condiciones y reglas
                p.mb-0 Corresponden a las lógicas que determinan los recorridos dentro del producto. Por ejemplo, avanzar a la siguiente pantalla tras completar una actividad, generar mensajes de error cuando no se ingresan datos o marcar contenidos previamente consultados como completados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img35.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Rutas alternativas
                p.mb-0 Permiten estructurar experiencias no lineales mediante diferentes recorridos, como acceso a contenido principal, contenidos complementarios o procesos de retroalimentación correctiva.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img36.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La integración adecuada de estos componentes permite diseñar experiencias interactivas coherentes, facilita el trabajo colaborativo entre los equipos de producción y contribuye al logro de los objetivos pedagógicos del recurso multimedia.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Flujos interactivos y navegación
    p.mb-5 Un flujo interactivo representa la secuencia de acciones que realiza el usuario al desplazarse entre pantallas o módulos dentro de un producto multimedia. Su adecuada planificación permite estructurar recorridos comprensibles, facilitar la orientación y garantizar coherencia en la experiencia de interacción. Los tipos de flujos interactivos más utilizados en el diseño multimedia se clasifican de la siguiente manera:
    TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-4.py-md-5(titulo="Lineal" :icono="require('@/assets/curso/temas/img37.svg')")
        .row.align-items-center.p-4
          .col-xl-6.order-1.mb-4.mb-lg-0
            h4 Lineal 
            p.mb-0 Organiza la experiencia en una secuencia paso a paso. El usuario avanza siguiendo un orden previamente definido que facilita la progresión controlada del contenido.
          .col-xl-6.order-2
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Flujo lineal
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img38.png', alt='Diagrama de flujo lineal que presenta una secuencia progresiva de pantallas o módulos organizados paso a paso. ').m-auto
      .py-4.py-md-5(titulo="Ramificado" :icono="require('@/assets/curso/temas/img37.svg')")
        .row.align-items-center.p-4
          .col-xl-6.order-1.mb-4.mb-lg-0
            h4 Ramificado
            p.mb-0 Integra decisiones que generan rutas distintas. Cada elección del usuario conduce a recorridos alternativos o a contenidos diferenciados.
          .col-xl-6.order-2
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Flujo ramificado
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img39.png', alt='Diagrama de flujo ramificado que integra rutas alternativas derivadas de decisiones del usuario dentro de la navegación. ').m-auto
      .py-4.py-md-5(titulo="Exploratorio" :icono="require('@/assets/curso/temas/img37.svg')")
        .row.align-items-center.p-4
          .col-xl-6.order-1.mb-4.mb-lg-0
            h4 Exploratorio 
            p.mb-0 Permite la navegación libre entre secciones o recursos. Favorece la autonomía del usuario y la consulta flexible de la información disponible.
          .col-xl-6.order-2
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 3.
              span Flujo exploratorio 
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img40.png', alt='Diagrama de flujo exploratorio que representa navegación libre entre secciones o recursos interconectados. ').m-auto
      .py-4.py-md-5(titulo="Mixto" :icono="require('@/assets/curso/temas/img37.svg')")
        .row.align-items-center.p-4
          .col-xl-6.order-1.mb-4.mb-lg-0
            h4 Mixto
            p.mb-0 Combina estructuras lineales, ramificadas y exploratorias según las necesidades pedagógicas y funcionales del producto multimedia.
          .col-xl-6.order-2
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 4.
              span Flujo mixto
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img139.png', alt='Diagrama de flujo mixto que combina estructuras lineales, ramificadas y exploratorias en un mismo recorrido interactivo. ').m-auto
    .box___style_5.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img41.png', alt='').m-auto
        .col-xl
          p La definición de los flujos interactivos debe responder a criterios de claridad estructural y usabilidad. Para ello, es necesario considerar los siguientes principios de diseño:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Garantizar coherencia lógica en la secuencia de acciones.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Establecer puntos definidos de entrada y salida en cada recorrido.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Permitir navegación reversible que facilite regresar a secciones previas.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Evitar configuraciones que generen recorridos cerrados o sin continuidad.
    p La correcta estructuración de los flujos interactivos contribuye a mejorar la orientación del usuario, optimiza la experiencia de navegación y fortalece la efectividad pedagógica del producto multimedia.
    p.mb-5 En el diseño de experiencias interactivas, los #[i triggers] corresponden a condiciones específicas que activan una acción dentro del sistema. Su correcta planificación permite controlar el comportamiento funcional del producto multimedia y garantizar coherencia en la respuesta ante las acciones del usuario. A continuación, se presenta una organización comparativa de los principales tipos de #[i triggers] utilizados en entornos digitales.
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img42.svg', alt='' style="max-width: 100px")
          .col
            h2 Del usuario
        p.mb-0 Se generan a partir de acciones directas como clic, desplazamiento mediante #[i scroll], estado #[i hover], selección de opciones, escritura en campos de texto o envío de formularios.
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img43.svg', alt='' style="max-width: 100px")
          .col
            h2 Del sistema
        p.mb-0 Se producen automáticamente según eventos internos como la finalización de un video, la carga de una página, el resultado de una actividad o el transcurso de un tiempo determinado.
    .box___style_6.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p Los  activan diversas acciones dentro del flujo interactivo del producto multimedia. Entre las más frecuentes se encuentran las siguientes:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Cambiar de pantalla o módulo.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Presentar información adicional o contextual.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Registrar respuestas o decisiones del usuario.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Guardar el progreso alcanzado.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Modificar el estilo visual o el estado de los componentes.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img44.png', alt='').m-auto
    p.mb-0 La planificación adecuada de estos eventos asegura un comportamiento consistente, predecible y controlado en la experiencia de interacción.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Retroalimentaciones y microestados interactivos
    p.mb-5 La calidad de la interacción mejora cuando la interfaz comunica de forma permanente los efectos de las acciones realizadas por el usuario. En este contexto, los microestados interactivos constituyen variaciones sutiles en los componentes que fortalecen la comprensión funcional del entorno digital. En el diseño multimedia se emplean diversos microestados; a continuación se sintetizan algunos ejemplos frecuentes.
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/img45.svg' ).m-auto
        h4.mb-3.estilo-text Botones con variaciones de iluminación
        p.mb-5.text-center Indican disponibilidad o activación de una acción dentro del sistema.
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/img46.svg' ).m-auto
        h4.mb-3.estilo-text Íconos con vibración suave
        p.mb-5.text-center Refuerzan la atención sobre elementos relevantes o procesos en curso.
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/img47.svg' ).m-auto
        h4.mb-3.estilo-text Indicadores de progreso
        p.mb-5.text-center Informan el avance en actividades o recorridos dentro del producto multimedia.
      .tarjeta.color-acento-botones
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/img48.svg' ).m-auto
        h4.mb-3.estilo-text Mensajes contextuales
        p.mb-5.text-center Proporcionan orientación inmediata sobre resultados, errores o próximos pasos.
    p.mb-0 Estos microestados contribuyen a reducir la incertidumbre, mejorar la percepción de control y fortalecer la usabilidad del producto interactivo (Norman, 2011).
    .color___box_1
      .px-5
        <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
        Separador
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Representación del guion: tabla técnica 
        p.mb-5 El guion de interactividad suele organizarse mediante tablas técnicas que permiten estructurar de forma clara la relación entre las acciones del usuario, las respuestas del sistema y los estados funcionales de cada componente. Este tipo de representación facilita la comprensión del flujo interactivo y el trabajo coordinado entre los equipos de diseño, desarrollo y producción multimedia. A continuación, se presenta un ejemplo de organización técnica del guion de interactividad.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Tabla técnica del guion de interactividad
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Pantalla
                    th.ajuste-border-tabla.texto-left Acción del usuario
                    th.ajuste-border-tabla.texto-left Respuesta del sistema
                    th.ajuste-border-tabla.texto-left Estado
                    th.texto-left Retroalimentación
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Inicio]
                    td.ajuste-border-tabla.texto-left Clic en “Comenzar”
                    td.ajuste-border-tabla.texto-left Dirige a la lección 1
                    td.ajuste-border-tabla.texto-left Activo
                    td.texto-left Cambio de color y sonido breve
                  tr
                    td.ajuste-border-tabla.texto-left #[b Lección]
                    td.ajuste-border-tabla.texto-left Clic en ícono de información
                    td.ajuste-border-tabla.texto-left Presenta ventana emergente
                    td.ajuste-border-tabla.texto-left Activo
                    td.texto-left Mensaje contextual
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Actividad]
                    td.ajuste-border-tabla.texto-left Selección de respuesta
                    td.ajuste-border-tabla.texto-left Realiza validación
                    td.ajuste-border-tabla.texto-left Correcta o incorrecta
                    td.texto-left Mensaje informativo y avance
        p.mb-0 La representación tabular del guion permite anticipar comportamientos interactivos, documentar decisiones funcionales y garantizar coherencia en la experiencia de navegación del producto multimedia.
</template>

<script>
export default {
  name: 'Tema2',
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
