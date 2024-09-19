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
    "Full Stack Software Developer proficient in front-end and back-end development. Seeking to apply technical skills and creativity to deliver efficient web solutions and collaborate effectively within a dynamic team environment.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "MySQL",
    "Java",
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
        url: "https://www.linkedin.com/in/tushar-chandak-b2b943257",
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
        url: "tusharchandak2004@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Microsoft Club Sathyabama",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote/Onsite",
      title: "Office Bearer",
      logoUrl: "/microsoft-club.png",
      start: "May 2023",
      end: "June 2026",
      description:
        "Organize Technical Events, Workshops, Competitive Programming Leagues and Hackathons while leading the team towards collaborative development Manage design, content, resource and club social handles. Continuously learn new technologies and developing innovative solutions",
    },
    {
      company: "HCL-Project Intern",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/hcl.png",
      start: "August 2024",
      end: "October 2024",
      description:
        "Implemented a custom parking management online web system with Admin dashboard, User authentication, Listing of parking sites, booking of parking sites, Implemented JWTs, redux, monogoDB for database to store user credential and data securely. ",
    },
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
      href: "https://splunk.com",
      badges: [],
      location: "Remote",
      title: "Back-End Engineer Intern",
      logoUrl: "/lyft.png",
      start: "July 2023",
      end: "August 2023",
      description:
        "Responsible for restructuring and developing the LYFT rental system. Revamped the car rental system, optimizing backend logic, UML Diagrams, database management, and overall architecture Worked within a larger team made up of software engineers to enhance the car rental experience",
    },
    {
      company: "InternPe",
      href: "https://li.me/",
      badges: [],
      location: "Remote",
      title: "Web Developement Intern",
      logoUrl: "/intern-pe.jpeg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Developed responsive web page designs and e-commerce websites. Introduced various DOM functionality and animation(CNDs). Finally completed a full responsive ECommerce website front-end “K20-Woods”. ",
    },
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
      degree: "B.E. in Computer Science Engineering with Specialization BlockChain Technology",
      logoUrl: "/sist.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Parking Management System",
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
          href: "https://github.com/Tushar292004/BusBooking-NFTs",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Tushar292004/BusBooking-NFTs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bus-nft.jpeg",
      video: "https://cdn.llm.report/openai-demo.mp4",
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
      dates: "June 2023 - Present",
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
    {
      title: "Parking Management System",
      href: "",
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
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
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
