import { ExternalLink, Mail, MapPin, Server } from "lucide-react";
import YearsSince from "@/components/YearsSince";
export const dynamic = "force-static";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-2">
            hey, I&apos;m Karan Jadhav <span className="wave-on-load">👋</span>
          </h1>
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
            Driven by a passion for building software that improves lives, I
            love solving problems and creating things that make a difference.
          </p>

          <p>
            I&apos;m currently working at{" "}
            <a
              href="https://intensel.net"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intensel LTD
            </a>{" "}
            as a Software Engineer, building a platform that helps businesses
            understand and manage climate risk. I focus on practical, impactful
            engineering to help companies navigate environmental challenges.
          </p>

          <p className="text-gray-300">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open source projects, or thinking
            about ways technology can solve real-world problems.
          </p>

          <p className="text-gray-300">
            Feel free to reach out and say hi on{" "}
            <a
              href="https://x.com/IamKaranJadhav"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter <ExternalLink className="w-3 h-3" />
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
            . I&apos;m always open to connecting with like-minded individuals
            and exploring new opportunities.
          </p>
        </div>

        <div className="space-y-6">
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
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Experience</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <div className="font-medium">
                Software Engineer at Intensel LTD
              </div>
              <div className="text-sm text-gray-400">
                2021 - Present (<YearsSince startYear={2021} />)
              </div>
              <div className="text-sm mt-1">
                Building climate risk management platforms and geospatial APIs.
                Focused on distributed workflows, scalable data processing, and
                interactive mapping for real-time climate risk assessment.
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
                <span
                  className="ml-1 inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30"
                  aria-label="Core skill"
                >
                  Core
                </span>
              </h3>
              <div className="text-xs text-gray-400">
                APIs & distributed systems
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
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Languages</h3>
              <div className="text-xs text-gray-400">
                General-purpose coding
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  Python
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Rust
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Go
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  JS / TS
                </span>
              </div>
            </div>

            {/* Frontend */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Frontend</h3>
              <div className="text-xs text-gray-400">Web apps & interfaces</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  React
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Mapbox
                </span>
              </div>
            </div>

            {/* Cross-platform */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">
                Cross-platform
              </h3>
              <div className="text-xs text-gray-400">Mobile & desktop</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Flutter
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Tauri
                </span>
              </div>
            </div>

            {/* Data & Storage */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">
                Data & Storage
              </h3>
              <div className="text-xs text-gray-400">Databases & messaging</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded ring-1 ring-inset ring-blue-400/30">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Redis
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  RabbitMQ
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  AWS S3
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  MapServer
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
                  Linux
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
                Enterprise platform helping businesses assess and manage
                environmental risks.
                <br />
                <span className="block mt-2 text-gray-400">
                  Built geospatial analytics, distributed processing workflows,
                  and scalable APIs for interactive mapping. Enabled businesses
                  across multiple regions to evaluate climate risk in real time,
                  improving decision-making and resilience planning.
                </span>
              </div>
            </div>
            <div>
              <div className="font-medium">Global Building Footprints</div>
              <div className="text-sm text-gray-400 mt-1">
                Prepared and indexed trillions of building footprints in PostGIS
                for sub-second spatial queries. Delivered scalable analytics for
                urban planning and climate risk assessment, supporting
                large-scale geospatial datasets at national and global levels.
              </div>
            </div>
            <div>
              <div className="font-medium">Map Tile Service</div>
              <div className="text-sm text-gray-400 mt-1">
                MapServer + FastAPI service for authenticated, cached raster
                tiles powering Mapbox-based maps. Optimized delivery for
                interactive geospatial applications, ensuring fast rendering and
                reliability for enterprise mapping clients.
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>
              Open to high-impact collaborations, consulting, and OSS—drop me a
              line{" "}
              <a
                href="mailto:karan@jadhav.dev"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                karan@jadhav.dev
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
