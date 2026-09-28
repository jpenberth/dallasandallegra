import { social } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-line pt-8 text-center md:flex-row md:text-left">
        <p className="text-xs text-steel-dark">
          &copy; {new Date().getFullYear()} Dallas &amp; Allegra &middot;
          Written &amp; Directed by J. Penberth Rabold
        </p>

        <a
          href={social.instagram}
          target="_blank"
          rel="noreferrer"
          className="eyebrow text-cream-dim transition-colors hover:text-ember"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
