/**
 * =============================================================================
 * METADATOS Y CONTENIDO DE LA PRESENTACIÓN — SISTEMAS DE INFORMACIÓN (TIG 2026)
 * Universidad Nacional del Comahue — CURZAS
 * Licenciatura en Recursos Humanos
 * Exposición de Trabajos Prácticos: Actividades 6, 8 y 9
 * Duración: 5 Minutos (300 Segundos)
 * Autores: Héctor Daniel Ayarachi Fuentes & Andrea Alejandra Díaz
 * =============================================================================
 */

const PRESENTACION_DATA = {
  meta: {
    institucion: "Universidad Nacional del Comahue",
    sede: "Complejo Universitario Regional Zona Atlántica y Sur (CURZAS)",
    carrera: "Licenciatura en Recursos Humanos",
    materia: "Tecnologías de la Información para la Gestión",
    titulo: "Exposición de Trabajos Prácticos de Sistemas de Información",
    subtitulo: "Desarrollo y sistematización de las Actividades 6, 8 y 9 para la Wiki de la cátedra",
    autores: [
      {
        nombre: "Héctor Daniel Ayarachi Fuentes",
        titulo: "Tec. Sup. en Recursos Humanos",
        legajo: "CURZA-8284",
        dni: "35.492.138",
        rol: "Expositor",
        avatar: "👨‍💼",
        clase: "autor-hector",
        rolClase: "role-expositor"
      },
      {
        nombre: "Andrea Alejandra Díaz",
        titulo: "Estudiante Lic. en Recursos Humanos",
        legajo: "CURZA-7229",
        dni: "27.786.409",
        rol: "Expositora",
        avatar: "👩‍💼",
        clase: "autor-alejandra",
        rolClase: "role-expositora"
      }
    ],
    equipoActividad6: [
      "Hector Daniel Ayarachi Fuentes",
      "Andrea Alejandra Díaz",
      "Ileana Avendaño",
      "Lucas Curaqueo"
    ],
    ano: "2026",
    lugar: "Viedma, Río Negro",
    modalidad: "Exposición Grupal (5 Minutos)"
  },

  timing: {
    totalMinutos: 5,
    totalSegundos: 300,
    alertaAmarillaMinutos: 3.5, // 03:30 min (quedan 1:30)
    alertaRojaMinutos: 4.5       // 04:30 min (quedan 30s)
  },

  // 6 Estaciones para el Dock Superior
  estaciones: [
    { numero: 1, etiqueta: "Carátula", tooltip: "Filmina 1: Carátula e Introducción" },
    { numero: 2, etiqueta: "Act. 6 (Mapeo)", tooltip: "Filmina 2: Actividad 6 - Mapeo Sistémico Organizacional (Catriel)" },
    { numero: 3, etiqueta: "Act. 8 (Diagnóstico)", tooltip: "Filmina 3: Actividad 8 - Ficha de Diagnóstico de Información" },
    { numero: 4, etiqueta: "Act. 8 (Rediseño)", tooltip: "Filmina 4: Actividad 8 - Ficha de Rediseño de Información" },
    { numero: 5, etiqueta: "Act. 9 (Pirámide)", tooltip: "Filmina 5: Actividad 9 - Pirámide Organizacional y Tipos de Sistemas" },
    { numero: 6, etiqueta: "Cierre", tooltip: "Filmina 6: Conclusiones para Recursos Humanos" }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // 6 FILMINAS COMPLETAS Y ESTRUCTURADAS (DATOS COMPLETOS DE LOS INFORMES PDF)
  // ═══════════════════════════════════════════════════════════════════════════
  slides: [
    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 1: CARÁTULA OFICIAL Y HOJA DE RUTA (~30 segundos)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_1",
      numero: 1,
      tipo: "caratula",
      bloque: "CARÁTULA OFICIAL",
      badge: "INICIO • 5 MINUTOS",
      esCaratula: true,
      tiempoEstimado: "0:00 - 0:30 (30s)",
      titulo: "Sistemas de Información para la Gestión",
      subtitulo: "Cómo resolvimos las Actividades 6, 8 y 9 para completar la Wiki de la materia",
      autores: [
        {
          nombre: "Héctor Daniel Ayarachi Fuentes",
          titulo: "Tec. Sup. en Recursos Humanos",
          legajo: "CURZA-8284",
          dni: "35.492.138",
          rol: "Expositor",
          avatar: "👨‍💼",
          clase: "autor-hector",
          rolClase: "role-expositor"
        },
        {
          nombre: "Andrea Alejandra Díaz",
          titulo: "Estudiante Lic. en Recursos Humanos",
          legajo: "CURZA-7229",
          dni: "27.786.409",
          rol: "Expositora",
          avatar: "👩‍💼",
          clase: "autor-alejandra",
          rolClase: "role-expositora"
        }
      ],
      puntosClave: [
        "<strong>Objetivo:</strong> Contarles en 5 minutos cómo desarrollamos las tres prácticas solicitadas por la cátedra para completar la Wiki.",
        "<strong>Actividad 6:</strong> Mapeo Sistémico Organizacional en el Hospital «Cecilia Grierson» de Catriel (TGS con Ileana y Lucas).",
        "<strong>Actividad 8:</strong> Ficha de Diagnóstico de Información Organizacional en Ecomoda S.A. (las 5 preguntas de gestión).",
        "<strong>Actividad 8:</strong> Ficha de Rediseño de Información Organizacional en Ecomoda S.A. (ERP Cloud, Cero Papel y automatización).",
        "<strong>Actividad 9:</strong> Pirámide Organizacional y Tipos de Sistemas en Ecomoda S.A. (TPS, MIS y DSS anti-fraude)."
      ],
      metadatosFooter: "CURZAS · UNCo • Licenciatura en Recursos Humanos • Exposición de Trabajos Prácticos",
      guionOrador: "Buenas tardes a todos. Con Andrea les vamos a contar en 5 minutos cómo resolvimos las tres prácticas para la wiki. Arrancamos con el Mapeo Sistémico Organizacional del Hospital de Catriel viendo cómo el entorno petrolero complica la llegada de médicos. Luego abordamos la Ficha de Diagnóstico y Rediseño de Información Organizacional en Ecomoda S.A., y finalizamos con la Pirámide Organizacional y Tipos de Sistemas para alinear toda la jerarquía.",
      gif: {
        url: "assets/gifs/1.mp4",
        placeholderTitulo: "Video 1: Apertura e Identidad del Equipo",
        placeholderDesc: "Animación de portada con los nombres de Héctor y Alejandra.",
        placeholderIcon: "🎓",
        caption: "Figura 1: Presentación oficial del equipo y apertura — Héctor y Alejandra."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 2: ACTIVIDAD 6 — MAPEO SISTÉMICO ORGANIZACIONAL (~45 segundos)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_2",
      numero: 2,
      tipo: "catriel_matrix",
      bloque: "ACTIVIDAD 6 · MAPEO SISTÉMICO ORGANIZACIONAL",
      badge: "ACTIVIDAD 6 • MAPEO SISTÉMICO ORGANIZACIONAL",
      tiempoEstimado: "0:30 - 1:15 (45s)",
      titulo: "Actividad 6: Mapeo Sistémico Organizacional",
      subtitulo: "Hospital Área Programa Catriel • Aplicación de la TGS al ingreso de personal de salud bajo Leyes 1904 y 1844",
      catrielData: {
        equipoMencion: "Trabajo en equipo con nuestros compañeros Ileana Avendaño y Lucas Curaqueo.",
        marcoNormativo: "Hospital Cecilia Grierson (Catriel) • Leyes Provinciales N° 1904 (Salud) y N° 1844 (Administración).",
        componentes: [
          {
            badge: "El Entorno",
            clase: "badge-entorno",
            titulo: "Lo que no podemos controlar",
            cuerpo: "<strong>El contexto petrolero:</strong> Las empresas petroleras pagan sueldos altísimos que triplican el salario público y encarecen mucho los alquileres. Además, Catriel queda a 150 km de los centros urbanos y faltan especialistas médicos en todo el país."
          },
          {
            badge: "Límites de RRHH",
            clase: "badge-limites",
            titulo: "Lo que el hospital sí maneja",
            cuerpo: "<strong>Decisiones directas del hospital:</strong> Qué puestos hacen falta, cómo armar los perfiles de búsqueda, las entrevistas, los psicotécnicos, la inducción al ingresar y la gestión de viviendas institucionales para que los profesionales se queden."
          },
          {
            badge: "Entradas",
            clase: "badge-entradas",
            titulo: "Lo que ingresa al circuito",
            cuerpo: "<strong>Insumos del proceso:</strong> Currículums de la convocatoria provincial (vía mail oficial), títulos y matrículas médicas. En lo económico: presupuesto del Tesoro Provincial más lo recaudado por obras sociales (Fondo SAMI)."
          },
          {
            badge: "El Proceso",
            clase: "badge-proceso",
            titulo: "Las 6 etapas de selección",
            pasos: [
              "1. Cada servicio médico pide formalmente la vacante que necesita.",
              "2. Convocatoria pública provincial y local.",
              "3. Revisión de currículums y verificación de matrícula habilitada.",
              "4. Entrevistas técnicas y psicotécnico con foco en arraigo patagónico.",
              "5. Examen de aptitud física ante la Junta Médica Provincial.",
              "6. Ingreso al hospital, firma de alta y entrega de llaves de vivienda."
            ]
          },
          {
            badge: "Salidas",
            clase: "badge-salidas",
            titulo: "El resultado del trabajo",
            cuerpo: "<strong>Médico en funciones:</strong> Profesional cubriendo guardias y emergencias las 24 horas; menos pacientes derivados de urgencia hacia el Alto Valle (Cipolletti/Roca/Neuquén); y su alta formal en el legajo y la ART."
          },
          {
            badge: "Retroalimentación",
            clase: "badge-feedback",
            titulo: "Aprender y corregir",
            cuerpo: "<strong>Aprender de lo que pasa:</strong> Evaluamos el desempeño a los 3 y 6 meses. Si un médico renuncia rápido por los alquileres caros o el aislamiento, el hospital retroalimenta la búsqueda: prioriza candidatos con arraigo patagónico y refuerza la ayuda con vivienda."
          }
        ]
      },
      puntosClave: [
        "<strong>Trabajo en Equipo:</strong> Lo hicimos junto a nuestros compañeros <em>Ileana Avendaño y Lucas Curaqueo</em>, analizando el hospital rionegrino bajo las Leyes 1904 y 1844.",
        "<strong>El Entorno Petrolero:</strong> Los sueldos petroleros triplican la escala pública y disparan los alquileres, haciendo difícil que los médicos se radiquen.",
        "<strong>Lo que RRHH Controla:</strong> Perfiles de búsqueda, entrevistas, inducción formal y módulos habitacionales para darles techo.",
        "<strong>Las 6 Etapas:</strong> Relevamiento ➔ Convocatoria ➔ Revisión de CVs ➔ Entrevistas y psicotécnico ➔ Junta médica ➔ Alta y entrega de vivienda.",
        "<strong>El Feedback Clave:</strong> Si hay renuncias tempranas, el circuito aprende: se ajusta el perfil buscando arraigo y se mejora el incentivo de vivienda."
      ],
      metadatosFooter: "Actividad 6 • Mapeo Sistémico Organizacional • Hospital de Catriel (Leyes 1904 y 1844)",
      guionOrador: "En la Actividad 6, que desarrollamos junto a Ileana y Lucas bajo el título de Mapeo Sistémico Organizacional, analizamos cómo contrata médicos el Hospital de Catriel. El gran problema que encontramos es el contexto petrolero: la plata del petróleo hace que los alquileres sean imposibles para un sueldo público. Por eso, el sistema no termina cuando el médico firma el contrato: si no se le da vivienda o no se siente acompañado, renuncia a los meses. Ahí es clave la retroalimentación: aprender por qué se van para mejorar las próximas búsquedas.",
      gif: {
        url: "assets/gifs/2.mp4",
        placeholderTitulo: "Video 2: Circuito Sistémico del Hospital de Catriel",
        placeholderDesc: "Animación ilustrativa del circuito: Entradas, Proceso de Selección y Retroalimentación.",
        placeholderIcon: "🏥",
        caption: "Figura 2: Mapeo de entradas, transformación y feedback correctivo en Catriel."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 3: ACTIVIDAD 8 — FICHA DE DIAGNÓSTICO (~1m 15s)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_3",
      numero: 3,
      tipo: "ecomoda_diagnostico",
      bloque: "ACTIVIDAD 8 · FICHA DE DIAGNÓSTICO",
      badge: "ACTIVIDAD 8 • FICHA DE DIAGNÓSTICO",
      tiempoEstimado: "1:15 - 2:30 (75s)",
      titulo: "Actividad 8: Ficha de Diagnóstico de Información Organizacional",
      subtitulo: "Ecomoda S.A. • Matriz diagnóstica de las 5 preguntas cotidianas de gestión de la cátedra",
      ecomodaDiagData: {
        preguntas: [
          {
            num: "Pregunta 1",
            titulo: "¿Dónde se guardan los datos?",
            falla: "<strong>Archivos aislados en disquetes y en la PC de Betty:</strong> Cada área guarda sus datos por su cuenta sin compartir nada. Los números reales están encerrados en la computadora de Betty ('la cueva'). Hacen balances dobles (el real con deudas y el maquillado para bancos) guardados en disquetes sin respaldo ni seguridad. En el taller anotan telas en cuadernos y en RRHH los legajos están desordenados.",
            propuesta: "Una base de datos única para que todos vean la misma información real, sin planillas escondidas ni disquetes."
          },
          {
            num: "Pregunta 2",
            titulo: "¿Qué equipos y programas usan?",
            falla: "<strong>Máquinas viejas con Windows 98 y ¡balances en Paint!:</strong> No tienen red interna ni sistema contable formal. Usan planillas Excel sueltas. Betty retoca los gráficos del Balance en Microsoft Paint. Patricia borra archivos importantes por no saber usar la computadora.",
            propuesta: "Renovar las computadoras, conectarlas en red y poner un sistema específico para la industria textil."
          },
          {
            num: "Pregunta 3",
            titulo: "¿Cómo se comunican las oficinas?",
            falla: "<strong>Memos en moto, teléfono saturado y chismes de pasillo:</strong> Freddy tiene que llevar papeles de un piso a otro en moto. El conmutador de Aura María colapsa porque Patricia pasa horas en llamadas personales a Miami. Armando da órdenes a los gritos por el intercomunicador y la gente se entera de todo por el 'Radio Pasillo' del Cuartel.",
            propuesta: "Reemplazar el papel por una intranet con trámites digitales, teléfonos IP y avisos oficiales de RRHH."
          },
          {
            num: "Pregunta 4",
            titulo: "¿Quiénes cargan y usan los datos?",
            falla: "<strong>Betty tapada de trabajo y favoritismo en RRHH:</strong> Betty carga el 90% de los números trabajando 14 horas por día (agotamiento total). Patricia cobra sueldo pero no carga nada. Saúl Gutiérrez cambia las llegadas tarde a dedo según si le cae bien la persona. La Junta Directiva toma decisiones mirando papeles que nadie puede verificar.",
            propuesta: "Darle a cada empleado un usuario con permisos claros: operarias marcan telas en pantalla táctil, RRHH valida faltas objetivamente y los directivos miran tableros con datos reales."
          },
          {
            num: "Pregunta 5",
            titulo: "¿Qué normas o reglas se siguen?",
            falla: "<strong>Decisiones sin control, empresa fantasma y acomodo:</strong> Armando gasta más de lo autorizado sin que nadie lo frene. No hay manuales de procedimientos. Inventan la empresa fantasma 'Terramoda' para ocultar las deudas y embargar a Ecomoda. En contrataciones, entró Patricia por amistad mientras a Betty la escondieron en un rincón por prejuicios.",
            propuesta: "Manuales de procedimientos claros, selección de personal por mérito y prohibición estricta de crear empresas paralelas o falsear balances.",
            esDestacada: true
          }
        ],
        evidenciasAuditoria: {
          hallazgoPaint: "Dato llamativo: Betty retoca el Balance General en MS Paint sobre Windows 98 porque no tienen software contable.",
          casoProduccion: "Caso Producción (Vestido Lombardi): Se desperdició un 180% más de tela de lo planeado y la ganancia cayó del 35% al 6%.",
          casoHorarios: "Caso Horarios: Patricia llegó 42 horas tarde en el mes sin descuento, mientras Betty acumuló 68 horas extras sin cobrar."
        }
      },
      puntosClave: [
        "<strong>1. Dónde se guardan los datos:</strong> En la PC privada de Betty ('la cueva'), disquetes magnéticos sin copia y balances dobles (el real y el maquillado para bancos).",
        "<strong>2. Equipos y Programas:</strong> Computadoras obsoletas, planillas Excel aisladas y ¡Betty retocando el Balance General a mano alzada en MS Paint!",
        "<strong>3. Comunicación:</strong> Memos en papel que viajan en moto con Freddy, teléfono colapsado con llamadas a Miami y el 'Radio Pasillo' del Cuartel como única fuente.",
        "<strong>4. Carga y Uso:</strong> Betty sobrecargada trabajando 14 horas al día, Saúl cambiando asistencias a dedo y directivos decidiendo a ciegas.",
        "<strong>5. Normas y Falla Crítica:</strong> Cero manuales escritos, contrataciones por acomodo (Patricia) y creación clandestina de la empresa fantasma <em>Terramoda</em>."
      ],
      metadatosFooter: "Actividad 8 · Ficha de Diagnóstico de Información Organizacional • Ecomoda S.A.",
      guionOrador: "En la Actividad 8 completamos la Ficha de Diagnóstico de Información Organizacional en Ecomoda respondiendo a las 5 preguntas que nos dio la cátedra. Descubrimos que la información era un caos total: Betty guardaba los costos reales solo en su computadora, armaban balances falsos en disquetes y hasta los retocaban en Paint. Las órdenes viajaban en moto con Freddy o a los gritos con Armando, y la gente dependía de los chismes del Cuartel para saber qué pasaba. Además, en Recursos Humanos se manejaban con puro favoritismo, explotando a Betty con 14 horas de trabajo al día.",
      gif: {
        url: "assets/svg/slide3_ecomoda_caos.svg",
        placeholderTitulo: "Esquema Isométrico: Silos y Caos en Ecomoda",
        placeholderDesc: "Ilustración isométrica: PC en 'la cueva', balances en Paint, disquetes y radio pasillo.",
        placeholderIcon: "📁",
        caption: "Figura 3: Diagnóstico isométrico: datos aislados, doble contabilidad y falta de canales formales."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 4: ACTIVIDAD 8 — FICHA DE REDISEÑO (~1 minuto)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_4",
      numero: 4,
      tipo: "ecomoda_rediseno",
      bloque: "ACTIVIDAD 8 · FICHA DE REDISEÑO",
      badge: "ACTIVIDAD 8 • FICHA DE REDISEÑO",
      tiempoEstimado: "2:30 - 3:30 (60s)",
      titulo: "Actividad 8: Ficha de Rediseño de Información Organizacional",
      subtitulo: "Ecomoda S.A. • Soluciones integrales bajo las 3 miradas y 3 requerimientos automáticos",
      ecomodaRedesignData: {
        miradas: [
          {
            tipo: "Mirada Tecnológica",
            clase: "mirada-tecnologica",
            icono: "💻",
            titulo: "Software y Tablero Central",
            puntos: [
              "<strong>Sistema de Gestión Integrado (ERP):</strong> Una base de datos central en la nube donde cada movimiento queda registrado al instante y nadie puede borrar o cambiar datos a escondidas.",
              "<strong>Tablero para la Presidencia:</strong> Una pantalla en tiempo real dividida en 4 áreas: Finanzas (plata disponible vs. deudas), Producción (avance de prendas y tela desperdiciada), Ventas (pedidos confirmados) y RRHH (asistencia real por huella digital)."
            ]
          },
          {
            tipo: "Mirada Organizacional",
            clase: "mirada-organizacional",
            icono: "👥",
            titulo: "Personas y Capacitación",
            puntos: [
              "<strong>Pantallas fáciles en el taller:</strong> Pusimos pantallas táctiles simples para Doña Inés y las costureras con lector de código de barras para medir telas sin papeleo.",
              "<strong>Capacitación para todos:</strong> Clases de computación para Patricia y el Cuartel de las Feas, para que dejen de cometer errores y aprendan a usar el nuevo sistema.",
              "<strong>Tablets y nuevo rol para Betty:</strong> Le dimos una tablet a Freddy para envíos con firma digital, y nombramos a Betty como Líder de Datos para ordenar la empresa."
            ]
          },
          {
            tipo: "Mirada Administrativa",
            clase: "mirada-administrativa",
            icono: "📋",
            titulo: "Reglas y Cero Papel",
            puntos: [
              "<strong>Política Cero Papel:</strong> Chau memos de papel y anotaciones a mano; todos los pedidos y aprobaciones se hacen por sistema con firma digital.",
              "<strong>Regla Anti-Terramoda:</strong> Se prohibió terminantemente por estatuto crear empresas fantasma o llevar doble contabilidad, bajo pena de despido y denuncia penal.",
              "<strong>Ingreso por Capacidad (Mérito):</strong> Exámenes y entrevistas objetivas en RRHH para terminar con los acomodos y favoritismos del Dr. Gutiérrez."
            ]
          }
        ],
        pedidosSistema: [
          {
            num: "Pedido 1",
            titulo: "Límite de Gastos Automático",
            desc: "El sistema bloquea solo cualquier orden de compra o tela importada que supere el presupuesto aprobado por la Junta Directiva."
          },
          {
            num: "Pedido 2",
            titulo: "Sueldos por Huella Digital",
            desc: "El reloj biométrico calcula las llegadas tarde y horas extras exactas, sin que RRHH pueda cambiarlas a dedo ni con favoritismo."
          },
          {
            num: "Pedido 3",
            titulo: "Balances Automáticos y Sin Trampas",
            desc: "El balance contable se genera en el momento desde las compras y ventas reales, sin retoques manuales en Paint ni disquetes ocultos."
          }
        ]
      },
      puntosClave: [
        "<strong>1. Mirada Tecnológica (ERP en la Nube):</strong> Base de datos única donde todos ven lo mismo y Tablero Directivo en 4 cuadrantes (Finanzas, Taller, Ventas y Personal).",
        "<strong>2. Mirada Organizacional (Capacitar y Dignificar):</strong> Pantallas táctiles para Doña Inés, clases de informática para Patricia y tablet con firma para Freddy.",
        "<strong>3. Mirada Administrativa (Cero Papel y Mérito):</strong> Eliminación de notas en papel, prohibición penal de empresas truchas como Terramoda e ingreso por mérito.",
        "<strong>3 Pedidos Automáticos al Sistema:</strong> 1. Bloqueo de gastos excesivos ➔ 2. Liquidación de sueldos por huella digital ➔ 3. Balances automáticos auditados."
      ],
      metadatosFooter: "Actividad 8 · Ficha de Rediseño de Información Organizacional • Ecomoda S.A.",
      guionOrador: "Para rediseñar Ecomoda completamos la Ficha de Rediseño de Información Organizacional con soluciones en tres áreas: tecnología con ERP en la nube y Tablero Ejecutivo; personas capacitando a Doña Inés, Patricia y Freddy; y administración con política Cero Papel y sanción penal a empresas fantasma como Terramoda.",
      gif: {
        url: "assets/svg/slide4_ecomoda_rediseno.svg",
        placeholderTitulo: "Esquema Isométrico: ERP Cloud & Cero Papel",
        placeholderDesc: "Ilustración isométrica del ERP en la nube, Dashboard de presidencia y meritocracia.",
        placeholderIcon: "🔄",
        caption: "Figura 4: Rediseño isométrico: base de datos única (SSOT), workflows digitales y pedidos automatizados."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 5: ACTIVIDAD 9 — PIRÁMIDE ORGANIZACIONAL Y TIPOS DE SISTEMAS (~1m)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_5",
      numero: 5,
      tipo: "ecomoda_piramide",
      bloque: "ACTIVIDAD 9 · PIRÁMIDE ORGANIZACIONAL Y TIPOS DE SISTEMAS",
      badge: "ACTIVIDAD 9 • PIRÁMIDE Y TIPOS DE SISTEMAS",
      tiempoEstimado: "3:30 - 4:30 (60s)",
      titulo: "Actividad 9: Pirámide Organizacional y Tipos de Sistemas",
      subtitulo: "Ecomoda S.A. • Alineación jerárquica de sistemas (TPS, MIS y DSS) y principio GIGO",
      piramideData: {
        niveles: [
          {
            nivel: "Nivel Superior / Estratégico (Cúspide)",
            clase: "tier-estrategico",
            badge: "Cúspide • Nivel Estratégico (DSS)",
            sistema: "DSS: Sistema de Apoyo a Decisiones",
            roles: "<strong>Quiénes están:</strong> Armando Mendoza (Presidencia) y los miembros de la Junta Directiva (Roberto Mendoza, Daniel Valencia, Marcela Valencia).",
            entradasYSalidas: "<strong>Qué reciben y qué deciden:</strong> Reciben tableros con ganancias reales, valor del dólar para telas y deudas bancarias. Con eso simulan qué pasa si aumentan los precios o bajan las ventas. <em>Al tener los datos directos del sistema, Armando jamás hubiera podido inventar la empresa fantasma Terramoda.</em>"
          },
          {
            nivel: "Nivel Medio / Táctico (Centro)",
            clase: "tier-tactico",
            badge: "Centro • Nivel Medio (MIS)",
            sistema: "MIS: Sistema de Información Gerencial",
            roles: "<strong>Quiénes están:</strong> Beatriz Pinzón (Finanzas), Hugo Lombardi (Diseño), Mario Calderón (Ventas) y Saúl Gutiérrez (RRHH).",
            entradasYSalidas: "<strong>Qué reciben y qué deciden:</strong> Reciben reportes semanales y mensuales: Lombardi controla cuánta tela se desperdicia por modelo; Betty controla costos y gastos; RRHH recibe el listado automático de ausentismo sin favoritismos."
          },
          {
            nivel: "Nivel Operacional (Base de la Pirámide)",
            clase: "tier-operacional",
            badge: "Base • Nivel Operativo (TPS)",
            sistema: "TPS: Sistema de Procesamiento de Transacciones",
            roles: "<strong>Quiénes están:</strong> Doña Inés y costureras, cortadores de tela, recepcionista (Aura María), mensajería (Freddy) y choferes.",
            entradasYSalidas: "<strong>Qué registran día a día:</strong> Ingreso de personal por huella digital, lectura de códigos de barra en rollos de tela y carretes de hilo, y facturas de venta. <em>Humaniza el trabajo:</em> les saca horas de anotar a mano en cuadernos y planillas agotadoras."
          }
        ],
        pipelineGigo: "<strong>Regla básica (Si entra basura, sale basura):</strong> Si en la base (TPS) no se cargan bien las telas o la asistencia, los reportes de los jefes (MIS) salen mal y la Junta Directiva (DSS) toma decisiones a ciegas. Y además, cada uno cumple su rol: Betty deja de hacer el trabajo de los tres niveles a la vez."
      },
      puntosClave: [
        "<strong>Base Operativa ➔ TPS:</strong> Costureras, corte, recepción y mensajería. Lectores de código de barras para rollos de tela y reloj con huella digital. Humaniza el trabajo quitando cuadernos manuales.",
        "<strong>Nivel Medio ➔ MIS:</strong> Jefes y gerentes (Betty en Finanzas, Lombardi en Diseño, Saúl en RRHH). Informes automáticos de merma de tela, control presupuestario y faltas sin favoritismo.",
        "<strong>Cúspide Directiva ➔ DSS:</strong> Presidencia y Junta Directiva. Tablero en tiempo real con simulador de ganancias y costos para planificar colecciones.",
        "<strong>Bloqueo Anti-Terramoda:</strong> Al salir los datos directamente de las ventas y compras reales, <em>es imposible armar balances truchos en Paint o desviar dinero a empresas fantasma.</em>",
        "<strong>Límites Claros:</strong> Betty deja de estar en los tres niveles a la vez (operaria, jefa y asistente personal), recuperando una jornada de trabajo sana."
      ],
      metadatosFooter: "Actividad 9 · Pirámide Organizacional y Tipos de Sistemas • Ecomoda S.A.",
      guionOrador: "En la Actividad 9 ordenamos la pirámide de la empresa para que cada uno use el sistema que le corresponde. En la base pusimos el sistema TPS con código de barras y reloj biométrico, para que Doña Inés y las costureras no pierdan tiempo anotando a mano. En el medio pusimos sistemas MIS, con reportes semanales para que Lombardi controle el gasto de tela y Saúl no pueda manipular las faltas. Y en la cúspide pusimos un sistema DSS para que la Junta Directiva vea tableros en vivo. Así, Armando nunca hubiera podido ocultar la quiebra ni inventar Terramoda.",
      gif: {
        url: "assets/svg/slide5_ecomoda_piramide.svg",
        placeholderTitulo: "Pirámide Isométrica: TPS, MIS y DSS",
        placeholderDesc: "Modelo isométrico en 3D escalonado: flujo de datos ascendente desde el taller a la Junta.",
        placeholderIcon: "📊",
        caption: "Figura 5: Pirámide 3D: alineación de TPS operativo, MIS táctico y DSS estratégico anti-fraude."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FILMINA 6: CONCLUSIONES FINALES PARA RECURSOS HUMANOS (~30 segundos)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "slide_6",
      numero: 6,
      tipo: "conclusiones",
      bloque: "CIERRE Y CONCLUSIONES",
      badge: "CONCLUSIONES • GESTIÓN DE RRHH",
      tiempoEstimado: "4:30 - 5:00 (30s)",
      titulo: "Conclusiones: Lo que nos Dejaron las Prácticas",
      subtitulo: "Qué aprendimos como futuros profesionales de Recursos Humanos en estas tres actividades",
      conclusionesData: [
        {
          icono: "🧩",
          titulo: "1. Un sistema es personas, reglas y tecnología",
          cuerpo: "Un sistema de información no es salir a comprar computadoras. Es coordinar a las <strong>personas, los procedimientos claros, las normas y la tecnología</strong>. En Ecomoda no había canales oficiales, y por eso el 'radio pasillo' del Cuartel era la única forma en que los empleados se defendían del descontrol directivo."
        },
        {
          icono: "🩺",
          titulo: "2. La tecnología debe cuidar a las personas",
          cuerpo: "Automatizar tareas repetitivas no es para echar gente, sino para sacarle trabajo pesado y repetitivo. El caso de Betty muestra lo que pasa cuando no hay sistema: una sola persona termina trabajando 15 horas por día hasta quemarse la cabeza por falta de herramientas adecuadas."
        },
        {
          icono: "⚖️",
          titulo: "3. La información transparente evita fraudes y favoritismos",
          cuerpo: "Se terminaron los balances dibujados en Paint, los disquetes escondidos y los acomodos a dedo. Cuando la información está unificada y nadie la puede adulterar, se resguarda la empresa, se impide inventar empresas truchas como Terramoda y se cuida el trabajo de todos."
        },
        {
          icono: "🏛️",
          titulo: "4. Nuestro aporte para la carrera y la Wiki",
          cuerpo: "Tanto en un hospital público de Río Negro (Catriel) como en una empresa privada textil (Ecomoda), entender de sistemas le permite a Recursos Humanos tomar decisiones justas, rápidas y basadas en datos reales. <strong>Todo este trabajo quedó ordenado y cargado en la Wiki de la materia.</strong>"
        }
      ],
      puntosClave: [
        "<strong>Tecnología + Personas + Reglas:</strong> Un sistema de información no son solo computadoras; es articular personas, procedimientos y normas claras.",
        "<strong>Cuidar la Salud Laboral:</strong> Los sistemas automatizados deben erradicar el papeleo alienante y prevenir el agotamiento extremo sufrido por Betty.",
        "<strong>Transparencia contra el Fraude:</strong> Datos compartidos y auditados impiden el clientelismo de jefes como Saúl Gutiérrez y frenan estafas como Terramoda.",
        "<strong>Aporte a Recursos Humanos y la Wiki:</strong> En Catriel o en Ecomoda, las TIG son la base para decidir con justicia y rapidez. Trabajo 100% volcado a la Wiki.",
        "<strong>Cierre de Exposición:</strong> ¡Completamos los 5 minutos de presentación! Muchas gracias y abrimos el espacio para las preguntas."
      ],
      metadatosFooter: "CURZAS · UNCo • Licenciatura en Recursos Humanos • Exposición Final de Prácticas",
      guionOrador: "Para cerrar, estas tres prácticas nos dejaron lecciones muy claras para Recursos Humanos. Primero, que un sistema funciona solo si se unen la tecnología, las reglas y las personas. Segundo, que los sistemas tienen que cuidar la salud del trabajador y evitar el agotamiento de personas como Betty. Y tercero, que tener datos limpios y transparentes termina con los acomodos y los fraudes. Con esto dejamos listo nuestro aporte para la Wiki de la cátedra. Muchas gracias y quedamos a disposición para responder preguntas.",
      gif: {
        url: "assets/svg/slide6_conclusiones.svg",
        placeholderTitulo: "Síntesis Isométrica: Arquitectura Sociotécnica",
        placeholderDesc: "Hub isométrico de 4 nodos: Personas, Procedimientos, Reglas y Tecnología.",
        placeholderIcon: "🎯",
        caption: "Figura 6: Integración sociotécnica para la gestión de Recursos Humanos en la Wiki TIG 2026."
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // RESPALDO METODOLÓGICO CLARO Y DIRECTO (Panel Desplegable / Tecla M)
  // ═══════════════════════════════════════════════════════════════════════════
  fichasRespaldo: {
    autores: [
      {
        nombre: "Ludwig von Bertalanffy",
        concepto: "Teoría General de Sistemas (TGS)",
        obra: "Teoría General de los Sistemas",
        cita: "Las organizaciones son sistemas abiertos que intercambian materia, energía e información con su entorno.",
        aplicacion: "Lo usamos en la Actividad 6 para mapear el hospital y en la Actividad 8 para entender el desorden de Ecomoda."
      },
      {
        nombre: "Kenneth y Jane Laudon",
        concepto: "Pirámide Organizacional y Tipos de SI",
        obra: "Sistemas de Información Gerencial",
        cita: "Los sistemas se dividen según el nivel: TPS en la base operativa, MIS/SIG en el nivel medio y DSS/ESS en la alta dirección.",
        aplicacion: "Fue la base para clasificar las herramientas en Ecomoda en la Actividad 9."
      },
      {
        nombre: "Francisco Longo",
        concepto: "Gestión Estratégica de Personas",
        obra: "Mérito y Flexibilidad",
        cita: "Los Recursos Humanos deben basarse en el mérito, perfiles de puesto y reglas claras para evitar el amiguismo.",
        aplicacion: "Nos sirvió para criticar el manejo discrecional de Saúl Gutiérrez en Ecomoda y la selección médica en Catriel."
      }
    ],

    normativa: [
      {
        norma: "Leyes Provinciales 1904 y 1844 (Río Negro)",
        titulo: "Carrera Hospitalaria y Empleo Público",
        articulos: "Estatuto de ingreso a hospitales públicos por concurso y agrupamientos de salud.",
        relevancia: "Marco legal obligatorio que analizamos en la Actividad 6 para el Hospital de Catriel."
      },
      {
        norma: "Ley Nacional 25.326",
        titulo: "Protección de Datos Personales",
        articulos: "Seguridad y confidencialidad en legajos laborales.",
        relevancia: "Justifica nuestra propuesta de digitalizar legajos con permisos restringidos en Ecomoda."
      }
    ],

    practicas: [
      {
        codigo: "Actividad 6",
        titulo: "Mapeo Sistémico Organizacional — Hospital Catriel",
        archivoPdf: "data/Actividad 6 - Mapeo Sistemico Hospital Catriel-1.pdf",
        resumen: "Mapeamos el ingreso de personal médico en el hospital rionegrino bajo las leyes provinciales, analizando cómo el entorno petrolero encarece la vida y cómo el feedback ayuda a retener profesionales.",
        integrantes: "Héctor Daniel Ayarachi Fuentes, Andrea Alejandra Díaz, Ileana Avendaño y Lucas Curaqueo."
      },
      {
        codigo: "Actividad 8",
        titulo: "Diagnóstico y Rediseño de Información — Ecomoda S.A.",
        archivoPdf: "data/Actividad 8 - Diagnostico y Rediseño de Informacion Organizacional - Ecomoda-2.pdf",
        resumen: "Detectamos los silos de datos en la PC de Betty, los balances truchos en Paint y el radio pasillo del Cuartel. Propusimos un ERP en la nube, Intranet oficial y legajos digitales por mérito.",
        integrantes: "Héctor Daniel Ayarachi Fuentes y Andrea Alejandra Díaz."
      },
      {
        codigo: "Actividad 9",
        titulo: "Pirámide Organizacional y Tipos de SI — Ecomoda S.A.",
        archivoPdf: "data/Actividad 9 - Piramide Organizacional y Tipos de SI - Ecomoda-3.pdf",
        resumen: "Ubicamos a cada personaje de Ecomoda en la pirámide: TPS para costureras y recepción, MIS para los reportes de Hugo Lombardi y Betty, y DSS para evitar fraudes directivos como Terramoda.",
        integrantes: "Héctor Daniel Ayarachi Fuentes y Andrea Alejandra Díaz."
      }
    ],

    faq: [
      {
        pregunta: "¿Por qué elegimos el caso de Ecomoda?",
        respuesta: "Porque muestra de forma clarísima qué pasa cuando una empresa tiene trabajadores talentosos pero no tiene sistemas formales: termina en el chisme, la sobrecarga laboral y el fraude."
      },
      {
        pregunta: "¿Por qué un TPS ayuda a los trabajadores y no los perjudica?",
        respuesta: "Porque los libera del papeleo repetitivo. A Betty le hubiera ahorrado noches enteras de pasar números a mano en cuadernos y disquetes."
      },
      {
        pregunta: "¿Cómo evitaba el sistema DSS el fraude de Terramoda?",
        respuesta: "Porque en un sistema conectado, los números de la presidencia salen directo de las ventas y compras reales. No se puede dibujar un balance en Paint sin que salte una alerta."
      }
    ]
  }
};

window.PRESENTACION_DATA = PRESENTACION_DATA;
