import { ManualHeader } from "@/components/ManualHeader";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";

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
  const featuredPosts = allPosts
    .filter((post) => post.published && !post.noindex)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="manual-site">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ManualHeader />

      <main className="manual-document">
        <div className="manual-titlebar" aria-hidden="true">
          <span>KARAN(1)</span>
          <span>Personal Manual</span>
          <span>KARAN(1)</span>
        </div>
        <p className="manual-command">man karan</p>

        <section className="manual-section" aria-labelledby="name-heading">
          <h2 className="manual-section__label" id="name-heading">
            Name
          </h2>
          <div className="manual-section__body manual-name">
            <h1>
              <span className="manual-name__person">karan</span>
              <span className="manual-name__dash" aria-hidden="true">
                —
              </span>
              <span className="manual-name__role">backend engineer</span>
            </h1>
            <p className="manual-lede">
              Backend engineer with 5+ years building production Python
              services, distributed geospatial data platforms, and
              high-performance APIs on AWS.
            </p>
            <p className="manual-location">Navi Mumbai, India 🇮🇳</p>
          </div>
        </section>

        <section className="manual-section" aria-labelledby="synopsis-heading">
          <h2 className="manual-section__label" id="synopsis-heading">
            Synopsis
          </h2>
          <div className="manual-section__body">
            <p className="manual-synopsis">
              karan <strong>--build</strong> backend-systems{" "}
              <strong>--with</strong> python,postgres,aws{" "}
              <strong>--optimize-for</strong> scale,reliability
            </p>
          </div>
        </section>

        <section className="manual-section" aria-labelledby="links-heading">
          <h2 className="manual-section__label" id="links-heading">
            Links
          </h2>
          <div className="manual-section__body">
            <ul className="manual-links">
              <li>
                <a
                  href="/Karan_Jadhav_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  resume.pdf
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/karan-jadhav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jadhav-karan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a href="mailto:karan@jadhav.dev">email</a>
              </li>
              <li>
                <Link href="/blog">notes</Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="manual-section" aria-labelledby="description-heading">
          <h2 className="manual-section__label" id="description-heading">
            Description
          </h2>
          <div className="manual-section__body manual-copy">
            <p>
              I build Python backend systems for geospatial data, climate risk
              analytics, distributed processing, and high-performance APIs.
            </p>
            <p>
              From March 2021 to May 2026, I worked at{" "}
              <a
                href="https://intensel.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Intensel Ltd
              </a>{" "}
              as a Software Engineer focused on backend and data infrastructure.
              I owned architecture, delivery, distributed processing, and
              production support for a climate risk platform used by enterprise
              customers across 10+ countries.
            </p>
            <p>
              Feel free to reach out and say hi on{" "}
              <a
                href="https://x.com/IamKaranJadhav"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/jadhav-karan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              . I&apos;m always happy to connect, collaborate, and share
              knowledge.
            </p>
          </div>
        </section>

        <section
          className="manual-section manual-section--signal"
          aria-labelledby="impact-heading"
        >
          <h2 className="manual-section__label" id="impact-heading">
            Selected impact
          </h2>
          <div className="manual-section__body">
            <dl className="manual-definitions">
              <div className="manual-definition">
                <dt>
                  <code>2.3B+</code> building records
                </dt>
                <dd>
                  Designed ingestion and query systems across 1.8 TB of PostGIS
                  data.
                </dd>
              </div>
              <div className="manual-definition">
                <dt>
                  <code>50K+</code> jobs/day
                </dt>
                <dd>
                  Operated AWS SQS and Dask workflows with scheduling, retries,
                  worker orchestration, and failure recovery.
                </dd>
              </div>
              <div className="manual-definition">
                <dt>Minutes → single-digit milliseconds</dt>
                <dd>
                  Reduced critical query latency through PostGIS indexing and
                  query optimization.
                </dd>
              </div>
              <div className="manual-definition">
                <dt>
                  <code>p99</code> under 200ms
                </dt>
                <dd>
                  Built FastAPI and Django APIs with caching strategies for
                  production load.
                </dd>
              </div>
              <div className="manual-definition">
                <dt>Half-hourly NASA precipitation data</dt>
                <dd>
                  Built a near-real-time pipeline for GPM IMERG GeoTIFFs with a
                  10-minute availability buffer and Amazon S3 delivery for risk
                  monitoring and alerts.
                </dd>
              </div>
              <div className="manual-definition">
                <dt>
                  <code>60%</code> faster deployments
                </dt>
                <dd>
                  Built Docker-based CI/CD and deployed services to Kubernetes
                  on Amazon EKS with CloudWatch observability.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          className="manual-section manual-section--signal"
          aria-labelledby="writing-heading"
        >
          <h2 className="manual-section__label" id="writing-heading">
            Writing
          </h2>
          <div className="manual-section__body">
            <div className="manual-definitions">
              {featuredPosts.map((post) => (
                <article key={post.slug}>
                  <Link href={post.url} className="manual-post-link">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </time>
                    <div>
                      <ViewTransition
                        name={`blog-title-${post.slug.replaceAll("/", "-")}`}
                      >
                        <h3>{post.title}</h3>
                      </ViewTransition>
                      <ViewTransition
                        name={`blog-description-${post.slug.replaceAll("/", "-")}`}
                        share="text-morph"
                        default="none"
                      >
                        <p>{post.description}</p>
                      </ViewTransition>
                    </div>
                    <span className="manual-post-link__meta">
                      {post.readingTime} min
                    </span>
                  </Link>
                </article>
              ))}
            </div>
            <p className="manual-location">
              See the complete archive at <Link href="/blog">notes(7)</Link>.
            </p>
          </div>
        </section>

        <section
          className="manual-section manual-section--signal"
          aria-labelledby="experience-heading"
        >
          <h2 className="manual-section__label" id="experience-heading">
            Experience
          </h2>
          <div className="manual-section__body">
            <article className="manual-experience">
              <h3>
                Software Engineer (Backend &amp; Data Infrastructure) — Intensel
                Ltd
              </h3>
              <time>March 2021 – May 2026 · 5+ years</time>
              <p>
                Owned backend architecture and data infrastructure for a climate
                risk platform serving enterprise customers across 10+ countries.
                Took changes from ambiguous requirements through technical
                design, automated testing, deployment, and production support;
                reviewed code, mentored engineers, and investigated incidents
                across APIs, workers, queues, databases, and deployments.
              </p>
            </article>
          </div>
        </section>

        <section className="manual-section" aria-labelledby="skills-heading">
          <h2 className="manual-section__label" id="skills-heading">
            Skills
          </h2>
          <div className="manual-section__body">
            <div className="manual-skill-group">
              <h3>Backend / APIs, validation &amp; testing</h3>
              <p>
                <code data-core="true">Django</code>{" "}
                <code data-core="true">FastAPI</code> <code>Axum</code>{" "}
                <code>REST APIs</code> <code>Validation</code>{" "}
                <code>Automated testing</code>
              </p>
            </div>
            <div className="manual-skill-group">
              <h3>Languages / Application &amp; data systems</h3>
              <p>
                <code data-core="true">Python</code>{" "}
                <code data-core="true">SQL</code> <code>Rust</code>
              </p>
            </div>
            <div className="manual-skill-group">
              <h3>AI &amp; analytics / Natural-language data access</h3>
              <p>
                <code>LLM agents</code> <code>Natural-language queries</code>{" "}
                <code>Geospatial analytics</code>
              </p>
            </div>
            <div className="manual-skill-group">
              <h3>Engineering / Delivery &amp; production support</h3>
              <p>
                <code>System design</code> <code>Code review</code>{" "}
                <code>Mentoring</code> <code>Production debugging</code>{" "}
                <code>Monitoring</code>
              </p>
            </div>
            <div className="manual-skill-group">
              <h3>Data &amp; processing / Databases, queues &amp; workers</h3>
              <p>
                <code data-core="true">PostgreSQL</code>{" "}
                <code data-core="true">PostGIS</code> <code>Redis</code>{" "}
                <code>DuckDB</code> <code>AWS SQS</code> <code>Dask</code>
              </p>
            </div>
            <div className="manual-skill-group">
              <h3>Cloud &amp; infrastructure / Deployment &amp; operations</h3>
              <p>
                <code data-core="true">AWS</code> <code>Docker</code>{" "}
                <code>Kubernetes</code> <code>Amazon EKS</code> <code>EC2</code>{" "}
                <code>S3</code> <code>RDS</code> <code>Linux</code>{" "}
                <code>CI/CD</code> <code>CloudWatch</code>
              </p>
            </div>
          </div>
        </section>

        <section className="manual-section" aria-labelledby="projects-heading">
          <h2 className="manual-section__label" id="projects-heading">
            Projects
          </h2>
          <div className="manual-section__body manual-projects">
            <article className="manual-project">
              <span className="manual-project__index">01</span>
              <h3>Climate Risk Platform</h3>
              <p>
                Owned backend architecture and delivery for an enterprise
                climate risk platform serving customers across 10+ countries,
                from requirements and technical design through rollout and
                production support.
              </p>
            </article>
            <article className="manual-project">
              <span className="manual-project__index">02</span>
              <h3>NASA GPM IMERG Precipitation Pipeline</h3>
              <p>
                Built and operated near-real-time ingestion of half-hourly
                precipitation GeoTIFFs with a 10-minute availability buffer and
                Amazon S3 storage for insurance and financial-services risk
                monitoring and alerts.
              </p>
            </article>
            <article className="manual-project">
              <span className="manual-project__index">03</span>
              <h3>Natural-Language Geospatial Analytics</h3>
              <p>
                Built an LLM-powered agent that converted natural-language
                requests into structured geospatial and analytics queries, using
                DuckDB for vector-data analysis and integrating with backend
                APIs and PostgreSQL/PostGIS.
              </p>
            </article>
            <article className="manual-project">
              <span className="manual-project__index">04</span>
              <h3>Global Building Footprints</h3>
              <p>
                Built ingestion, validation, indexing, and query workflows for
                2.3B+ building records across 1.8 TB of PostGIS data, balancing
                batch throughput with low-latency access.
              </p>
            </article>
            <article className="manual-project">
              <span className="manual-project__index">05</span>
              <h3>Map Tile Service</h3>
              <p>
                Designed authenticated backend delivery for 5.3 TB of geospatial
                raster data, with tuned storage access, caching, logging, and
                monitoring for reliable production delivery.
              </p>
            </article>
            <article className="manual-project">
              <span className="manual-project__index">06</span>
              <h3>RediServe</h3>
              <p>
                Built an asynchronous HTTP API for Redis in Rust with Axum and
                Tokio, using connection pooling and explicit backend resource
                management.
              </p>
            </article>
          </div>
        </section>

        <section className="manual-section" aria-labelledby="education-heading">
          <h2 className="manual-section__label" id="education-heading">
            Education
          </h2>
          <div className="manual-section__body manual-education">
            <strong>Bachelor of Computer Science</strong>
            <span>University of Mumbai · 2020</span>
          </div>
        </section>

        <section className="manual-section" aria-labelledby="see-also-heading">
          <h2 className="manual-section__label" id="see-also-heading">
            See also
          </h2>
          <div className="manual-section__body manual-copy">
            <p>
              Open to high-impact collaborations, consulting, and OSS. Drop me a
              line at <a href="mailto:karan@jadhav.dev">karan@jadhav.dev</a>.
            </p>
          </div>
        </section>

        <footer className="manual-footer">
          <span>KARAN(1)</span>
          <span>August 2026</span>
          <span>KARAN(1)</span>
        </footer>
      </main>
    </div>
  );
}
