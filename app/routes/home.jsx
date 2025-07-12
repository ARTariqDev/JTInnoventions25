import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-primary min-h-screen flex flex-col items-center justify-center p-8 overflow-visible">
      <h1 className="text-white text-center mb-6">
        Returning a React Fragment for now, will change later
      </h1>
      <Button text="register" />
    </main>
  );
}
