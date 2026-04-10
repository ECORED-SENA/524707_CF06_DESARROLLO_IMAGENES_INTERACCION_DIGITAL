<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Principios de usabilidad
    p.mb-5 El propósito de esta unidad temática es presentar los fundamentos de la usabilidad aplicados al diseño y evaluación de productos multimedia. Su comprensión permite analizar cómo estos principios influyen en la eficiencia, la eficacia y la satisfacción del usuario, así como en la mejora de la interacción, la reducción de errores y la construcción de procesos de navegación intuitivos.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Concepto de usabilidad en productos multimedia
    p.mb-5 La usabilidad se define como el grado en que un producto puede ser utilizado por usuarios específicos para alcanzar objetivos concretos con eficacia, eficiencia y satisfacción (ISO 9241-11:2018, 2018). En el contexto de los proyectos multimedia, este concepto se relaciona con la facilidad de uso y con la calidad de la experiencia generada durante la interacción. La usabilidad dentro de un producto multimedia puede evaluarse a partir de los siguientes aspectos:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img50.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Acceso al contenido").ajuste-cajaAcordion
            p.mb-3 Determina qué tan sencillo resulta localizar información relevante dentro de la estructura del producto.
          .row(titulo="Velocidad en la ejecución de tareas").ajuste-cajaAcordion
            p.mb-3 Permite identificar si las acciones pueden completarse en tiempos razonables sin generar sobrecarga operativa.
          .row(titulo="Claridad de la navegación").ajuste-cajaAcordion
            p.mb-3 Evalúa la comprensión de los recorridos disponibles y la orientación dentro de la interfaz.
          .row(titulo="Comprensión de los mensajes del sistema").ajuste-cajaAcordion
            p.mb-3 Analiza la pertinencia y claridad de las indicaciones, confirmaciones o advertencias presentadas.
          .row(titulo="Prevención de errores y frustración").ajuste-cajaAcordion
            p.mb-3 Valora si el diseño de la interfaz contribuye a evitar fallos frecuentes o situaciones de confusión.
    p.mb-0 Una adecuada usabilidad facilita la interacción, disminuye la carga cognitiva y fortalece la confianza del usuario durante el uso del producto multimedia.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Eficacia, eficiencia y satisfacción
    p.mb-5 La evaluación de la usabilidad en productos multimedia se orienta a partir de tres pilares fundamentales que permiten analizar el desempeño del usuario durante la interacción y la calidad de la experiencia generada. Estos criterios de evaluación se integran en la siguiente síntesis:
    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Eficacia")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Eficacia
            p.mb-0 Se relaciona con la capacidad del usuario para completar correctamente una tarea. Por ejemplo, determinar si puede iniciar un video sin presentar dificultades operativas.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img51.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Eficiencia")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Eficiencia
            p.mb-0 Hace referencia al nivel de esfuerzo, tiempo o número de pasos requeridos para alcanzar un objetivo. Un caso representativo consiste en analizar cuántos clics son necesarios para acceder a una lección.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img52.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Satisfacción")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Satisfacción
            p.mb-0 Corresponde a la percepción subjetiva positiva generada durante el uso del producto. Se evalúa, por ejemplo, si el recorrido resulta agradable, comprensible y sencillo.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img53.jpg", alt="" style="max-width: 350px").m-auto
    p.mb-0 La integración equilibrada de estos tres factores permite mejorar la experiencia de usuario y optimizar el desempeño funcional del producto multimedia.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Reglas de usabilidad de Jakob Nielsen
    p.mb-5 Las heurísticas propuestas por Nielsen (1994) constituyen referentes ampliamente utilizados en la evaluación de interfaces digitales. Estos principios orientan la toma de decisiones de diseño y permiten identificar oportunidades de mejora en la interacción y la navegación. A continuación, se presenta una organización comparativa de los diez principios de usabilidad y algunos criterios de verificación asociados.
    .color___box_2
      .px-5
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Heurística. Los 10 principios de usabilidad de principios de Nielsen
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Principio #[i UX]
                    th.ajuste-border-tabla.texto-left Descripción
                    th.texto-left #[i Checklist] de verificación
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Visibilidad del estado del sistema]
                    td.ajuste-border-tabla.texto-left El sistema debe informar de manera continua lo que está ocurriendo.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Retroalimentación clara y oportuna.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Estados visibles.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Indicadores de carga.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Correspondencia con el mundo real]
                    td.ajuste-border-tabla.texto-left La interfaz debe emplear un lenguaje familiar y comprensible para el usuario.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Uso de lenguaje natural.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Metáforas intuitivas.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Reducción de jerga técnica.
                  tr
                    td.ajuste-border-tabla.texto-left #[b Prevención de errores]
                    td.ajuste-border-tabla.texto-left El diseño debe anticiparse a posibles fallos y evitarlos desde la configuración de la interfaz.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Confirmación de acciones críticas.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Evitar modos ambiguos.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Orientación preventiva.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Consistencia y estándares]
                    td.ajuste-border-tabla.texto-left Los componentes deben seguir convenciones reconocidas y mantener coherencia visual y funcional.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Uso consistente de colores y tipografía.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Aplicación de patrones de diseño comunes.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Vocabulario unificado.
                  tr
                    td.ajuste-border-tabla.texto-left #[b Control y libertad del usuario]
                    td.ajuste-border-tabla.texto-left El usuario debe contar con opciones claras para deshacer acciones o abandonar procesos.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Funciones de deshacer o rehacer.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Opciones de salida visibles.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Evitar recorridos obligatorios.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Reconocimiento antes que recuerde]
                    td.ajuste-border-tabla.texto-left Las acciones y opciones deben estar disponibles de forma visible para reducir la carga de memoria.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Menús claros.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Opciones accesibles.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Información permanente en pantalla.
                  tr
                    td.ajuste-border-tabla.texto-left #[b Flexibilidad y eficiencia de uso]
                    td.ajuste-border-tabla.texto-left La interfaz debe adaptarse tanto a usuarios principiantes como a usuarios expertos.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Atajos de teclado.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Configuraciones personalizables.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Flujos optimizados.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Diseño estético y minimalista]
                    td.ajuste-border-tabla.texto-left Se debe evitar la sobrecarga de información irrelevante que dificulte la interacción.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Uso adecuado del espacio en blanco.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Jerarquía visual clara.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Reducción del ruido visual.
                  tr
                    td.ajuste-border-tabla.texto-left #[b Ayuda para reconocer y recuperarse de errores]
                    td.ajuste-border-tabla.texto-left Los mensajes de error deben ser comprensibles y ofrecer alternativas de solución.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Lenguaje claro y no técnico.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Explicación del problema.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Sugerencias correctivas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Ayuda y documentación]
                    td.ajuste-border-tabla.texto-left El sistema debe proporcionar soporte accesible cuando el usuario lo requiera.
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Documentación fácil de localizar.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Información organizada.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Ayuda contextual.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Leyes cognitivas aplicadas a la interacción
    p.mb-5 Además de las heurísticas de usabilidad, diversas leyes provenientes de la psicología cognitiva influyen en la manera en que las personas interactúan con los productos multimedia. Estas leyes permiten comprender cómo se procesa la información, cómo se toman decisiones y cómo se organiza la percepción durante la navegación digital. En el diseño de interacción resultan relevantes diversas leyes cognitivas, entre las que se destacan las siguientes:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de Fitts
                p.mb-0 El tiempo requerido para seleccionar un objetivo depende de su tamaño y de la distancia respecto al punto de interacción. En el diseño multimedia, esto implica utilizar botones más grandes y ubicarlos en zonas de fácil acceso.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de Hick
                p.mb-0 El tiempo necesario para tomar una decisión aumenta conforme se incrementa el número de opciones disponibles. Por ello, los menús sobrecargados pueden ralentizar la interacción y dificultar la toma de decisiones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de la proximidad (Gestalt)
                p.mb-0 Los elementos cercanos se perciben como relacionados. Agrupar contenidos o componentes interactivos facilita la comprensión y mejora la organización visual de la interfaz.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ley de Miller
                p.mb-0 La memoria de corto plazo puede gestionar aproximadamente siete elementos, con una variación de dos más o menos. En consecuencia, se recomienda evitar la presentación simultánea de grandes volúmenes de información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La aplicación de estas leyes contribuye a diseñar experiencias interactivas más intuitivas y a optimizar los procesos de comprensión y navegación del usuario.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Señales de usabilidad deficiente
    p.mb-5 La identificación de problemas de usabilidad permite realizar ajustes oportunos en el diseño de productos multimedia. Existen diversos indicadores que evidencian dificultades en la interacción y en la comprensión de la interfaz. La usabilidad deficiente suele manifestarse a través de las siguientes señales frecuentes:
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img60.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Dificultad para encontrar opciones básicas
                p.mb-0.text-center Indica problemas en la organización de la navegación o en la jerarquía de la información.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img61.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Exceso de #[i clics] para tareas sencillas
                p.mb-0.text-center Evidencia recorridos innecesariamente complejos que afectan la eficiencia.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img62.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Interfaces poco claras o saturadas
                p.mb-0.text-center Generan sobrecarga cognitiva y dificultan la comprensión del entorno digital.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img63.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ausencia de retroalimentación
                p.mb-0.text-center Produce incertidumbre respecto a los resultados de las acciones realizadas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img64.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Errores frecuentes durante la interacción
                p.mb-0.text-center Señalan deficiencias en el diseño funcional o en la orientación al usuario.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img65.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Mensajes confusos o ambiguos
                p.mb-0.text-center Limitan la comprensión de procesos y aumentan la probabilidad de fallos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img66.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Necesidad de instrucciones extensas para tareas simples
                p.mb-0.text-center Refleja baja intuitividad en el diseño de la interfaz.
        p.mb-0 El reconocimiento de estas señales facilita la toma de decisiones orientadas a mejorar la calidad de la experiencia de usuario en las siguientes fases de desarrollo.
        <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
        Separador
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Usabilidad aplicada a elementos interactivos 
    p.mb-5 La usabilidad se concreta en la forma en que los elementos interactivos responden a criterios de claridad, accesibilidad y coherencia funcional. En este sentido, los componentes analizados en la unidad anterior deben cumplir condiciones que favorezcan una interacción efectiva. Los elementos interactivos deben considerar diversos criterios de usabilidad, que se sintetizan a continuación:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Botones
                p.mb-0 Deben ser claramente distinguibles dentro de la interfaz y presentar zonas de activación adecuadas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estados visuales
                p.mb-0 Requieren definiciones precisas que permitan identificar cambios de disponibilidad o activación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img68.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Formularios
                p.mb-0 Deben incorporar validaciones comprensibles que orienten el ingreso correcto de información.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img70.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Hotspots]
                p.mb-0 Es necesario que cuenten con buena visibilidad y con áreas táctiles amplias que faciliten su uso.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img69.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Menús
                p.mb-0 Deben estructurar rutas claras y consistentes que favorezcan la orientación del usuario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Sliders] y acordeones
                p.mb-0 Su funcionamiento debe evitar la exigencia de precisión extrema en los movimientos o acciones requeridas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Adicionalmente, los elementos interactivos deben garantizar su funcionamiento en distintos medios de interacción tecnológica:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img73.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Ratón (#[i mouse])
            p.mb-0.text-center Permitir activación mediante selección directa de componentes.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img73.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Pantalla táctil
            p.mb-0.text-center Facilitar gestos simples y zonas de interacción amplias.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img73.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Teclado
            p.mb-0.text-center Garantizar navegación mediante foco y activación con teclas estándar.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img73.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Lectores de pantalla
            p.mb-0.text-center Integrar etiquetas descriptivas y estructura accesible para tecnologías de asistencia.
    p.mb-0 La aplicación de estos criterios contribuye a consolidar experiencias interactivas inclusivas, funcionales y orientadas a la satisfacción del usuario.
</template>

<script>
export default {
  name: 'Tema3',
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
