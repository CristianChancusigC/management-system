import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { WelcomeModal } from "../components/WelcomeModal";
import { getAllMembers, getAllTrainers } from "../api/management.api";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // function loadMembers() {
    //   getAllMembers2().then((res) => setMembers(res));
    //   console.log(members);
    // }

    async function loadMembers() {
      const res = await getAllMembers();
      console.log(res);
    }

    async function loadTrainers() {
      const response = await getAllTrainers();
      console.log(response);
    }

    loadMembers();
    loadTrainers();
  }, []);

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
