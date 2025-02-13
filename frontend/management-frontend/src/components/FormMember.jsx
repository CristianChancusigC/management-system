import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const optionsGender = ["Hombre", "Mujer"];
const optionsMembreship = ["Diario", "Mensual", "Semestral"];

export function FormMember({ setActive }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    // <div className="w-full h-full bg-gray-600 fixed justify-center">
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
        <h1 className="text-xl font-bold mb-4">Cliente</h1>
        <button
          className="absolute top-4 right-4 rounded-full border-white border-2"
          onClick={setActive}
        >
          <XMarkIcon className="w-10 h-10" />
        </button>
        <form className="flex flex-col items-center justify-center">
          <section>
            <header className="font-bold text-lg mb-2 text-start">
              Informacion Personal
            </header>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-2 font-medium text-start"
                >
                  Nombre
                </label>
                <input
                  id="firstName"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                  type="text"
                  placeholder="Cristian"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-2 font-medium text-start"
                >
                  Apellido
                </label>
                <input
                  id="lastName"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                  type="text"
                  placeholder="Chancusig"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium text-start">
                  Email
                </label>
                <input
                  id="email"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="cell_phone"
                  className="mb-2 font-medium text-start"
                >
                  Celular
                </label>
                <input
                  id="cell_phone"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                  type="text"
                  placeholder="0987654321"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="date_of_birth"
                  className="mb-2 font-medium text-start"
                >
                  Fecha de Nacimiento
                </label>
                <input
                  id="date_of_birth"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                  type="date"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="gender" className="mb-2 font-medium text-start">
                  Genero
                </label>
                <select
                  id="gender"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                >
                  <option key="1" value="" className="text-black">
                    Seleccione una opción
                  </option>
                  {optionsGender.map((opGender) => (
                    <option
                      key={opGender}
                      value={opGender}
                      className="text-black"
                    >
                      {opGender}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="member_notes"
                  className="mb-2 font-medium text-start"
                >
                  Nota
                </label>
                <textarea
                  name="member_notes"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>
          <hr className="border-gray-600 border-0.5 w-[95%] my-8" />

          <section>
            <header className="font-bold text-lg mb-2 text-start">
              Membresia
            </header>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="membership_type"
                  className="mb-2 font-medium text-start"
                >
                  Tipo
                </label>
                <select
                  id="membership_type"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                >
                  <option key="1M" value="" className="text-black">
                    Seleccione una opción
                  </option>
                  {optionsMembreship.map((membreship) => (
                    <option
                      key={membreship}
                      value={membreship}
                      className="text-black"
                    >
                      {membreship}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="membership_start_date"
                  className="mb-2 font-medium text-start"
                >
                  Fecha de Inicio
                </label>
                <input
                  id="membership_start_date"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                  type="date"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="membership_notes"
                  className="mb-2 font-medium text-start"
                >
                  Nota
                </label>
                <textarea
                  name="membership_notes"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>
          <hr className="border-gray-600 border-0.5 w-[95%] my-8" />

          <section>
            <header className="font-bold text-lg mb-2 text-start">Extra</header>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="height" className="mb-2 font-medium text-start">
                  Altura
                </label>
                <input
                  id="height"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                  type="number"
                  min={1}
                  placeholder="1.70 m"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="weight" className="mb-2 font-medium text-start">
                  Peso
                </label>
                <input
                  id="weight"
                  className="outline-none rounded-2xl p-2 border-2 border-gray-500 focus:border-blue-500"
                  type="number"
                  placeholder="60.5 kg"
                  min={50}
                />
              </div>
            </div>
          </section>
        </form>
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
