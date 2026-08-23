/**
 * =============================================================================
 * CLIENT CONFIG — SINGLE SOURCE OF TRUTH
 * =============================================================================
 * Inmedent — Plaza Savannah, Tegucigalpa, Honduras
 *
 * Edit THIS FILE ONLY when customizing practice content.
 * Empty strings / empty arrays hide the related UI automatically.
 *
 * IMAGE ASSETS — drop files under /assets/images/ (see comments below).
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // OPTIONAL — overrides auto-generated meta description (used in <meta> + SEO)
  metadata: {
    es: "Inmedent en Plaza Savannah, Tegucigalpa — Proporcionamos atención dental de alta calidad en un entorno cómodo y acogedor. Agenda tu cita hoy.",
    en: "Inmedent at Plaza Savannah, Tegucigalpa — We provide high-quality dental care in a comfortable, welcoming environment. Book your appointment today.",
  },

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Inmedent",

    tagline: {
      en: "We provide high-quality dental care in a comfortable, welcoming environment.",
      es: "Proporcionamos atención dental de alta calidad en un entorno cómodo y acogedor.",
    },

    phone: "+504 9232-8945",
    phoneTel: "50492328945",

    address: {
      street: "Plaza Savannah, Blvd. Morazán",
      city: "Tegucigalpa",
      state: "Francisco Morazán, Honduras",
      zip: "",
      mapsCoords: { lat: 14.101004, lng: -87.1835602, zoom: 17 },
      mapsPlaceRef: "0x8f6fa37e1d9a536f:0x2504cc843a9913bc",
      mapsPlaceName: "INMEDENT",
      mapsLink: "https://maps.app.goo.gl/PihA6SRo1XhStyot6",
      mapsQuery: "",
    },

    hours: {
      mon: "8:00 AM – 4:00 PM",
      tue: "8:00 AM – 4:00 PM",
      wed: "8:00 AM – 4:00 PM",
      thu: "8:00 AM – 4:00 PM",
      fri: "8:00 AM – 4:00 PM",
      sat: "8:00 AM – 12:00 PM",
      sun: "", // Dom — Cerrado
    },

    email: "medicadental.hn@gmail.com",

    // OPTIONAL — leave blank to hide trust-bar stats (entire bar hidden when all empty)
    yearsInPractice: "",
    patientRating: "",
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    // OPTIONAL — leave blank to use template default colors from styles.css
    primaryColor: "",
    accentColor: "",
    primaryDark: "",
    softBg: "",
    logoUrl: "assets/images/Logo.jpeg",
    heroImageUrl: "assets/images/Hero.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Comprehensive care for every smile.",
        dentists: "Meet Our Team",
        dentistsLead: "Experienced care from your first visit.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        financing: "Financing",
        financingLead: "Flexible payment options to fit your budget.",
        location: "Visit Us",
        locationLead: "Plaza Savannah, Tegucigalpa — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        mapInteract: "Tap to interact with the map",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Financiamiento",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Cuidado integral para cada sonrisa.",
        dentists: "Conoce a Nuestro Equipo",
        dentistsLead: "Atención experta desde tu primera visita.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento",
        financingLead: "Opciones de pago flexibles que se adaptan a tu presupuesto.",
        location: "Visítanos",
        locationLead: "Plaza Savannah, Tegucigalpa — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        mapInteract: "Toca para interactuar con el mapa",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  dentists: [
    {
      name: "Dra. Andrea",
      title: {
        en: "Dental Surgery",
        es: "Cirugía Dental",
      },
      bio: {
        en: "At INMEDENT we believe a smile can change everything — and Dr. Andrea proves it every day through her work. With more than 7 years of experience, her approach goes beyond dentistry: she cares for the health, self-esteem, and well-being of every patient she treats.",
        es: "En INMEDENT creemos que una sonrisa puede cambiarlo todo, y la doctora Andrea lo demuestra cada día con su trabajo. Con más de 7 años de experiencia, su enfoque va más allá de la odontología: cuida la salud, la autoestima y el bienestar de cada persona que atiende.",
      },
      // Photo: assets/images/andrea.jpeg
      photoUrl: "assets/images/andrea.jpeg",
    },
    {
      name: "Dra. Grecia",
      title: {
        en: "Dental Surgery · Dental Veneers",
        es: "Cirugía Dental · Carillas Dentales",
      },
      bio: {
        en: "Meet Dr. Grecia at INMEDENT — a dentistry graduate from Universidad Autónoma (2019) with a diploma in dental veneers. Her mission: transform smiles and restore every patient's confidence to show theirs.",
        es: "En INMEDENT le presentamos a la Dra. Grecia, graduada de la Universidad Autónoma en 2019 de odontología y con diplomado en carillas dentales. Su misión: transformar sonrisas y devolverle a cada paciente la confianza de sonreír.",
      },
      // Photo: assets/images/grecia.jpeg
      photoUrl: "assets/images/grecia.jpeg",
    },
    {
      name: "Dra. Milicen Murillo",
      title: {
        en: "General Dentistry",
        es: "Odontología General",
      },
      bio: {
        en: "Dr. Milicen Murillo provides comprehensive dental care with a warm, professional approach — helping every patient maintain a healthy, confident smile.",
        es: "La Dra. Milicen Murillo ofrece atención odontológica integral con un trato cercano y profesional, ayudando a cada paciente a mantener una sonrisa sana y confiada.",
      },
      photoUrl: "assets/images/Dentist.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "General Dentistry", es: "Odontología General" },
      description: {
        en: "Preventive exams, cleanings, fillings, and everyday care to keep your whole family's smiles healthy.",
        es: "Exámenes preventivos, limpiezas, resinas y cuidado diario para mantener sonrisas sanas en toda la familia.",
      },
      icon: "general",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS — empty array hides the section
  // ---------------------------------------------------------------------------
  testimonials: [],

  // ---------------------------------------------------------------------------
  // FINANCING IMAGES
  // ---------------------------------------------------------------------------
  financingImages: [
    {
      src: "assets/images/financing/Bac.png",
      alt: {
        en: "BAC Credomatic financing",
        es: "Financiamiento BAC Credomatic",
      },
    },
    {
      src: "assets/images/financing/Ficohsa.png",
      alt: {
        en: "Ficohsa financing",
        es: "Financiamiento Ficohsa",
      },
    },
  ],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY
  // ---------------------------------------------------------------------------
  gallery: [
    "assets/images/gallery/IMG_0356.jpeg",
    "assets/images/gallery/IMG_0357.jpeg",
    "assets/images/gallery/IMG_0361.jpeg",
    "assets/images/gallery/IMG_0363.jpeg",
    "assets/images/gallery/IMG_0364.jpeg",
    "assets/images/gallery/IMG_0365.jpeg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS — leave blank to hide that icon
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/medicadental.hn",
    facebook: "",
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;
