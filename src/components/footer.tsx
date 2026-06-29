import { Mail, Phone } from "lucide-react";

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

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.61 8.21 11.17.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.59-4.04-1.59-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.21.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 3-.4c1.02 0 2.05.13 3 .4 2.29-1.53 3.3-1.21 3.3-1.21.66 1.64.24 2.86.12 3.16.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.52-5.49 5.81.43.37.81 1.1.81 2.22 0 1.6-.02 2.9-.02 3.29 0 .31.22.68.83.56A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#070612] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-12">
        <p className="text-sm text-muted">&copy; 2026 Karolis Tamosiunas</p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <a
            href="mailto:karolistamas@gmail.com"
            className="flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            karolistamas@gmail.com
          </a>
          <a
            href="tel:+16027673078"
            className="flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            602-767-3078
          </a>
          <a
            href="https://www.linkedin.com/in/karolis-tamosiunas-6b25002b6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors duration-300 hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Paprastusis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors duration-300 hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
