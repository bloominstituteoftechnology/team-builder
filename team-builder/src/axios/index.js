import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API

const initialTeamList = [
  {fName: 'Ricky', lName: 'Pena', email:'ricky@ricky.com',role:'Backend Engineer'},
  {fName: 'Mike', lName: 'Simmons', email:'mike@mike.com',role:'Frontend Engineer'},
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { fName,lName, email, role }) {
    const newMember = { id: uuid(), fName,lName, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}
