import axios from "axios";
import responseTrainers from "../mocks/trainers-result.json";

const API_TRAINERS_URL = "http://127.0.0.1:8000/management/api/trainers/";

function mapTrainer(trainerInfo) {
  return trainerInfo?.map((trainer) => ({
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
}

export const getAllTrainers = async () => {
  const trainers = responseTrainers;
  const mapTrainers = mapTrainer(trainers);
  try {
    //axios.get(API_TRAINERS_URL);
    return mapTrainers;
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
