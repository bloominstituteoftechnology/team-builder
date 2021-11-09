import { v4 as uuid } from 'uuid'


const initialMembersList = [
  {
    id: uuid(), 
    name: 'Michael',
    email: 'michael@michael.com',
    role: 'Full Stack',
  },
]

export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialMembersList })
  },
  post(url, { name, email, role }) {
    const newMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}
