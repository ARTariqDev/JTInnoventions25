import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./app.css";
import Logo from "./assets/logo.png";

export const links = () => [{ rel: "icon", type: "image/png", href: Logo }];

export const meta = () => {
  return [
    { title: "Innoventions'25 - 3-Day Science Olympiad by LGS JT | Pakistan's Premier Science Competition" },
    { 
      name: "description", 
      content: "Join Innoventions'25, a 3-day Science Olympiad by LGS JT featuring Science, Mathematics, IT, Robotics, and Astronomy competitions. Open to students across Pakistan, fostering creativity, innovation, and critical thinking skills." 
    },
    { name: "keywords", content: "Innoventions 2025, Science Olympiad, LGS JT, Lahore Grammar School, science competition, mathematics, robotics, astronomy, IT, Pakistan students, STEM education, science fair" },
    { name: "author", content: "LGS JT" },
    { name: "robots", content: "index, follow" },
    

    { property: "og:type", content: "event" },
    { property: "og:title", content: "Innoventions'25 - 3-Day Science Olympiad by LGS JT" },
    { 
      property: "og:description", 
      content: "Join Pakistan's premier Science Olympiad! 3 days of Science, Mathematics, IT, Robotics & Astronomy competitions. Open to students nationwide. Fostering creativity, innovation & critical thinking." 
    },
    { property: "og:url", content: "https://jt-innoventions25.vercel.app" },
    { property: "og:site_name", content: "Innoventions'25 - LGS JT Science Olympiad" },
    { property: "og:locale", content: "en_US" },
    

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Innoventions'25 - Pakistan's Premier Science Olympiad" },
    { 
      name: "twitter:description", 
      content: "3-day Science Olympiad by LGS JT. Science, Math, IT, Robotics & Astronomy competitions for students across Pakistan. Register now!" 
    },
    

    { name: "theme-color", content: "#ffffff" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },
    { name: "distribution", content: "global" },
    { name: "rating", content: "general" },
    

    { name: "geo.region", content: "PK-PB" },
    { name: "geo.placename", content: "Lahore, Punjab, Pakistan" },
    { name: "geo.position", content: "31.5204;74.3587" }, // Lahore coordinates
    { name: "ICBM", content: "31.5204, 74.3587" },
  ];
};

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        
        {/* Basic meta tags are sufficient for SEO */}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}