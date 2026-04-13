<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Pruebas formales de usabilidad
    p.mb-5 El propósito de esta unidad es presentar los métodos, técnicas e instrumentos utilizados para aplicar pruebas formales de usabilidad en productos multimedia. Su estudio permite comprender cómo evaluar la eficacia, la eficiencia y la satisfacción del usuario, identificar problemas de interacción y documentar resultados que contribuyan a mejorar la calidad del prototipo multimedia.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 ¿Qué son las pruebas formales de usabilidad?
    p.mb-5 Las pruebas formales de usabilidad corresponden a métodos estructurados orientados a evaluar qué tan clara, eficiente y comprensible resulta una interfaz digital para usuarios reales (Nielsen, 1994; ISO 9241-11:2018, 2018). Estas pruebas no se limitan a entrevistas o percepciones generales, sino que constituyen procesos controlados que buscan reducir el sesgo del evaluador y cuantificar la experiencia de interacción. Este tipo de pruebas cumple diversos propósitos en el contexto de los productos multimedia, los cuales se sintetizan a continuación:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img74.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Analizar el comportamiento real del usuario").ajuste-cajaAcordion
            p.mb-3 Permite comprender cómo interactúa la persona con la interfaz mediante técnicas como #[i think aloud] (pensar en voz alta), que facilitan identificar su modelo mental. Por ejemplo, en una plataforma educativa, un aprendiz puede dudar al seleccionar el botón “Confirmar” debido a la similitud visual con otras opciones.
          .row(titulo="Identificar puntos de confusión").ajuste-cajaAcordion
            p.mb-3 Se detectan discrepancias entre la lógica del sistema y la comprensión del usuario. Un caso frecuente ocurre cuando la terminología técnica no coincide con el lenguaje cotidiano, lo que obliga al usuario a explorar múltiples menús antes de encontrar la información requerida.
          .row(titulo="Detectar errores o pasos innecesarios").ajuste-cajaAcordion
            p.mb-3 Se evalúa la eficiencia mediante el conteo de clics y el tiempo invertido en la tarea. Por ejemplo, solicitar información extensa e irrelevante antes de permitir la inscripción en un foro puede generar abandono del proceso.
          .row(titulo="Obtener evidencia para justificar mejoras").ajuste-cajaAcordion
            p.mb-3 La información recopilada puede ser cualitativa, como expresiones de frustración, o cuantitativa, como resultados de la Escala de Usabilidad del Sistema (#[i SUS]) o tasas de éxito en tareas. Estas evidencias permiten sustentar decisiones de rediseño.
          .row(titulo="Comparar el desempeño entre versiones o flujos").ajuste-cajaAcordion
            p.mb-3 Las pruebas permiten validar hipótesis de diseño al analizar si ciertos cambios reducen errores o incrementan la satisfacción. Por ejemplo, modificar el tamaño, color o iconografía de un botón puede disminuir la probabilidad de acciones accidentales.
    p.mb-0 La evaluación de la usabilidad se fundamenta en evidencia observable y medible, lo que permite orientar mejoras basadas en datos y no únicamente en percepciones subjetivas del equipo de diseño.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Preparación de una prueba formal de usabilidad
    p.mb-5 La realización de una prueba formal de usabilidad exige una planificación estructurada que permita obtener resultados válidos, comparables y útiles para la toma de decisiones de diseño. Esta preparación incluye la definición de objetivos medibles, la selección adecuada de participantes, la elaboración del guion de prueba, la formulación de tareas y la determinación de criterios de observación cuantificables. La preparación de este tipo de evaluación requiere considerar los siguientes componentes esenciales:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Definición de objetivos (hipótesis de usabilidad)
                p.mb-0 Los objetivos deben formularse como hipótesis verificables. Por ejemplo, evaluar si la arquitectura de información permite localizar el sílabo del curso en menos de tres clics. En contextos de accesibilidad, se analiza la interoperabilidad entre lectores de pantalla y componentes dinámicos como ventanas modales o alertas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Perfil de usuarios participantes
                p.mb-0 No se requiere un número elevado de participantes. Nielsen (1994) plantea que entre tres y cinco usuarios permiten identificar la mayoría de problemas críticos. Cuando existen perfiles diferenciados, como estudiante o administrador, se recomienda contar con este número por cada grupo. El reclutamiento debe centrarse en características de comportamiento digital, como el nivel de familiaridad con plataformas similares.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img76.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Guion o #[i script] de la prueba
                p.mb-0 El guion del moderador orienta el desarrollo de la sesión y contribuye a reducir sesgos. Se recomienda emplear intervenciones neutrales, como solicitar al usuario que exprese lo que piensa durante la interacción. La ayuda solo debe brindarse cuando la persona no puede continuar, registrando la situación como un fallo de la tarea.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tareas a evaluar (escenarios de uso)
                p.mb-0 Las tareas deben plantearse como situaciones reales y no como instrucciones directas. Por ejemplo, reproducir un recurso para analizar la visibilidad del estado del sistema, completar un formulario para evaluar la prevención de errores o navegar entre módulos para verificar la consistencia del diseño.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img78.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Criterios de observación (métricas de usabilidad)
                p.mb-0 Los resultados deben expresarse mediante indicadores cuantificables. Entre ellos se incluyen el número de errores (clasificados en críticos y no críticos), el tiempo empleado en la tarea (#[i time on task]), el número de intentos realizados y el nivel de satisfacción autodeclarado mediante instrumentos estandarizados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img79.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La preparación rigurosa de estos elementos permite desarrollar pruebas controladas, generar evidencia objetiva y orientar procesos de mejora continua en el diseño de productos multimedia.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Métodos formales de evaluación de usabilidad 
    p La selección del método de evaluación depende de la fase del ciclo de vida del desarrollo (formativa o sumativa) y del nivel de madurez del producto multimedia. La aplicación adecuada de estos métodos permite identificar problemas de interacción, validar decisiones de diseño y optimizar la experiencia del usuario.
    p.mb-5 La evaluación de productos multimedia de nivel básico e intermedio se apoya en los siguientes métodos más relevantes:
    .color___box_3
      .px-5
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Pruebas con usuarios (<em>user testing</em>)")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img80.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Pruebas con usuarios (#[i user testing])
                p.mb-0 Constituyen el método central de evaluación de usabilidad. Consisten en observar cómo usuarios reales realizan tareas específicas dentro del sistema. Se aplica un protocolo de observación no intrusiva que evita interferir en el proceso mental del participante. Durante la prueba se documentan pausas prolongadas, intentos fallidos, dudas frecuentes, pasos innecesarios y problemas derivados del tamaño o ubicación de los elementos interactivos.
          .py-3.py-md-4(titulo="Evaluación heurística")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img81.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Evaluación heurística
                p.mb-0 Es un método de inspección realizado por expertos en usabilidad que analizan la interfaz a partir de principios psicológicos y de diseño de interacción (Nielsen, 1994). Permite identificar inconsistencias internas o externas, fallos en la navegación, ausencia de retroalimentación o incumplimiento de estándares de diseño y convenciones de experiencia de usuario.
          .py-3.py-md-4(titulo="Recorrido cognitivo (<em>cognitive walkthrough</em>)")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img82.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Recorrido cognitivo (#[i cognitive walkthrough])
                p.mb-0 Técnica analítica centrada en la facilidad de aprendizaje (#[i learnability]). El evaluador simula el comportamiento de un usuario novato para determinar si el sistema ofrece señales claras que orienten la acción y permitan comprender el resultado de cada tarea. Este método contribuye a validar la lógica de los procesos antes de su implementación definitiva.
        p.mb-5 La práctica profesional recomienda la triangulación metodológica, es decir, la combinación de diferentes enfoques de evaluación para obtener resultados más completos y confiables. A continuación, se presenta una matriz que orienta la selección estratégica del método de evaluación según el momento del proyecto:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Matriz de selección de métodos de evaluación de usabilidad
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Método
                    th.ajuste-border-tabla.texto-left Momento ideal de aplicación
                    th.ajuste-border-tabla.texto-left Costo y tiempo estimado
                    th.ajuste-border-tabla.texto-left Perfil de los evaluadores
                    th.texto-left Principal hallazgo esperado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Recorrido cognitivo]
                    td.ajuste-border-tabla.texto-left Prototipos iniciales o #[i wireframes]
                    td.ajuste-border-tabla.texto-left Bajo y rápido
                    td.ajuste-border-tabla.texto-left Diseñadores o responsables de producto
                    td.texto-left Problemas en la lógica del flujo y en la comprensión inicial del sistema
                  tr
                    td.ajuste-border-tabla.texto-left #[b Evaluación heurística]
                    td.ajuste-border-tabla.texto-left Interfaz terminada o en proceso de rediseño
                    td.ajuste-border-tabla.texto-left Medio y moderado
                    td.ajuste-border-tabla.texto-left Entre tres y cinco expertos en usabilidad
                    td.texto-left Incumplimiento de estándares y deficiencias en principios de diseño
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Pruebas con usuarios]
                    td.ajuste-border-tabla.texto-left Producto funcional en versión mínima viable (MVP) o fase beta
                    td.ajuste-border-tabla.texto-left Alto y más prolongado
                    td.ajuste-border-tabla.texto-left Usuarios reales del perfil objetivo
                    td.texto-left Evidencia del comportamiento real y detección de barreras de uso no previstas
        p.mb-5 El análisis comparativo de esta matriz permite comprender las ventajas y limitaciones de cada método de evaluación.
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img83.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.fa-ul.estilo___ul_bloque.mb-0
              li.mb-0.ajuste---li.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 El #[b recorrido cognitivo] resulta útil para validar la lógica de los procesos antes del desarrollo técnico, aunque puede presentar sesgos derivados del conocimiento experto del evaluador.
              br
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 La #[b evaluación heurística] permite depurar errores evidentes de diseño con rapidez, pero no determina la utilidad real del producto para los usuarios.
              br
              li.mb-0.d-flex
                span.fa-li
                  i.fas.fa-check-circle
                | 
                p.mb-0 Las #[b pruebas con usuarios] aportan evidencia empírica sobre la interacción en contextos reales, aunque requieren mayor planificación logística y tiempo de análisis.
        p.mb-0 La aplicación combinada de estos métodos fortalece la calidad del diseño interactivo y contribuye a la toma de decisiones fundamentadas en evidencia.
</template>

<script>
export default {
  name: 'Tema4',
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
