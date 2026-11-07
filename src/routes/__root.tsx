import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#172B54] px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-black text-[#FEC556]">404</h1>
        <h2 className="mt-4 font-heading text-2xl font-bold text-white">Page Not Found</h2>
        <p className="mt-2 text-sm text-gray-300">
          The requested legal resource or page does not exist or has been relocated.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#FEC556] px-5 py-2.5 text-sm font-bold text-[#172B54] shadow-md hover:bg-amber-400 transition"
          >
            Return to Homepage
          </Link>
          <Link
            to="/legal-services"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
          >
            Our Legal Services
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#172B54] px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#FEC556]">
          Temporary Loading Error
        </h1>
        <p className="mt-3 text-sm text-gray-300">
          Something unexpected occurred while loading this page. Please refresh or navigate back to
          the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-[#FEC556] px-5 py-2.5 text-sm font-bold text-[#172B54] shadow-md hover:bg-amber-400"
          >
            Retry
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20"
          >
            Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Urmika Juris & Associates | Advocates & Legal Consultants, Tis Hazari Courts" },
      {
        name: "description",
        content:
          "Urmika Juris & Associates — dedicated advocates practicing at Tis Hazari Courts, Delhi High Court and Supreme Court. Criminal Defense, Family Law, Property Disputes, Corporate Advisory.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Urmika Juris & Associates" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Hanken+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
