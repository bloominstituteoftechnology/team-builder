import { v4 as uuid } from 'uuid'

const initialFormValues = [
    {
        id: uuid(),
        name: 'mark',
        email: 'mark@mark.com',
        role: 'Backend Engineer'
    }
]

export default {
    get() {
        return Promise.resolve( { status: 200, success: true, data: initialFormValues })
    },
    post(url, { name, email, role }) {
        const newTeamMember = { id: uuid(), name, email, role }
        return Promise.resolve( { status: 200, success: true, data: newTeamMember })
    }
}