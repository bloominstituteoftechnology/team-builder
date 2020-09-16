import { v4 as uuid } from "uuid";

// 👉 the shape of the list of friends from API
const initialFormValues = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: "Michael",
    email: "michael@michael.com",
    role: "Manager"
  }
];

export default {
  get() {
    return Promise.resolve({
      status: 200,
      success: true,
      data: initialFriendsList
    });
  },
  post(url, { username, email, role }) {
    const newFriend = { id: uuid(), username, email, role };
    return Promise.resolve({ status: 200, success: true, data: newFriend });
  }
};