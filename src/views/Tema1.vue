<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Interactividad en proyectos multimedia
    p.mb-5 Este apartado aborda los fundamentos de la interactividad en proyectos multimedia, con énfasis en los tipos de interacción, los componentes interactivos más utilizados y su aporte a la estructura funcional del producto. Además, se analiza la relación entre las acciones del usuario y los elementos de interfaz que responden a dichas acciones, en coherencia con los lineamientos de producción de contenidos digitales establecidos institucionalmente.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto de interactividad en proyectos multimedia
    p.mb-5 La interactividad se define como la capacidad de un producto multimedia para permitir la participación activa del usuario, la toma de decisiones y la recepción de retroalimentación inmediata por parte del sistema. Este concepto trasciende el simple uso del clic e involucra la manera en que el usuario navega, selecciona, manipula y controla los elementos del contenido digital (Norman, 2011). 
    .box___style_3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img1.png', alt='').m-auto
        .col-xl
          p.mb-3 Una interactividad bien diseñada contribuye al logro de diversos propósitos pedagógicos y funcionales, entre los cuales se destacan los siguientes:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Favorece la comprensión del contenido.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Facilita el cumplimiento de objetivos de aprendizaje o de navegación.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Reduce la carga cognitiva durante la experiencia de uso.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Permite la personalización de recorridos dentro del entorno digital.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Incrementa la motivación y el compromiso del usuario.
    p.mb-0 En este sentido, la interactividad constituye un componente esencial en productos como cursos e-learning, simuladores, aplicaciones #[i web], recursos educativos digitales, kioscos interactivos y experiencias híbridas que integran fotografía, animación y video. 
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tipos de interacción digital
    p.mb-5 Los proyectos multimedia requieren distintos niveles de interacción según sus objetivos pedagógicos, el perfil del usuario, el dispositivo de acceso y las condiciones de accesibilidad. En el diseño de experiencias interactivas se identifican los siguientes tipos de interacción digital más frecuentes:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Interacción básica
                p.mb-0 Incluye acciones simples orientadas al control elemental del contenido. Se manifiesta mediante clics, uso de botones, funciones de reproducción o pausa y navegación lineal entre pantallas o secciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Interacción exploratoria
                p.mb-0 Permite al usuario descubrir información de forma progresiva. Integra componentes como sliders, acordeones, galerías, menús desplegables y #[i hotspots], que facilitan la exploración autónoma del contenido.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Interacción transformativa
                p.mb-0 Genera cambios directos en el estado o en la presentación del contenido. Se implementa a través de formularios que modifican información, paneles dinámicos o variaciones de estado que responden a decisiones del usuario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Interacción inmersiva
                p.mb-0 Propicia experiencias de mayor involucramiento cognitivo y sensorial. Incluye la manipulación de objetos tridimensionales, experiencias de realidad aumentada (AR) y entornos virtuales simples orientados a la simulación o experimentación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 Esta tipología permite comprender que la selección del nivel de interacción debe responder a criterios pedagógicos y funcionales claros, garantizando coherencia entre la experiencia de usuario, la intencionalidad formativa del recurso y las condiciones tecnológicas del contexto de uso.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Elementos interactivos fundamentales
    p.mb-5 En los productos multimedia se emplean diversos componentes que permiten gestionar la interacción del usuario con los contenidos digitales. Estos elementos cumplen funciones de navegación, organización de información, registro de acciones y transformación de estados dentro de la interfaz. A continuación, se presenta una organización comparativa de los elementos interactivos más utilizados en el diseño multimedia.
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Botones").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Activan acciones específicas como navegar entre pantallas, iniciar videos o enviar formularios. Pueden presentar estados como #[b normal], #[i hover] (cuando el cursor pasa sobre el elemento), #[b activo y deshabilitado], lo que facilita la retroalimentación funcional al usuario.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img7.png', alt='').m-auto 
          .row(titulo="Acordeones").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Agrupan contenido expandible y contribuyen a la organización de información extensa. Favorecen la reducción del desplazamiento en pantalla y permiten jerarquizar secciones temáticas dentro de una misma interfaz.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img8.png', alt='').m-auto 
          .row(titulo="<em>Sliders</em>").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Permiten desplazar imágenes o bloques de información mediante flechas de navegación o acciones de arrastre. Se emplean para presentar contenidos secuenciales de manera dinámica.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img9.png', alt='').m-auto 
          .row(titulo="Galería").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Organizan imágenes o videos en colecciones navegables. Facilitan el acceso estructurado a recursos visuales y contribuyen a la exploración progresiva del contenido.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img10.png', alt='').m-auto 
          .row(titulo="<em>Hotspots</em>").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Zonas activas ubicadas sobre imágenes o ilustraciones que activan información contextual adicional. Favorecen la exploración guiada y la comprensión de elementos complejos.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img11.png', alt='').m-auto 
          .row(titulo="Formularios").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Componentes clave para recopilar datos del usuario, activar rutas de navegación personalizadas o generar procesos de retroalimentación automática dentro del sistema.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img12.png', alt='').m-auto 
          .row(titulo="Menús").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Estructuran la navegación global del producto multimedia. Pueden configurarse como menús superiores, laterales, tipo hamburguesa o mediante módulos secuenciales que orientan el recorrido formativo.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img13.png', alt='').m-auto 
          .row(titulo="Bases de datos (nivel básico)").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Permiten almacenar información esencial como el progreso del usuario, las respuestas registradas o los estados de interacción dentro de la experiencia digital.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img14.png', alt='').m-auto 
          .row(titulo="Marcadores y <em>tracking</em>").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Registran el avance del usuario, los elementos consultados y las interacciones realizadas, lo que posibilita la personalización del recorrido y el seguimiento del proceso formativo.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img15.png', alt='').m-auto 
          .row(titulo="Objetos 3D").ajuste-cajaAcordion
            .col-xl-7.mb-4
              p.mb-0 Integran experiencias interactivas de mayor complejidad. Estos elementos pueden rotarse, escalarse o manipularse, favoreciendo procesos de exploración espacial y comprensión técnica.
            .col-xl-5.mb-3
              figure
                img(src='@/assets/curso/temas/img16.png', alt='').m-auto 
    p.mb-0 La adecuada selección e integración de estos elementos contribuye a la coherencia funcional del producto multimedia y fortalece la experiencia de interacción en función de los objetivos pedagógicos y comunicativos del proyecto.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Comportamientos, estados y retroalimentación
    p.mb-5 Los elementos interactivos deben responder de manera clara, coherente y consistente a las acciones del usuario. La retroalimentación constituye un componente esencial del diseño de interacción, ya que permite comprender las consecuencias de cada acción dentro del entorno digital. Los productos multimedia integran diversos tipos de retroalimentación, que pueden clasificarse de la siguiente manera:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Visual")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img17.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Visual
            p.mb-0 Se manifiesta mediante cambios de color, variaciones de tamaño o efectos de sombreado en los componentes. Permite identificar de forma inmediata la activación o modificación de un elemento interactivo.
      .py-3.py-md-4(titulo="Auditiva")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img18.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Auditiva
            p.mb-0 Integra sonidos discretos de confirmación que acompañan determinadas acciones del usuario. Refuerza la percepción de respuesta del sistema sin generar saturación sensorial.
      .py-3.py-md-4(titulo="Textual")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img19.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Textual
            p.mb-0 Consiste en mensajes breves generados por el sistema para informar resultados, confirmar procesos o indicar estados. Contribuye a la claridad comunicativa en la interacción.
      .py-3.py-md-4(titulo="Funcional")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img20.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Funcional
            p.mb-0 Implica cambios de estado del componente, como la activación, desactivación o transformación de su comportamiento dentro del flujo de navegación.
    p.mb-5 Una retroalimentación adecuada aporta beneficios significativos en la experiencia de usuario. Entre los más relevantes se encuentran los siguientes:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img21.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Informa con precisión lo ocurrido tras una acción.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img21.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Reduce la incertidumbre durante la interacción.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img21.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Disminuye la probabilidad de errores recurrentes.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img21.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Fortalece la percepción de control sobre el entorno digital.
    p.mb-0 Por ejemplo, cuando un botón cambia de color e incorpora el mensaje “#[b Guardado]”, se reduce la duda respecto al éxito de la acción ejecutada.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Interacción y navegación
    p.mb-5 La interactividad se integra estrechamente con la estructura de navegación del producto multimedia. Por esta razón, el diseño de interacción debe garantizar coherencia funcional y facilitar el recorrido del usuario dentro del entorno digital. Los principios que orientan la relación entre interacción y navegación se sintetizan de la siguiente manera:
    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img23.png' ).m-auto
            h4.mb-3.estilo-text Consistencia entre pantallas
            p.mb-5.text-center Mantener la misma lógica de funcionamiento en los componentes interactivos favorece la comprensión del entorno digital.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img24.png' ).m-auto
            h4.mb-3.estilo-text Patrones predecibles
            p.mb-5.text-center La repetición de estructuras de interacción permite anticipar acciones y reduce la carga cognitiva del usuario.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img25.png' ).m-auto
            h4.mb-3.estilo-text Adaptabilidad a dispositivos
            p.mb-5.text-center La interacción debe responder adecuadamente a distintos tamaños de pantalla y formas de uso, como dispositivos móviles o equipos de escritorio.
          .tarjeta.color-acento-botones
            .row.justify-content-center.mb-3
              .col-12
                img(src='@/assets/curso/temas/img26.png' ).m-auto
            h4.mb-3.estilo-text Acceso a pantallas clave
            p.mb-5.text-center Facilitar el regreso a secciones principales mejora la orientación dentro del producto multimedia.
        p.mb-0 Una navegación confusa incrementa la carga cognitiva y dificulta el logro de los objetivos de aprendizaje o consulta (Rivera Loaiza, Baeza-Yates y Velasco Martín, 2024).
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Interactividad y accesibilidad 
    p.mb-5 La accesibilidad constituye un criterio transversal en el diseño de experiencias interactivas. Aunque este tema se desarrolla con mayor profundidad en apartados posteriores, es importante introducir algunos principios esenciales que orientan la integración de elementos interactivos inclusivos. Los componentes interactivos deben cumplir las siguientes condiciones básicas para garantizar la accesibilidad:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Operabilidad mediante teclado")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img27.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Operabilidad mediante teclado
            p.mb-0 Todos los componentes deben poder activarse sin depender exclusivamente del uso del ratón o de gestos táctiles complejos.
      .py-3.py-md-4(titulo="Etiquetas descriptivas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img28.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Etiquetas descriptivas
            p.mb-0 Los elementos interactivos requieren denominaciones claras que faciliten su comprensión mediante tecnologías de asistencia.
      .py-3.py-md-4(titulo="Contrastes adecuados")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img29.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Contrastes adecuados
            p.mb-0 El diseño visual debe garantizar diferencias suficientes entre fondo y contenido para favorecer la lectura y la identificación de estados.
    p El cumplimiento de estos criterios permite que personas con discapacidad visual, motriz o cognitiva puedan interactuar de manera efectiva con el producto multimedia (W3C, 2025). De esta forma, la integración de interactividad y accesibilidad contribuye a la construcción de entornos digitales inclusivos y pedagógicamente pertinentes.
    p.mb-5 Se invita a explorar la maquetación básica de componentes interactivos en HTML mediante la construcción guiada de una pantalla sencilla para un recurso educativo:
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Maquetación básica de componentes interactivos en HTML.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
