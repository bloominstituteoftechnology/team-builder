import { v4 as uuid } from 'uuid'

const initialTeamMembersList = [
    {
        id: uuid(), 
        name: 'Amber',
        email: 'amber@amber.com',
        role: 'Student',
    },
]

export default {
    get() {
        return Promise.resolve({ status: 200, success: true, data: initialTeamMembersList })
    }, 
    post(url, { name, email, role }) {
        const newTeamMember = { id: uuid(), name, email, role }
        return Promise.resolve({ status: 200, success: true, data: newTeamMember})
    }
}

