import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { username, email, role }) {
    const newTeam = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeam })
  }
}
