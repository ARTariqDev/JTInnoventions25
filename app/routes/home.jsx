import Button from "../components/Button";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[#111111] min-h-screen flex flex-col items-center justify-center p-8 overflow-visible">
      <h1 className="text-white text-center mb-6">
        Returning a React Fragment for now, will change later
      </h1>
      <Button text="Button" />
    </main>

  );
}
