import { Github, Linkedin, Mail } from "lucide-react";

export const DATA = {
  name: "Muhammad Rasheduzzaman",
  role: "Software Engineer (Backend)",
  about:
    "Backend Software Engineer focused on backend architecture and high-performance APIs. I currently work on a microservice-based ERP platform using Spring Boot and Node.js, and I’m actively expanding into concurrent systems programming with Go—one of my target stacks for my next role.",
  location: "Dhaka, Bangladesh",
  email: "md.rashed.dev@gmail.com",
  phone: "+8801790006785",
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
    languages: ["C++", "Java", "JavaScript", "Go", "SQL", "TypeScript"],
    frameworks: ["Spring Boot", "Node.js", "Express.js", "JUnit", "gRPC", "GraphQL"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    messaging: ["Kafka"],
    tools: ["Git", "Docker", "Linux", "CI/CD (GitHub Actions)"],
  },
  experience: [
    {
      company: "Lynorg Technologies Limited",
      role: "Software Engineer (Backend)",
      period: "Dec 2024 - Present",
      location: "Dhaka, Bangladesh",
      url: "https://www.lynorg.com/",
      tech: ["Spring Boot", "Node.js", "MongoDB", "Microservices", "JUnit"],
      description: [
        "Contributed to backend development of an enterprise ERP platform within a microservices architecture using Spring Boot and Node.js.",
        "Improved API performance by optimizing MongoDB aggregation pipelines, indexing strategies, and server-side pagination.",
        "Implemented core business logic and wrote unit tests using JUnit to ensure reliability across distributed services.",
      ],
    },
    {
      company: "TopOfStack Software",
      role: "Junior Software Engineer (Internship)",
      period: "Aug 2024 - Nov 2024",
      location: "Dhaka, Bangladesh",
      url: "https://topofstacksoftware.com/",
      tech: ["Nest.js", "Node.js", "PostgreSQL", "Strapi", "Payment Gateway"],
      description: [
        "Architected a robust REST API using Nest.js to handle secure financial transactions with strict type safety and error handling.",
        "Integrated SSLCOMMERZ payment gateway with automated SMS/Email notification services for high-concurrency traffic.",
        "Deployed a dynamic admin dashboard using Strapi to streamline content management workflows.",
      ],
    },
    {
      company: "Advanced Software Development",
      role: "Software Engineer (Internship)",
      period: "Jan 2024 - Mar 2024",
      location: "Dhaka, Bangladesh",
      url: "https://asdbd.com/",
      tech: ["Node.js", "Express.js", "GraphQL", "PostgreSQL", "Prisma"],
      description: [
        "Engineered backend microservices using Node.js and Express.js, implementing GraphQL APIs for flexible data fetching.",
        "Managed relational data schemas with PostgreSQL and Prisma, optimizing image compression workflows for a Shopify application.",
      ],
    },
  ],
  projects: [
    {
      title: "LedgerFlow — Distributed Financial System",
      tech: ["Go", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "OpenAPI"],
      link: "https://github.com/md-rashed-zaman/ledger-flow",
      description: [
        "Architected a hybrid microservices system using Go for high-throughput ingestion and Spring Boot for transactional ledger management.",
        "Engineered an event-driven architecture with Kafka for decoupled services and double-entry bookkeeping with ACID compliance.",
        "Implemented idempotency patterns, retry mechanisms, and containerized infrastructure using Docker Compose and OpenAPI.",
      ],
    },
    {
      title: "PrepTracker — Interview Prep Tracker (Spaced Repetition)",
      tech: ["Go", "PostgreSQL", "Next.js", "Docker"],
      link: "https://github.com/md-rashed-zaman/PrepTracker",
      description: [
        "Built a production-style Go REST API with JWT + refresh-token auth and strict per-user data ownership.",
        "Implemented SM-2 spaced-repetition scheduling with append-only review event logs and transactional updates in PostgreSQL.",
        "Delivered Google Calendar sync via ICS feeds, DB migrations, and a Dockerized local environment for reliable setup.",
      ],
    },
    {
      title: "Jobify - Job Tracking App",
      tech: ["Express.js", "Node.js", "MongoDB", "React", "JWT", "Render"],
      link: "https://github.com/md-rashed-zaman/Jobify-MERN-Project",
      description: [
        "Developed a job-tracking web app with JWT-based authentication and HTTP-only cookies.",
        "Implemented RESTful API for backend communication and enabled user account management.",
        "Integrated data visualization with interactive charts and deployed securely on Render."
      ],
    },
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
          link: "https://leetcode.com/MRashedz/"
        },
    ],
    highlights: [
        "Solved 700+ algorithmic problems across Codeforces, LeetCode, and CodeChef.",
        "Mentored 10+ students in Data Structures & Algorithms (C++) at SGIPC Club."
    ]
  }
};
