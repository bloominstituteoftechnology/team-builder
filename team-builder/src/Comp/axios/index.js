import { v4 as uuid } from "uuid";

const initialTeamList = [
  {
    id: uuid(),
    username: "Rees",
    email: "rees@Lambda.com",
    role: "Frontend Engineer",
  },
  {
    id: uuid(),
    username: "Chaz",
    email: "chaz@Lambda.com",
    role: "Backend Engineer",
  },
  {
    id: uuid(),
    username: "ADAM",
    email: "adam@stayboppin.com",
    role: "Designer",
  },
];
export default {
  get() {
    return Promise.resolve({
      status: 200,
      success: true,
      data: initialTeamList,
    });
  },
  post(url, { username, email, role }) {
    const newTeammate = { id: uuid(), username, email, role };
    return Promise.resolve({ status: 200, success: true, data: newTeammate });
  },
};
