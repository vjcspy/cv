export interface Badge {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EducationEntry {
  school: string;
  program: string;
  focus: string;
}

export interface CertificationEntry {
  label: string;
  detail: string;
}

export interface Project {
  title: string;
  dates?: string;
  role: string;
  domain?: string;
  description?: string;
  responsibilitiesLabel?: string;
  bullets: string[];
  achievement: string;
  techStackLabel: string;
  techStack: string;
}

export interface CVData {
  name: string;
  subtitle: string;
  contact: {
    phone: string;
    email: string;
  };
  badges: Badge[];
  summary: string[];
  leadership: string[];
  skillGroups: SkillGroup[];
  education: EducationEntry;
  certifications: CertificationEntry[];
  projects: Project[];
  personalProjects: Project[];
}

export const cv: CVData = {
  name: "DINH KHOI",
  subtitle: "Solution Architect | Full Stack Engineer",
  contact: {
    phone: "+84 876543 435",
    email: "dinhkhoi.le1996@gmail.com",
  },
  badges: [
    {
      src: "/badges/aws-solutions-architect-pro.png",
      alt: "AWS Certified Solutions Architect Professional",
      width: 255,
      height: 240,
    },
    {
      src: "/badges/kubernetes-ckad.png",
      alt: "Certified Kubernetes Application Developer (CKAD)",
      width: 317,
      height: 240,
    },
    {
      src: "/badges/magento2-professional-developer-plus.png",
      alt: "Magento 2 Certified Professional Developer Plus",
      width: 128,
      height: 229,
    },
    {
      src: "/badges/terraform-associate.png",
      alt: "HashiCorp Certified Terraform Associate",
      width: 240,
      height: 240,
    },
    {
      src: "/badges/harness-cd-gitops.png",
      alt: "Harness Certified Continuous Delivery & GitOps Developer",
      width: 240,
      height: 240,
    },
  ],
  summary: [
    "Senior full-stack developer with 10+ years of experience specializing in backend development for high-traffic e-commerce and banking sectors.",
    "Expert in Node.js, TypeScript, Java, and microservices architecture.",
    "Proven track record delivering scalable solutions for enterprise clients including National Australia Bank and major cryptocurrency exchanges.",
    "Strong leadership experience mentoring teams and architecting systems supporting millions of users with thousands of concurrent connections per second.",
  ],
  leadership: [
    "Successfully delivered 50+ enterprise applications across banking and e-commerce domains",
    "Led development teams of 15+ members in international environments",
    "Architected critical applications within banking Home Ownership domain",
    "Established best practices for microservices architecture and DevOps workflows",
    "AWS Certified Solutions Architect and Kubernetes Certified professional.",
  ],
  skillGroups: [
    {
      title: "Backend Development:",
      items: [
        "Node.js & TypeScript - Expert level, microservices architecture",
        "Java (Spring Boot, Quarkus) - Enterprise application development",
        "PHP (Laravel, Magento) - E-commerce platform development",
        "Python - API development and automation",
        "C# (Unity, .NET Core) - Cross-platform development",
      ],
    },
    {
      title: "Database & Infrastructure:",
      items: [
        "PostgreSQL, MySQL - Advanced database design and optimization",
        "MongoDB, Redis - NoSQL and caching solutions",
        "Elastic Search - Search and analytics implementation",
        "AWS Services - Lambda, RDS, S3, Cognito, CloudWatch",
        "Kubernetes, Docker - Container orchestration and deployment",
      ],
    },
    {
      title: "DevOps & Architecture:",
      items: [
        "Microservices Architecture - Design and implementation",
        "CI/CD - Jenkins, Harness, Terraform, GitLab",
        "Monitoring - Splunk, OpenSearch, Fluent Bit, Sentry",
        "System Design - High-availability, scalable architectures",
        "Security - JWT, OAuth, encryption, OWASP best practices",
      ],
    },
    {
      title: "Frontend Technologies:",
      items: [
        "JavaScript/TypeScript, React, Angular, Next.js",
        "React Native, Electron - Mobile and desktop applications",
        "Redux, RxJS - State management and reactive programming",
      ],
    },
  ],
  education: {
    school: "Academy of Finance",
    program: "Securities Specialization",
    focus:
      "Financial markets, investment analysis, securities trading, and portfolio management",
  },
  certifications: [
    {
      label: "AWS Certified:",
      detail: "Cloud Solutions Architecture and Development",
    },
    {
      label: "Harness Certified:",
      detail: "Continuous Delivery and DevOps Platform",
    },
    {
      label: "Kubernetes (K8S) Certified:",
      detail: "Container Orchestration and Management",
    },
    {
      label: "Terraform Certified:",
      detail: "Infrastructure as Code and Cloud Automation",
    },
  ],
  projects: [
    {
      title: "Enterprise Banking Platform Development",
      dates: "Aug 2022 – Aug 2025",
      role: "Technical Leader | Banking & Finance Domain",
      bullets: [
        "Led development team of 15 members contributing to one of Australia's top 3 largest banks, driving technical excellence and innovation within the Home Ownership domain",
        "Architected and built critical applications enhancing customer experience and business capabilities for home loan processing and mortgage management systems",
        "Established best practices for high-quality software delivery and mentored engineers on microservices architecture and DevOps workflows",
        "Implemented enterprise-grade security and compliance standards for banking applications handling sensitive financial data",
      ],
      achievement:
        "Successfully delivered mission-critical banking applications with 99.9% uptime and zero security incidents",
      techStackLabel: "Technology Stack:",
      techStack:
        "Node.js, AWS, Redis, WebSocket, PostgreSQL, Java, React, Kubernetes, Splunk, OpenSearch, RabbitMQ, Jenkins, Harness, Terraform.",
    },
    {
      title: "F&B Chain Management Platform",
      dates: "Jan 2019 – June 2022",
      role: "Solution Architect | Retail & E-commerce Domain",
      bullets: [
        "Consulted for Vietnam's largest F&B and restaurant chain, operating nearly 500 locations and major brands like The Coffee House, serving millions of customers",
        "Led cross-functional engineering team providing technical leadership for retail operations, inventory management, and customer engagement systems",
        "Provided technical solutions for systems supporting millions of users and thousands of concurrent connections per second including POS integration, order management, and customer loyalty programs",
        "Architected scalable solutions for retail operations enhancing performance and user experience across multiple restaurant brands",
      ],
      achievement:
        "Delivered high-performance systems serving millions of users with 99.95% availability",
      techStackLabel: "Technology Stack:",
      techStack:
        "PostgreSQL, MongoDB, React.js, Magento e-commerce platform, Angular, Node.js, React Native.",
    },
    {
      title: "Global Cryptocurrency Exchange Platform",
      dates: "June 2019 – Dec 2020",
      role: "Full Stack Developer | Fintech & Trading Domain",
      bullets: [
        "Contributed to a leading global cryptocurrency exchange, operating in a complex, high-stakes enterprise environment serving millions of traders worldwide",
        "Developed and maintained high-throughput APIs using Python and Java, providing critical, real-time data for core cryptocurrency trading services including order matching, portfolio management, and transaction processing",
        "Built micro frontend mini-apps for internal use, integrating with complex infrastructure and complete workflows including testing and monitoring systems",
        "Optimized deployments in high-scale setup to ensure reliability and efficiency for real-time trading operations handling millions of transactions per day",
      ],
      achievement:
        "Maintained 99.99% uptime for critical trading APIs handling millions of transactions daily",
      techStackLabel: "Technology Stack:",
      techStack: "Python, Java, Kubernetes, Docker, Harness, React, Splunk, OpenSearch.",
    },
    {
      title: "Enterprise E-commerce Solutions Development",
      dates: "Sept 2015 – June 2019",
      role: "Full Stack Developer & Technical Lead | E-commerce Domain",
      bullets: [
        "Worked for Asia's leading Adobe Partner, specializing in delivering enterprise-level Magento e-commerce solutions for global retail clients",
        "Acted as technical lead, architecting and delivering end-to-end e-commerce solutions for enterprise clients on the Magento 2 platform",
        "Designed and implemented comprehensive retail ecosystem, integrating third-party services such as payment gateways, shipping solutions, and Point-of-Sale systems",
        "Led development team in building highly customized, real-time applications and interactive frontends using Angular to enhance customer engagement",
      ],
      achievement:
        "Delivered 20+ enterprise e-commerce solutions with 95% client satisfaction rate",
      techStackLabel: "Technology Stack:",
      techStack: "Magento 2, Angular, PHP, MySQL, Redis, real-time applications.",
    },
    {
      title: "Enterprise Banking E-Statement System",
      role: "Full Stack Developer | Enterprise Financial Platform",
      domain: "Banking & Finance Domain",
      description:
        "Developed comprehensive microservices system for both personal and enterprise banking customers, enabling digital transformation of traditional banking document management",
      responsibilitiesLabel: "My Responsibilities:",
      bullets: [
        "Built secure e-statement registration system with multi-email notifications (daily/monthly), supporting complex business logic for balance notifications, debt management, and financial document delivery",
        "Implemented advanced UI features including pagination, search functionality, multi-column filtering, PDF generation, printing capabilities, and bulk operations for enterprise banking needs",
        "Integrated SOAP services for secure PDF content retrieval, implemented enterprise security requirements including token-based authentication, OTP verification, and password confirmation",
        "Deployed using GitLab CI/CD with Rancher Kubernetes, comprehensive health monitoring, and automated scaling for high-volume banking operations",
      ],
      achievement:
        "Delivered mission-critical banking application with zero security incidents, 99.9% uptime, and successful handling of millions of banking documents",
      techStackLabel: "Technology Stack:",
      techStack: "Nest.js, TypeORM, React, Redux Saga, Kubernetes, PostgreSQL, GitLab CI/CD, Rancher.",
    },
  ],
  personalProjects: [
    {
      title: "Advanced Banking & E-commerce Solutions",
      role: "",
      bullets: [
        "Complete microservices platform with advanced features including real-time processing, user management, and payment integration",
        "High-performance APIs supporting 10,000+ concurrent users with sub-second response times",
        "Enterprise-grade security implementation with encryption and compliance standards",
        "Performance optimization achieving 50% reduction in response times and 99.9% availability",
      ],
      achievement: "",
      techStackLabel: "Technology:",
      techStack: "Node.js, TypeScript, PostgreSQL, AWS, Kubernetes, Docker, Redis",
    },
  ],
};
