import type { SVGProps } from "react";

export type IconName =
  | "terminal"
  | "code"
  | "arrow-right"
  | "download"
  | "external"
  | "mail"
  | "github"
  | "linkedin"
  | "menu"
  | "close"
  | "check"
  | "node";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

function IconPaths({ name }: { name: IconName }) {
  switch (name) {
    case "terminal":
      return (
        <>
          <path d="M4 5h16v14H4z" />
          <path d="M7 9l3 3-3 3M12 15h5" />
        </>
      );
    case "code":
      return <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" />;
    case "arrow-right":
      return <path d="M3 12h17M14 6l6 6-6 6" />;
    case "download":
      return <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />;
    case "external":
      return <path d="M14 4h6v6M20 4L10 14M18 13v7H4V6h7" />;
    case "mail":
      return (
        <>
          <path d="M3 5h18v14H3z" />
          <path d="M3 6l9 7 9-7" />
        </>
      );
    case "github":
      return (
        <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44v-1.7c-2.5.55-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.51 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.17.09 2.4.58.63.93 1.44.93 2.42 0 3.47-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.48c0 .24.16.53.62.44A9 9 0 0 0 12 3z" />
      );
    case "linkedin":
      return (
        <>
          <path d="M4 4h16v16H4z" />
          <path d="M8 10v7M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4" />
        </>
      );
    case "menu":
      return <path d="M4 6h16M4 12h11M4 18h16" />;
    case "close":
      return <path d="M5 5l14 14M19 5L5 19" />;
    case "check":
      return <path d="M4 12l5 5L20 7" />;
    case "node":
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </>
      );
  }
}

export default function Icon({
  name,
  size = 24,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <IconPaths name={name} />
    </svg>
  );
}
