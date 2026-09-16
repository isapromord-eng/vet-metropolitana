import { Branch, Service, Testimonial, FaqItem, InstagramPost } from '../types';

export const COMPANY_INFO = {
  name: 'Clínica Veterinaria Metropolitana',
  shortName: 'VetMetro RD',
  slogan: 'Red de Salud y Amor para tus Mascotas',
  subheadline: 'Atención médica con altos estándares de calidad, responsabilidad y amor por tus peluditos en Santo Domingo.',
  emergencyPhone: '809-383-3234',
  centralPhone: '809-472-4848',
  defaultWhatsapp: '18096437816', // Format for wa.me links
  email: 'vetmetrosrl@gmail.com',
  instagram: 'vetmetropolitanard',
  instagramUrl: 'https://www.instagram.com/vetmetropolitanard/?hl=en',
  facebook: 'VetMetropolitanaRD',
  facebookUrl: 'https://www.facebook.com/VetMetropolitanaRD/',
  logoUrl: 'https://vetmetro.do/wp-content/uploads/2018/08/cropped-logo-vetmetro.png',
  stats: [
    { value: '+15', label: 'Años Cuidando Mascotas', sub: 'Experiencia y dedicación' },
    { value: '24/7', label: 'Emergencias Siempre Listos', sub: 'Guardia veterinaria continua' },
    { value: '4', label: 'Sucursales en Santo Domingo', sub: 'Cerca de ti en la ciudad' },
    { value: '+25K', label: 'Pacientes Satisfechos', sub: 'Perros, gatos y más' }
  ]
};

