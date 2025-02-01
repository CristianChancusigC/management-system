import axios from "axios";

const API_MEMBERS_URL = "http://127.0.0.1:8000/management/api/members/";
const API_TRAINERS_URL = "http://127.0.0.1:8000/management/api/trainers/";

export const getAllMembers = async () => {
  return axios.get(API_MEMBERS_URL);
};

export const getAllTrainers = async () => {
  return axios.get(API_TRAINERS_URL);
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
