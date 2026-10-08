export const portfolioData = {
  personal: {
    name: "Nitin Singh Tanwar",
    role: "Python Backend Engineer",
    secondaryTitle: "Python Full-Stack Developer",
    location: "Jaipur, Rajasthan, India",
    phone: "+91 9216455893",
    email: "tanwarsinghnitin@gmail.com",
    github: "https://github.com/NitinVibe",
    linkedin: "https://www.linkedin.com/in/nitinvibe",
    status: "Available for opportunities",
    tagline: "I build scalable backend systems, production-ready APIs, and intelligent applications with Python.",
    summary: "Computer Science Engineering student specializing in Artificial Intelligence and hands-on Python Backend Developer. Experienced in developing database-driven applications, REST APIs with FastAPI, PostgreSQL relational modeling, JWT authentication, and automated RSS news aggregation. Focused on clean code, schema validation with Pydantic, and reliable frontend-backend integration.",
    coreStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "AI / ML"]
  },

  experience: [
    {
      id: "onepixel",
      role: "Python Backend Developer Intern",
      company: "ONEPIXEL Soft",
      location: "Jaipur, Rajasthan",
      period: "2026 – Present",
      type: "Internship",
      highlights: [
        "Developed and contributed to web applications and backend systems using Python and FastAPI.",
        "Worked with PostgreSQL for database operations, CRUD functionality, queries, constraints, and data management.",
        "Developed and integrated REST APIs for core application features and business requirements.",
        "Implemented JWT-based authentication and request validation using Pydantic.",
        "Integrated Python backend applications with PostgreSQL using psycopg.",
        "Contributed to real-world websites including wedding event, vendor management, and furniture e-commerce projects.",
        "Developed and maintained an RSS-based news aggregation website (RajPedia) using Python, FastAPI, PostgreSQL, and Jinja2.",
        "Debugged and resolved backend, API, validation, database, and integration issues."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "psycopg", "Pydantic", "JWT", "Jinja2", "REST APIs", "Git"]
    }
  ],

  projects: [
    {
      id: "rajpedia",
      title: "RajPedia — RSS News Aggregation Platform",
      category: "Featured Flagship",
      badge: "Flagship Project",
      shortDescription: "An automated RSS-based news platform built with Python, FastAPI, and PostgreSQL for collecting, indexing, and serving structured news feeds.",
      longDescription: "Architected an automated RSS news aggregation system designed for structured feed harvesting and fast retrieval. Features automated background parsing, clean relational storage in PostgreSQL, full-text category filtering, and server-rendered templates using Jinja2, HTML5, and CSS.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "RSS Feeds", "Jinja2", "Pydantic", "HTML5", "CSS3"],
      features: [
        "Automated background feed fetching & parsing pipeline",
        "FastAPI REST endpoints for filtered news queries by category & date",
        "PostgreSQL schema with indexed article metadata for fast lookup",
        "Integrated Jinja2 server-side rendering with responsive layouts",
        "Feed source management with validation checks"
      ],
      githubUrl: "https://github.com/NitinVibe",
      liveUrl: "https://github.com/NitinVibe",
      featured: true
    },
    {
      id: "wedding-platform",
      title: "Wedding Event & Booking Platform",
      category: "Backend Architecture",
      badge: "Internship Project",
      shortDescription: "Backend architecture and database integration for an end-to-end wedding planning directory and booking platform.",
      longDescription: "Engineered scalable backend services during internship at ONEPIXEL Soft. Created PostgreSQL models and REST APIs to manage wedding schedules, service catalogs, vendor profiles, and booking workflows with transaction safety.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "psycopg", "Pydantic", "JWT"],
      features: [
        "Role-based access control and JWT token authentication",
        "Booking slot reservation logic with conflict checks",
        "Pydantic schema validation for complex inquiry payloads",
        "PostgreSQL query optimization for vendor search"
      ],
      githubUrl: "https://github.com/NitinVibe",
      liveUrl: "https://github.com/NitinVibe",
      featured: false
    },
    {
      id: "vendor-management",
      title: "Enterprise Vendor Management System",
      category: "Enterprise System",
      badge: "Internship Project",
      shortDescription: "Centralized vendor lifecycle management system with authenticated REST APIs, contract tracking, and status metrics.",
      longDescription: "Developed modular backend services featuring comprehensive CRUD operations, strict Pydantic validation schemas, and JWT token authentication. Integrated with PostgreSQL via parameterized psycopg queries to optimize write performance.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "JWT Auth", "Pydantic", "REST APIs"],
      features: [
        "JWT token-based route guards and auth middleware",
        "Vendor status tracking and milestone verification",
        "Automated Excel reporting pipelines via OpenPyXL and Pandas",
        "OpenAPI / Swagger documentation for endpoints"
      ],
      githubUrl: "https://github.com/NitinVibe",
      liveUrl: "https://github.com/NitinVibe",
      featured: false
    },
    {
      id: "furniture-ecommerce",
      title: "Furniture E-Commerce Backend",
      category: "E-Commerce",
      badge: "Commercial Backend",
      shortDescription: "RESTful backend handling catalog management, product variants, shopping carts, and order workflows.",
      longDescription: "Built RESTful endpoints handling product catalog management with dimensional/material variants, price calculations, cart sessions, and order state machines. Optimized database queries for rapid pagination and category filtering.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "psycopg", "REST APIs", "Pydantic"],
      features: [
        "Multi-variant product cataloging (materials, finishes, sizes)",
        "Cart calculation engine with tax and shipping logic",
        "Indexed PostgreSQL queries for multi-filter search",
        "Order state machine handling checkout transitions"
      ],
      githubUrl: "https://github.com/NitinVibe",
      liveUrl: "https://github.com/NitinVibe",
      featured: false
    },
    {
      id: "web-scraping-suite",
      title: "Data Scraping & Automated QR Utility",
      category: "Data Extraction & Tooling",
      badge: "Utility Suite",
      shortDescription: "Automated data harvesting and utility suite with BeautifulSoup crawlers, Pandas pipelines, and dynamic QR generators.",
      longDescription: "Created custom Python utilities for extracting structured web data, cleaning and transforming datasets into tabular formats with Pandas and OpenPyXL, and generating stylized QR codes with Pillow and QRCode libraries.",
      techStack: ["Python", "BeautifulSoup", "Pandas", "OpenPyXL", "Pillow", "QRCode"],
      features: [
        "Web scraping pipeline with error handling and rate limits",
        "Automated Excel spreadsheet generation and cleansing",
        "Dynamic QR code generator with custom styling and logos",
        "CLI batch processing tools for multi-file operations"
      ],
      githubUrl: "https://github.com/NitinVibe",
      liveUrl: "https://github.com/NitinVibe",
      featured: false
    },
    {
      id: "cpp-data-structures",
      title: "C & C++ Core Systems & Problem Solving",
      category: "Core Fundamentals",
      badge: "Systems & Algorithms",
      shortDescription: "Console applications, Object-Oriented Architecture, Standard Template Library (STL) algorithms, and persistent file handling.",
      longDescription: "Completed intensive 15-day systems training covering advanced memory management, pointer manipulation, STL data structures (vectors, maps, lists), custom file I/O serializers, and algorithmic problem-solving in C and C++.",
      techStack: ["C", "C++", "OOP", "STL", "File I/O", "Data Structures"],
      features: [
        "Object-Oriented Design (Inheritance, Polymorphism, Encapsulation)",
        "Binary and text file serialization engines",
        "Optimized algorithmic solutions utilizing C++ STL containers",
        "Memory management and pointer manipulation"
      ],
      githubUrl: "https://github.com/NitinVibe",
      liveUrl: "https://github.com/NitinVibe",
      featured: false
    }
  ],

  skills: {
    backend: [
      { name: "Python", desc: "Core language, AsyncIO, OOP, typing" },
      { name: "FastAPI", desc: "Async route handlers, dependency injection, middleware" },
      { name: "REST APIs", desc: "Endpoint design, HTTP semantics, OpenAPI architecture" },
      { name: "Pydantic", desc: "Data validation, strict schemas, serialization" },
      { name: "JWT Authentication", desc: "Token handling, claims, route authorization" }
    ],
    database: [
      { name: "PostgreSQL", desc: "Relational design, constraints, indexing, transactions" },
      { name: "psycopg", desc: "Python PostgreSQL driver, connection pooling, queries" },
      { name: "SQL", desc: "Complex joins, aggregations, schema migrations" }
    ],
    frontend: [
      { name: "HTML5 & CSS3", desc: "Semantic structure, responsive layouts" },
      { name: "Tailwind CSS", desc: "Modern utility-first styling, responsive design" },
      { name: "Jinja2", desc: "Server-side template inheritance and macro rendering" },
      { name: "React", desc: "Component architecture, hooks, state handling" }
    ],
    dataAndLibraries: [
      { name: "Pandas", desc: "Data processing, tabular manipulation, aggregation" },
      { name: "BeautifulSoup", desc: "DOM parsing, HTML extraction, scraping pipelines" },
      { name: "OpenPyXL", desc: "Automated Excel report generation and formatting" },
      { name: "Pillow (PIL)", desc: "Image processing, watermarking, conversions" },
      { name: "QRCode", desc: "Dynamic 2D barcode generation" }
    ],
    tools: [
      { name: "Git & GitHub", desc: "Version control, branching, pull requests" },
      { name: "Postman", desc: "API testing, collections, environment variables" },
      { name: "Swagger / OpenAPI", desc: "Interactive API documentation & schema review" },
      { name: "VS Code", desc: "Development workflow, linting, debugging" }
    ],
    currentlyLearning: [
      { name: "AWS (Amazon Web Services)", desc: "EC2, S3, RDS, Lambda, serverless fundamentals" },
      { name: "Advanced Python Architecture", desc: "Concurrency, metaclasses, design patterns" },
      { name: "Cloud & Microservices", desc: "Docker containerization, CI/CD pipelines" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Technology — Computer Science & Engineering",
      specialization: "Artificial Intelligence",
      institution: "Shri Balaji College of Engineering & Technology, Jaipur",
      affiliation: "Rajasthan Technical University (RTU)",
      duration: "2025 – 2029",
      description: "Focused on Computer Science fundamentals, Artificial Intelligence algorithms, Data Structures, Relational Database Management Systems, and Operating Systems."
    }
  ],

  trainings: [
    {
      title: "C & C++ Programming Trainee",
      organization: "Shri Balaji College of Engineering & Technology",
      location: "Jaipur, Rajasthan",
      duration: "06/2026 – 07/2026",
      details: "Completed an intensive 15-day in-house training program in C and C++. Covered Object-Oriented Programming (OOP), Standard Template Library (STL), file handling, problem-solving fundamentals, and console-based C++ projects."
    }
  ],

  apiSimulationEndpoints: [
    {
      method: "GET",
      endpoint: "/api/v1/profile",
      title: "Get Profile",
      description: "Returns Nitin's core developer profile and specializations.",
      response: {
        status: "200 OK",
        data: {
          name: "Nitin Singh Tanwar",
          role: "Python Backend Engineer",
          specialization: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "Pydantic"],
          current_role: "Python Backend Developer Intern @ ONEPIXEL Soft",
          location: "Jaipur, Rajasthan, India",
          education: "B.Tech CSE (Artificial Intelligence), 2025-2029",
          open_to: "Full-Time & High-Impact Engineering Roles",
          github: "https://github.com/NitinVibe",
          linkedin: "https://www.linkedin.com/in/nitinvibe"
        }
      }
    },
    {
      method: "GET",
      endpoint: "/api/v1/skills/backend",
      title: "Get Backend Stack",
      description: "Lists primary backend frameworks, databases, and libraries.",
      response: {
        status: "200 OK",
        core_languages: ["Python", "SQL", "C", "C++"],
        backend_frameworks: ["FastAPI", "Pydantic", "Jinja2"],
        databases: ["PostgreSQL", "psycopg", "SQL"],
        libraries: ["Pandas", "BeautifulSoup", "OpenPyXL", "Pillow", "QRCode"]
      }
    },
    {
      method: "GET",
      endpoint: "/api/v1/projects/flagship",
      title: "Inspect RajPedia Architecture",
      description: "Returns architectural details of the RajPedia RSS Aggregation project.",
      response: {
        status: "200 OK",
        project: "RajPedia",
        type: "RSS News Aggregation Platform",
        stack: {
          backend: "Python / FastAPI",
          database: "PostgreSQL (indexed article metadata)",
          templating: "Jinja2 / HTML / CSS",
          parser: "Automated feed ingestion background tasks"
        },
        repository: "https://github.com/NitinVibe"
      }
    },
    {
      method: "POST",
      endpoint: "/api/v1/inquiry",
      title: "Dispatch Inquiry (Simulated)",
      description: "Simulates dispatching a job opportunity or message payload.",
      requestBody: {
        sender_name: "Engineering Hiring Lead",
        company: "Tech Company",
        role_type: "Python Backend / Full-Stack Engineer",
        message: "Hi Nitin, we'd like to discuss backend engineering opportunities with you."
      },
      response: {
        status: "201 Created",
        message: "Inquiry successfully recorded in demo sandbox. Nitin will receive your note directly at tanwarsinghnitin@gmail.com.",
        simulation: true
      }
    }
  ]
};
