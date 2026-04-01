const translations = {
  es: {
    navAbout: "Biografía",
    navGallery: "Galería",
    navResources: "Bibliografía",
    navStrategies: "Estrategias",
    navContact: "Contacto",

    heroEyebrow: "Educación especial bilingüe",
    heroName: "Mitchell K Rocha, NBCT, TESOL",
    heroTitle: "Bilingual Special Education",
    heroSubtitle: "National Board Certified Teacher",
    heroText:
      "Apoyo a estudiantes, familias y comunidades escolares con estrategias prácticas de lectoescritura, intervención educativa y acompañamiento cercano.",
    heroBtnContact: "Contáctame",
    heroBtnAbout: "Conoce más",
    heroBadge3: "Educación bilingüe",

    aboutTag: "Perfil profesional",
    aboutTitle: "Biografía",
    aboutLead:
      "Mitchell Rocha es especialista en educación especial bilingüe con experiencia en intervención, lectoescritura y apoyo a estudiantes con necesidades diversas.",
    aboutP1:
      "Su trabajo se centra en construir puentes entre la escuela y el hogar, ofreciendo estrategias claras, accesibles y basadas en evidencia.",
    aboutP2:
      "A lo largo de su trayectoria ha trabajado en contextos educativos de México y Nuevo México, apoyando a estudiantes, familias, docentes y comunidades escolares.",
    credLine1Label: "Nombre profesional:",
    credLine1Value: "Mitchell K Rocha, NBCT, TESOL",
    credLine2Label: "Enfoque:",
    credLine2Value: "Bilingual Special Education",
    credLine3Label: "Certificación:",
    credLine3Value: "National Board Certified Teacher",

    timelineTitle: "Experiencia profesional",
    yearPresent: "2021–presente",
    job1: "Reading Program Support Specialist, Exceptional Student Services, SFPS, New Mexico",
    job2: "Special Education Teacher, K-5, SFPS, New Mexico",
    job3: "Special Education Director, Mexico City",
    job4: "Special Education Teacher, Mexico City",
    job5: "Speech and Language Pathologist, Mexico City",

    galleryTag: "Trabajo en acción",
    galleryTitle: "Galería",
    galleryIntro:
      "Una mirada al trabajo de Mitchell Rocha en formación docente, apoyo escolar y enseñanza directa.",

    resourcesTag: "Recursos",
    resourcesTitle: "Bibliografía de interés",
    resourcesIntro:
      "Este espacio estará dedicado a compartir artículos, materiales de lectura, archivos PDF y recursos útiles para familias y profesionales.",
    resSimpleTitle: "Próximamente",
    resSimpleText:
      "Aquí se podrán agregar lecturas, referencias y materiales recomendados.",

    strategiesTag: "Apoyo en casa",
    strategiesTitle: "Estrategias",
    strategiesIntro:
      "En esta sección se compartirán estrategias prácticas de apoyo para la lectura, el lenguaje y el aprendizaje en casa.",
    strSimpleTitle: "Contenido en preparación",
    strSimpleText:
      "Próximamente se agregarán sugerencias, actividades y recursos sencillos para familias y docentes.",

    contactTag: "Contacto",
    contactTitle: "Ponte en contacto",
    contactText:
      "Si deseas comunicarte por motivos profesionales, compartir una pregunta o solicitar más información, puedes enviar un mensaje aquí.",
    contactEmailLabel: "Correo:",
    contactRoleLabel: "Área:",
    contactRoleValue: "Bilingual Special Education",

    formName: "Nombre",
    formEmail: "Correo electrónico",
    formSubject: "Asunto",
    formMessage: "Mensaje",
    formSubmit: "Enviar mensaje",

    footerText: "© 2026 Mitchell Rocha. Todos los derechos reservados.",
    backTop: "Volver arriba",
  },

  en: {
    navAbout: "Biography",
    navGallery: "Gallery",
    navResources: "Resources",
    navStrategies: "Strategies",
    navContact: "Contact",

    heroEyebrow: "Bilingual special education",
    heroName: "Mitchell K Rocha, NBCT, TESOL",
    heroTitle: "Bilingual Special Education",
    heroSubtitle: "National Board Certified Teacher",
    heroText:
      "I support students, families, and school communities through practical literacy strategies, educational intervention, and meaningful guidance.",
    heroBtnContact: "Contact me",
    heroBtnAbout: "Learn more",
    heroBadge3: "Bilingual education",

    aboutTag: "Professional profile",
    aboutTitle: "Biography",
    aboutLead:
      "Mitchell Rocha is a bilingual special education specialist with experience in intervention, literacy, and support for students with diverse needs.",
    aboutP1:
      "Her work focuses on building bridges between school and home by offering clear, accessible, and evidence-based strategies.",
    aboutP2:
      "Throughout her career, she has worked in educational settings in Mexico and New Mexico, supporting students, families, teachers, and school communities.",
    credLine1Label: "Professional name:",
    credLine1Value: "Mitchell K Rocha, NBCT, TESOL",
    credLine2Label: "Focus:",
    credLine2Value: "Bilingual Special Education",
    credLine3Label: "Certification:",
    credLine3Value: "National Board Certified Teacher",

    timelineTitle: "Professional experience",
    yearPresent: "2021–present",
    job1: "Reading Program Support Specialist, Exceptional Student Services, SFPS, New Mexico",
    job2: "Special Education Teacher, K-5, SFPS, New Mexico",
    job3: "Special Education Director, Mexico City",
    job4: "Special Education Teacher, Mexico City",
    job5: "Speech and Language Pathologist, Mexico City",

    galleryTag: "Work in action",
    galleryTitle: "Gallery",
    galleryIntro:
      "A look at Mitchell Rocha’s work in teacher training, school support, and direct instruction.",

    resourcesTag: "Resources",
    resourcesTitle: "Selected bibliography",
    resourcesIntro:
      "This section will be used to share articles, reading materials, PDF files, and useful resources for families and professionals.",
    resSimpleTitle: "Coming soon",
    resSimpleText:
      "Recommended readings, references, and materials will be added here as they become available.",

    strategiesTag: "Support at home",
    strategiesTitle: "Strategies",
    strategiesIntro:
      "This section will share practical strategies to support reading, language, and learning at home.",
    strSimpleTitle: "Content in progress",
    strSimpleText:
      "Suggestions, activities, and simple resources for families and educators will be added soon.",

    contactTag: "Contact",
    contactTitle: "Get in touch",
    contactText:
      "If you would like to connect for professional reasons, ask a question, or request more information, you can send a message here.",
    contactEmailLabel: "Email:",
    contactRoleLabel: "Area:",
    contactRoleValue: "Bilingual Special Education",

    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Send message",

    footerText: "© 2026 Mitchell Rocha. All rights reserved.",
    backTop: "Back to top",
  },
};

const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");

function setLanguage(lang) {
  const dict = translations[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  btnEs.classList.toggle("active", lang === "es");
  btnEn.classList.toggle("active", lang === "en");

  localStorage.setItem("site-language", lang);
}

btnEs.addEventListener("click", () => setLanguage("es"));
btnEn.addEventListener("click", () => setLanguage("en"));

const savedLanguage = localStorage.getItem("site-language") || "es";
setLanguage(savedLanguage);