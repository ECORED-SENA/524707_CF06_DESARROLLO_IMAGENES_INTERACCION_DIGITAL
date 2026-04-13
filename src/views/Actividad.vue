<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Diseño interactivo, evaluación de experiencias multimedia y accesibilidad',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, métodos y procedimientos relacionados con la interactividad, el guion de interactividad, la usabilidad, la accesibilidad digital y las pruebas formales, aplicados al análisis y mejora de productos multimedia.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'La interactividad se define como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uso de animaciones decorativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad del sistema para responder a acciones del usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La estética visual del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La velocidad de carga del contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal de los estados de un botón (<em>hover</em>, activo, deshabilitado)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar la interfaz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Indicar cambios visuales sin función.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicar el comportamiento del elemento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el número de <em>clics</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Un acordeón se utiliza principalmente para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar información extensa de forma progresiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar los menús.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutar validaciones de formulario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mostrar animaciones automáticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En un guion de interactividad, la “acción del usuario” describe:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diseño visual de la pantalla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El evento técnico del <em>backend</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La retroalimentación del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El comportamiento esperado del usuario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué elemento NO hace parte de un guion de interactividad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estados del elemento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retroalimentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rutas alternativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Paleta cromática.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Un flujo interactivo ramificado se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar rutas según decisiones del usuario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ser completamente lineal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No permitir navegación libre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar retroalimentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Los <em>triggers</em> del sistema se activan cuando:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El usuario mueve el cursor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se completa una condición interna.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se presiona una tecla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se carga una imagen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'La usabilidad, según ISO 9241-11, se relaciona con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Apariencia visual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Accesibilidad técnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eficacia, eficiencia y satisfacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Compatibilidad de navegadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es un indicador típico de usabilidad deficiente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exceso de clics para tareas simples.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Colores institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso de íconos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interfaces con animación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La Ley de Hick indica que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los botones grandes son más fáciles de usar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Más opciones aumentan el tiempo de decisión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El usuario recuerda siete elementos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El foco debe ser visible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Una evaluación heurística se caracteriza por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser realizada únicamente con usuarios finales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir tiempos de tarea.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar accesibilidad técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar principios de usabilidad por expertos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es el objetivo principal de las pruebas con usuarios?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Confirmar comportamiento real del usuario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Validar el diseño visual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar código <em>backend</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medir contraste de color.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'De acuerdo con la Ley 1618 de 2013, ¿cuál es una de las responsabilidades específicas del Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) para garantizar los derechos de las personas con discapacidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ampliar el tamaño de los elementos en pantalla hasta 16 veces para personas con baja visión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Funcionar como un intérprete en línea de Lengua de Señas Colombiana (LSC) para trámites bancarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Convertir el texto de la pantalla en voz, permitiendo que personas ciegas utilicen el computador de forma autónoma.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Subtitular automáticamente videos de cine y televisión en tiempo real para personas sordas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'El recorrido cognitivo evalúa principalmente:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El rendimiento del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La estética del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La facilidad de aprendizaje del usuario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El cumplimiento legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Un registro de incidencias se utiliza para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Crear prototipos a partir de registros históricos de usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir contraste.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar interfaces.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Documentar eventos y problemas observados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'El cuestionario SUS permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir accesibilidad técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar flujos interactivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Crear <em>wireframes</em> a partir de retroalimentación y mejoras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar satisfacción general del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Durante una prueba, varios usuarios dudan antes de hacer clic en “Confirmar” porque el botón es visualmente similar a “Cancelar”. ¿Qué principio de usabilidad se está violando?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prevención de errores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Visibilidad del estado del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Consistencia y estándares.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconocimiento mejor que recuerdo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Un formulario solicita 15 campos obligatorios antes de permitir el acceso al contenido principal. ¿Cuál impacto de usabilidad se presenta principalmente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Baja eficacia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Baja eficiencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Falta de accesibilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Error técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Un usuario navega solo con teclado y queda atrapado en un modal sin poder salir. ¿Qué tipo de problema se evidencia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Error visual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Falta de contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trampa de foco.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'En una comparación entre dos versiones, la versión B reduce errores en un 45 %. ¿Para qué se utiliza esta evidencia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Justificar decisiones basadas en datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cambiar la identidad visual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar pruebas futuras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el alcance del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
