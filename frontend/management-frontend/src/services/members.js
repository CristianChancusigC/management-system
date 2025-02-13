import axios from "axios";
import responseMembers from "../mocks/member-result.json";

const API_MEMBERS_URL = "http://127.0.0.1:8000/management/api/members/";

function mapMember(memberInfo) {
  return memberInfo.map((member) => ({
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
}

export const getAllMembers = async () => {
  const members = responseMembers;
  const mapMembers = mapMember(members);

  try {
    // axios.get(API_MEMBERS_URL);

    return mapMembers;
  } catch (error) {
    throw new Error("Error searching movies");
  }
  // return axios.get(API_MEMBERS_URL);
};

// export const searchMember = async ({search}) => {
//   const members = responseMembers;
//   const mapMember = mapMember(members);

//   try {
//     // axios.get(API_MEMBERS_URL);

//     return mapMember;
//   } catch (error) {
//     throw new Error("Error searching movies");
//   }
//   // return axios.get(API_MEMBERS_URL);
// };

// export const getAllTrainers = async () => {
//   const response = await fetch(
//     "http://127.0.0.1:8000/management/api/trainers/"
//   );
//   const data = await response.json();
//   return data;
// };
