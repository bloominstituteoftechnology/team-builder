import {v4 as uuidv4} from 'uuid'; 

const teamMembersList = [ 
    { 
        id: uuidv4()    // generates unique identifiers
      , fname: 'Naimul'
      , lname: 'Khan'
      , email: 'naimul-khan@lambdastudents.org'
      , role:  'UX/UI Designer'
    }
    { 
        id: uuidv4()    // generates unique identifiers
      , fname: 'Mike'
      , lname: 'Hill'
      , email: 'mike-hill@lambdastudents.org'
      , role:  'Team Lead'
    }
    { 
        id: uuidv4()    // generates unique identifiers
      , fname: 'Brandon'
      , lname: 'Sievert'
      , email: 'brandon-seivert@lambdastudents.org'
      , role:  'Back-End Engineer'
    }
    { 
        id: uuidv4()    // generates unique identifiers
      , fname: 'Daniel'
      , lname: 'Wright'
      , email: 'daniel-wright@lambdastudents.org'
      , role:  'Front-End Engineer'
    }
]

// 👉 simulating axios for [GET] and [POST]
export default {
    get() {
      return Promise.resolve({ status: 200, success: true, data: initialFriendsList })
    },
    post(url, { username, email, role }) {
      const newFriend = { id: uuid(), fname, lname, email, role }
      return Promise.resolve({ status: 200, success: true, data: newFriend })
    }
  }

