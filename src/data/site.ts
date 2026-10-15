// ===============================================================
//  Your personal info — edit this file first.
//  Every page (navbar, footer, home, about, contact, CV) reads from here.
// ===============================================================

export const site = {
  // Domain the site will live on (used for SEO metadata)
  url: "https://namkhanhtrinh.com",

  // Full name shown in the browser tab and footer
  name: "Khanh N. Trinh",
  // Short name / nickname shown next to the logo in the navbar
  shortName: "khanh",
  // One-line description used by search engines
  description:
    "Personal website of Khanh N. Trinh, AI student at the University of South Florida",

  // Images — files live in /public
  avatar: "/avatar.png",
  logo: "/logo.png",

  // Big animated line on the home page
  tagline: "Code. Create. Inspire.",

  // "About Me" paragraph on the home page
  aboutMe:
    "I'm Khanh, an aspiring software engineer with a passion for problem-solving, artificial intelligence, and building innovative projects. My journey in tech began with a strong interest in mathematics and AI, which led me to explore AI and robotics projects during high school. I enjoy learning new technologies, experimenting with different ideas, and challenging myself through hands-on projects. I'm always looking to expand my skills in computer science, software development, and machine learning while building things that solve real-world problems.",

  // Paragraph under "My Skills" on the home page
  skillsBlurb:
    "I'm currently building my skills in computer science, software development, and artificial intelligence. I'm particularly interested in machine learning, deep learning, and exploring how AI can be applied to solve real-world problems. Through hands-on projects and continuous learning, I'm working to strengthen my programming fundamentals and expand my experience across different areas of technology.",

  // Heading on the /about page
  aboutHeading: "Discover my story",

  // Contact page
  email: "trinhnamkhanh238@gmail.com",

  // Social links. Leave href as "" to hide a link.
  // icon must match a file in /public/logos
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/Kaiserxr",
      icon: "/logos/github.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nam-khanh-trinh-5880a6428/",
      icon: "/logos/linkedin.png",
    },
  ],

  // PDFs shown at the top of the CV page (files live in /public/documents)
  documents: [
    {
      title: "Resume",
      description: "A one-page overview of my education, projects, and skills.",
      href: "/documents/print.pdf",
      button: "View PDF",
    },
  ],

  // Optional AI chatbot popup on the home page (CopilotKit).
  // Leave runtimeUrl as "" to turn the chatbot off.
  chatbot: {
    runtimeUrl: "",
    title: "Khanh Bot",
    greeting: "Hi! Want to ask something about Khanh?",
  },
};

export const activeSocials = site.socials.filter((s) => s.href);
export const findSocial = (name: string) =>
  site.socials.find((s) => s.name === name && s.href);
