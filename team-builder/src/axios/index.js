// Fake API
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId();

const initialMembers = [
    {
        id: uid.seq(4),
        memberName: 'tdubs',
        memberEmail: 'contact-tdubs@pm.me',
        memberRole: 'mage'
    },
];

// Simulating axios for [GET] and [POST]
export default {
    get() {
        return Promise.resolve( { status: 200, success: true, data: initialMembers } )
    },
    post(url, { memberName, memberEmail, memberRole }) {
        const newMember = { id: uid.seq(4), memberName, memberEmail, memberRole }
        return Promise.resolve( { status: 200, success: true, data: newMember } )
    }
}