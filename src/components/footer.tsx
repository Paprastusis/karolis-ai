import { Mail } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 1 1 0 3.12ZM18.91 18.74h-3v-4.26c0-1.08-.43-1.82-1.46-1.82a1.43 1.43 0 0 0-1.35 1 1.72 1.72 0 0 0-.08.65v4.43h-3v-9h2.9v1.3a2.88 2.88 0 0 1 2.62-1.45c1.88 0 3.37 1.23 3.37 3.87Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#070612] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-12">
        <p className="text-sm text-muted">&copy; 2026</p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:karolistamas@gmail.com"
            className="flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            karolistamas@gmail.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-300 hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
