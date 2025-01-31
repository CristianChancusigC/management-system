export function WelcomeModal({ nameCustom, setActive }) {
  return (
    <div
      className="welcome-modal bg-black/50 text-white p-4 inset-0 
    fixed flex flex-col justify-center items-center backdrop-blur-2xl"
    >
      <div className="border-2 border-white p-4 rounded-2xl flex flex-col items-center">
        <h1 className="mb-4">Bienvenido/a!</h1>
        <h1 className="mb-4">{nameCustom}</h1>
        <button onClick={setActive}>Continuar</button>
      </div>
    </div>
  );
}
