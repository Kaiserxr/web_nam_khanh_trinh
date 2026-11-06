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
      "I'm Khanh N. Trinh, a Computer Science student at the University of South Florida working on applied AI.",
    // Up to four short proof points, most important first
    proof: [
      {
        title: "Research Assistant, ERA Lab",
        detail: "3D sonar detection from point clouds, University of South Florida",
      },
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

  // The /about page: short facts beside your photo, then your story.
  // Each string in `story` is one paragraph.
  aboutFacts: [
    { label: "From", value: "Hanoi, Vietnam" },
    { label: "Based in", value: "Tampa, Florida" },
    { label: "Studying", value: "B.S. Computer Science, University of South Florida" },
    { label: "Languages", value: "Vietnamese, English" },
  ],
  story: [
    "Hi, I'm Khanh, an international student from Hanoi, Vietnam, now studying Computer Science at the University of South Florida in Tampa.",
    "My journey in tech started with a passion for mathematics, problem-solving, and building things that make a difference. During high school, I worked on AI and robotics projects that sparked my interest in exploring the potential of intelligent systems. I'm passionate about artificial intelligence, machine learning, and software development.",
    "Outside of tech, you'll find me on the football field, where I challenge myself to keep improving. I'm a huge Manchester United fan, and football has taught me the value of discipline, teamwork, and perseverance.",
    "My goal is to keep learning, build impactful projects, and use technology to solve real-world problems. Thanks for stopping by. Let's connect and build something amazing together!",
  ],

  // Contact page
  email: "trinhnamkhanh238@gmail.com",

  // Links shown on the home page, About, Contact and in the footer.
  // Add one object per profile; leave href as "" to hide it.
  // GitHub, LinkedIn, Hugging Face, X and YouTube get their own icon;
  // any other name gets a generic link icon. Example:
  //   { name: "Hugging Face", href: "https://huggingface.co/your-name" },
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/Kaiserxr",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nam-khanh-trinh-5880a6428/",
    },
  ] as { name: string; href: string }[],

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
