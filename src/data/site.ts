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
    "Personal website of Khanh N. Trinh, Computer Science student at the University of South Florida",

  // Images — files live in /public
  avatar: "/avatar.png",
  logo: "/logo.png",

  // Big headline at the top of the home page
  tagline: "Code. Create. Inspire.",

  // First screen of the home page, under the tagline.
  // In `intro`, your `name` (above) is shown in bold automatically.
  hero: {
    intro:
      "I'm Khanh N. Trinh, a Computer Science student at the University of South Florida and a Research Assistant at ERA Lab, working on 3D sonar detection.",
    // Up to three short proof points
    proof: [
      {
        title: "3× International Gold Medal",
        detail: "Computer-vision projects in Singapore, Korea and Croatia, 2025",
      },
      {
        title: "Published in IJSRM",
        detail: "Machine learning for hotel booking cancellations, 2025",
      },
      {
        title: "Technical Lead, SCP",
        detail: "Society of Competitive Programmers, University of South Florida",
      },
    ],
    // Buttons. The resume button uses the first entry in `documents` below.
    resumeLabel: "Resume (PDF)",
    contactLabel: "Contact me",
  },

  // "About" paragraph on the home page. Keep it to two or three sentences.
  // (The skills list under it is read from "Technical Skills" in cv.json.)
  aboutMe:
    "My interest in mathematics and AI led me to AI and robotics projects in high school, and I've been building ever since. I learn best hands-on: picking up new tools, testing ideas, and making things that solve real-world problems.",

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
