import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { WelcomeModal } from "../components/WelcomeModal";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-full min-h-screen bg-gray-500 p-4">
      <p>Home</p>
      <SearchBar />
      <div
        className="flex flex-col items-center justify-center border-amber-50
      border-2 rounded-lg p-4"
      >
        <p>Clientes</p>
      </div>
      <SearchBar />
      <div
        className="flex flex-col items-center justify-center border-amber-50
        border-2 rounded-lg p-4"
      >
        <button onClick={handleShowModal}>Show Modal</button>
      </div>
      {showModal && (
        <WelcomeModal nameCustom={"Cris"} setActive={handleShowModal} />
      )}
    </div>
  );
}
