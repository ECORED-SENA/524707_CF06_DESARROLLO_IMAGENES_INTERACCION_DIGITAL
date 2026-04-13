<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Accesibilidad digital (WCAG 2.1)
    p.mb-5 El propósito de esta unidad es presentar los fundamentos de la accesibilidad digital aplicados a proyectos multimedia. Se analizan los principios, las normativas y las técnicas que permiten que los contenidos resulten perceptibles, operables, comprensibles y robustos para toda la población. Asimismo, se introduce el marco de referencia WCAG 2.1 y su aplicación práctica en interfaces, elementos interactivos, materiales audiovisuales y recursos educativos digitales. Los principales elementos de la accesibilidad digital se estructuran en la siguiente organización comparativa:
    .color___box_2
      .px-5
        .row.justify-content-center
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 7.
              span Elementos de la accesibilidad digital
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Principio de accesibilidad
                    th.ajuste-border-tabla.texto-left Descripción
                    th.texto-left #[i Checklist]
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Inclusión visual]
                    td.ajuste-border-tabla.texto-left Facilita el acceso para personas con discapacidad visual mediante recursos de apoyo en la interfaz
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Lectores de pantalla optimizados
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Contraste cromático elevado
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Texto alternativo en imágenes
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Inclusión auditiva]
                    td.ajuste-border-tabla.texto-left Proporciona alternativas al contenido sonoro para garantizar comprensión del mensaje
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Subtítulos en materiales audiovisuales
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Transcripciones de audio
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Notificaciones visuales complementarias
                  tr
                    td.ajuste-border-tabla.texto-left #[b Inclusión motora]
                    td.ajuste-border-tabla.texto-left Permite la interacción mediante dispositivos o métodos distintos al uso convencional del ratón
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Navegación mediante teclado
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Atajos configurables
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Evitar límites de tiempo restrictivos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Inclusión cognitiva]
                    td.ajuste-border-tabla.texto-left Promueve la claridad estructural y conceptual del contenido para facilitar la comprensión
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Lenguaje sencillo
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Diseño intuitivo
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Reducción de estímulos distractores
                  tr
                    td.ajuste-border-tabla.texto-left #[b Texto alternativo y descripciones]
                    td.ajuste-border-tabla.texto-left Garantiza que los elementos no textuales cuenten con información descriptiva contextual
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Descripciones precisas
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Uso adecuado de texto alternativo
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Contextualización del contenido visual
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Tamaño de texto y tipografía]
                    td.ajuste-border-tabla.texto-left Asegura condiciones de legibilidad en diferentes dispositivos y contextos de uso
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Tipografías limpias tipo #[i sans-serif]
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Tamaño ajustable
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Contraste suficiente
                  tr
                    td.ajuste-border-tabla.texto-left #[b Apoyo a la navegación]
                    td.ajuste-border-tabla.texto-left Orienta al usuario dentro de la estructura del contenido digital
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Menús comprensibles
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Indicadores de foco visibles
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Evitar componentes ocultos sin señalización
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Asistencia y documentación]
                    td.ajuste-border-tabla.texto-left Proporciona soporte accesible para resolver dudas o dificultades de interacción
                    td.texto-left 
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Área de ayuda accesible
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Canales de soporte
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | Documentación clara y organizada
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 ¿Qué es la accesibilidad digital?
    p.mb-5 La accesibilidad digital consiste en diseñar y desarrollar productos multimedia que puedan ser utilizados por todas las personas, incluidas aquellas con discapacidad visual, auditiva, cognitiva, motriz o sensorial. Este enfoque busca eliminar barreras de interacción y garantizar condiciones equitativas de acceso a la información y a los servicios digitales. Según el #[i World Wide Web Consortium] (W3C, 2018), la accesibilidad permite que los usuarios puedan:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img89.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Percibir la información presentada en el entorno digital.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img89.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Operar los elementos interactivos de manera autónoma.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img89.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Comprender el contenido y el comportamiento del sistema.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img89.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center Acceder a los recursos en distintos contextos tecnológicos.
    p.mb-5 En este sentido, la accesibilidad no constituye un elemento adicional del diseño, sino un componente esencial de la calidad del producto multimedia.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Relación entre usabilidad y accesibilidad digital
    p.mb-5 Los principios de usabilidad analizados previamente se centran en la facilidad general de uso, mientras que la accesibilidad amplía este enfoque al garantizar que personas con diversas capacidades puedan interactuar efectivamente con el sistema. Las heurísticas de experiencia de usuario y los principios de accesibilidad digital se articulan en la siguiente relación:
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 8.
          span Relación entre principios de usabilidad y accesibilidad digital
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Heurística de UX (Nielsen)
                th.ajuste-border-tabla.texto-left Principio de accesibilidad digital
                th.texto-left Relación o complemento
            tbody
              tr
                td.ajuste-border-tabla.texto-left #[b Visibilidad del estado del sistema]
                td.ajuste-border-tabla.texto-left Apoyo a la navegación e inclusión visual
                td.texto-left La claridad del estado del sistema se fortalece mediante indicadores accesibles y menús comprensibles
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Correspondencia con el mundo real]
                td.ajuste-border-tabla.texto-left Inclusión cognitiva
                td.texto-left Ambos enfoques promueven lenguaje sencillo y estructuras intuitivas
              tr
                td.ajuste-border-tabla.texto-left #[b Prevención de errores]
                td.ajuste-border-tabla.texto-left Ayuda para reconocer y recuperar errores
                td.texto-left La accesibilidad incorpora mensajes comprensibles y formatos alternativos de orientación
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Consistencia y estándares]
                td.ajuste-border-tabla.texto-left Tamaño de texto y descripciones alternativas
                td.texto-left La coherencia del diseño se refleja en criterios de legibilidad y uniformidad descriptiva
              tr
                td.ajuste-border-tabla.texto-left #[b Control y libertad del usuario]
                td.ajuste-border-tabla.texto-left Inclusión motora
                td.texto-left La posibilidad de deshacer acciones se complementa con navegación flexible mediante distintos dispositivos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Reconocimiento antes que recuerde]
                td.ajuste-border-tabla.texto-left Apoyo a la navegación
                td.texto-left Las opciones visibles reducen la carga cognitiva y favorecen el acceso inclusivo
              tr
                td.ajuste-border-tabla.texto-left #[b Flexibilidad y eficiencia de uso]
                td.ajuste-border-tabla.texto-left Inclusión motora e inclusión auditiva
                td.texto-left Los atajos y flujos eficientes se relacionan con el uso de múltiples formas de interacción
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Diseño estético y minimalista]
                td.ajuste-border-tabla.texto-left Inclusión cognitiva
                td.texto-left La reducción de estímulos innecesarios facilita la comprensión y la orientación
              tr
                td.ajuste-border-tabla.texto-left #[b Ayuda para reconocer y recuperarse de errores]
                td.ajuste-border-tabla.texto-left Inclusión visual y auditiva
                td.texto-left Los mensajes de orientación deben estar disponibles en formatos accesibles
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left #[b Ayuda y documentación]
                td.ajuste-border-tabla.texto-left Asistencia y documentación
                td.texto-left Ambos principios coinciden en ofrecer soporte claro y contextual para el usuario
    p.mb-0 La integración de usabilidad y accesibilidad fortalece la calidad de los productos multimedia y contribuye al desarrollo de experiencias digitales inclusivas y funcionales.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Normatividad y estándares
    p.mb-5 La accesibilidad digital se fundamenta en marcos normativos internacionales que orientan el diseño y desarrollo de productos multimedia inclusivos. Estos estándares establecen criterios técnicos que permiten garantizar condiciones de acceso equitativas para diversos perfiles de usuario. Las principales referencias normativas en accesibilidad digital se integran en la siguiente síntesis:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="WCAG 2.1 - <em>Web Content Accessibility Guidelines</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img90.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 WCAG 2.1 - #[i Web Content Accessibility Guidelines]
            p.mb-3 Conjunto de pautas desarrolladas por el #[i World Wide Web Consortium (W3C)] que establecen criterios para que los contenidos digitales resulten perceptibles, operables, comprensibles y robustos. Estas pautas se organizan en tres niveles de conformidad: 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | <strong>A</strong> correspondiente a requisitos mínimos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | <strong>AA</strong> considerado el estándar recomendado para la mayoría de organizaciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | <strong>AAA</strong> asociado a un nivel avanzado de accesibilidad.
      .py-3.py-md-4(titulo="ISO/IEC 40500")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img91.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 ISO/IEC 40500
            p.mb-0 Norma internacional que constituye el equivalente técnico de WCAG 2.0 y proporciona lineamientos formales para la implementación de criterios de accesibilidad en entornos digitales.
    p.mb-5 En contextos educativos y formativos, el nivel #[b AA] suele adoptarse como referencia principal para el diseño de interfaces y recursos multimedia, ya que equilibra viabilidad técnica y alcance inclusivo.
    .box___style_7.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img87.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 ISO / IEC 40500:2025 (Accesibilidad web)
          p.mb-0 Se invita a consultar el estándar #[b ISO/IEC 40500:2025], publicado en septiembre de 2025, que presenta lineamientos actualizados sobre accesibilidad web. Ideal para #[b diseño y evaluación de productos digitales inclusivos].
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://www.iso.org/obp/ui/en/#iso:std:iso-iec:40500:ed-2:v1:en')" target="_blank" type="website")
            span Abrir web
            i.fas.fa-external-link
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 La inclusión digital como política de Estado
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img92.png', alt="" ).m-auto
      .col-xl
        p La accesibilidad digital en Colombia se ha consolidado como un componente estratégico de política pública orientado a garantizar el ejercicio efectivo de los derechos fundamentales. En este contexto, el Gobierno Nacional, a través del Ministerio de Tecnologías de la Información y las Comunicaciones, promueve acciones encaminadas a eliminar barreras que limitan el acceso de las personas con discapacidad a la información, la educación, el empleo y los servicios institucionales.
        .row
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img93.svg', alt="" ).m-auto
          .col-xl
            p.mb-0 Bajo la iniciativa #[b TIC sin barreras], se impulsa una estrategia integral que busca fortalecer la autonomía de esta población en el entorno digital. Esta política articula la provisión de herramientas tecnológicas, la formación en competencias digitales y la adaptación de plataformas públicas conforme a estándares internacionales de accesibilidad (Presidencia de la República de Colombia, 2026). En el marco de esta política se han implementado diversas líneas de acción, las cuales se sintetizan a continuación:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Masificación de #[i software] especializado
                p.mb-0 Implementación de licencias nacionales que permiten el acceso gratuito a herramientas de apoyo tecnológico para personas con discapacidad, facilitando su participación en entornos digitales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img94.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estándares de accesibilidad web
                p.mb-0 Emisión de lineamientos y decretos que obligan a las entidades públicas a garantizar la accesibilidad de sus portales institucionales conforme a pautas internacionales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Capacitación y alfabetización digital
                p.mb-0 Desarrollo de programas formativos orientados al fortalecimiento de habilidades tecnológicas en población con discapacidad visual, auditiva, física o cognitiva.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Inclusión en zonas rurales
                p.mb-0 Entrega de equipos con #[i software] adaptado en territorios apartados y municipios priorizados, con el fin de reducir brechas de acceso digital.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img97.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Reseña normativa
    p.mb-5 El marco jurídico colombiano establece disposiciones específicas para la protección y promoción de los derechos de las personas con discapacidad en el ámbito digital. A continuación, se presentan las principales referencias legales relacionadas con esta política:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img59.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Constitución Política de Colombia (Artículo 13)").ajuste-cajaAcordion
            p.mb-3 Establece la obligación del Estado de promover condiciones que garanticen la igualdad real y efectiva, con especial protección para personas en situación de vulnerabilidad.
          .row(titulo="Ley 1618 de 2013").ajuste-cajaAcordion
            p.mb-3 Define medidas para asegurar el pleno ejercicio de los derechos de las personas con discapacidad. Incluye disposiciones orientadas al acceso a la información y a la fijación de estándares de accesibilidad en sitios web estatales.
          .row(titulo="Ley 1346 de 2009").ajuste-cajaAcordion
            p.mb-3 Incorpora al ordenamiento jurídico colombiano la Convención de las Naciones Unidas sobre los derechos de las personas con discapacidad, fortaleciendo la garantía de inclusión y participación en entornos digitales.
    p.mb-0 La consolidación de la accesibilidad digital como política pública contribuye al desarrollo de entornos tecnológicos inclusivos, al fortalecimiento de la participación ciudadana y a la reducción de brechas sociales en el acceso a la información.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Los principios POUR (base de WCAG 2.1)
    p.mb-5 Los principios POUR constituyen la base conceptual de las pautas de accesibilidad WCAG 2.1. Estos principios establecen que todo contenido digital debe ser perceptible, operable, comprensible y robusto, garantizando así condiciones de interacción inclusiva para diversos perfiles de usuario. Estos principios y sus implicaciones en el diseño de productos multimedia se estructuran en la siguiente organización comparativa:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Perceptible")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img98.svg', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Perceptible
            p.mb-3 La información debe presentarse de forma que pueda ser percibida a través de uno o varios sentidos. Esto implica incorporar texto alternativo en imágenes, subtítulos en materiales audiovisuales, contraste cromático adecuado y estructuras claras de contenido.
      .py-3.py-md-4(titulo="Operable")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img99.svg', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Operable
            p.mb-3 Los usuarios deben poder interactuar con el sistema sin bloqueos o barreras funcionales. Se incluyen condiciones como navegación mediante teclado, disponibilidad de tiempo suficiente para ejecutar acciones, controles accesibles y prevención de contenidos que puedan generar efectos adversos.
      .py-3.py-md-4(titulo="Comprensible")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img100.svg', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Comprensible
            p.mb-3 La interfaz debe facilitar la interpretación del contenido y del comportamiento del sistema. Esto requiere el uso de lenguaje sencillo, mensajes coherentes, controles previsibles y retroalimentación clara en situaciones de error.
      .py-3.py-md-4(titulo="Robusto")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img101.svg', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Robusto
            p.mb-3 El contenido debe funcionar correctamente en diferentes navegadores, dispositivos y tecnologías de asistencia. Esto incluye compatibilidad con lectores de pantalla, navegadores alternativos, dispositivos móviles y configuraciones de visualización adaptadas.
    .box___style_7.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img87.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Recursos y conformidad 
          p.mb-0 A continuación, se presentan algunos criterios y ejemplos de #[b recursos digitales accesibles], orientados a garantizar su conformidad con los principios POUR y los niveles establecidos por las WCAG.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .box___style_7.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img87.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Guía WCAG
          p.mb-0 Se invita a consultar la #[b guía WCAG], donde se presentan orientaciones prácticas para comprender y aplicar los criterios de accesibilidad web. Ideal para #[b diseño, evaluación y mejora de contenidos digitales inclusivos].
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="(' https://guia-wcag.com/es/')" target="_blank" type="website")
            span Abrir web
            i.fas.fa-external-link
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Prácticas esenciales para accesibilidad en multimedia
    p.mb-5 La accesibilidad constituye una dimensión de calidad técnica que garantiza la incorporación efectiva de los principios POUR en los productos multimedia. En este sentido, el diseño accesible no debe considerarse un complemento posterior, sino un criterio transversal que orienta la producción de contenidos digitales inclusivos.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Accesibilidad para imágenes
    p.mb-5 Las imágenes en entornos multimedia cumplen funciones comunicativas que pueden aportar significado o generar distracciones. Por ello, su tratamiento accesible resulta fundamental para asegurar la comprensión del contenido. La accesibilidad en los recursos visuales implica considerar las siguientes prácticas esenciales:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso de textos alternativos descriptivos (#[i alt text])
                p El texto alternativo debe transmitir la función o el mensaje de la imagen, no únicamente su apariencia física. Si la imagen es decorativa, el atributo debe mantenerse vacío para que las tecnologías de asistencia la ignoren.
                p.mb-0 Por ejemplo, utilizar una descripción que indique un incremento del 20 % en ventas en lugar de una referencia genérica al gráfico.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img102.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Evitar texto incrustado en imágenes
                p.mb-0 El texto convertido en imagen no puede redimensionarse sin pérdida de calidad ni ser interpretado adecuadamente por tecnologías de asistencia. Se recomienda emplear texto real sobre fondos gráficos mediante estilos de presentación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img103.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Garantizar contraste adecuado
                p.mb-0 Es necesario asegurar relaciones de contraste mínimas entre texto y fondo para favorecer la legibilidad. Por ejemplo, evitar combinaciones de baja luminancia, como texto gris claro sobre fondo blanco.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img104.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso de gráficos vectoriales accesibles (SVG)
                p.mb-0 Los recursos vectoriales deben incluir etiquetas de descripción estructural que permitan su interpretación por tecnologías de asistencia y navegadores.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img105.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Accesibilidad para video y audio
    p.mb-5 Los contenidos audiovisuales basados en secuencias temporales requieren alternativas sincronizadas que permitan su comprensión desde diferentes formas de percepción sensorial. La accesibilidad en los recursos audiovisuales se fortalece mediante las siguientes prácticas esenciales:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Subtítulos sincronizados (<em>closed captions</em>)")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img106.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Subtítulos sincronizados (#[i closed captions])
            p.mb-0 Deben incluir no solo el diálogo, sino también sonidos relevantes, cambios de entonación o identificación de interlocutores. Esto facilita la comprensión integral del contenido audiovisual.
      .py-3.py-md-4(titulo="Transcripciones textuales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img107.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Transcripciones textuales
            p.mb-0 Documentos que describen el contenido sonoro y visual permiten acceder a la información en formatos alternativos, especialmente útiles para personas con sordoceguera o con limitaciones de conectividad.
      .py-3.py-md-4(titulo="Audio claro y controlable")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img108.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Audio claro y controlable
            p.mb-0 El sonido ambiental no debe interferir con la voz principal. Se recomienda mantener diferencias de intensidad que favorezcan la inteligibilidad y ofrecer controles sencillos para ajustar o desactivar la música de fondo.
      .py-3.py-md-4(titulo="Audiodescripción (<em>audio description</em>)")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img109.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Audiodescripción (#[i audio description])
            p.mb-0 Pista adicional que narra los elementos visuales relevantes durante pausas del diálogo, facilitando la comprensión del contenido por parte de personas con discapacidad visual.
    p.mb-5 La aplicación sistemática de estas prácticas contribuye a consolidar productos multimedia inclusivos, mejora la experiencia de interacción y favorece el cumplimiento de estándares internacionales de accesibilidad digital.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Accesibilidad para navegación y estructura
    .box___style_3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img110.png', alt='').m-auto
        .col-xl
          p.mb-3 La navegación constituye la estructura que permite al usuario interactuar con el entorno digital de manera fluida y sin barreras. Un diseño accesible debe garantizar que todos los elementos funcionales puedan utilizarse mediante diferentes formas de interacción y que la organización del contenido favorezca la orientación. Se presentan las prácticas esenciales relacionadas con la accesibilidad en la navegación y en la estructura de la interfaz:
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Acceso mediante teclado").ajuste-cajaAcordion
            p.mb-3 Todos los elementos interactivos, como enlaces, botones o campos de entrada, deben poder activarse únicamente con el uso de teclas como #[b Tab, Enter] o #[b barra espaciadora]. Esto permite la interacción de personas que utilizan dispositivos alternativos que simulan pulsaciones de teclado.
          .row(titulo="Orden lógico del enfoque (<em>focus order</em>)").ajuste-cajaAcordion
            p.mb-3 El recorrido del foco debe coincidir con la jerarquía visual del contenido. Por ejemplo, en formularios organizados en columnas, el desplazamiento debe realizarse de izquierda a derecha y luego de arriba hacia abajo.
          .row(titulo="Indicadores visibles de selección").ajuste-cajaAcordion
            p.mb-3 Los elementos enfocados deben mantener señales visuales claras que orienten al usuario durante la navegación por teclado. Se recomienda emplear bordes o resaltados de alto contraste que indiquen la posición actual dentro de la interfaz.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Accesibilidad para formularios
    p.mb-5 El formulario constituye un punto crítico de conversión y recolección de datos dentro de los productos multimedia. La aplicación de criterios de accesibilidad en estos componentes reduce la probabilidad de abandono de la tarea y mejora la comprensión del proceso por parte del usuario. La accesibilidad en los formularios digitales se fortalece mediante las siguientes prácticas esenciales:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_8.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img111.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Etiquetas claras y vinculadas (#[i label])
            p.mb-0 Cada campo debe incluir una etiqueta textual asociada mediante el atributo #[b #[i for]], lo que permite posicionar el cursor en el campo al seleccionar el texto. Esta relación facilita la interpretación por tecnologías de asistencia y mejora la interacción.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_8.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img112.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Mensajes de error comprensibles
            p.mb-0.text-center La retroalimentación debe ser textual, específica y orientada a la solución. No basta con indicar el error mediante cambios de color; es necesario explicar la causa y sugerir la acción correctiva.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .box___style_8.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img113.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Controles amplios para uso táctil
            p.mb-0.text-center Los elementos interactivos deben contar con áreas de activación mínimas cercanas a 44 x 44 píxeles para reducir errores en dispositivos móviles y facilitar la interacción mediante gestos táctiles.
    p.mb-5 El siguiente código corresponde a un ejemplo de estructura de formulario accesible con etiquetas correctamente vinculadas.
    .row.justify-content-center.mb-5
      .col-xl-9
        .code-window(data-aos="zoom-in")
          .window-header
            span.dot.red
            span.dot.yellow
            span.dot.green
          pre.ajuste___pre_1
            code.
              &lt;h1&gt;Formulario de Contacto (Ejemplo Accesible)&lt;/h1&gt;
              &lt;form&gt;
                  &lt;div class="campo-formulario"&gt;
                      &lt;label for="nombre_completo"&gt;Nombre Completo:&lt;/label&gt;
                      &lt;input type="text" id="nombre_completo" name="nombre_completo" required&gt;
                  &lt;/div&gt;

                  &lt;div class="campo-formulario"&gt;
                      &lt;label for="correo_electronico"&gt;Correo Electrónico:&lt;/label&gt;
                      &lt;input type="email" id="correo_electronico" name="correo_electronico" required&gt;
                  &lt;/div&gt;

                  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
              &lt;/form&gt;
    p.mb-5 La integración de estas prácticas contribuye a fortalecer la operabilidad, facilita la comprensión del proceso de diligenciamiento y mejora la experiencia de interacción en entornos digitales accesibles.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Accesibilidad para elementos interactivos
    p.mb-5 La accesibilidad en los elementos interactivos adquiere un carácter técnico en entornos dinámicos como las aplicaciones de una sola página (SPA). En estos escenarios, los componentes deben comunicar claramente su estado funcional y permitir la interacción mediante diferentes dispositivos o tecnologías de asistencia. La accesibilidad en los componentes interactivos se fortalece mediante las siguientes prácticas fundamentales:
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Estados visibles y estructurales").ajuste-cajaAcordion
            p Los componentes deben indicar si se encuentran activos, deshabilitados, presionados o expandidos. Esto puede lograrse mediante cambios visuales y atributos accesibles. 
            p.mb-3 #[b Por ejemplo], un menú tipo acordeón puede modificar su icono y actualizar el atributo #[b aria-expanded="true"] al desplegar el contenido.
          .row(titulo="Nombres accesibles mediante atributos ARIA").ajuste-cajaAcordion
            p Cuando un elemento interactivo carece de texto visible, es necesario asignar un nombre accesible mediante aria-label. Esto permite que los lectores de pantalla identifiquen la función del componente. 
            p.mb-0 #[b Ejemplo:]
            p.mb-3 &lt;button aria-label="Cerrar ventana" onclick="myDialog.close()"&gt;X&lt;/button&gt;
          .row(titulo="Equivalencia funcional sin dependencia exclusiva del ratón").ajuste-cajaAcordion
            p Las acciones basadas en eventos asociados al puntero deben contar con alternativas activables mediante teclado. 
            p.mb-3 #[b Por ejemplo], los mensajes emergentes que aparecen al situar el cursor sobre un elemento también deben activarse al recibir el foco.
    .box___style_7.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img87.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Atributo #[i aria-label]
          p.mb-0 Se invita a consultar el recurso sobre el atributo #[b #[i aria-label]], donde se explica su uso para mejorar la accesibilidad en interfaces web mediante la correcta identificación de elementos interactivos. 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label')" target="_blank" type="website")
            span Abrir web
            i.fas.fa-external-link
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img85.svg" style="max-width: 60px").m-auto
      .col
        h3 Prácticas adicionales enfocadas en la accesibilidad
    p.mb-5 Además de los criterios anteriores, existen estrategias estructurales que fortalecen la navegación inclusiva y la adaptación del contenido a distintos contextos de uso:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img114.svg', alt='' style="max-width: 100px")
          .col
            h2 Regiones de contenido (#[i landmarks])
        p.mb-0 El uso de etiquetas semánticas como &lt;main&gt;, &lt;nav&gt;, &lt;header&gt; o &lt;footer&gt; permite a los usuarios de lectores de pantalla desplazarse rápidamente entre secciones del contenido.
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img115.svg', alt='' style="max-width: 100px")
          .col
            h2 Adaptación al aumento de tamaño (#[i reflow])
        p.mb-0 El diseño debe permitir ampliar el contenido hasta aproximadamente un 400 % sin generar desplazamiento horizontal ni pérdida de información relevante. Esto favorece la legibilidad y la accesibilidad en diferentes dispositivos.
    p.mb-0 La aplicación sistemática de estas prácticas contribuye a mejorar la operabilidad, optimiza la experiencia de interacción y fortalece el cumplimiento de estándares internacionales de accesibilidad digital.
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.6 Técnicas de adaptación
    p.mb-5 En accesibilidad avanzada no se diseña únicamente para una discapacidad específica. Se busca construir interfaces flexibles que se adapten a las preferencias y necesidades técnicas de cada persona usuaria. A continuación, se presentan algunas técnicas comunes de adaptación en entornos digitales:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Contraste elevado y sensibilidad lumínica
                p No se limita al cumplimiento del ratio mínimo de contraste. Implica diseñar considerando baja visión, daltonismo o fotofobia, e integrar soporte para modos de contraste forzado definidos por el sistema operativo. 
                p.mb-0 Por ejemplo, incorporar un interruptor que permita alternar entre modo claro, modo oscuro y alto contraste.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img116.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Modos de lectura simplificada
                p Consiste en eliminar elementos distractores como animaciones o paneles secundarios, facilitando la concentración en el contenido principal. 
                p.mb-0 Un ejemplo es el uso correcto de la etiqueta semántica &lt;article&gt; para permitir la activación del modo de lectura nativo del navegador.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img117.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Compatibilidad con lectores de pantalla
                p.mb-0 Requiere asegurar que el árbol de accesibilidad corresponda con la estructura visual del documento. Esto implica el uso de atributos ARIA para comunicar estados dinámicos, como el progreso en la carga de un archivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img118.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 A continuación, se presenta un fragmento de código asociado al uso de atributos accesibles en elementos interactivos.
    .row.justify-content-center.mb-5
      .col-xl-10
        .code-window(data-aos="zoom-in")
          .window-header
            span.dot.red
            span.dot.yellow
            span.dot.green
          pre.ajuste___pre_1
            code.
              &lt;button 
                  type="button" 
                  class="btn-download" 
                  role="button" 
                  aria-label="Descargar material de estudio en PDF"&gt;
                      &lt;svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"&gt;&lt;/svg&gt;
              &lt;/button&gt;
    p.mb-5 La accesibilidad avanzada en productos multimedia se fortalece mediante otras técnicas de adaptación como las siguientes:
    .fit___width_final
      .fondo___slider
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Multiplicidad sensorial
                  p.mb-0 Aplica el enfoque del Diseño Universal para el Aprendizaje al presentar información mediante distintos canales perceptivos. Por ejemplo, en un examen con tiempo límite puede presentarse una alerta visual, acompañada de un aviso sonoro y un mensaje textual anunciado por tecnologías de asistencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img119.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alternativas para contenido no textual
                  p Proporcionar equivalentes para elementos complejos como gráficos estadísticos, mapas de calor o infografías. En nivel avanzado, esto incluye descripciones de larga duración (#[b #[i aria-describedby]]) que detallan datos complejos que un #[b #[i alt]] corto no puede cubrir.
                  p.mb-0 Un ejemplo consiste en incluir una tabla con los valores exactos debajo de un gráfico estadístico.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img120.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Enlaces de salto (#[i skip links])
                  p Permiten acceder directamente al contenido principal al navegar con teclado, evitando recorrer repetidamente los menús de navegación.
                  p.mb-0 Por ejemplo, al presionar #[b #[i Tab]] por primera vez, aparece un botón que dice "Saltar al contenido principal".
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img121.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reducción de movimiento
                  p.mb-0 Consiste en respetar la configuración del sistema que limita animaciones, lo cual favorece a personas con sensibilidad vestibular. Por ejemplo, un carrusel puede permanecer estático cuando esta preferencia está activada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img122.png', alt='' style="max-width: 500px").m-auto
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
