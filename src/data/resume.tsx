import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tushar Chandak",
  initials: "TC",
  url: "https://tushar.io",
  location: "Chennai, India",
  locationLink: "https://www.google.com/maps/place/chennai",
  description:
    "Aspiring Full Stack Software Engineer. I love building things and helping people. Very active on LinkedIn.",
  summary:
    "I'm a full-stack developer who values adaptability and real-world impact. Skilled in React, Next.js, Tailwind, ShadCN, and Framer Motion on the frontend, with Node.js, Express, MongoDB, and Supabase on the backend. I enjoy building scalable systems, leveraging tools like Git, Postman, JWT, and exploring GenAI technologies like LangChain, Cursor, and Agentic AI to enhance modern workflows.",
  avatarUrl: "/me.png",
  skills: [
    // Frontend
  "React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Framer Motion", "Aceternity UI", "Redux",

  // Backend
  "Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "Firebase", "Java", "JWT", "Bcrypt", "REST APIs",

  // AI & GenAI Tools
  "LangChain", "GenAI", "Cursor", "Agentic AI",

  // Platforms & DevOps
  "Git", "GitHub Actions", "Postman", "CI/CD", "Vercel", "Linux"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tusharchandak2004@gmail.com",
    tel: "+91 9827156739",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Tushar292004",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tusharchandak29/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/tusharchandak29/profilecard/?igsh=dHU4Ymtpdm4xcm03",
        icon: Icons.instagram,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:tusharchandak2004@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Medzillo",
      href: "https://medzillo.com",
      badges: [],
      location: "Chennai, Tamil Nadu, India",
      title: "Full Stack Developer Intern",
      logoUrl: "/medzillo.jpg", // update this path if needed
      start: "May 2025",
      end: "July 2025",
      description: "Built and launched a real-time healthtech platform from scratch, implementing CI/CD pipelines via GitHub Actions and collaborating across the full stack for consistent monthly feature releases. Developed a real-time token queueing system using Redis Pub/Sub and webhooks to sync patient queues across doctor dashboards with instant notifications. Designed optimized MongoDB schemas with strict validations and compound indexes for fast queries and minimal payloads. Implemented secure OTP-based phone authentication through a cost-effective SMS pipeline with role-based access for doctors, patients, and medical reps. Optimized image upload flow using Firebase Storage Rules, Base64 caching, and compression (720p, ≤200KB), significantly improving system performance. Worked seamlessly across Next.js App Router, Server Actions, and modern UI libraries like ShadCN, Aceternity UI, and Framer Motion to deliver features cleanly and on time."
    },
    {
      company: "HCL Tech",
      href: "https://github.com/Tushar292004/Parking-Management-System",
      badges: [],
      location: "",
      title: "HCL Project Intern",
      logoUrl: "/hcl.png",
      start: "July 2024",
      end: "October 2024",
      description:
        "Built a scalable full-stack Parking Management web application using the MERN stack, enabling peer-to-peer parking space listings and real-time bookings without third-party intermediaries. Implemented secure, role-based authentication using JWT and Bcrypt, managing user/admin logins, approval workflows, and protected booking operations. Designed interactive dashboards with Redux and React Forms to help seekers and owners manage spaces, bookings, reviews, and location-based searches. Participated in weekly review meetings under the HCL Project Intern Initiative, integrating feedback through agile, sprint-based development."
    },
    {
      company: "Microsoft Club Sathyabama",
      href: "https://www.linkedin.com/posts/tusharchandak29_president-microsoft-club-sathyabama-activity-7242961520802885635-nj7D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9SOpMBjIqkjECnoA-2Jt25htMgoWcVI70",
      badges: [],
      location: "Chennai, Tamil Nadu, India",
      title: "President - Office Bearer",
      logoUrl: "/microsoft-club.png",
      start: "May 2023",
      end: "July 2025",
      description:
        "Led a 30+ member technical club focused on collaborative innovation through events and development. Organized university-wide technical workshops, hackathons, competitive programming leagues, and recruitment drives with 200+ participants. Oversaw multiple verticals including design, content, and club social handles while mentoring project teams and driving technical growth. Continuously explored emerging technologies and encouraged the development of real-world solutions through team-driven initiatives.",
    },
    // {
    //   company: "HCL-Project Intern",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Developer Intern",
    //   logoUrl: "/hcl.png",
    //   start: "August 2024",
    //   end: "October 2024",
    //   description:
    //     "Implemented a custom parking management online web system with Admin dashboard, User authentication, Listing of parking sites, booking of parking sites, Implemented JWTs, redux, monogoDB for database to store user credential and data securely. ",
    // },
    {
      company: "Yolo</>Wolo",
      href: "https://yolo-wolo.vercel.app",
      badges: [],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/yolo-wolo.jpeg",
      start: "March 2023",
      end: "April 2023",
      description:
        "As one month stipend internship I developed landing pages, handled UI/UX of web portals used React.js, Next.js to develope responsive websties. Managed company’s website design, UI-UX, content, SEOs, Hosting methods. Worked with the team of back-end and front-end engineers forproduct development.",
    },
    {
      company: "Lyft",
      href: "https://www.linkedin.com/in/tusharchandak29/",
      badges: [],
      location: "Remote",
      title: "Back-End Engineer Intern",
      logoUrl: "/lyft.png",
      start: "July 2023",
      end: "August 2023",
      description:
        "Responsible for restructuring and developing the LYFT rental system. Revamped the car rental system, optimizing backend logic, UML Diagrams, database management, and overall architecture Worked within a larger team made up of software engineers to enhance the car rental experience",
    }
  ],
  education: [
    {
      school: "Shri Shankaracharya Vidyalaya",
      href: "https://ssavhudco.in/ssavweb/",
      degree: "10th, 12th with Physics, Chemistry, Maths, Computer Science",
      logoUrl: "/sscv.jpeg",
      start: "2007",
      end: "2022",
    },
    {
      school: "Sathyabama University",
      href: "https://www.sathyabama.ac.in/",
      degree: "B.E. in Computer Science Engineering with Specialization BlockChain Technology | CGPA: 9.28",
      logoUrl: "/sist.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "CoachAI",
      href: "https://github.com/Tushar292004/coachai",
      dates: "January 2024 - Present",
      active: true,
      description:
        "AI-powered career assistant offering mock tests, resume/cover letter generation, and up-to-date industry insights. Integrated GeminiAI with a custom RAG pipeline for context-aware interview Q&A. Built with modern, animated UI and robust backend tools like Clerk, Prisma, and NeonDB.",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Clerk",
        "GeminiAI",
        "NeonDB",
        "Zod",
        "Inngest",
        "Multer",
        "TailwindCSS",
        "ShadCN UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://coachai-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Tushar292004/coachai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/coachai.png",
      video: "",
    },
    {
      title: "Parking Management System",
      href: "https://github.com/Tushar292004/Parking-Management-System",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "Express.js",
        "TailwindCSS",
        "Node.js",
        "BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://youtu.be/tn3DU5I2TjQ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Tushar292004/Parking-Management-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ParkingManagement.png",
      video: "",
    },
    {
      title: "NFT Based Tickiting System",
      href: "https://github.com/Tushar292004/BusBooking-NFTs",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Developed a Decentralized application for Ticket Booking System, using tools like hardhat-blockchain, solidity",
      technologies: [
        "React.js",
        "Javascript",
        "Solidity",
        "Hardhat",
        "TailwindCSS",
        "Ether.js",
        "Node.js",
        "Metamask",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.linkedin.com/posts/tusharchandak29_nft-blockchain-web3-activity-7247646557330673665-f0C5",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Tushar292004/BusBooking-NFTs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bus-nft.png",
      video: "",
    },
    {
      title: "Navigate-SIST Website",
      href: "https://tushar292004.github.io/Sathyabama_Navigator/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Web app to simplify navigation in the Sathyabama University campus. Auto-complete search feature for efficient location searching. Generated precise directions using Google Maps (independent of Google Map API key).",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://tushar292004.github.io/Sathyabama_Navigator/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Tushar292004/Sathyabama_Navigator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sist-navigator.jpeg",
      video:
        "",
    },
    {
      title: "Go Coral",
      href: "https://tushar292004.github.io/Go-Coral/",
      dates: "June 2023 - Aug 2023",
      active: true,
      description:
        "A initiative to spread underwater ecosystem awareness. Integrated with a Techable Machine ML model, it analyzes images to determine coral reef health - healthy or bleached. The website also features a coral gallery section and a feedback form. Fully responsive and animated UI with scroll animation and carousel.",
      technologies: [
        "HTML",
        "CSS",
        "PHP",
        "Javascript",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://tushar292004.github.io/Go-Coral/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Tushar292004/Go-Coral",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/go-coral.jpeg",
      video: "",
    },
    
    
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Ideathon 2023",
      dates: "July 31th, 2023",
      location: "Sathyabama University, Chennai",
      description:
        "Proposed a mobile application which deliveres the security features for women safety using geo-location, route suggestions, live monitoring, SOS widgets and safe contacts.",
      image:
        "/ideathon.jpg",
      links: [
        {
          title: "LinkedIn Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/tushar-chandak-b2b943257_womensafety-ideas-ideathon-activity-7092189212178845696-Nl7k?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Replicate-A-Thon",
      dates: "Februray 20th, 2023",
      location: "Sathyabama University, Chennai",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "/replicate.jpeg",
      links: [
        {
          title: "LinkedIn Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/tushar-chandak-b2b943257_winning-webdevelopment-html-activity-7046586356172558337-0AEs?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Chancellor's Scholarship Scheme",
      dates: "July, 2024",
      location: "Sathyabama University, Chennai",
      description:
        "Rewarded scholarship work INR 26000 from the college for outstading academic performance and 3rd rank holder in the branch.",
      image:
        "/scholarship.jpeg",
      links: [
        {
          title: "LinkedIn Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/tushar-chandak-b2b943257_scholarship-gratitude-sathyabamauniversity-activity-7214627686743232513-azCj?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    ],
} as const;
