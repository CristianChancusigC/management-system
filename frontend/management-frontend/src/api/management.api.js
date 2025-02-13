import axios from "axios";
import responseMembers from "../mocks/member-result.json";
import responseTrainers from "../mocks/trainers-result.json";

const API_MEMBERS_URL = "http://127.0.0.1:8000/management/api/members/";
const API_TRAINERS_URL = "http://127.0.0.1:8000/management/api/trainers/";

export const getAllMembers = async () => {
  const members = responseMembers;
  const mapMember = members?.map((member) => ({
    id: member.id,
    first_name: member.first_name,
    last_name: member.last_name,
    email: member.email,
    cell_phone: member.cell_phone,
    date_of_birth: member.date_of_birth,
    date_joined: member.date_joined,
    membership_type: member.membership_type,
    membership_start_date: member.membership_start_date,
    membership_end_date: member.membership_end_date,
    membership_status: member.membership_status,
    gender: member.gender,
    height: member.height,
    weight: member.weight,
    membership_notes: member.membership_notes,
    member_notes: member.member_notes,
    is_active: member.is_active,
  }));

  try {
    // axios.get(API_MEMBERS_URL);

    return mapMember;
  } catch (error) {
    throw new Error("Error searching movies");
  }
  // return axios.get(API_MEMBERS_URL);
};

export const getAllTrainers = async () => {
  const trainers = responseTrainers;
  const mapTrainer = trainers?.map((trainer) => ({
    id: trainer.id,
    first_name: trainer.first_name,
    last_name: trainer.last_name,
    email: trainer.email,
    cell_phone: trainer.cell_phone,
    gender: trainer.gender,
    specialization: trainer.specialization,
    years_of_experience: trainer.years_of_experience,
    certifications: trainer.certifications,
    availability: trainer.availability,
    salary: trainer.salary,
    notes: trainer.notes,
  }));

  try {
    //axios.get(API_TRAINERS_URL);
    return mapTrainer;
  } catch (error) {
    throw new Error("Error searching movies");
  }
  // return axios.get(API_TRAINERS_URL);
};

// export const getAllMembers = async () => {
//   const response = await fetch(API_MEMBERS_URL);
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

// export const getAllTrainers = async () => {
//   const response = await fetch(
//     "http://127.0.0.1:8000/management/api/trainers/"
//   );
//   const data = await response.json();
//   return data;
// };
