import DataTable from "react-data-table-component";
import { SearchBar } from "../components/SearchBar";
import { useEffect, useState } from "react";
import { InformationModal } from "../components/InformationModal";
import { getAllMembers } from "../services/members";
import { FormMember } from "../components/FormMember";
import { UserPlusIcon } from "@heroicons/react/24/solid";

export default function ManagementPage() {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [members, setMembers] = useState([]);
  const [memberInfo, setMemberInfo] = useState();

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
    {
      name: "Membresia",
      selector: (row) => row.membership_type,
    },
  ];

  async function loadMembers() {
    const res = await getAllMembers();
    const tempMembers = res.map((user) => ({
      first_name: user.first_name,
      last_name: user.last_name,
      membership_type: user.membership_type,
      email: user.email,
      cell_phone: user.cell_phone,
      date_of_birth: user.date_of_birth,
      date_joined: user.date_joined,
      membership_type: user.membership_type,
      membership_start_date: user.membership_start_date,
      membership_end_date: user.membership_end_date,
      membership_status: user.membership_status,
      gender: user.gender,
      height: user.height,
      weight: user.weight,
      membership_notes: user.membership_notes,
      member_notes: user.member_notes,
      is_active: user.is_active,
    }));
    console.log(tempMembers);
    setMembers(tempMembers);
  }

  useEffect(() => {
    loadMembers();
  }, []);

  const handleShowModal = (row) => {
    setShowModal(!showModal);
    if (!showModal) {
      setMemberInfo(row);
    }
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="w-full min-h-screen bg-gray-500 p-4">
      <p>Management</p>
      <div className="flex flex-row items-center justify-center">
        <SearchBar />
        <button onClick={handleShowForm} className="border-2 rounded-2xl">
          <UserPlusIcon className="w-8 h-8 m-2" />
        </button>
      </div>
      <DataTable
        columns={columns}
        data={members}
        // onRowClicked={handleShowForm}
        onRowClicked={handleShowModal}
        highlightOnHover
        pointerOnHover
        pagination
        paginationPerPage={10}
      />
      {showModal && (
        <InformationModal member={memberInfo} setActive={handleShowModal} />
      )}
      {showForm && <FormMember setActive={handleShowForm} />}
    </div>
  );
}
