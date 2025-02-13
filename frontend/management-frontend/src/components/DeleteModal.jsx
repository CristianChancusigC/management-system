export function DeleteModal({ member, setActive }) {
  return (
    <div
      className="bg-black/50 text-white p-4 inset-0 
  fixed flex flex-col justify-center items-center backdrop-blur-2xl overflow-y-auto"
      onClick={setActive}
    >
      <div
        className="border-2 border-white p-6 rounded-2xl flex flex-col gap-6 items-center bg-gray-800
       max-h-[90vh] overflow-y-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <p>
          ¿Estás seguro de eliminar a {member.first_name} {member.last_name}?
        </p>
        <div className="flex flex-row items-center gap-5 justify-center">
          <button
            className="border-2 px-4 py-2 rounded-md bg-green-400"
            onClick={setActive}
          >
            Agregar
          </button>
          <button
            className="border-2 px-4 py-2 rounded-md bg-red-400"
            onClick={setActive}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
