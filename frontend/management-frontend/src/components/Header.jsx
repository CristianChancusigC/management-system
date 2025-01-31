import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-4 bg-green-50 text-black h-15">
      <p>Gym</p>
      <Navbar />
    </header>
  );
}