export const BRANCHES: Branch[] = [
  {
    id: 'independencia',
    name: 'Sucursal Av. Independencia (Km 8)',
    shortName: 'Km 8 Independencia',
    badge: 'Frente a Sirena Market',
    address: 'Av. Independencia, Km 8, Santo Domingo, D.N.',
    reference: 'Al lado de Expreso Bony y frente a Sirena Market (bajo nueva administración)',
    phone: '809-532-7839 / 809-493-3737',
    whatsapp: '18096437816',
    hoursWeekday: 'Lunes a Viernes: 8:00 AM – 6:00 PM',
    hoursSaturday: 'Sábados: 8:00 AM – 3:00 PM',
    hoursSunday: 'Atención con cita previa y urgencias',
    is24hEmergency: false,
    googleMapsUrl: 'https://maps.google.com/?q=Clinica+Veterinaria+Metropolitana+Av+Independencia+Km8+Santo+Domingo',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15139.754898124508!2d-69.9680!3d18.4350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea5610000000001%3A0x0!2sAv.+Independencia+Km+8!5e0!3m2!1ses!2sdo!4v1600000000000!5m2!1ses!2sdo',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'paraiso',
    name: 'Sucursal Ensanche Paraíso (Emergencias 24h)',
    shortName: 'Paraíso (24 Horas)',
    badge: '🚨 Emergencias 24/7',
    address: 'Manuel de Jesús Troncoso No. 61, Ensanche Paraíso, Santo Domingo',
    reference: 'Entre Gustavo Mejía Ricart y Roberto Pastoriza',
    phone: '809-472-4848 / 809-383-3234',
    whatsapp: '18093833234',
    hoursWeekday: 'Abierto 24 Horas (Guardia continua)',
    hoursSaturday: 'Abierto 24 Horas',
    hoursSunday: 'Abierto 24 Horas',
    is24hEmergency: true,
    googleMapsUrl: 'https://maps.google.com/?q=Manuel+de+Jesus+Troncoso+61+Santo+Domingo',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.450123456789!2d-69.9380!3d18.4750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sManuel+de+Jesus+Troncoso+61!5e0!3m2!1ses!2sdo!4v1600000000000!5m2!1ses!2sdo',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'arroyo-hondo',
    name: 'Sucursal Arroyo Hondo',
    shortName: 'Arroyo Hondo',
    badge: 'Fácil Parqueo',
    address: 'Luis Amiama Tió No. 101, Arroyo Hondo, Santo Domingo',
    reference: 'Cerca del Jardín Botánico Nacional',
    phone: '809-472-4848',
    whatsapp: '18094724848',
    hoursWeekday: 'Lunes a Viernes: 8:00 AM – 6:00 PM',
    hoursSaturday: 'Sábados: 8:00 AM – 2:00 PM',
    hoursSunday: 'Cerrado (Atención en Sede Paraíso 24h)',
    is24hEmergency: false,
    googleMapsUrl: 'https://maps.google.com/?q=Luis+Amiama+Tio+101+Arroyo+Hondo+Santo+Domingo',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.000000000000!2d-69.9400!3d18.4900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLuis+Amiama+Tio+101!5e0!3m2!1ses!2sdo!4v1600000000000!5m2!1ses!2sdo',
    image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gazcue',
    name: 'Sucursal Gazcue',
    shortName: 'Gazcue',
    badge: 'Zona Universitaria / Centro',
    address: 'Benito Monción No. 202, Gazcue, Santo Domingo',
    reference: 'Próximo a avenidas principales de Gazcue',
    phone: '809-472-4848',
    whatsapp: '18094724848',
    hoursWeekday: 'Lunes a Viernes: 8:00 AM – 6:00 PM',
    hoursSaturday: 'Sábados: 8:00 AM – 2:00 PM',
    hoursSunday: 'Cerrado (Atención en Sede Paraíso 24h)',
    is24hEmergency: false,
    googleMapsUrl: 'https://maps.google.com/?q=Benito+Moncion+202+Gazcue+Santo+Domingo',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.700000000000!2d-69.9000!3d18.4680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBenito+Moncion+202!5e0!3m2!1ses!2sdo!4v1600000000000!5m2!1ses!2sdo',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'consultas',
    title: 'Consultas Médicas Integrales',
    tagline: 'Diagnóstico acertado y chequeos con enfoque sin miedo (Fear Free)',
    category: 'medica',
    description: 'Evaluación física completa realizada por médicos veterinarios expertos. Revisamos ojos, oídos, dientes, articulaciones, pelaje y sistema cardiovascular para asegurar que tu mascota esté en óptimas condiciones.',
    highlights: [
      'Chequeo físico detallado por sistemas',
      'Planes nutricionales y de peso ideal',
      'Diagnóstico precoz de patologías comunes',
      'Historial clínico computarizado accesible'
    ],
    iconName: 'Stethoscope',
    popular: true,
    badge: 'Más Solicitado'
  },
  {
    id: 'emergencias',
    title: 'Emergencias y Cuidados Críticos 24h',
    tagline: 'Médicos de guardia listos las 24 horas para salvar vidas',
    category: 'hospital',
    description: 'Unidad de emergencias equipada con terapia de oxígeno, monitores multiparamétricos, fluidoterapia y personal veterinario activo toda la noche en nuestra sede de Ensanche Paraíso.',
    highlights: [
      'Atención inmediata sin cita previa',
      'Manejo de intoxicaciones, traumas y convulsiones',
      'Soporte respiratorio y monitoreo cardíaco continuo',
      'Línea de emergencia directa 809-383-3234'
    ],
    iconName: 'Ambulance',
    badge: '🚨 24 Horas'
  },
  {
    id: 'cirugia',
    title: 'Cirugía General & Especializada',
    tagline: 'Quirófano moderno con anestesia inhalatoria y monitoreo estricto',
    category: 'medica',
    description: 'Procedimientos quirúrgicos seguros que incluyen esterilizaciones, extirpación de nódulos, cirugías de tejidos blandos, traumatología y profilaxis dental ultrasónica.',
    highlights: [
      'Anestesia inhalatoria monitorizada en tiempo real',
      'Pruebas pre-quirúrgicas completas en quirófano',
      'Protocolos avanzados de analgesia y control del dolor',
      'Recuperación asistida con enfermería veterinaria'
    ],
    iconName: 'Activity',
    popular: false
  },
  {
    id: 'vacunacion',
    title: 'Vacunación & Desparasitación',
    tagline: 'Protección biológica garantizada para cachorros y adultos',
    category: 'preventiva',
    description: 'Protocolos de inmunización actualizados (Rabia, Séxtuple, Parvovirus, Tos de las Perreras, Leucemia Felina y Triple Felina) con biológicos de la más alta calidad y emisión de carnet oficial.',
    highlights: [
      'Carnet oficial de vacunación internacional',
      'Desparasitación interna y externa (pulgas y garrapatas)',
      'Recordatorio automático para próximas dosis',
      'Microchip de identificación y registro'
    ],
    iconName: 'Syringe',
    badge: 'Esencial'
  },
  {
    id: 'grooming',
    title: 'Peluquería, Baño & Spa (Grooming)',
    tagline: 'Higiene profunda, masajes relajantes y cortes de raza',
    category: 'estetica',
    description: 'Tratamiento de belleza completo para perros y gatos. Usamos champús dermatológicos hipoalergénicos según el tipo de piel, corte de uñas seguro, limpieza auditiva y vaciado de glándulas si es necesario.',
    highlights: [
      'Cortes de raza profesionales o higiénicos',
      'Baños medicados y anti-alérgicos',
      'Corte y limado de uñas sin estrés',
      'Secado a temperatura controlada'
    ],
    iconName: 'Sparkles',
    popular: true,
    badge: 'Favorito'
  },
  {
    id: 'hotel-daycare',
    title: 'Hotel de Mascotas & Daycare',
    tagline: 'El segundo hogar donde se sentirán consentidos y felices',
    category: 'hospital',
    description: 'Instalaciones climatizadas, seguras y confortables para que viajes con total tranquilidad. Supervisión médica veterinaria continua, horarios de juegos, paseos y administración de medicamentos.',
    highlights: [
      'Espacios individuales limpios y climatizados',
      'Supervisión médica veterinaria permanente',
      'Reporte diario con fotos y videos vía WhatsApp',
      'Rutina de juegos y estimulación diaria'
    ],
    iconName: 'Home',
    badge: 'Hospedaje VIP'
  },
  {
    id: 'laboratorio',
    title: 'Laboratorio Clínico In-House',
    tagline: 'Resultados precisos en minutos para decisiones inmediatas',
    category: 'medica',
    description: 'Equipos diagnósticos propios que nos permiten procesar hemogramas, bioquímicas sanguíneas, pruebas rápidas para parásitos en sangre, análisis de orina y citologías al momento.',
    highlights: [
      'Hemogramas completos y química sanguínea',
      'Pruebas de Ehrliquia, Anaplasma, Giardia y Leucemia',
      'Microscopía y cultivos dermatológicos',
      'Entrega digital inmediata para médicos y dueños'
    ],
    iconName: 'Microscope'
  },
  {
    id: 'domicilio',
    title: 'Servicio a Domicilio & Traslado',
    tagline: 'La clínica va a tu casa si no puedes desplazarte',
    category: 'preventiva',
    description: 'Llevamos la atención médica, vacunación y toma de muestras a la comodidad de tu hogar en Santo Domingo. También contamos con servicio de transporte seguro para peluquería u hospitalización.',
    highlights: [
      'Visita veterinaria sin estrés de transporte',
      'Ideal para gatos nerviosos o perros mayores',
      'Recogida y entrega para peluquería o cirugías',
      'Coordinación directa por WhatsApp'
    ],
    iconName: 'Car'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    caption: '¡Max vino hoy por su chequeo de rutina y recibió su premio! La salud preventiva es el mayor acto de amor hacia tu compañero de 4 patas. 🐾❤️ #VetMetropolitanaRD #MascotasFelices',
    likes: 342,
    comments: 28,
    date: 'Hace 1 día',
    tag: 'Chequeo Preventivo'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    caption: 'Luna disfrutando de su sesión de spa felino en VetMetro Independencia. Cuidado sin estrés y con la mayor paciencia para nuestros reyes de la casa. 🐱✨ #GroomingFelino #SaludGatuna',
    likes: 418,
    comments: 35,
    date: 'Hace 3 días',
    tag: 'Spa Felino'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    caption: 'Toby recuperado al 100% tras su cirugía en nuestro quirófano. Gracias a su familia por confiar en el equipo médico de VetMetro. ¡Mírenle esa sonrisa! 🐶🙌 #CirugiaVeterinaria',
    likes: 529,
    comments: 44,
    date: 'Hace 5 días',
    tag: 'Caso Exitoso'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80',
    caption: '¿Sabías que una vacuna a tiempo previene enfermedades graves como el parvovirus y la rabia? Trae tu carnet de vacunación y pongámonos al día. 💉🐶 #VacunasAlDia',
    likes: 290,
    comments: 19,
    date: 'Hace 6 días',
    tag: 'Vacunación'
  },
  {
    id: 'ig-5',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
    caption: 'Nuestros huéspedes de Hotel VetMetro disfrutando de su tarde de recreo al aire libre con vigilancia veterinaria continua. ¡Aquí son tratados como reyes! 🏨🐾 #HotelCanino',
    likes: 476,
    comments: 31,
    date: 'Hace 1 semana',
    tag: 'Hotel & Daycare'
  },
  {
    id: 'ig-6',
    imageUrl: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80',
    caption: 'Recuerda que ante cualquier síntoma extraño en horas de la noche, nuestra sede de Ensanche Paraíso cuenta con médicos de guardia 24 horas. ¡Llámanos al 809-383-3234! 🚨',
    likes: 615,
    comments: 52,
    date: 'Hace 1 semana',
    tag: 'Emergencias 24h'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    ownerName: 'Carolina Mendoza',
    petName: 'Rocky',
    petBreed: 'Golden Retriever (3 años)',
    comment: 'Llevé a Rocky en la madrugada por una torsión gástrica a la sede de Paraíso. La rapidez y profesionalismo con la que actuaron los doctores le salvó la vida. Eternamente agradecida con VetMetro.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    branchVisited: 'Sede Paraíso (24h)',
    serviceReceived: 'Emergencia y Cirugía'
  },
  {
    id: '2',
    ownerName: 'Lic. Roberto Almonte',
    petName: 'Bella & Milo',
    petBreed: 'Pomeranias',
    comment: 'Siempre los llevo a la sucursal del Km 8 en la Independencia (frente a Sirena) para sus baños y vacunas. El trato es sumamente cariñoso, regresan oliendo delicioso y súper felices.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    branchVisited: 'Sede Independencia',
    serviceReceived: 'Grooming & Vacunas'
  },
  {
    id: '3',
    ownerName: 'Dr. Manuel Peña',
    petName: 'Simba',
    petBreed: 'Gato Persa',
    comment: 'Es difícil encontrar veterinarios que sepan tratar a gatos nerviosos sin asustarlos. En VetMetro de Gazcue tienen una paciencia infinita y su laboratorio propio dio los resultados en 20 minutos.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    branchVisited: 'Sede Gazcue',
    serviceReceived: 'Consulta & Laboratorio'
  },
  {
    id: '4',
    ownerName: 'Paola Guerrero',
    petName: 'Coco',
    petBreed: 'Bulldog Francés',
    comment: 'Dejé a Coco una semana entera en el hotel de mascotas mientras viajaba. Todos los días me enviaban videos y notas de voz por WhatsApp sobre cómo comía y jugaba. Son un 10 de 10.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    branchVisited: 'Sede Arroyo Hondo',
    serviceReceived: 'Hospedaje Hotel'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Atienden emergencias durante la noche y días festivos?',
    answer: '¡Sí! Nuestra sede en Ensanche Paraíso (C/ Manuel de Jesús Troncoso #61) opera las 24 horas del día, los 365 días del año con personal médico veterinario y auxiliar presente en todo momento. Para emergencias inmediatas puedes comunicarte al 809-383-3234.',
    category: 'emergencias'
  },
  {
    question: '¿Dónde está ubicada la sucursal de la Avenida Independencia?',
    answer: 'La sede Independencia está ubicada en el Km. 8 de la Avenida Independencia, justo al lado de Expreso Bony y directamente frente a Sirena Market. Cuenta con acceso directo, estacionamiento y atención de lunes a sábado.',
    category: 'general'
  },
  {
    question: '¿Necesito agendar cita obligatoria para una consulta o peluquería?',
    answer: 'Para peluquería (grooming) y cirugías programadas recomendamos ampliamente agendar con anticipación para evitar esperas y garantizar el espacio de tu mascota. Las consultas médicas generales se atienden tanto por cita como por orden de llegada, y las emergencias médicas tienen prioridad inmediata.',
    category: 'citas'
  },
  {
    question: '¿Cómo funciona la reserva por WhatsApp?',
    answer: 'Es muy sencillo: completa el formulario en esta página con el nombre de tu mascota, sucursal preferida y fecha. Al hacer clic en "Agendar por WhatsApp", se abrirá una conversación con el mensaje ya estructurado para que nuestra coordinadora confirme la hora exacta de tu cita en cuestión de segundos.',
    category: 'citas'
  },
  {
    question: '¿Qué incluye el servicio de peluquería y baño?',
    answer: 'Incluye baño con agua templada y champú medicado o hipoalergénico según el manto, secado profesional a temperatura moderada, corte de raza o higiénico, corte y limado de uñas, limpieza externa de canales auditivos, desenredado y perfume especial para mascotas.',
    category: 'servicios'
  },
  {
    question: '¿Cuentan con servicio de traslado o veterinaria a domicilio?',
    answer: 'Sí, disponemos de servicio a domicilio para consultas preventivas, vacunaciones, desparasitación y toma de muestras, así como traslado seguro para mascotas que requieran baños o cirugías en nuestras instalaciones.',
    category: 'servicios'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo en pesos dominicanos y dólares, todas las tarjetas de crédito y débito (Visa, MasterCard, American Express) y transferencias bancarias locales (Banco Popular, Banreservas, BHD).',
    category: 'general'
  }
];
