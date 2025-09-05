import { ExternalLink, Mail, MapPin, Calendar } from "lucide-react";
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
            <span>Navi Mumbai, India</span>
          </div>

          <p>
            I&apos;m a software engineer with a passion for building software
            that improves the lives of people. I love to solve problems and
            create things that make a difference.
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
            as a Software Engineer, developing a cutting-edge platform that
            helps businesses understand and manage their climate risk
            effectively. My work is geared towards making a significant impact
            on how companies navigate environmental challenges.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Currently</h2>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium">
                  Learning Next.js 14 and Server Components
                </div>
                <div className="text-sm text-gray-400">
                  Exploring the latest React patterns and full-stack development
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium">
                  Reading &quot;Designing Data-Intensive Applications&quot;
                </div>
                <div className="text-sm text-gray-400">
                  Deepening my understanding of distributed systems
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <div className="font-medium">
                  Contributing to open source climate tech projects
                </div>
                <div className="text-sm text-gray-400">
                  Using technology to address environmental challenges
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Experience</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 mt-1 text-gray-500" />
              <div>
                <div className="font-medium">
                  Software Engineer at Intensel LTD
                </div>
                <div className="text-sm text-gray-400">2023 - Present</div>
                <div className="text-sm mt-1">
                  Building climate risk management platforms that help
                  businesses navigate environmental challenges
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-xl font-light text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  JavaScript
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  TypeScript
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Python
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  React
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Next.js
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Tailwind
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Node.js
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Docker
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">
                Cloud & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  AWS
                </span>
                <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                  Git
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
                environmental risks
              </div>
            </div>
            <div>
              <div className="font-medium">Open Source Contributions</div>
              <div className="text-sm text-gray-400 mt-1">
                Contributing to various open source projects in the JavaScript
                ecosystem
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
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

        <div className="pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Want to work together?{" "}
            <a
              href="mailto:karan@jadhav.dev"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Drop me a line
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
