import {
  BookOpen,
  ExternalLink,
  FileText,
  Github,
  Mail,
  MapPin,
  Server,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://jadhav.dev/#profile",
  url: "https://jadhav.dev",
  name: "Karan Jadhav | Backend Engineer",
  description:
    "Backend engineer with 5+ years building production Python services, distributed geospatial data platforms, and high-performance APIs on AWS.",
  inLanguage: "en",
  mainEntity: {
    "@type": "Person",
    "@id": "https://jadhav.dev/#person",
    name: "Karan Jadhav",
    url: "https://jadhav.dev",
    email: "mailto:karan@jadhav.dev",
    jobTitle: "Backend Engineer",
    homeLocation: {
      "@type": "Place",
      name: "Navi Mumbai, India",
    },
    sameAs: [
      "https://github.com/karan-jadhav",
      "https://www.linkedin.com/in/jadhav-karan/",
      "https://x.com/IamKaranJadhav",
    ],
    knowsAbout: [
      "Python",
      "Backend engineering",
      "Distributed systems",
      "PostgreSQL",
      "Geospatial data",
      "Amazon Web Services",
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 flex items-center justify-center px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-2">
            hey, I&apos;m Karan Jadhav <span className="wave-on-load">👋</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
            Backend engineer with 5+ years building production Python services,
            distributed geospatial data platforms, and high-performance APIs on
            AWS.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <a
              href="/Karan_Jadhav_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
            <a
              href="https://github.com/karan-jadhav"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jadhav-karan/"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:karan@jadhav.dev"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>
              Navi Mumbai, India{" "}
              <span aria-label="India" role="img">
                🇮🇳
              </span>
            </span>
          </div>

          <p>
            I build Python backend systems for geospatial data, climate risk
            analytics, distributed processing, and high-performance APIs.
          </p>

          <p>
            From March 2021 to May 2026, I worked at{" "}
            <a
              href="https://intensel.net"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intensel Ltd
            </a>{" "}
            as a Software Engineer focused on backend and data infrastructure. I
            owned architecture, delivery, distributed processing, and production
            support for a climate risk platform used by enterprise customers
            across 10+ countries.
          </p>

          <p className="text-gray-300">
            Feel free to reach out and say hi on{" "}
            <a
              href="https://x.com/IamKaranJadhav"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              X <ExternalLink className="w-3 h-3" />
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/jadhav-karan/"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
            . I&apos;m always happy to connect, collaborate, and share
            knowledge.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Selected impact</h2>
          <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-300">
            <div className="border-l border-blue-400/40 pl-4">
              <div className="text-white font-medium">
                2.3B+ building records
              </div>
              <div className="text-gray-400 mt-1">
                Designed ingestion and query systems across 1.8 TB of PostGIS
                data.
              </div>
            </div>
            <div className="border-l border-blue-400/40 pl-4">
              <div className="text-white font-medium">50K+ jobs/day</div>
              <div className="text-gray-400 mt-1">
                Operated AWS SQS and Dask workflows with scheduling, retries,
                worker orchestration, and failure recovery.
              </div>
            </div>
            <div className="border-l border-blue-400/40 pl-4">
              <div className="text-white font-medium">
                Minutes to single-digit milliseconds
              </div>
              <div className="text-gray-400 mt-1">
                Reduced critical query latency through PostGIS indexing and
                query optimization.
              </div>
            </div>
            <div className="border-l border-blue-400/40 pl-4">
              <div className="text-white font-medium">p99 under 200ms</div>
              <div className="text-gray-400 mt-1">
                Built FastAPI and Django APIs with caching strategies for
                production load.
              </div>
            </div>
            <div className="border-l border-blue-400/40 pl-4 sm:col-span-2">
              <div className="text-white font-medium">
                60% faster deployments
              </div>
              <div className="text-gray-400 mt-1">
                Built Docker-based CI/CD and deployed services to Kubernetes on
                Amazon EKS with CloudWatch observability.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Currently</h2>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium">
                  Focusing on distributed systems (DDIA)
                </div>
                <div className="text-sm text-gray-400">
                  Exploring consistency models, data partitioning strategies,
                  and scalable system design.
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Experience</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <div className="font-medium">
                Software Engineer (Backend & Data Infrastructure) at Intensel Ltd
              </div>
              <div className="text-sm text-gray-400">
                March 2021 - May 2026 · 5+ years
              </div>
              <div className="text-sm mt-1">
                Owned backend architecture and data infrastructure for a climate
                risk platform serving enterprise customers across 10+ countries.
                Took changes from ambiguous requirements through technical
                design, automated testing, deployment, and production support;
                reviewed code, mentored engineers, and investigated incidents
                across APIs, workers, queues, databases, and deployments.
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Skills</h2>
          <div className="text-xs text-gray-500 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
            <span className="inline-flex items-center gap-1">
              <span className="px-2 py-0.5 text-[10px] bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                Core Expertise
              </span>
              <span className="text-gray-500">
                = primary skills across sections
              </span>
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="px-2 py-0.5 text-[10px] bg-gray-800 text-gray-300 rounded ring-1 ring-inset ring-gray-700/50">
                Also work with
              </span>
              <span className="text-gray-500">
                = other skills I use regularly
              </span>
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Backend (Core) first */}
            <div id="backend-core" className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200 inline-flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-300" />
                Backend
                <span className="relative inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80 animate-pulse"></span>
                </span>
                {" "}
                <span
                  className="ml-1 inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30"
                  aria-label="Core skill"
                >
                  Core
                </span>
              </h3>
              <div className="text-xs text-gray-400">
                APIs, validation & testing
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  Django
                </span>
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  FastAPI
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Axum
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  REST APIs
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Validation
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Automated testing
                </span>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Languages</h3>
              <div className="text-xs text-gray-400">
                Application & data systems
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  Python
                </span>
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  SQL
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Rust
                </span>
              </div>
            </div>

            {/* AI & Analytics */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">
                AI & Analytics
              </h3>
              <div className="text-xs text-gray-400">
                Natural-language data access
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  LLM agents
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Natural-language queries
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Geospatial analytics
                </span>
              </div>
            </div>

            {/* Engineering */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Engineering</h3>
              <div className="text-xs text-gray-400">
                Delivery & production support
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  System design
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Code review
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Mentoring
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Production debugging
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Monitoring
                </span>
              </div>
            </div>

            {/* Data & Processing */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">
                Data & Processing
              </h3>
              <div className="text-xs text-gray-400">
                Databases, queues & workers
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  PostGIS
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Redis
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  DuckDB
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  AWS SQS
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Dask
                </span>
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">
                Cloud & Infrastructure
              </h3>
              <div className="text-xs text-gray-400">
                Deployment & operations
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  AWS
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Docker
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Kubernetes
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Amazon EKS
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  EC2
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  S3
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  RDS
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Linux
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  CI/CD
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  CloudWatch
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Projects</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <div className="font-medium">Climate Risk Platform</div>
              <div className="text-sm text-gray-400 mt-1">
                Owned backend architecture and delivery for an enterprise
                climate risk platform serving customers across 10+ countries,
                from requirements and technical design through rollout and
                production support.
              </div>
            </div>
            <div>
              <div className="font-medium">
                Natural-Language Geospatial Analytics
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Built an LLM-powered agent that converted natural-language
                requests into structured geospatial and analytics queries, using
                DuckDB for vector-data analysis and integrating with backend APIs
                and PostgreSQL/PostGIS.
              </div>
            </div>
            <div>
              <div className="font-medium">Global Building Footprints</div>
              <div className="text-sm text-gray-400 mt-1">
                Built ingestion, validation, indexing, and query workflows for
                2.3B+ building records across 1.8 TB of PostGIS data, balancing
                batch throughput with low-latency access.
              </div>
            </div>
            <div>
              <div className="font-medium">Map Tile Service</div>
              <div className="text-sm text-gray-400 mt-1">
                Designed authenticated backend delivery for 5.3 TB of geospatial
                raster data, with tuned storage access, caching, logging, and
                monitoring for reliable production delivery.
              </div>
            </div>
            <div>
              <div className="font-medium">RediServe</div>
              <div className="text-sm text-gray-400 mt-1">
                Built an asynchronous HTTP API for Redis in Rust with Axum and
                Tokio, using connection pooling and explicit backend resource
                management.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Education</h2>
          <div className="space-y-1 text-gray-300">
            <div className="font-medium">Bachelor of Computer Science</div>
            <div className="text-sm text-gray-400">
              University of Mumbai · 2020
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm flex flex-wrap items-center gap-x-3 gap-y-2">
            <Mail className="w-4 h-4" />
            <span>
              Open to high-impact collaborations, consulting, and OSS, drop me a
              line{" "}
              <a
                href="mailto:karan@jadhav.dev"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                karan@jadhav.dev
              </a>
            </span>
            <span className="text-gray-600">/</span>
            <a
              href="/Karan_Jadhav_Resume.pdf"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume
            </a>
            <span className="text-gray-600">/</span>
            <a
              href="https://github.com/karan-jadhav"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
