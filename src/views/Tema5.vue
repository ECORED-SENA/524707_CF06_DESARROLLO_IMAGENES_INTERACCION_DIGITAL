<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Instrumentos utilizados en pruebas de usabilidad
    p.mb-5 Los instrumentos empleados en pruebas de usabilidad no constituyen simples formatos de registro, sino herramientas orientadas a normalizar la recolección de datos y transformar la observación cualitativa en métricas comparables y verificables. En la ingeniería de usabilidad, la precisión del instrumento determina la validez de los hallazgos y la confiabilidad de las decisiones de mejora.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Instrumentos de evaluación
    p.mb-5 Los instrumentos permiten recopilar, organizar y analizar la información obtenida durante las pruebas. A continuación, se presentan los más utilizados en la evaluación de productos multimedia.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Matrices de evaluación
    p.mb-5 Este instrumento facilita el cruce entre las tareas ejecutadas y las heurísticas o principios de usabilidad vulnerados. Permite priorizar acciones de mejora con base en criterios técnicos y estratégicos.
    .color___box_1
      .px-5
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Matriz de evaluación: heurística vulnerada
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left ID
                th.ajuste-border-tabla.texto-left Hallazgo de usabilidad
                th.ajuste-border-tabla.texto-left Severidad (0-4)
                th.ajuste-border-tabla.texto-left Valor de negocio
                th.ajuste-border-tabla.texto-left Esfuerzo técnico
                th.ajuste-border-tabla.texto-left Prioridad
                th.texto-left Recomendación
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[b M-01]
                td.ajuste-border-tabla.texto-left Fallo en pasarela de pagos: el botón “Pagar” no responde en dispositivos móviles.
                td.ajuste-border-tabla 4
                td.ajuste-border-tabla.texto-left Crítico: detiene ingresos directos.
                td.ajuste-border-tabla.texto-left Bajo
                td.ajuste-border-tabla.texto-left Inmediata
                td.texto-left Corregir el evento #[i onclick] para interacción táctil.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b M-02]
                td.ajuste-border-tabla.texto-left Registro complejo: el formulario solicita quince campos antes de permitir el acceso.
                td.ajuste-border-tabla 3
                td.ajuste-border-tabla.texto-left Alto: afecta la conversión de nuevos usuarios.
                td.ajuste-border-tabla.texto-left Medio
                td.ajuste-border-tabla.texto-left Alta
                td.texto-left Implementar registro social o reducir a campos esenciales.
              tr
                td.ajuste-border-tabla.texto-left #[b M-03]
                td.ajuste-border-tabla.texto-left Iconografía inconsistente: los íconos de ayuda varían entre secciones.
                td.ajuste-border-tabla 1
                td.ajuste-border-tabla.texto-left Bajo: no afecta la funcionalidad principal.
                td.ajuste-border-tabla.texto-left Bajo
                td.ajuste-border-tabla.texto-left Baja
                td.texto-left Estandarizar el conjunto de íconos en el siguiente #[i sprint].
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b M-04]
                td.ajuste-border-tabla.texto-left Buscador ineficiente: no ofrece sugerencias durante la escritura.
                td.ajuste-border-tabla 2
                td.ajuste-border-tabla.texto-left Medio: impacta la retención y el uso de recursos.
                td.ajuste-border-tabla.texto-left Alto
                td.ajuste-border-tabla.texto-left Media
                td.texto-left Integrar búsqueda con base de datos optimizada.
        p.mb-5 La valoración del impacto se analiza según indicadores clave de desempeño (KPI), como generación de ingresos, satisfacción del usuario o eficiencia operativa. Asimismo, el esfuerzo técnico se define en coordinación con los equipos de desarrollo y tecnología.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 #[i Checklists] o listas de control
    p.mb-5 Las listas de verificación permiten confirmar si la interfaz cumple condiciones mínimas antes de realizar pruebas con usuarios. Su uso reduce costos y facilita la detección temprana de fallos básicos de diseño. 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img84.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Entre los criterios evaluados se incluyen los siguientes:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Visibilidad del estado del sistema mediante indicadores de carga o progreso.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Prevención de errores en acciones críticas, como confirmaciones antes de eliminar información.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 Consistencia visual y funcional en los elementos interactivos.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Registro de incidencias o bitácora de campo
    p.mb-5 Este instrumento documenta en tiempo real los eventos relevantes observados durante la prueba. A diferencia de la matriz de evaluación, su estructura responde a una narrativa cronológica de la sesión.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Ejemplo de registro de incidentes
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left ID incidente
                th.ajuste-border-tabla.texto-left Descripción del evento
                th.ajuste-border-tabla.texto-left Evidencia u observación
                th.ajuste-border-tabla.texto-left Frecuencia (1-5)
                th.texto-left Severidad (0-4)
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b I-01]
                td.ajuste-border-tabla.texto-left El usuario no identifica el botón de confirmación.
                td.ajuste-border-tabla.texto-left Expresa dudas y desplaza la pantalla varias veces.
                td.ajuste-border-tabla.texto-left 4
                td.texto-left 3
              tr
                td.ajuste-border-tabla.texto-left #[b I-02]
                td.ajuste-border-tabla.texto-left Confusión entre iconos de cierre y retroceso.
                td.ajuste-border-tabla.texto-left Selecciona la opción incorrecta y finaliza el proceso.
                td.ajuste-border-tabla.texto-left 2
                td.texto-left 4
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b I-03]
                td.ajuste-border-tabla.texto-left Error en formato de fecha sin orientación.
                td.ajuste-border-tabla.texto-left El sistema rechaza el dato sin indicar el formato requerido.
                td.ajuste-border-tabla.texto-left 5
                td.texto-left 2
    p.mb-5 La escala de severidad permite clasificar los hallazgos desde observaciones menores hasta fallos que impiden completar la tarea. Posteriormente, el experto analiza consecuencias, formula hipótesis sobre la causa del problema y propone recomendaciones de mejora.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Registro de tareas o métricas de desempeño
    p.mb-5 Este instrumento cuantitativo permite evaluar la eficiencia y la eficacia mediante indicadores como tiempo de ejecución (#[i time on task]), comparación entre ruta ideal y ruta real, número de errores cometidos, nivel de satisfacción y tasa de error por tarea.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Cuestionarios posteriores a la prueba
    p.mb-5 Los cuestionarios permiten medir la percepción del usuario mediante escalas estandarizadas. 
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img86.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Entre los más utilizados se encuentran:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.ajuste---li.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 <strong><em>System Usability Scale (SUS)</em></strong>, compuesto por diez ítems con escala tipo Likert.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 <strong><em>Usability Metric for User Experience (UMUX)</em></strong>, versión abreviada orientada a la satisfacción funcional.
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            | 
            p.mb-0 <strong><em>After-Scenario Questionnaire (ASQ)</em></strong>, aplicado inmediatamente después de cada tarea para registrar reacciones inmediatas.
    .box___style_7.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img87.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Estructura del Cuestionario SUS
          p.mb-0 Se invita a revisar el documento #[b Estructura del Cuestionario SUS], donde se explica el uso, la escala de valoración y el cálculo del puntaje SUS. Este material ofrece #[b orientaciones y ejemplo práctico], con el fin de #[b apoyar la evaluación de usabilidad]. 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Guion del moderador o #[i script] de prueba
    p.mb-5 Documento que estandariza las intervenciones del evaluador para evitar influencias indebidas en el comportamiento del usuario. Incluye técnicas como #[i echoing], que consiste en repetir las expresiones del participante para estimular la verbalización de su experiencia.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Formulario de consentimiento informado y privacidad
    p.mb-5 Instrumento legal y ético mediante el cual el participante autoriza el registro de su interacción, voz o imagen. Debe incluir la cláusula de derecho de retiro, que garantiza la posibilidad de abandonar la prueba en cualquier momento sin consecuencias.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Registro de mapa de navegación o #[i tree testing]
    p.mb-0 Herramienta utilizada para validar la arquitectura de información de manera independiente del diseño visual. Consiste en solicitar al usuario que localice elementos dentro de una estructura jerárquica textual, lo que permite detectar problemas de organización del contenido. La correcta selección y aplicación de estos instrumentos fortalece la rigurosidad metodológica de las pruebas de usabilidad y contribuye a la generación de evidencia confiable para la optimización de productos multimedia.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Informe de resultados y presentación ejecutiva 
    p.mb-5 El informe de resultados constituye el producto final de las pruebas formales de usabilidad. Su propósito es comunicar hallazgos de manera clara, sustentada en evidencia y orientada a la toma de decisiones estratégicas. Un informe eficaz facilita la aprobación de los interesados o del cliente y permite priorizar acciones de mejora sobre el prototipo multimedia. A continuación, se presentan los componentes esenciales que debe integrar este documento.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img74.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Resumen ejecutivo").ajuste-cajaAcordion
            p.mb-3 El resumen ejecutivo sintetiza el estado general de la interfaz y suele ser la sección de mayor impacto en la toma de decisiones directivas. Incluye una metodología breve que describe de forma concisa el tipo de prueba aplicada, por ejemplo, una prueba formal con un número específico de usuarios y perfil determinado. Presenta los principales hallazgos mediante la síntesis de tres a cinco problemas críticos identificados durante la evaluación. Incorpora métricas clave (KPI) como la tasa promedio de éxito en tareas o el puntaje obtenido en la escala #[i System Usability Scale (SUS)]. Finalmente, establece un veredicto que determina si el producto está preparado para su lanzamiento o si requiere ajustes adicionales.
          .row(titulo="Metodología y perfil de usuario").ajuste-cajaAcordion
            p.mb-3 Esta sección sustenta la validez técnica de la prueba al detallar los procedimientos y herramientas empleadas durante la evaluación. Describe las tecnologías o aplicaciones utilizadas, como lectores de pantalla o plataformas de registro de interacción. Explica los escenarios de tarea mediante la caracterización de las actividades ejecutadas por los participantes para evaluar la interfaz. Incluye la ficha de participantes, entendida como un registro anónimo que sintetiza el nivel de competencia digital y la experiencia previa en contextos similares.
          .row(titulo="Análisis de métricas cuantitativas").ajuste-cajaAcordion
            p.mb-3 La usabilidad se fundamenta en datos verificables, por lo cual el informe presenta indicadores numéricos que permiten interpretar el desempeño del sistema. Analiza la eficacia mediante la representación de la tasa de completitud de tareas, generalmente apoyada en gráficos comparativos. Examina la eficiencia a partir del contraste entre el tiempo empleado por los usuarios y el tiempo estimado por expertos. Asimismo, interpreta la satisfacción mediante el análisis del puntaje obtenido en cuestionarios estandarizados como #[i SUS], contrastado con promedios de referencia que permiten contextualizar los resultados.
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Hallazgos detallados por tarea").ajuste-cajaAcordion
            p.mb-3 Esta sección integra evidencia cualitativa que contextualiza los resultados cuantitativos y facilita la comprensión de la experiencia del usuario. Incluye la descripción del problema, es decir, la explicación técnica del fallo identificado durante la ejecución de una tarea. Presenta la evidencia mediante el registro de citas textuales de los participantes o capturas de interacción que respaldan el hallazgo. Expone la frecuencia y severidad al indicar el número de usuarios afectados y el nivel de impacto en el desarrollo de la actividad. Finalmente, incorpora el análisis de causa raíz, orientado a interpretar el origen del problema desde dimensiones como el diseño, el contenido o el funcionamiento del sistema.
          .row(titulo="Matriz de recomendaciones y priorización").ajuste-cajaAcordion
            p.mb-3 Esta matriz organiza las acciones de mejora según su impacto y su viabilidad técnica, lo cual facilita la planificación estratégica del rediseño. Contempla la temporalidad de las intervenciones (corto, mediano o largo plazo), la recomendación específica que se propone implementar, el nivel de severidad o impacto asociado al hallazgo, el costo técnico estimado y la descripción detallada de la solución sugerida, como la optimización de elementos de interfaz, la simplificación de flujos de interacción o el rediseño de la arquitectura de navegación.
          .row(titulo="Conclusiones y próximos pasos").ajuste-cajaAcordion
            p.mb-3 El informe finaliza con una síntesis del impacto general de la experiencia de usuario y con orientaciones para las siguientes iteraciones del producto. Incluye un resumen de la experiencia que describe la percepción global del usuario frente a la interacción con el sistema. Asimismo, presenta un plan de iteración que define el momento oportuno para realizar nuevas pruebas de usabilidad después de implementar las mejoras propuestas, con el fin de asegurar procesos de optimización continúa sustentados en evidencia.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img50.png", alt="" ).m-auto 
    .color___box_1
      .px-5
        p.mb-5 Esta matriz organiza las acciones de mejora según su impacto y su viabilidad técnica, facilitando la planificación estratégica del rediseño.
        .row.justify-content-center
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Matriz de recomendaciones y priorización de usabilidad
            .tabla-a(data-aos="zoom-in").mb-5
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Temporalidad
                    th.ajuste-border-tabla.texto-left Recomendación
                    th.ajuste-border-tabla.texto-left Severidad / Impacto
                    th.ajuste-border-tabla.texto-left Costo técnico
                    th.texto-left Descripción de la solución
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Corto plazo]
                    td.ajuste-border-tabla.texto-left Optimización del botón de descarga
                    td.ajuste-border-tabla.texto-left Moderada
                    td.ajuste-border-tabla.texto-left Bajo
                    td.texto-left Implementar alto contraste cromático, icono descriptivo y ubicación visible.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Corto plazo]
                    td.ajuste-border-tabla.texto-left Simplificación del flujo de registro
                    td.ajuste-border-tabla.texto-left Alta
                    td.ajuste-border-tabla.texto-left Bajo o medio
                    td.texto-left Reducir campos solicitados e integrar indicador de progreso.
                  tr
                    td.ajuste-border-tabla.texto-left #[b Mediano plazo]
                    td.ajuste-border-tabla.texto-left Rediseño de la arquitectura de navegación
                    td.ajuste-border-tabla.texto-left Crítica
                    td.ajuste-border-tabla.texto-left Medio
                    td.texto-left Sustituir menús densos por estructuras jerárquicas laterales.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Largo plazo]
                    td.ajuste-border-tabla.texto-left Módulo de seguimiento individual
                    td.ajuste-border-tabla.texto-left Nueva funcionalidad
                    td.ajuste-border-tabla.texto-left Alto
                    td.texto-left Incorporar panel personalizado con indicadores de avance y logros.
        p.mb-5 A continuación, se presenta un ejemplo de dashboard que sintetiza los resultados del análisis cuantitativo de usabilidad, destacando indicadores de desempeño, tiempos de ejecución, nivel de satisfacción y prioridades de mejora.
        .row.justify-content-center
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 5.
              span Ejemplo dashboard del análisis cuantitativo de usabilidad
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img88.png', alt='Ilustración tipo dashboard de usabilidad que presenta indicadores de eficacia con gráficos de barras por tareas (registro, navegación, evaluación y descarga), métricas de eficiencia con comparación de tiempo esperado y real, medidor de satisfacción SUS con puntuación 74, listado de insights clave y sección de prioridades de mejora. ').m-auto
</template>

<script>
export default {
  name: 'Tema5',
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
