export default {
  global: {
    Name: 'Publicación y optimización de productos multimedia interactivos',
    Description:
      'Este componente aborda el diseño de interactividad, la definición de flujos y la construcción de acciones del usuario, al tiempo que desarrolla habilidades para aplicar pruebas de usabilidad y accesibilidad. A través de ejemplos prácticos se exploran componentes interactivos, principios de evaluación y técnicas para optimizar prototipos multimedia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Interactividad en proyectos multimedia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de interactividad en proyectos multimedia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de interacción digital',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elementos interactivos fundamentales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Comportamientos, estados y retroalimentación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Interacción y navegación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Interactividad y accesibilidad ',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Guion de interactividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué es un guion de interactividad?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes del guion de interactividad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Flujos interactivos y navegación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Retroalimentaciones y microestados interactivos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Representación del guion: tabla técnica ',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Principios de usabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de usabilidad en productos multimedia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Eficacia, eficiencia y satisfacción',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Reglas de usabilidad de Jakob Nielsen',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Leyes cognitivas aplicadas a la interacción',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Señales de usabilidad deficiente',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Usabilidad aplicada a elementos interactivos ',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pruebas formales de usabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '¿Qué son las pruebas formales de usabilidad?',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Preparación de una prueba formal de usabilidad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Métodos formales de evaluación de usabilidad ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Instrumentos utilizados en pruebas de usabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Instrumentos de evaluación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Informe de resultados y presentación ejecutiva ',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Accesibilidad digital (WCAG 2.1)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: '¿Qué es la accesibilidad digital?',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Normatividad y estándares',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'La inclusión digital como política de estado',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Principios POUR',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Prácticas esenciales para accesibilidad en multimedia',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Técnicas de adaptación',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Herramientas para revisión de accesibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Herramientas automáticas',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Herramientas de contraste',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Herramientas asistidas',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Revisión manual básica de accesibilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aria',
      significado:
        'atributos que mejoran la accesibilidad de interfaces <em>web</em> para tecnologías de asistencia. estándar WAI-ARIA.',
    },
    {
      termino: '<em>Backend</em>',
      significado:
        'parte del sistema que gestiona la lógica, los datos y los procesos internos.',
    },
    {
      termino: '<em>Dom</em>',
      significado:
        'se refiere al modelo de objetos del documento (<em>document object model</em>), la estructura jerárquica en árbol que el navegador crea al interpretar el <em>HTML</em> de una <em>web</em>. las tecnologías asistidas, como lectores de pantalla, interpretan este árbol para comprender el contenido, el orden y el propósito.',
    },
    {
      termino: '<em>Frontend</em>',
      significado:
        'parte visual e interactiva del producto digital con la que interactúa el usuario.',
    },
    {
      termino: '<em>Hover</em>',
      significado:
        'estado visual que se activa cuando el cursor se posiciona sobre un elemento interactivo.',
    },
    {
      termino: 'Líneas braille',
      significado:
        'dispositivos que convierten texto digital en caracteres braille táctiles.',
    },
    {
      termino: '<em>Sprints</em>',
      significado:
        'ciclos cortos de trabajo usados para organizar el desarrollo iterativo de un producto.',
    },
    {
      termino: 'Trastornos vestibulares',
      significado:
        'condiciones que afectan el equilibrio y pueden generar mareo ante movimientos o animaciones.',
    },
    {
      termino: '<em>Ux</em>',
      significado:
        'experiencia global del usuario al interactuar con un producto digital.',
    },
    {
      termino: '<em>Trigger</em>',
      significado:
        'evento o acción que activa una respuesta del sistema en una interacción.',
    },
    {
      termino: 'Prototipo',
      significado:
        'versión funcional o simulada de un producto para evaluar interactividad y usabilidad.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'grado en que un producto puede ser usado con eficacia, eficiencia y satisfacción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Garrett, J. J. (2011). The elements of user experience: user-centered design for the web and beyond (2.ª ed.). New Riders.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). ISO 9241-11:2018 ergonomics of human-system interaction — part 11: usability: definitions and concepts. ',
      link: ' https://www.iso.org/standard/63500.html',
    },
    {
      referencia:
        'Morgan, K. (2004). Information visualization: perception for design (2nd ed.). Morgan Kaufmann.',
      link: '',
    },
    {
      referencia:
        'Nielsen, J. (1994). Usability engineering. Morgan Kaufmann. ',
      link: 'https://www.nngroup.com/books/usability-engineering/',
    },
    {
      referencia: 'Norman, D. A. (2011). Living with complexity. MIT Press. ',
      link: 'https://www.nngroup.com/books/living-with-complexity/',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2026). TIC sin barreras. ',
      link: 'https://ticsinbarreras.mintic.gov.co/',
    },
    {
      referencia:
        'Rivera Loaiza, C., Baeza-Yates, R., y Velasco Martín, J. (2024). Arquitectura de la información y usabilidad en la web. ',
      link: 'https://doi.org/10.1080/13866710412331291886',
    },
    {
      referencia:
        'Tidwell, J. (2005). Designing interfaces: patterns for effective interaction design. O’Reilly Media.',
      link: '',
    },
    {
      referencia:
        'World Wide Web Consortium. (2025). Web content accessibility guidelines (WCAG) 2.1. ',
      link: 'https://www.w3.org/TR/WCAG21/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
