import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { WelcomeModal } from "../components/WelcomeModal";
import { getAllMembers } from "../services/members.js";
import { getAllTrainers } from "../services/trainers.js";
import DataTable from "react-data-table-component";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [members, setMembers] = useState([]);
  const [memberRegister, setMemberRegister] = useState("");

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.last_name,
      sortable: true,
    },
  ];

  async function loadMembers() {
    const res = await getAllMembers();
    const tempMembers = res.map((user) => ({
      first_name: user.first_name,
      last_name: user.last_name,
    }));
    console.log(tempMembers);
    setMembers(tempMembers);
  }

  // async function loadMembers() {
  //   const res = await getAllMembers();
  //   console.log(res);
  // }

  // async function loadTrainers() {
  //   const response = await getAllTrainers();
  //   console.log(response);
  // }

  useEffect(() => {
    loadMembers();
    // loadTrainers();
  }, []);

  const handleShowModal = (row) => {
    setShowModal(!showModal);
    if (!showModal) {
      setMemberRegister(row.first_name + " " + row.last_name);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-500 p-4">
      <p>Home</p>
      <SearchBar />
      <DataTable
        columns={columns}
        data={members}
        onRowClicked={handleShowModal}
        highlightOnHover
        pointerOnHover
        pagination
        paginationPerPage={10}
      />
      <SearchBar />
      <div
        className="flex flex-col items-center justify-center border-amber-50
        border-2 rounded-lg p-4"
      ></div>
      {showModal && (
        <WelcomeModal nameCustom={memberRegister} setActive={handleShowModal} />
      )}
    </div>
  );
}
