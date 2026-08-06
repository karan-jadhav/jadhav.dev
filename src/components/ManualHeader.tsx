import Link from "next/link";

export function ManualHeader() {
  return (
    <header className="manual-header">
      <div className="manual-header__inner">
        <Link href="/" className="manual-prompt" aria-label="Karan Jadhav, home">
          <span>karan@jadhav.dev</span>:~$<i aria-hidden="true" />
        </Link>
        <nav className="manual-nav" aria-label="Primary navigation">
          <Link href="/">home(1)</Link>
          <Link href="/blog">notes(7)</Link>
          <a href="/Karan_Jadhav_Resume.pdf" target="_blank" rel="noreferrer">
            resume.pdf
          </a>
          <a href="mailto:karan@jadhav.dev">mail</a>
        </nav>
      </div>
    </header>
  );
}
