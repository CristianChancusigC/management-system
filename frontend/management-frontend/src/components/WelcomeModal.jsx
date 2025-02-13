import { useEffect } from "react";

export function WelcomeModal({ nameCustom, setActive }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className="welcome-modal bg-black/50 text-white p-4 inset-0 
    fixed flex flex-col justify-center items-center backdrop-blur-2xl"
    >
      <div
        className="border-2 border-white p-5 rounded-2xl flex flex-col items-center
      bg-gray-700"
      >
        <h1 className="mb-4">Bienvenido/a!</h1>
        <h1 className="mb-4">{nameCustom}</h1>
        <button
          onClick={setActive}
          className="bg-blue-400 rounded-full border-2 border-white"
        >
          <p className="px-5 py-1">Continuar</p>
        </button>
      </div>
    </div>
  );
}
