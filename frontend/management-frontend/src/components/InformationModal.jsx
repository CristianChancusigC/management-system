import { useEffect, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { SubMenu } from "./SubMenu";
import { DeleteModal } from "./DeleteModal";
import { UpdateMember } from "./UpdateMember";

export function InformationModal({ member, setActive }) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleShowSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleShowDelete = () => {
    setShowDelete(!showDelete);
  };

  const handleShowUpdate = () => {
    setShowUpdate(!showUpdate);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
        <h1 className="text-xl font-bold mb-4">Información</h1>
        <button
          // onClick={handleClickShowSubMenu}
          // onClick={handleShowDelete}
          onClick={handleShowUpdate}
          className="absolute top-4 right-4 bg-gray-700 rounded-full border-2 border-white"
        >
          <EllipsisVerticalIcon className="w-10 h-10" />
        </button>
        <section className="w-full border-gray-600 border-2 rounded-2xl p-4">
          <header className="mb-2">
            <h2 className="text-lg font-semibold">Información Personal</h2>
          </header>

          <dl className="grid grid-cols-2 gap-y-4 gap-x-6">
            <div className="flex flex-col items-center">
              <dt className="font-medium">Nombre:</dt>
              <dd>{member.first_name}</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="font-medium">Apellido:</dt>
              <dd>{member.last_name}</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="font-medium">Email:</dt>
              <dd>{member.email}</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="font-medium">Celular:</dt>
              <dd>{member.cell_phone}</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="font-medium">Fecha de Nacimiento:</dt>
              <dd>{member.date_of_birth}</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="font-medium">Genero:</dt>
              <dd>{member.gender}</dd>
            </div>
          </dl>
          {/* <dl className="grid grid-cols-4 gap-y-4 gap-x-6">
            <dt className="font-medium">Nombre:</dt>
            <dd>{member.first_name}</dd>
            <dt className="font-medium">Apellido:</dt>
            <dd>{member.last_name}</dd>
            <dt className="font-medium">Email:</dt>
            <dd>{member.email}</dd>
            <dt className="font-medium">Celular:</dt>
            <dd>{member.cell_phone}</dd>
          </dl> */}
        </section>

        <section className="w-full border-gray-600 border-2 rounded-2xl p-4">
          <header className="mb-2">
            <h2 className="text-lg font-semibold">Membresia</h2>
          </header>
          <dl className="grid grid-cols-2 gap-y-4 gap-x-6">
            <div className="flex flex-col items-center">
              <dt className="mb-4">Unión al Gimnasio:</dt>
              <dd className="mb-4 ml-2">{member.date_joined}</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="mb-4">Tipo:</dt>
              <dd className="mb-4 ml-2">{member.membership_type}</dd>
            </div>
            {member.membership_type == "Mensual" && (
              <div className="flex flex-col items-center">
                <dt className="mb-4">Inicio:</dt>
                <dd className="mb-4 ml-2">{member.membership_start_date}</dd>
              </div>
            )}
            {member.membership_type == "Mensual" && (
              <div className="flex flex-col items-center">
                <dt className="mb-4">Fin:</dt>
                <dd className="mb-4 ml-2">{member.membership_end_date}</dd>
              </div>
            )}
            <div className="flex flex-col items-center">
              <dt className="mb-4">Estado:</dt>
              <dd className="mb-4 ml-2">{member.membership_status}</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="mb-4">Nota:</dt>
              <dd className="mb-4 ml-2">
                {member.membership_notes ? member.membership_notes : "Ninguna"}
              </dd>
            </div>
          </dl>
        </section>

        <section className="w-full border-gray-600 border-2 rounded-2xl p-4">
          <header className="mb-2">
            <h2 className="text-lg font-semibold">Salud</h2>
          </header>
          <dl className="grid grid-cols-2 gap-y-4 gap-x-6">
            <div className="flex flex-col items-center">
              <dt className="mb-4 ml-2">Altura:</dt>
              <dd className="mb-4">{member.height} cm</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="mb-4 ml-2">Peso:</dt>
              <dd className="mb-4">{member.weight} kg</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="mb-4 ml-2">Nota:</dt>
              <dd className="mb-4">
                {member.member_notes ? member.member_notes : "Ninguna"}
              </dd>
            </div>
          </dl>
        </section>

        <button
          onClick={setActive}
          className="bg-amber-600 rounded-full border-2 border-white"
        >
          <p className="px-5 py-1">Continuar</p>
        </button>
        {showSubMenu && <SubMenu setActive={handleShowSubMenu} />}
        {showDelete && (
          <DeleteModal member={member} setActive={handleShowDelete} />
        )}
        {showUpdate && (
          <UpdateMember member={member} setActive={handleShowUpdate} />
        )}
      </div>
    </div>
  );
}
