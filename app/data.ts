import { Github, Linkedin, Mail } from "lucide-react";

export const DATA = {
  name: "Md. Rasheduzzaman",
  role: "Software Engineer (Backend)",
  about: "I am a backend-focused Software Engineer with a strong foundation in C++, Java, and JavaScript/TypeScript ecosystem. Experienced in building scalable ERP systems using Spring Boot and Node.js. I have a passion for competitive programming (solved 700+ problems) and efficient database design.",
  location: "Dhaka, Bangladesh",
  email: "md.rashed.dev@gmail.com",
  resumeUrl: "/resume.pdf", 
  social: [
    {
      name: "GitHub",
      url: "https://github.com/md-rashed-zaman",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/md-rashed",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:md.rashed.dev@gmail.com",
      icon: Mail,
    },
  ],
  skills: {
    languages: ["C++", "Java", "JavaScript", "Go", "TypeScript", "SQL"], // Cleaned names for icons
    frameworks: ["Spring Boot", "Node.js", "Express.js", "Next.js", "React"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "Docker", "Postman", "Linux", "GraphQL", "Prisma"], // Added Docker assuming usage
  },
  experience: [
    {
      company: "Lynorg Technologies Limited",
      role: "Software Engineer (Backend)",
      period: "Dec 2024 - Present",
      // ADDED TECH STACK HERE
      tech: ["Spring Boot", "Node.js", "MongoDB", "REST API"],
      description: [
        "Worked on key modules like Attendance Management, Lease Management, Petty Cash Management for an ERP system.",
        "Enhanced system features like notifications, hierarchical task flow, pagination, and optimized MongoDB queries for several API calls.",
        "Collaborated with the front-end team for API integration, ensuring smooth performance."
      ],
    },
    {
      company: "TopOfStack Software",
      role: "Junior Software Engineer (Intern)",
      period: "Aug 2024 - Nov 2024",
      // ADDED TECH STACK HERE
      tech: ["Node.js", "Next.js", "PostgreSQL", "Strapi", "Payment Gateway"],
      description: [
        "Developed a website using Next.js for the frontend, and Node.js for the backend to implement web API for handling transactions.",
        "Created web admin API and made the website dynamic using Strapi.",
        "Integrated SSLCOMMERZ payment gateway along with SMS and Email services used for millions of transactions."
      ],
    },
  ],
  projects: [
    {
      title: "Jobify - Job Tracking App",
      tech: ["Express.js", "Node.js", "MongoDB", "React", "JWT", "Render"],
      link: "#", 
      description: [
        "Developed a job-tracking web app with JWT-based authentication and HTTP-only cookies.",
        "Implemented RESTful API for backend communication and enabled user account management.",
        "Integrated data visualization with interactive charts and deployed securely on Render."
      ],
    },
    // {
    //   title: "Manga-Shop",
    //   tech: ["ASP.NET Core", "C#", "SQL Server", "MVC"],
    //   link: "#", 
    //   description: [
    //     "Developed a comprehensive e-commerce platform for Japanese comics using ASP.NET Core MVC.",
    //     "Implemented user authentication and role-based access control (RBAC) allowing admins to manage products.",
    //     "Features include browsing products, cart management, and full CRUD operations for administrators."
    //   ],
    // },
    {
      title: "Concept Drift Detection",
      tech: ["Python", "Machine Learning", "ADWIN", "Pandas"],
      link: "#", 
      description: [
        "Implemented a program using the ADWIN method to find 'When' concept drift occurs in streaming data.",
        "Helps identify model decaying points to improve the accuracy of ML prediction models over time."
      ],
    },
  ],
  education: [
    {
      school: "Khulna University of Engineering & Technology",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "2018 - 2023",
      coursework: "Discrete Mathematics, OOP, Data Structures & Algorithms, Database Systems, OS, Networks, AI, Machine Learning.",
      achievements: [
        "Became champion in intra hall Chess Tournament"
      ]
    },
    {
        school: "Chittagong College",
        degree: "Higher Secondary Certificate in Science",
        period: "2016 - 2017",
        coursework: "",
        achievements: [
            "Earned General Board Scholarship for outstanding result"
        ]
    },
    {
        school: "Chittagong Collegiate School",
        degree: "Secondary School Certificate in Science",
        period: "2009 - 2015",
        coursework: "",
        achievements: [
            "Earned Talent Pool Board Scholarship for outstanding result"
        ]
    }
  ],
  competitiveProgramming: {
    stats: [
        { 
          platform: "Codeforces", 
          rating: "Max: 1366",
          link: "https://codeforces.com/profile/MRashedz"
        },
        { 
          platform: "LeetCode", 
          rating: "Max: 1479",
          link: "https://leetcode.com/u/MRashedz/"
        },
    ],
    highlights: [
        "Participated in several contests and solved around 700+ problems using C++.",
        "Served as a mentor in our programming club 'SGIPC' (Special Group Interested in Programming Contest), teaching C/C++ programming basics to new members."
    ]
  }
};